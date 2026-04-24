import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | So Flo",
  description: "Terms of Service for So Flo - paver installation, sealing, and pressure washing services.",
};

export default function Terms() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-600 dark:text-gray-300">
          <p>Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Services
          </h2>
          <p>
            So Flo provides paver installation, sealing, and pressure washing 
            services in Cape Coral, FL and Fort Myers, FL. All services are subject to 
            availability and scheduling.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Quotes & Estimates
          </h2>
          <p>
            Free estimates are provided for all services. Quotes are valid for 30 days from 
            the date of issuance. Final pricing may vary based on site conditions and 
            scope of work.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Payments
          </h2>
          <p>
            Payment terms are outlined in individual contracts. We accept various payment 
            methods including cash, check, and card payments.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Cancellations
          </h2>
          <p>
            48 hours notice is required for cancellation. Cancellations with less than 48 
            hours notice may incur a fee.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Warranty
          </h2>
          <p>
            We stand behind our work. Specific warranty terms are provided with each 
            service agreement.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white pt-4">
            Contact Information
          </h2>
          <p>
            For questions about these Terms of Service, please contact us at:{" "}
            <a href="mailto:soflospw@gmail.com" className="text-sky-600 hover:underline">
              soflospw@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}