import React from 'react';

const Portofolio = () => {
 return (
    <section className="min-h-screen">
      <div className="max-w-screen-xl px-2 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Our Portofolio.
            <strong className="font-extrabold text-red-700 sm:block">
              Our Projects.
            </strong>
          </h1>
          <p className="mt-4 mb-4 sm:text-xl/relaxed">
            Here are some of our completed projects and clients.
          </p>
          <div className="mx-auto max-w-xl grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-xl font-semibold">Company A</h2>
                <p className="mt-2">Creating company profile website to gather customer interest</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-xl font-semibold">Company B</h2>
                <p className="mt-2">Creating mobile apps for Android and IoS</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-xl font-semibold">Company C</h2>
                <p className="mt-2">Managing SEO until above target expected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
 );
};

export default Portofolio;