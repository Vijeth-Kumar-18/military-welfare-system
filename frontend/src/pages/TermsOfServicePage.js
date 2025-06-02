import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary">Terms of Service</h2>

          <p><strong>Last Updated:</strong> June 2, 2025</p>

          <h5 className="mt-4 text-secondary">1. Acceptance of Terms</h5>
          <p>
            By accessing or using the Military Welfare Management Platform, you agree to comply with
            and be bound by these Terms of Service. If you do not agree, please do not use the
            platform.
          </p>

          <h5 className="mt-4 text-secondary">2. Eligibility</h5>
          <p>
            This platform is intended for use by verified members of the Indian Armed Forces and
            their families. Unauthorized use is strictly prohibited.
          </p>

          <h5 className="mt-4 text-secondary">3. User Responsibilities</h5>
          <ul>
            <li>Provide accurate and truthful information</li>
            <li>Maintain confidentiality of your login credentials</li>
            <li>Use the platform in accordance with applicable laws and regulations</li>
          </ul>

          <h5 className="mt-4 text-secondary">4. Prohibited Activities</h5>
          <ul>
            <li>Submitting false grievances or scheme applications</li>
            <li>Misusing emergency or community support features</li>
            <li>Attempting unauthorized access or data tampering</li>
          </ul>

          <h5 className="mt-4 text-secondary">5. Data Usage</h5>
          <p>
            All user data will be handled securely as per our Privacy Policy. By using this service,
            you consent to the collection and use of your information for official purposes.
          </p>

          <h5 className="mt-4 text-secondary">6. Modification of Terms</h5>
          <p>
            We reserve the right to update these terms at any time. Continued use of the platform
            after changes implies acceptance of the new terms.
          </p>

          <h5 className="mt-4 text-secondary">7. Contact Us</h5>
          <p>
            For questions or concerns about these terms, please contact:
            <br />
            <strong>Email:</strong> support@armedforces.in<br />
            <strong>Phone:</strong> +91 12345 67890
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
