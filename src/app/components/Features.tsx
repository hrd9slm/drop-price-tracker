"use client";
import React from 'react';
import { FaBell, FaHistory, FaCalendarAlt, FaGlobe } from 'react-icons/fa';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Automatic Price Tracking',
    description: 'Receive notifications when the price drops',
    icon: <FaBell className="text-4xl text-blue-600" />,
  },
  {
    id: 2,
    title: 'Price History',
    description: 'View price changes over time',
    icon: <FaHistory className="text-4xl text-green-600" />,
  },
  {
    id: 3,
    title: 'Custom Alerts',
    description: 'Set up alerts according to your preferences',
    icon: <FaCalendarAlt className="text-4xl text-red-600" />,
  },
  {
    id: 4,
    title: 'Multi-site Compatibility',
    description: 'Track products from multiple ecommerce sites',
    icon: <FaGlobe className="text-4xl text-purple-600" />,
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center">
              <div className="mb-4 flex items-center justify-center w-full h-24">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
