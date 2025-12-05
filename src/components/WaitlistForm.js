import React, { memo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './WaitlistForm.css';
import { submitToSupabase, checkEmailExists } from '../services/supabase';

const WaitlistForm = memo(() => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    usageType: '', // 'personal' or 'school'
    disability: '',
    cognitiveIssue: '',
    schoolName: '',
    schoolAddress: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error message when user types
    if (submitStatus === 'error') {
      setSubmitStatus(null);
      setErrorMessage('');
    }
  }, [submitStatus]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name) {
      setSubmitStatus('error');
      setErrorMessage('Name is required');
      return;
    }

    if (!formData.email) {
      setSubmitStatus('error');
      setErrorMessage('Email is required');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!formData.usageType) {
      setSubmitStatus('error');
      setErrorMessage('Please select usage type');
      return;
    }

    if (formData.usageType === 'school') {
      if (!formData.schoolName) {
        setSubmitStatus('error');
        setErrorMessage('School name is required');
        return;
      }
      if (!formData.schoolAddress) {
        setSubmitStatus('error');
        setErrorMessage('School address is required');
        return;
      }
    }

    if (!formData.disability) {
      setSubmitStatus('error');
      setErrorMessage('Please select a disability type');
      return;
    }

    if (formData.disability === 'cognitive_issues' && !formData.cognitiveIssue) {
      setSubmitStatus('error');
      setErrorMessage('Please describe the cognitive issue');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Check if email already exists
      const emailExists = await checkEmailExists(formData.email);
      if (emailExists) {
        setSubmitStatus('error');
        setErrorMessage('This email is already registered');
        setIsSubmitting(false);
        return;
      }

      // Submit to Supabase
      await submitToSupabase(formData);

      // Also submit to LaunchList (optional - for tracking)
      try {
        const launchListFormData = new FormData();
        launchListFormData.append('name', formData.name);
        launchListFormData.append('email', formData.email);
        
        await fetch('https://getlaunchlist.com/s/0wj3ED', {
          method: 'POST',
          body: launchListFormData,
          mode: 'no-cors'
        });
      } catch (launchListError) {
        // LaunchList submission is optional, so we don't fail if it errors
        console.log('LaunchList submission failed (optional):', launchListError);
      }

      // Success
      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        usageType: '', 
        disability: '',
        cognitiveIssue: '',
        schoolName: '',
        schoolAddress: ''
      });

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Failed to submit. Please try again.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, navigate]);

  return (
    <div className="waitlist-form-container">
      <form 
        className="gibson-form" 
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label className="form-label">Name</label>
          <input 
            name="name" 
            type="text" 
            className="form-input" 
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Email</label>
          <input 
            name="email" 
            type="email" 
            required 
            className="form-input" 
            placeholder="johnsmith@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Personal or school use?</label>
          <select
            name="usageType"
            value={formData.usageType}
            onChange={handleChange}
            className="form-input form-select"
            required
          >
            <option value="">Select an option</option>
            <option value="personal">Personal use</option>
            <option value="school">School use</option>
          </select>
        </div>

        {formData.usageType === 'school' && (
          <>
            <div className="form-group school-info-container">
              <label className="form-label">School name</label>
              <input 
                name="schoolName" 
                type="text" 
                className="form-input" 
                placeholder="Enter school name"
                value={formData.schoolName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group school-info-container">
              <label className="form-label">School address</label>
              <textarea
                name="schoolAddress"
                value={formData.schoolAddress}
                onChange={handleChange}
                className="form-input form-textarea"
                placeholder="Enter school address"
                rows="3"
                required
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label className="form-label">Disability</label>
          <select
            name="disability"
            value={formData.disability}
            onChange={handleChange}
            className="form-input form-select"
            required
          >
            <option value="">Select an option</option>
            <option value="hard_of_hearing">Hard of hearing</option>
            <option value="blind">Blind</option>
            <option value="dumb">Dumb</option>
            <option value="cognitive_issues">Cognitive issues</option>
          </select>
        </div>

        {formData.disability === 'cognitive_issues' && (
          <div className="form-group cognitive-issue-container">
            <label className="form-label">Please mention the cognitive issue</label>
            <textarea
              name="cognitiveIssue"
              value={formData.cognitiveIssue}
              onChange={handleChange}
              className="form-input form-textarea"
              placeholder="Please describe the cognitive issue..."
              rows="4"
              required
            />
          </div>
        )}
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Schedule a call'}
        </button>
      </form>

      {submitStatus === 'success' && (
        <div className="status-message success">
          ✓ Successfully joined the waitlist! We'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="status-message error">
          {errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}
    </div>
  );
});

WaitlistForm.displayName = 'WaitlistForm';

export default WaitlistForm;

