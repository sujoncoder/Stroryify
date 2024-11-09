"use client";

import React, { useState } from 'react';
import UploadIcon from "../../../assets/upload.png";
import Image from 'next/image';
import AuthorImage from "../../../assets/author.png"; // Import author image as a static asset
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProductPage = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Sujon Sheikh",
    });

    // Handle input field changes
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("author", data.author);
        formData.append("image", image);

        // Set author image as URL
        formData.append("authorImg", AuthorImage.src);

        try {
            const response = await axios.post("/api/blog", formData);
            if (response.data.success) {
                toast.success(response.data.message || "Blog added successfully!");

                // Reset form data
                setData({
                    title: "",
                    description: "",
                    category: "Startup",
                    author: "Sujon Sheikh",
                });
                setImage(null);
            } else {
                toast.error("Error: " + (response.data.message || "Something went wrong"));
            }
        } catch (error) {
            if (error.response) {
                console.error("Server error:", error.response.data);
                toast.error(`Error: ${error.response.data.message || "Server error occurred"}`);
            } else {
                console.error("Request error:", error);
                toast.error("An error occurred while uploading.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="pt-5 px-5 sm:pt-12 sm:pl-16">
            <p className="text-xl">Upload thumbnail</p>

            <label htmlFor="image">
                <Image
                    className="mt-6 bg-slate-50 border-2 rounded px-10 py-5"
                    src={!image ? UploadIcon : URL.createObjectURL(image)}
                    width={150}
                    height={50}
                    alt="upload icon"
                />
            </label>

            <input
                onChange={handleImageChange}
                type="file"
                id="image"
                hidden
                required
            />

            <p className="text-xl mt-4">Blog title</p>
            <input
                name="title"
                onChange={handleOnChange}
                value={data.title}
                className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded border-slate-400"
                type="text"
                placeholder="Write your title"
                required
            />

            <p className="text-xl mt-4">Blog description</p>
            <textarea
                name="description"
                onChange={handleOnChange}
                value={data.description}
                className="w-full sm:w-[500px] mt-4 px-4 py-3 border rounded border-slate-400"
                placeholder="Write content here"
                rows={6}
                required
            />

            <p className="text-xl mt-4">Blog category</p>
            <select
                name="category"
                onChange={handleOnChange}
                value={data.category}
                className="w-40 mt-4 px-4 py-3 border rounded border-slate-400 text-slate-800"
            >
                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select><br />

            <button
                className="mt-8 w-40 h-12 bg-blue-500 text-white shadow rounded font-semibold"
                type="submit"
            >
                Add
            </button>
        </form>
    );
};

export default AddProductPage;
