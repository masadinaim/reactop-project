import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-screen-xl px-2 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understand Business.
            <strong className="font-extrabold text-red-700 sm:block">
              Let's Go Big With App.
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed">
            Doing digital transformation while cost efficiency for your business with an Application
            that fits with business needs!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="block w-full rounded bg-red-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            >
              Contact Us!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
