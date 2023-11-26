import React from 'react';

const Service = () => {
    return (
        <section className="min-h-screen bg-white">
        <div className="max-w-screen-xl px-2 py-10 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto py-28 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Our Service</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">Web Development</h2>
                            <p className="text-gray-600 mb-4">Providing comprehensive web development services that transform your digital presence. From crafting visually striking, responsive websites to tailoring custom solutions that align with your unique business requirements, we prioritize user experience and functionality.</p>
                            <a href="/pricing" className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-6">
                              Pricing
                            </a>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">App Development</h2>
                            <p className="text-gray-600 mb-4">Specialize in creating bespoke mobile applications that cater to your specific business needs. Whether it's iOS, Android, or cross-platform development, we bring expertise to every stage of the process. We ensure that your app not only meets but exceeds user expectations.</p>
                            <a href="/pricing" className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-6">
                              Pricing
                            </a>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">SEO</h2>
                            <p className="text-gray-600 mb-4">Specialize in strategic search engine optimization, implementing cutting-edge techniques to enhance your website's visibility and drive organic traffic. Our approach goes beyond keywords, focusing on comprehensive strategies that align with the latest search engine algorithms.</p>
                            <a href="/pricing" className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-6">
                              Pricing
                            </a>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    );
};

export default Service;