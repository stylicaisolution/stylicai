import React from "react";
import BreadCrub from "../../components/BreadCrub";

const Policy = () => {
  return (
    <>
     <BreadCrub />
      <div className="bg-white rounded-lg shadow-md px-4 md:px-24 py-24">
        {/* <div className="text-center mb-14 md:mt-16">
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
        <p className="mt-2 text-gray-600">Effective Date: 1st Jan 2025</p>
      </div> */}

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-600">
            Welcome to Stylic.ai, a product by Ananta Solution. We are committed
            to protecting your privacy and ensuring that your data is handled
            securely and transparently. This Privacy Policy outlines how we
            collect, use, and safeguard your information when you use our
            AI-based photoshoot service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            2. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            To provide you with the best possible experience, we collect various
            types of information when you interact with our services. This
            includes personal details you provide, data about your interactions
            with our platform, and technical information that helps us enhance
            our services. The types of data we collect include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <span className="font-medium">Personal Information:</span> Name,
              email address, and payment details.
            </li>
            <li>
              <span className="font-medium">Uploaded Images:</span> The photos
              you upload for AI processing.
            </li>
            <li>
              <span className="font-medium">Usage Data:</span> Information
              related to how you interact with our platform.
            </li>
            <li>
              <span className="font-medium">Device Information:</span> We may
              collect data such as your device type, operating system, browser
              type, and IP address for analytical and security purposes.
            </li>
            <li>
              <span className="font-medium">Transactional Data:</span> Records
              of purchases, completed orders, refunds, and usage of our
              services.
            </li>
            <li>
              <span className="font-medium">Communication Data:</span> Any
              messages, emails, or support requests you send to us.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            Your information is used to improve and customize your experience,
            enhance the functionality of our services, and ensure compliance
            with legal obligations. Specifically, we use the collected data to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Provide AI-generated photoshoots as per your request.</li>
            <li>Process payments and refunds where applicable.</li>
            <li>Improve our services based on usage patterns.</li>
            <li>Comply with legal and regulatory requirements.</li>
            <li>Provide customer support and respond to inquiries.</li>
            <li>
              Enhance our AI models and improve the accuracy of our services
              (without compromising user privacy).
            </li>
            <li>Prevent fraud, security breaches, and unauthorized access.</li>
            <li>
              Offer promotional offers or discounts based on user preferences
              and history (only if consented).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            4. Data Privacy and Security
          </h2>
          <p className="text-gray-600 mb-4">
            We take the privacy and security of your data seriously. We
            implement industry-standard measures to protect your information
            from unauthorized access, loss, or misuse. Our security practices
            include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              We do not share or use your data for marketing purposes unless you
              give us explicit permission.
            </li>
            <li>
              Your data remains private, and we ensure the highest security
              measures to protect it.
            </li>
            <li>
              Upon request, we will permanently delete all your data from our
              servers.
            </li>
            <li>
              We use encryption protocols to protect your information from
              unauthorized access.
            </li>
            <li>
              Our servers and databases are regularly updated with security
              patches to prevent breaches.
            </li>
            <li>
              We restrict internal access to your data to only authorized
              personnel who require it for operational purposes.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            5. Data Retention
          </h2>
          <p className="text-gray-600 mb-4">
            To ensure compliance with legal requirements and service
            optimization, we retain user data only for the necessary period.
            After this period, all information is securely deleted.
            Specifically:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Data is retained only as long as necessary to fulfill your
              requests or comply with legal obligations.
            </li>
            <li>
              Data associated with inactive accounts may be deleted after a
              certain period of time.
            </li>
            <li>
              Backup copies may exist for operational recovery but are deleted
              periodically.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            We respect your rights over your personal data and provide several
            options to control and manage your information. As a user, you have
            the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Request access, correction, or deletion of your data at any time.
            </li>
            <li>
              Opt out of marketing communications if you have previously given
              permission.
            </li>
            <li>Request a copy of your data stored in our system.</li>
            <li>
              Withdraw your consent for data processing, where applicable.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            7. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-600 mb-4">
            To improve user experience and enhance service efficiency, we use
            cookies and similar tracking technologies. These technologies help
            us gather valuable insights into user behavior. You should be aware
            of the following:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              We use cookies and similar tracking technologies to enhance your
              user experience.
            </li>
            <li>
              You can control cookie preferences via your browser settings.
            </li>
            <li>
              Some essential cookies are necessary for the platform to function
              correctly.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-600">
            To keep up with evolving technology and regulatory standards, we may
            update this Privacy Policy from time to time. We encourage you to
            review it periodically. Continued use of our services after
            modifications constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-600">
            For any questions or concerns regarding this policy, contact us at:{" "}
            <a
              href="mailto:info@stylic.ai"
              className="text-indigo-600 hover:text-indigo-800"
            >
              info@stylic.ai
            </a>
          </p>
        </section>
      </div>
    </>
  );
};

export default Policy;
