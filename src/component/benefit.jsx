import React from 'react';

const Benefits = () => {
    return (
        <section className="min-h-screen bg-white">
        <div className="max-w-screen-xl px-2 py-10 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto py-28 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Why Choose Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">Cost-Effective Solutions</h2>
                            <p className="text-gray-600 mb-4">Our team of experts will design custom solutions tailored to your specific needs. We strive to minimize costs without compromising on quality.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">Highly-Skilled Professionals</h2>
                            <p className="text-gray-600 mb-4">Our team is comprised of highly skilled professionals with years of experience in the industry. Their expertise ensures the delivery of high-quality, cost-effective solutions.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-2">Flexible Delivery Methods</h2>
                            <p className="text-gray-600 mb-4">We offer a range of flexible delivery methods to accommodate your project requirements. Our team is adept at using both traditional and modern methods of project management.</p>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    );
};

export default Benefits;