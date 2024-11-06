import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-5 md:px-12 lg:px-28 overflow-hidden">
            {/* Decorative Background Circles */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-30 blur-2xl -z-10"></div>

            {/* Latest Blog Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800">Latest Blog</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our latest insights into web development, design trends, and the tech world. Keep up with the latest advancements and boost your skills.
                </p>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="max-w-lg mx-auto bg-white shadow-xl p-8 rounded-lg transition transform hover:-translate-y-1 hover:shadow-2xl">
                <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    Subscribe to Our Newsletter
                </h3>
                <p className="text-center text-gray-500 mb-8">
                    Join our community to receive exclusive content and updates in your inbox.
                </p>
                <form className="flex flex-col sm:flex-row items-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md shadow-inner mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition"
                    />
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Hero;
