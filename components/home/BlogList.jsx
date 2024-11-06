"use client"


import React, { useState } from 'react';
import Blog from './Blog';
import { blogData } from '@/utils/blogData';

const BlogList = () => {
    const [menu, setMenu] = useState("All")

    return (
        <section className="bg-gray-100 py-10 px-5 md:px-12 
        lg:px-28">

            <div className='flex justify-center items-center gap-4 my-10'>
                <button onClick={() => setMenu("All")} className={`px-4 py-2 rounded shadow font-semibold ${menu === "All" ? "bg-blue-500 text-white" : "bg-blue-100 text-black"}`}>All</button>

                <button onClick={() => setMenu("Technology")} className={`px-4 py-2 rounded shadow font-semibold ${menu === "Technology" ? "bg-blue-500 text-white" : "bg-blue-100 text-black"}`}>Technology</button>

                <button onClick={() => setMenu("Lifestyle")} className={`px-4 py-2 rounded shadow font-semibold ${menu === "Lifestyle" ? "bg-blue-500 text-white" : "bg-blue-100 text-black"}`}>Lifestyle</button>

                <button onClick={() => setMenu("Startup")} className={`px-4 py-2 rounded shadow font-semibold ${menu === "Startup" ? "bg-blue-500 text-white" : "bg-blue-100 text-black"}`}>Startup</button>
            </div>


            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Latest Blog</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Dive into our latest articles covering web development, design trends, and tech insights. Stay updated and keep learning.
                </p>
            </div>

            {/* Blog List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    blogData.filter((item) => menu === "All" ? true : item.category === menu).map((blog) => <Blog key={blog.id} blog={blog} />)
                }
            </div>
        </section>
    );
};

export default BlogList;
