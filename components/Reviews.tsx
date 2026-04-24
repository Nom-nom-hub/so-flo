"use client";

import { useState } from "react";

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

const reviews: Review[] = [
  {
    name: "Michael T.",
    location: "Cape Coral, FL",
    rating: 5,
    text: "Absolutely fantastic work! They installed our pool deck and it looks amazing. The crew was professional, on time, and finished ahead of schedule. Highly recommend!",
    service: "Paver Installation"
  },
  {
    name: "Sarah M.",
    location: "Fort Myers, FL",
    rating: 5,
    text: "Our pool deck looks brand new after the sealing. They were very thorough and the attention to detail was impressive. Great local company!",
    service: "Paver Sealing"
  },
  {
    name: "James R.",
    location: "Cape Coral, FL",
    rating: 5,
    text: "Called them for pressure washing and was amazed at the transformation. Our driveway went from dirty to brand new. Will definitely use them again.",
    service: "Pressure Washing"
  },
  {
    name: "Jennifer L.",
    location: "Fort Myers, FL",
    rating: 5,
    text: "So Flo installed our patio and did an incredible job. They walked us through all the options and helped us choose the perfect pavers. Very happy with the result!",
    service: "Paver Installation"
  },
  {
    name: "David K.",
    location: "Cape Coral, FL",
    rating: 5,
    text: "Professional from start to finish. The sealing protected our pavers perfectly. You can tell they take pride in their work. Five stars!",
    service: "Paver Sealing"
  },
  {
    name: "Amanda S.",
    location: "Fort Myers, FL",
    rating: 5,
    text: "Quick response and excellent work! They pressure washed our entire backyard patio and driveway. Would recommend to everyone!",
    service: "Pressure Washing"
  },
  {
    name: "Robert H.",
    location: "Cape Coral, FL",
    rating: 5,
    text: "Great experience from quote to completion. The team was knowledgeable and the pricing was fair. Our new paver driveway is the envy of the neighborhood!",
    service: "Paver Installation"
  },
  {
    name: "Michelle P.",
    location: "Fort Myers, FL",
    rating: 5,
    text: "They sealed our pavers last year and they still look great. Very thorough professional service. Will use them for all future needs.",
    service: "Paver Sealing"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const displayedReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length]
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            We value our customers feedback
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayedReviews.map((review, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <span className="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-sm rounded-full">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-600 dark:hover:text-sky-400 transition-all shadow-md"
            aria-label="Previous reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {[...Array(Math.ceil(reviews.length / 3))].map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === Math.floor(currentIndex / 3)
                    ? "bg-sky-500 w-6"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-sky-50 dark:hover:bg-sky-900/20 hover:text-sky-600 dark:hover:text-sky-400 transition-all shadow-md"
            aria-label="Next reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">Showing {currentIndex + 1}-{Math.min(currentIndex + 3, reviews.length)} of {reviews.length} reviews</p>
        </div>
      </div>
    </section>
  );
}