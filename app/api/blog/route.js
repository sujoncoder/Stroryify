import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import connectDB from "@/lib/config/db.js";
import { BlogModel } from "@/lib/models/blogModel";

export const GET = async (request) => {
    return NextResponse.json({ Message: "Hello world" })
};

export const POST = async (request) => {
    try {
        await connectDB();


        const formData = await request.formData();

        const image = formData.get("image");
        if (!image) {
            return NextResponse.json({ error: "Image not found in form data" }, { status: 400 });
        }

        // Process main image file
        const imageByteData = await image.arrayBuffer();
        const imageBuffer = Buffer.from(imageByteData);
        const timestamp = Date.now();
        const imagePath = `./public/${timestamp}_${image.name}`;
        await writeFile(imagePath, imageBuffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        // Get and process authorImg file
        const authorImg = formData.get("authorImg");
        let authorImgUrl = "";
        if (authorImg) {
            const authorImgByteData = await authorImg.arrayBuffer();
            const authorImgBuffer = Buffer.from(authorImgByteData);
            const authorImgPath = `./public/${timestamp}_${authorImg.name}`;
            await writeFile(authorImgPath, authorImgBuffer);
            authorImgUrl = `/${timestamp}_${authorImg.name}`;
        }


        const blogData = {
            title: formData.get("title"),
            description: formData.get("description"),
            category: formData.get("category"),
            author: formData.get("author"),
            image: imgUrl,
            authorImg: authorImgUrl,
        };

        // Save blog data to the database
        await BlogModel.create(blogData);

        return NextResponse.json({
            success: true,
            message: "Blog was added",
            blogData
        });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            error: `Failed to process form data: ${error.message}`
        }, { status: 500 });
    }
};

