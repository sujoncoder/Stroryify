import connectDB from "@/lib/config/db";
import { EmailModel } from "@/lib/models/emailModel";
import { NextResponse } from "next/server";


// email post route
export const POST = async (request) => {
    await connectDB();
    try {
        const formData = await request.formData();
        const emailData = {
            email: formData.get("email")
        }

        await EmailModel.create(emailData);

        return NextResponse.json({
            success: true,
            message: "Email subscribed successfull",
        })
    } catch (error) {
        return NextResponse(error.message)
    }
};

// all email get route
export const GET = async () => {
    await connectDB();
    try {
        const emails = await EmailModel.find({});
        return NextResponse.json({ success: true, message: "Emails fetched successfully", emails });
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message });
    }
};


// delete a email
export const DELETE = async (request) => {
    try {
        const id = await request.nextUrl.searchParams.get("id")
        await EmailModel.findByIdAndDelete(id);

        return NextResponse.json({ success: true, message: "Email was deleted." })
    } catch (error) {
        return NextResponse.json({ message: error.message });
    }
};