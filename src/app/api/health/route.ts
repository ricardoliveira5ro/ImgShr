import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: 'OK',
        uptime: process.uptime(),
        timestamp: new Date(),
    });
}