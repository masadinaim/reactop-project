import React from 'react';

const Pricing = () => {
    return (
        <section className="min-h-screen bg-white">
        <div className="max-w-screen-xl px-2 py-10 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto py-28 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Our Service</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">Web Development</h2>
                            <ul className="text-gray-600 mb-4 list-disc list-inside">
                                <li>Basic Packaging starting at IDR X,000 includes with standard website design and development with essential features</li>
                                <li>Medium Packaging starting at IDR X,000 includes with expanded features.</li>
                                <li>Hourly Development Rate starting at IDR X,000 includes with customizations and additions.</li>
                            </ul>
                            <a href="/contact" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-6">
                              Contact Us
                            </a>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">App Development</h2>
                            <ul className="text-gray-600 mb-4 list-disc list-inside">
                                <li>Basic Packaging starting at IDR X,000 includes with standard website design and development with essential features</li>
                                <li>Medium Packaging starting at IDR X,000 includes with expanded features.</li>
                                 <li>Hourly Development Rate starting at IDR X,000 includes with customizations and additions.</li>
                            </ul>
                            <a href="/contact" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-6">
                              Contact Us
                            </a>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">SEO</h2>
                            <ul className="text-gray-600 mb-4 list-disc list-inside">
                                <li>Audit & Strategy starting at IDR X,000 includes comprehensive website audit and development strategy.</li>
                                <li>On-Page starting at IDR X,000 includes keyword research and other on-page SEO techniques</li>
                                 <li>Off-Page starting at IDR X,000 includes backlinks and other off-page strategies.</li>
                            </ul>
                            <a href="/contact" className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-6">
                              Contact Us
                            </a>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    );
};

export default Pricing;