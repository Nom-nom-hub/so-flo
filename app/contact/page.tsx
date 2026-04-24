import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | So Flo",
  description: "Contact So Flo for paver installation, sealing, and pressure washing services in Cape Coral and Fort Myers, FL.",
};

const reasons = [
  { text: "Free estimates for all projects" },
  { text: "Fast response times" },
  { text: "Quality guaranteed" },
  { text: "Local, reliable service" }
];

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-sky-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get a free quote for your project. We respond quickly!
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Text Us Your Project Details
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Fill out the form below and tap to send us a text message. We'll respond within 24 hours!
              </p>
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-sky-50 dark:bg-sky-900/20 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Work With Us?
                </h3>
                <ul className="space-y-4">
                  {reasons.map((reason, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {reason.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 dark:bg-gray-800 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Cape Coral, FL
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Fort Myers, FL
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Phone</h3>
                <a href="tel:2394467091" className="text-sky-600 dark:text-sky-400 hover:underline">
                  (239) 446-7091
                </a>
              </div>

              <div className="p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Email</h3>
                <a href="mailto:soflospw@gmail.com" className="text-sky-600 dark:text-sky-400 hover:underline">
                  soflospw@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}