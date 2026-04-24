import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

const slugTitles: Record<string, string> = {
  "why-seal-your-pavers": "Why Sealing Your Pavers Is Essential in Florida's Climate",
  "choose-right-pavers": "How to Choose the Right Pavers for Your Florida Home",
  "maintain-pavers": "5 Easy Ways to Maintain Your Pavers Year-Round",
  "pressure-washing-guide": "When and How to Pressure Wash Your Driveway",
  "pool-deck-pavers": "Best Pavers for Pool Decks in Southwest Florida",
  "sanding-pavers": "The Importance of Joint Sand in Paver Installation",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slugTitles[slug] || "Blog Post"} | So Flo`,
    description: "Learn about paver installation, sealing, and maintenance tips from the experts at So Flo.",
  };
}

const posts: Record<string, { title: string; content: string; image: string; category: string }> = {
  "why-seal-your-pavers": {
    title: "Why Sealing Your Pavers Is Essential in Florida's Climate",
    category: "Paver Sealing",
    image: "/images/completed-pool-deck-pavers.JPEG",
    content: `
Florida's unique climate presents specific challenges for outdoor surfaces. Here's why professional paver sealing is essential for your property:

## The Florida Challenge

Florida's hot summers, high humidity, and frequent rain storms can take a toll on unprotected pavers. Without proper sealing:

- Joint sand washes away, creating gaps for weeds
- Water penetrates and causes erosion
- Mold and mildew grow on surfaces
- UV rays fade and damage paver colors
- Oil and stains become permanent

## Benefits of Professional Sealing

Professional paver sealing from So Flo provides:

1. **Sand Stabilization** - Locks joint sand in place
2. **Stain Protection** - Creates a barrier against oil and spills
3. **UV Protection** - Prevents fading from harsh sun
4. **Enhanced Beauty** - Brings out natural colors
5. **Weed Prevention** - Stops weeds from growing

## When to Seal

We recommend sealing new pavers within 60-90 days of installation, then every 2-3 years after. Contact So Flo for a free evaluation of your pavers in Cape Coral or Fort Myers.
    `
  },
  "choose-right-pavers": {
    title: "How to Choose the Right Pavers for Your Florida Home",
    category: "Installation",
    image: "/images/completed-driveway-of-pavers.JPEG",
    content: `
Choosing the right pavers is important for your home's value and appearance. Here's what to consider:

## Popular Paver Types

### Concrete Pavers
- Most affordable option
- Wide variety of colors and styles
- Durable and long-lasting

### Clay Pavers
- Natural, rich colors that don't fade
- Traditional brick look
- More expensive but very durable

### Natural Stone
- Premium appearance
- Flagstone, travertine, marble options
- Highest cost but timeless beauty

## Considerations for Florida

1. **Slip Resistance** - Important for pool areas
2. **Heat Reflection** - Some pavers stay cooler
3. **Drainage** - Proper installation prevents pooling
4. **HOA Requirements** - Check your neighborhood rules

## Let Us Help

So Flo professionally installs all paver types in Cape Coral and Fort Myers. Call (239) 446-7091 for a free consultation.
    `
  },
  "maintain-pavers": {
    title: "5 Easy Ways to Maintain Your Pavers Year-Round",
    category: "Maintenance",
    image: "/images/old-paver-on-new-pavers-view.JPEG",
    content: `
Proper maintenance keeps your pavers looking great and extends their life. Try these tips:

## 1. Regular Sweeping
Remove debris, leaves, and dirt weekly to prevent staining and mold growth.

## 2. Rinse Often
Hose down surfaces monthly to remove surface debris and prevent buildup.

## 3. Address Weeds Promptly
Pull weeds as soon as they appear before they damage joint sand.

## 4. Re-sand When Needed
If sand has eroded, top it up to prevent movement and instability.

## 5. Professional Sealing
Schedule professional sealing every 2-3 years to maintain protection.

## When to Call the Pros

For stubborn stains, mold removal, or resealing, trust the professionals at So Flo. We serve Cape Coral and Fort Myers with quality paver services.
    `
  },
  "pressure-washing-guide": {
    title: "When and How to Pressure Wash Your Driveway",
    category: "Pressure Washing",
    image: "/images/completed-pool-deck-3.JPEG",
    content: `
Pressure washing keeps your pavers clean and well-maintained. Here's what you need to know:

## When to Pressure Wash

- **Before sealing** - Essential prep
- **Seasonally** - Every 6-12 months
- **After storms** - Remove debris and stains
- **Before selling** - Boost curb appeal

## DIY vs. Professional

While you can rent a pressure washer, professional washing:

- Uses proper PSI settings
- Avoids damage to pavers
- Gets deeper cleaning results
- Saves you time and effort

## Our Pressure Washing Services

So Flo offers professional pressure washing for:
- Driveways
- Patios & Pool Decks
- Walkways
- House Exteriors
- And more!

Contact us in Cape Coral or Fort Myers for a free quote.
    `
  },
  "pool-deck-pavers": {
    title: "Best Pavers for Pool Decks in Southwest Florida",
    category: "Installation",
    image: "/images/completed-pool-deck-pavers.JPEG",
    content: `
Pool decks require special consideration in Florida. Here's how to choose the best:

## Key Requirements

1. **Slip Resistance** - Wet areas need texture
2. **Heat Reflection** - Stay cool under bare feet
3. **Chlorine Resistance** - Don't fade or etch
4. **Durability** - Withstand Florida weather

## Best Paver Options

### Travertine
- Naturally slip-resistant
- Stays cool
- Beautiful premium look
- Great for pool areas

### Concrete Pavers with Texture
- More affordable
- Can be sealed for protection
- Many color options

### Porcelain Pavers
- Modern look
- Extremely durable
- Low maintenance

## Professional Installation

So Flo has years of experience installing pool decks in Cape Coral and Fort Myers. Call (239) 446-7091 for a free quote.
    `
  },
  "sanding-pavers": {
    title: "The Importance of Joint Sand in Paver Installation",
    category: "Installation",
    image: "/images/new-pavers-cracks-being-filled-with-sand.JPEG",
    content: `
Joint sand is crucial for paver stability and longevity. Here's why it matters:

## What Joint Sand Does

1. **Locks pavers in place** - Prevents movement
2. **Supports weight** - Distributes load evenly
3. **Blocks weeds** - Prevents growth between pavers
4. **Stops insects** - No gaps for bugs to enter
5. **Allows drainage** - Water flows through

## Types of Joint Sand

### Polymeric Sand
- Sets hard like concrete
- Best for locking pavers
- Resists weeds and insects
- Our recommended option

### Regular Sand
- More affordable
- Needs more frequent replenishment
- Works for traditional look

## Installation Matters

Proper sand application requires:
- Cleaning joints thoroughly
- Filling to the correct level
- Compacting properly
- Professional application

So Flo professionally installs pavers in Cape Coral and Fort Myers. Contact us for expert installation!
    `
  }
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-sky-600 hover:underline">Return to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sky-600 hover:underline mb-4 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          <span className="ml-4 px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm font-medium rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-4">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
            {post.content.split('\n').map((paragraph, i) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">{trimmed.replace('## ', '')}</h2>;
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={i} className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">{trimmed.replace('### ', '')}</h3>;
              }
              if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ') || trimmed.startsWith('4. ') || trimmed.startsWith('5. ')) {
                return <li key={i} className="ml-4 mb-2">{trimmed.replace(/^\d+\. /, '')}</li>;
              }
              return <p key={i} className="mb-4">{trimmed}</p>;
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-sky-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need Professional Help?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us for a free quote on any of our services.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2394467091" className="inline-flex items-center bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-xl font-semibold">
              Call (239) 446-7091
            </a>
            <Link href="/contact" className="inline-flex items-center border-2 border-sky-600 text-sky-600 px-6 py-3 rounded-xl font-semibold hover:bg-sky-50">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}