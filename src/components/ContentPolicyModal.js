import React from 'react';
import './TermsModal.css';

const ContentPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Content Policy</h2>
        <div className="modal-body">
          <h3>1. User-Generated Content</h3>
          <p>
            Users are responsible for the content they submit. All content must be accurate, 
            respectful, and comply with applicable laws and regulations.
          </p>

          <h3>2. Prohibited Content</h3>
          <p>
            The following types of content are strictly prohibited:
          </p>
          <ul>
            <li>Content that is defamatory, harassing, or discriminatory</li>
            <li>Content that violates intellectual property rights</li>
            <li>Content that contains false or misleading information</li>
            <li>Content that promotes illegal activities</li>
            <li>Spam, unsolicited promotional content, or automated messages</li>
          </ul>

          <h3>3. Accessibility and Inclusion</h3>
          <p>
            Brightwords.in is committed to accessibility and inclusion. All content should be 
            respectful of individuals with disabilities and promote an inclusive environment.
          </p>

          <h3>4. Content Moderation</h3>
          <p>
            We reserve the right to review, modify, or remove any content that violates this policy 
            or our Terms of Service. Decisions regarding content moderation are at our sole discretion.
          </p>

          <h3>5. Reporting Violations</h3>
          <p>
            If you encounter content that violates this policy, please report it to us immediately 
            through our official contact channels.
          </p>

          <h3>6. Educational Content</h3>
          <p>
            As an AI Assistive Learning Platform, we prioritize educational content that supports 
            disabled students. All content should align with our mission of accessibility and learning.
          </p>

          <h3>7. Contact Information</h3>
          <p>
            For questions about this Content Policy, please contact us through our official channels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentPolicyModal;

