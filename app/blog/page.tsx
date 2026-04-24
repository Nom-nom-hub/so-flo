import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | So Flo - Tips & Guides for Paver Care",
  description: "Expert tips on paver installation, sealing, and pressure washing in Cape Coral and Fort Myers, FL. Learn how to protect and maintain your outdoor surfaces.",
};

const posts = [
  {
    slug: "why-seal-your-pavers",
    title: "Why Sealing Your Pavers Is Essential in Florida's Climate",
    excerpt: "Florida's hot climate and frequent storms can damage unprotected pavers. Learn why professional sealing is crucial for your driveway and patio.",
    image: "/images/completed-pool-deck-pavers.JPEG",
    category: "Paver Sealing",
    date: "January 15, 2026"
  },
  {
    slug: "choose-right-pavers",
    title: "How to Choose the Right Pavers for Your Florida Home",
    excerpt: "Not all pavers are created equal. Here's what to consider when selecting pavers for your Cape Coral or Fort Myers property.",
    image: "/images/completed-driveway-of-pavers.JPEG",
    category: "Installation",
    date: "January 10, 2026"
  },
  {
    slug: "maintain-pavers",
    title: "5 Easy Ways to Maintain Your Pavers Year-Round",
    excerpt: "Keep your pavers looking great with these simple maintenance tips from the experts. Save money and extend their life!",
    image: "/images/old-paver-on-new-pavers-view.JPEG",
    category: "Maintenance",
    date: "January 5, 2026"
  },
  {
    slug: "pressure-washing-guide",
    title: "When and How to Pressure Wash Your Patio",
    excerpt: "Professional pressure washing removes stains and buildup. Learn the best practices for cleaning your pavers safely.",
    image: "/images/completed-pool-deck-3.JPEG",
    category: "Pressure Washing",
    date: "December 28, 2025"
  },
  {
    slug: "pool-deck-pavers",
    title: "Best Pavers for Pool Decks in Southwest Florida",
    excerpt: "Choose the right pavers around your pool to prevent slipping and withstand Florida's weather.",
    image: "/images/completed-pool-deck-pavers.JPEG",
    category: "Installation",
    date: "December 20, 2025"
  },
  {
    slug: "sanding-pavers",
    title: "The Importance of Joint Sand in Paver Installation",
    excerpt: "Proper sand application prevents weeds, insects, and sand loss. Here's what you need to know.",
    image: "/images/new-pavers-cracks-being-filled-with-sand.JPEG",
    category: "Installation",
    date: "December 15, 2025"
  }
];

export default function Blog() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-sky-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/30 dark:bg-sky-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Expert tips on paver installation, sealing, and pressure washing in Cape Coral and Fort Myers.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg card-hover">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-sky-600 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sky-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Need Professional Help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free quote on paver installation, sealing, or pressure washing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2394467091" className="inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-xl">
              Call (239) 446-7091
            </a>
            <Link href="/contact" className="inline-flex items-center border-2 border-sky-600 text-sky-600 dark:text-sky-400 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}