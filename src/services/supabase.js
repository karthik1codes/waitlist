// Supabase REST API service
// Get your anon key from Supabase Dashboard → Settings → API
// You can set it via environment variable REACT_APP_SUPABASE_ANON_KEY or replace it directly below

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://ttnywlhqbiqzofaduefk.supabase.co';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bnl3bGhxYmlxem9mYWR1ZWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NTM4NjQsImV4cCI6MjA4MDUyOTg2NH0.vuccAkSt0DaWCPILQuXb5GuV4Weh78izsk7EdjLMusk'; // Replace with your actual anon key
const TABLE_NAME = 'waitlist';

/**
 * Submit waitlist entry to Supabase
 * @param {Object} formData - Form data object with all fields
 * @returns {Promise<Object>} Response from Supabase
 */
export const submitToSupabase = async (formData) => {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE_NAME}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        username: formData.name || null,
        email: formData.email,
        usage_type: formData.usageType || null,
        disability: formData.disability || null,
        cognitive_issue: formData.cognitiveIssue || null,
        school_name: formData.schoolName || null,
        school_address: formData.schoolAddress || null
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit to Supabase');
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Supabase submission error:', error);
    throw error;
  }
};

/**
 * Check if email already exists in waitlist
 * @param {string} email - Email to check
 * @returns {Promise<boolean>} True if email exists
 */
export const checkEmailExists = async (email) => {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE_NAME}?email=eq.${encodeURIComponent(email)}&select=email`,
      {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to check email');
    }

    const data = await response.json();
    return data.length > 0;
  } catch (error) {
    console.error('Email check error:', error);
    return false;
  }
};

