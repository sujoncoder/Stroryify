import React from 'react';
import MeetTeam from '@/components/about/MeetTeam';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import TestMonials from '@/components/about/TestMonials';

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="bg-gray-100 text-gray-800 py-10">
                {/* Header Section */}
                <header className="text-center py-10 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl">
                        Welcome to our blog! We’re dedicated to providing you with the latest insights, tips, and trends.
                    </p>
                </header>

                {/* Mission Section */}
                <section className="max-w-4xl mx-auto py-12 px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
                    <p className="text-lg">
                        Our mission is to create valuable content that informs, inspires, and educates our readers. We strive to be a trusted resource, covering topics with authenticity and depth.
                    </p>
                </section>

                {/* Team Section */}
                <MeetTeam />

                {/* Testimonials Section */}
                <TestMonials />
            </div>

            <Footer />
        </>
    );
};

export default AboutPage;
