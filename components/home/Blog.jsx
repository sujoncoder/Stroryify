import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Blog = ({ blog }) => {
    return (
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl">
            {/* Blog Image */}
            <Link href={`/blogs/${blog.id}`}>
                <div className="relative">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover rounded-t-xl"
                    />
                </div>


                {/* Blog Content */}
                <div className="p-6">

                    {/* Category Badge */}
                    <span className="inline-block px-4 mb-5 py-0.5 bg-blue-400 text-white text-sm font-medium rounded-full">
                        {blog.category}
                    </span>

                    {/* Blog Title */}
                    <h3 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition duration-200 cursor-pointer line-clamp-1">{blog.title}</h3>

                    {/* Blog Description */}
                    <p className="text-gray-700 mt-4 text-base line-clamp-2">{blog.description}</p>



                    {/* Author Info */}
                    <div className="flex items-center mt-6">
                        <Image
                            src={blog.authorImage}
                            alt={blog.author}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div className="ml-4">
                            <p className="font-medium text-gray-800">{blog.author}</p>
                            <p className="text-sm text-gray-500">{blog.date}</p>
                        </div>
                    </div>


                    {/* Read More Arrow */}
                    <div className="mt-4 flex justify-end items-center text-blue-500 cursor-pointer transition duration-200">
                        <span className="text-sm mr-2">Read More</span>
                        <FaArrowRight className="text-sm" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Blog;
