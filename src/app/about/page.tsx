'use client';

import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-center">
          À propos de nous
        </h1>
        <p className="text-lg lg:text-xl mb-6 text-center">
          Bienvenue sur Price Tracker! Notre mission est de vous aider à économiser de l'argent en suivant les prix de vos produits préférés et en vous informant lorsqu'ils baissent.
        </p>
        <p className="text-lg lg:text-xl mb-6 text-center">
          Notre équipe est dédiée à vous fournir le meilleur service de suivi des prix, afin que vous ne manquiez jamais une bonne affaire. Nous croyons en la transparence, la fiabilité et la satisfaction de nos clients.
        </p>
        <div className="flex justify-center mt-10">
          <img
            src="/images/team.jpg"
            alt="Notre Équipe"
            className="w-full max-w-3xl h-auto rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold leading-tight my-10 text-center">
          Rencontrez notre équipe
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 ">
            <img
              src="/images/team-member1.jpg"
              alt="Membre de l'équipe 1"
              className="w-full h-30 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-center" >John Doe</h3>
            <p className="text-gray-600 text-center">CEO & Fondateur</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <img
              src="/images/team-member2.jpg"
              alt="Membre de l'équipe 2"
              className="w-full h-30 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-center">Jane Smith</h3>
            <p className="text-gray-600 text-center">CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <img
              src="/images/team-member3.jpg"
              alt="Membre de l'équipe 3"
              className="w-full h-30 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-center">Alice Brown</h3>
            <p className="text-gray-600 text-center">Responsable Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
