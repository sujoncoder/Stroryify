import NeswLetterForm from './NeswLetterForm';

const Hero = () => {

    return (
        <section className="relative bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-5 md:px-12 lg:px-28 overflow-hidden">
            {/* Decorative Background Circles */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-2xl -z-10"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full opacity-30 blur-2xl -z-10"></div>

            {/* Latest Blog Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800">Latest Blog</h2>
                <p className="mt-4 font-mono text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover our latest insights into web development, design trends, and the tech world. Keep up with the latest advancements and boost your skills.
                </p>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="max-w-lg mx-auto bg-white shadow-xl p-8 rounded-lg transition transform duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-gray-500 text-center mb-6 font-mono">
                    Subscribe to Our Newsletter
                </h3>

                {/* news letter form  */}
                <NeswLetterForm />
            </div>
        </section>
    );
};

export default Hero;
