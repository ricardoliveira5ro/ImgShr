'use server'

import crypto from 'crypto';
import { db } from '@/lib/firebaseConfig';
import { setDoc, doc } from "firebase/firestore";

export async function generateSignedUrl() {
    const timestamp = Math.floor(Date.now() / 1000);
    const stringToSign = `timestamp=${timestamp}`;

    const signature = crypto.createHash("sha1")
        .update(stringToSign + process.env.CLOUDINARY_API_SECRET)
        .digest("hex");

    return {
        signature,
        timestamp,
        api_key: process.env.CLOUDINARY_API_KEY ?? '',
        upload_url: `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`
    };
}

export async function updateImageMetadata(metadata: CloudinaryResponseMetadata) {
    await setDoc(doc(db, "images", metadata.public_id), {
        public_id: metadata.public_id,
        secure_url: metadata.secure_url,
        original_filename: metadata.original_filename,
        width: Number(metadata.width),
        height: Number(metadata.height),
        format: metadata.format,
        bytes: Number(metadata.bytes),
        created_at: new Date(metadata.created_at)
    });
}

interface CloudinaryResponseMetadata {
    public_id: string,
    secure_url: string,
    original_filename: string,
    width: string,
    height: string,
    format: string,
    created_at: string,
    bytes: string,
}