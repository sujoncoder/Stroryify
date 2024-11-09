"use client"

import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const NeswLetterForm = () => {
    const [email, setEmail] = useState("");

    // handle newletter submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append("email", email);

            const response = await axios.post("/api/email", formData);

            if (response.data.success) {
                toast.success(response.data.message)
                setEmail("")
            }
        } catch (error) {
            toast.error(error.message)
        }
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center">
            <input onChange={(e) => setEmail(e.target.value)} value={email}
                type="email"
                required
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md shadow-inner mb-4 sm:mb-0 sm:mr-4 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-400 transition"
            />
            <button type="submit" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg active:bg-blue-700 transition duration-300">
                Subscribe
            </button>
        </form>
    )
}

export default NeswLetterForm