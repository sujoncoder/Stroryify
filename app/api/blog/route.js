import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import fs from 'fs';
import connectDB from "@/lib/config/db.js";
import { BlogModel } from "@/lib/models/blogModel";


// get all blog post
export const GET = async (request) => {
    await connectDB()
    const blogId = request.nextUrl.searchParams.get("id")
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog)
    } else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    }
};

// create bloging post
export const POST = async (request) => {
    try {
        const formData = await request.formData();

        // Process main image file
        const image = formData.get("image");
        if (!image) {
            return NextResponse.json({ error: "Image not found in form data" }, { status: 400 });
        }
        const imageByteData = await image.arrayBuffer();
        const imageBuffer = Buffer.from(imageByteData);
        const timestamp = Date.now();
        const imagePath = `./public/${timestamp}_${image.name}`;
        await writeFile(imagePath, imageBuffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        // Check if authorImg is a URL string or a file
        const authorImg = formData.get("authorImg");
        let authorImgUrl = "";
        if (authorImg && authorImg instanceof File) {
            const authorImgByteData = await authorImg.arrayBuffer();
            const authorImgBuffer = Buffer.from(authorImgByteData);
            const authorImgPath = `./public/${timestamp}_${authorImg.name}`;
            await writeFile(authorImgPath, authorImgBuffer);
            authorImgUrl = `/${timestamp}_${authorImg.name}`;
        } else if (typeof authorImg === "string") {
            authorImgUrl = authorImg;
        }

        const blogData = {
            title: formData.get("title"),
            description: formData.get("description"),
            category: formData.get("category"),
            author: formData.get("author"),
            image: imgUrl,
            authorImg: authorImgUrl,
        };

        await BlogModel.create(blogData);

        return NextResponse.json({
            success: true,
            message: "Blog was added",
            blogData,
        });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            error: `Failed to process form data: ${error.message}`,
        }, { status: 500 });
    }
};

// delete blog post
export const DELETE = async (request) => {
    try {
        const id = request.nextUrl.searchParams.get("id");
        const blog = await BlogModel.findById(id);

        if (!blog) {
            return NextResponse.json({ message: "Blog not found." }, { status: 404 });
        }

        fs.unlink(`./public${blog.image}`, (err) => {
            if (err) console.error("Error deleting file:", err);
        });

        await BlogModel.findByIdAndDelete(id);
        return NextResponse.json({ message: "Blog deleted successfully." });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
};

