import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 py-8 px-5 md:px-12 lg:px-28">
            {/* Logo */}
            <div className="flex justify-center mb-6">
                <Image src={logo} alt="Company Logo" className="h-20 w-auto" />
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-300">
                    <FaFacebook size={24} />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-300">
                    <FaTwitter size={24} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-300">
                    <FaLinkedin size={24} />
                </a>
            </div>

            {/* Footer Text */}
            <div className="text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                <p className="mt-2">Developed by Sujon Sheikh</p>
            </div>
        </footer>
    );
};

export default Footer;
