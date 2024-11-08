import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import connectDB from "@/lib/config/db.js";
import { BlogModel } from "@/lib/models/blogModel";


// get all blog post
export const GET = async (request) => {
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
        await connectDB();

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
