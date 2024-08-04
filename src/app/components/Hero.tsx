"use client";

import React from 'react';
import Link from 'next/link';



const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
              Welcome to Price Tracker
            </h1>
            <p className="text-lg lg:text-xl mb-6">
              Track the prices of your favorite products and get notified when they drop!
            </p>
            <div className="flex space-x-4">
              <Link href="/signup" className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                Get Started
              </Link>
              <Link href="/learn-more" className="px-8 py-3 bg-gray-300 text-gray-700 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
             src='/images/priceTracer.png'
              alt="Price Tracker"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
