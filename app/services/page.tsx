import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Paver Installation, Sealing & Pressure Washing",
  description: "Professional paver installation, sealing, and pressure washing services in Cape Coral & Fort Myers, FL.",
};

const installationServices = [
  "Patios & Pool Decks",
  "Walkways & Entryways",
  "Outdoor Kitchens",
  "Retaining Walls",
  "Fire Pits",
  "Custom Designs"
];

const installationBenefits = [
  "Increases property value",
  "Enhances curb appeal",
  "Durable & long-lasting",
  "Low maintenance",
  "Custom design options",
  "Professional installation"
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-sky-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Paver installation, sealing, and pressure washing services.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-sky-100 dark:bg-sky-900/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/completed-driveway-of-pavers.JPEG"
                  alt="Professional paver installation in Cape Coral Florida"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
                Paver Installation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Paver Installation
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Transform your outdoor space with professional paver installation. We install patios, pool decks, walkways, and more.
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">What We Install</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {installationServices.map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>

              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Benefits</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {installationBenefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-sky-500/20">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
                Paver Sealing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Protect Your Investment
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Professional paver sealing protects your outdoor surfaces and keeps them looking beautiful for years.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Inspection & surface preparation",
                  "Re-sanding of joints if needed",
                  "Deep cleaning of pavers",
                  "Application of premium sealer"
                ].map((process, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-900/50 flex items-center justify-center text-sky-600 dark:text-sky-400 text-sm font-medium">
                      {i + 1}
                    </span>
                    {process}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-sky-500/20">
                Get Free Quote
              </Link>
            </div>

            <div className="relative order-2 lg:order-2">
              <div className="absolute -inset-4 bg-sky-100 dark:bg-sky-900/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/completed-pool-deck-pavers.JPEG"
                  alt="Professional paver sealing in Cape Coral Florida"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/completed-pool-deck-3.JPEG"
                  alt="Professional pressure washing in Fort Myers Florida"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[400px]"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium mb-4">
                Pressure Washing
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Restore Your Surfaces
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Professional pressure washing removes dirt, grime, mold, and stains, restoring surfaces to their original beauty.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {["Driveways", "Patios & Pool Decks", "Walkways & Entryways", "House Siding & Exterior", "Fences & Decks"].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-sky-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-sky-500/20">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Before & After
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden card-hover">
              <div className="relative h-56">
                <Image src="/images/new-pavervs-old-paver-view.JPEG" alt="Before paver installation" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sky-600 dark:text-sky-400 font-semibold mb-1">Before</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Old, worn surface</p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden card-hover">
              <div className="relative h-56">
                <Image src="/images/old-paver-on-new-pavers-view.JPEG" alt="After paver installation" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sky-600 dark:text-sky-400 font-semibold mb-1">After</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Newly installed pavers</p>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden card-hover">
              <div className="relative h-56">
                <Image src="/images/completed-pool-deck-pavers.JPEG" alt="Pool deck transformation" fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sky-600 dark:text-sky-400 font-semibold mb-1">Result</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Complete transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote on any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2394467091" className="inline-flex items-center bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-100 transition-all hover:shadow-xl">
              Call (239) 446-7091
            </a>
            <Link href="/contact" className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}