/* NOT USED - REPLACED BY SERVER ACTIONS */

import { NextResponse } from "next/server";
import crypto from 'crypto';

export async function POST() {
    const timestamp = Math.floor(Date.now() / 1000);
    const stringToSign = `timestamp=${timestamp}`;

    const signature = crypto.createHash('sha1')
        .update(stringToSign + process.env.CLOUDINARY_API_SECRET)
        .digest('hex');

    return NextResponse.json({ 
        signature,
        timestamp,
        api_key: process.env.CLOUDINARY_API_KEY,
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        upload_url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`
    });
}