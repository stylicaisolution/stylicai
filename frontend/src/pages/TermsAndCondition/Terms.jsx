import React from "react";
import BreadCrub from "../../components/BreadCrub";

const Terms = () => {
  return (
    <>
      <BreadCrub />
      <div className="bg-white rounded-lg shadow-md px-4 md:px-24 py-24">
        {/* <div className="text-center mb-8 md:mt-14">
        <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
        <p className="mt-2 text-gray-600">Effective Date: 1st Jan 2025</p>
      </div> */}

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-600">
            These Terms and Conditions govern the use of Stylic.ai, a product of
            Ananta Solution. By creating an account and using our services, you
            agree to abide by these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            2. Service Description
          </h2>
          <p className="text-gray-600 mb-4">
            Stylic.ai provides AI-generated photoshoots using AI models. The
            models used in our services are not real humans, eliminating
            copyright concerns. We use advanced artificial intelligence to
            generate realistic images based on user-provided input. By using our
            platform, you acknowledge that:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              The AI-generated images are based on computational models and are
              not actual photographs.
            </li>
            <li>
              The final output may vary depending on the input quality and AI
              interpretation.
            </li>
            <li>
              Stylic.ai is not responsible for the subjective satisfaction of
              the user.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            3. Pricing & Payment
          </h2>
          <p className="text-gray-600 mb-4">
            Our services operate on a coin-based payment system, allowing users
            flexibility in purchasing and using our features. Please note:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Pricing differs for single-photo output and multiple-photo output.
            </li>
            <li>Payment must be made before using our services.</li>
            <li>Additional features may be subject to separate charges.</li>
            <li>
              Users are responsible for maintaining sufficient balance in their
              accounts.
            </li>
            <li>
              Subscription-based services, if available, will be billed
              periodically per the selected plan.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            4. Refund Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We strive to offer a seamless experience, but we acknowledge that
            issues may arise. Our refund policy ensures fairness for both users
            and the company. Refund requests are handled as follows:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Refunds are provided only if we fail to deliver the requested
              AI-generated photos.
            </li>
            <li>
              If we successfully deliver the output but the client is
              unsatisfied with the results, no refund will be issued.
            </li>
            <li>
              Refund requests must be submitted within a specified timeframe
              after order completion.
            </li>
            <li>
              We do not refund unused credits or balances in a user's account.
            </li>
            <li>
              In case of service interruptions, partial refunds may be issued at
              our discretion.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            5. Account Security
          </h2>
          <p className="text-gray-600 mb-4">
            Users are responsible for maintaining the security of their
            accounts. We recommend:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Using strong, unique passwords for your Stylic.ai account</li>
            <li>Not sharing account credentials with third parties</li>
            <li>Logging out of your account when using shared devices</li>
            <li>Notifying us immediately if you suspect unauthorized access</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            6. Prohibited Activities
          </h2>
          <p className="text-gray-600 mb-4">
            When using our services, the following activities are strictly
            prohibited:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Using our AI to generate illegal, offensive, or harmful content
            </li>
            <li>Attempting to reverse engineer our AI models</li>
            <li>Scraping or harvesting data from our platform</li>
            <li>
              Disrupting or interfering with the service's normal operation
            </li>
            <li>
              Using automated systems to access the service without explicit
              permission
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            7. Service Availability
          </h2>
          <p className="text-gray-600">
            While we strive to provide uninterrupted service, we do not
            guarantee 24/7 availability. We reserve the right to modify,
            suspend, or discontinue the service temporarily or permanently with
            or without notice. We will not be liable for any service
            interruptions or data loss resulting from such actions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            To the maximum extent permitted by law, Ananta Solution and
            Stylic.ai shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use or
            inability to use the service, regardless of whether such damages are
            based on warranty, contract, tort, or any other legal theory.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            9. Governing Law
          </h2>
          <p className="text-gray-600">
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which Ananta
            Solution operates, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-600">
            For any questions or concerns regarding these terms, contact us at:{" "}
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

export default Terms;
