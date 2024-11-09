"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import FBIcon from "../../../assets/facebook.png"
import LKDIcon from "../../../assets/linkedin.png"
import TWTIcon from "../../../assets/twitter.png"


const BlogPage = ({ params }) => {
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        const response = await axios.get("/api/blog", {
            params: {
                id: params.id
            }
        });
        setData(response.data);

    };

    useEffect(() => {
        fetchBlogData();
    }, []);


    return (
        <>
            <Header />
            <section className="max-w-3xl mx-auto p-5 md:p-8 lg:p-12 space-y-6">
                {/* Blog Image */}
                <div className="mb-6">
                    <Image
                        src={data?.image}
                        width={500}
                        height={500}
                        alt={data?.title}
                        className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Blog Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{data?.title}</h1>

                {/* Author and Date */}
                <div className="flex items-center mb-6 text-gray-500">
                    <Image
                        src={data?.authorImg}
                        width={100}
                        height={100}
                        alt={data?.author}
                        className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                        <p className="font-medium">{data?.author}</p>
                        <p className="text-sm">{new Date(data?.date).toLocaleDateString()}</p>
                    </div>
                </div>

                {/* Category Badge */}
                <div className="flex justify-start mb-6">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {data?.category}
                    </span>
                </div>

                {/* Blog Description */}
                <div className="text-gray-700 leading-relaxed space-y-4">
                    <p className="text-lg leading-loose">{data?.description}</p>
                </div><br /><br />


                <div className="flex gap-5 items-center">
                    <a href="https://www.facebook.com/iamsujonsheikh/" target="_blank" >
                        <Image src={FBIcon} width={50} height={50} alt="fbicon" className="hover:grayscale duration-300" />
                    </a>

                    <a href="https://www.facebook.com/iamsujonsheikh/" target="_blank" >
                        <Image src={TWTIcon} width={50} height={50} alt="fbicon" className="hover:grayscale duration-300" />
                    </a>

                    <a href="https://www.linkedin.com/in/sujonsheikh/" target="_blank" >
                        <Image src={LKDIcon} width={50} height={50} alt="fbicon" className="hover:grayscale duration-300" />
                    </a>


                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogPage;
