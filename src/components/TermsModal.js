import React from 'react';
import './TermsModal.css';

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Terms of Service</h2>
        <div className="modal-body">
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using Brightwords.in, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>

          <h3>2. Use License</h3>
          <p>
            Permission is granted to temporarily access the materials on Brightwords.in for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>

          <h3>3. Waitlist Registration</h3>
          <p>
            By joining our waitlist, you agree to provide accurate and complete information. 
            We reserve the right to remove any entry that contains false or misleading information.
          </p>

          <h3>4. Privacy</h3>
          <p>
            Your personal information will be used in accordance with our Privacy Policy. 
            We are committed to protecting your data and using it only for the purposes stated.
          </p>

          <h3>5. Limitation of Liability</h3>
          <p>
            Brightwords.in shall not be liable for any indirect, incidental, special, consequential, 
            or punitive damages resulting from your use of or inability to use the service.
          </p>

          <h3>6. Contact Information</h3>
          <p>
            If you have any questions about these Terms, please contact us through our official channels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;

