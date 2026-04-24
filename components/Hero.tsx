"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);

  const words = ["SEALING", "WASHING", "INSTALL", "RESTORATION"];

  const nextWord = useCallback(() => {
    setCurrentWord((prev) => (prev + 1) % 4);
  }, []);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(nextWord, 2500);
    return () => clearInterval(interval);
  }, [nextWord]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/completed-pool-deck-pavers.JPEG"
          alt="Professional paver sealing in Cape Coral Florida"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <svg className="w-full h-full" viewBox="0 0 600 900" preserveAspectRatio="xMaxYMax slice">
            <defs>
              <linearGradient id="paverShine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f1f5f9" />
                <stop offset="50%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <pattern id="herringbone" width="60" height="60" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="30" height="15" rx="2" fill="url(#paverShine)" transform="rotate(45 15 7.5)" />
                <rect x="15" y="15" width="30" height="15" rx="2" fill="url(#paverShine)" transform="rotate(45 30 22.5)" />
                <rect x="0" y="30" width="30" height="15" rx="2" fill="url(#paverShine)" transform="rotate(45 15 37.5)" />
                <rect x="15" y="45" width="30" height="15" rx="2" fill="url(#paverShine)" transform="rotate(45 30 52.5)" />
              </pattern>
              <pattern id="runningBond" width="100" height="60" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="96" height="28" rx="3" fill="url(#paverShine)" />
                <rect x="0" y="31" width="96" height="28" rx="3" fill="url(#paverShine)" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="300" height="900" fill="url(#herringbone)" />
            <rect x="300" y="0" width="300" height="450" fill="url(#runningBond)" />
            <rect x="300" y="450" width="300" height="450" fill="url(#herringbone)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-4xl">
          <div className={`mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Serving Cape Coral & Fort Myers, FL
            </span>
          </div>

          <div className={`mb-2 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              PROFESSIONAL
            </h1>
          </div>

          <div className={`mb-2 h-20 sm:h-24 lg:h-28 overflow-hidden transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-sky-400 animate-slide-up">
              {words[currentWord]}
            </h1>
          </div>

          <div className={`mb-2 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/80 leading-[0.95] tracking-tight">
              FOR YOUR
            </h1>
          </div>

          <div className={`mb-8 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                PAVERS
              </span>
            </h1>
          </div>

          <div className={`mb-12 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Transform your outdoor spaces with our expert sealing and pressure washing services.
              <span className="text-sky-400 font-semibold"> Quality results.</span>
              <span className="text-white font-semibold"> Guaranteed.</span>
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-sky-500/40 hover:shadow-sky-400/60 hover:-translate-y-1"
            >
              <span>Get Your Free Quote</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:2394467091"
              className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/20 hover:border-white/40 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(239) 446-7091</span>
            </a>
          </div>

          <div className={`grid grid-cols-3 gap-6 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-white mb-1">100+</p>
              <p className="text-sm text-gray-400">Projects Done</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-white mb-1">5+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-white mb-1">100%</p>
              <p className="text-sm text-gray-400">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </section>
  );
}