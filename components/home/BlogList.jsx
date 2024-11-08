"use client";

import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import axios from 'axios';

const BlogList = () => {
    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get("/api/blog");
            if (response.status === 200) {
                setBlogs(response.data.blogs || []);
            } else {
                setError("Failed to fetch blogs. Please try again later.");
            }
        } catch (err) {
            setError("An error occurred while fetching data.");
            console.error("Fetch Error:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="bg-gray-100 py-10 px-5 md:px-12 lg:px-28">
            <div className='flex justify-center items-center gap-4 my-10'>
                {["All", "Technology", "Lifestyle", "Startup"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setMenu(category)}
                        className={`px-4 py-2 rounded shadow font-semibold ${menu === category ? "bg-blue-500 text-white" : "bg-blue-100 text-black"}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Latest Blog</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Dive into our latest articles covering web development, design trends, and tech insights. Stay updated and keep learning.
                </p>
            </div>

            {/* Display loading, error, or filtered blog list */}
            {loading ? (
                <p className="text-center text-gray-600">Loading blogs...</p>
            ) : error ? (
                <p className="text-center text-red-600">{error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogs
                        .filter((item) => menu === "All" || item.category === menu)
                        .map((blog) => (
                            <Blog key={blog._id} blog={blog} />
                        ))}
                </div>
            )}
        </section>
    );
};

export default BlogList;
