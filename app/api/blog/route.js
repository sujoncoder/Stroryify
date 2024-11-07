import { NextResponse } from "next/server"

export const GET = async (request) => {
    console.log("blog hit")
    return NextResponse.json({ hello: "hello world" })
}