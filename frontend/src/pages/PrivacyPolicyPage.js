import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary">Privacy Policy</h2>

          <p>
            <strong>Last Updated:</strong> June 2, 2025
          </p>

          <p>
            This Privacy Policy describes how we handle and protect your personal information in
            relation to your use of the Indian Armed Forces Welfare Management Platform.
          </p>

          <h5 className="mt-4 text-secondary">1. Information We Collect</h5>
          <ul>
            <li>Personal details like name, email, contact number</li>
            <li>Service-related details (rank, role, department)</li>
            <li>Grievance submissions and scheme application data</li>
          </ul>

          <h5 className="mt-4 text-secondary">2. How We Use Your Information</h5>
          <ul>
            <li>To process applications and grievances</li>
            <li>To provide emergency or welfare-related support</li>
            <li>To improve our services and ensure data security</li>
          </ul>

          <h5 className="mt-4 text-secondary">3. Data Protection</h5>
          <p>
            We implement industry-standard security measures, encryption, and role-based access to
            ensure the safety and confidentiality of your data.
          </p>

          <h5 className="mt-4 text-secondary">4. Sharing of Information</h5>
          <p>
            We do not sell or share your data with third parties. Your data is only shared with
            authorized personnel within the Indian Armed Forces for service-related purposes.
          </p>

          <h5 className="mt-4 text-secondary">5. Your Rights</h5>
          <p>
            You have the right to access, correct, or delete your personal data. You can also request
            clarification on how your data is used.
          </p>

          <h5 className="mt-4 text-secondary">6. Contact Us</h5>
          <p>
            For any privacy concerns or data-related queries, please contact us at:
            <br />
            <strong>Email:</strong> support@armedforces.in <br />
            <strong>Phone:</strong> +91 12345 67890
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
