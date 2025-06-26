import { NextResponse } from "next/server";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

export async function POST(request: Request) {
    try {
        const { public_id, secure_url, original_filename, width, height, format, created_at, bytes } = await request.json() as CloudinaryResponseMetadata;
    
        const secureUrlParts = secure_url.split('/');
    
        if (secureUrlParts[3] !== process.env.CLOUDINARY_CLOUD_NAME || secureUrlParts[secureUrlParts.length - 1].split('.')[0] !== public_id)
            return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    
        await addDoc(collection(db, "images"), {
            public_id,
            secure_url,
            original_filename,
            width: Number(width),
            height: Number(height),
            format,
            bytes: Number(bytes),
            created_at: new Date(created_at)
        });
    
        return NextResponse.json({ message: "Successfully uploaded" });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed saving image metadata" }, { status: 500 });
    }
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