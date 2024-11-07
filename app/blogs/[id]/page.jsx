import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { blogData } from '@/utils/blogData';
import Image from 'next/image';
import React from 'react';

const BlogPage = ({ params }) => {
    const blog = blogData.find((item) => item.id === parseInt(params.id));

    if (!blog) {
        return <p className="text-center text-gray-700">Blog post not found.</p>;
    }

    return (
        <>
            <Header />
            <section className="max-w-3xl mx-auto p-5 md:p-8 lg:p-12 space-y-6">
                {/* Blog Image */}
                <div className="mb-6">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Blog Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>

                {/* Author and Date */}
                <div className="flex items-center mb-6 text-gray-500">
                    <Image
                        src={blog.authorImage}
                        alt={blog.author}
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <p className="font-medium">{blog.author}</p>
                        <p className="text-sm">{new Date(blog.date).toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="flex justify-start mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {blog.category}
                    </span>
                </div>

                {/* Blog Description */}
                <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>{blog.description}</p>
                    <p>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam auctor egestas ex. Quisque non fringilla velit. 
                    Vivamus auctor augue quis turpis tempor, ac fermentum nisl placerat. 
                    Donec sed dolor at arcu ultricies tristique. Aliquam porta tincidunt arcu, non ultricies velit.`}
                    </p>
                    <p>
                        {`Pellentesque auctor tellus sed arcu luctus, a pharetra est mollis. 
                    Sed malesuada eros id est lacinia condimentum. Integer vel risus eu libero tincidunt cursus. 
                    Suspendisse euismod erat non diam aliquet pharetra. In faucibus nulla id arcu suscipit, 
                    ut facilisis libero vehicula.`}
                    </p>
                    <p>
                        {`Curabitur in nisl eros. Phasellus a orci neque. Cras eget ligula vitae ipsum viverra suscipit. 
                    Phasellus at tortor vehicula, gravida justo in, accumsan nisl. Fusce vel purus sapien. 
                    Vivamus eget dui eget nunc sodales gravida.`}
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogPage;
