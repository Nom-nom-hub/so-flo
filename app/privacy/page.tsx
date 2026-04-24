import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | So Flo",
  description: "Privacy Policy for So Flo - paver installation, sealing, and pressure washing services in Cape Coral and Fort Myers, FL.",
};

export default function PrivacyPolicy() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, including your name, 
            phone number, email address, and project details when you request a quote 
            or contact us for services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            How We Use Your Information
          </h2>
          <p>
            We use the information we collect to: provide you with quotes, respond to your 
            inquiries, schedule services, and communicate with you about your project.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Information Sharing
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable 
            information to outside parties. We may share information with service providers 
            who assist us in operating our website or conducting our business.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Contact Information
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:soflospw@gmail.com" className="text-sky-600 hover:underline">
              soflospw@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}