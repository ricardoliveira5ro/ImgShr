"use client";

import { useCallback, useState } from "react";
import Image from "next/image";

export default function DragDrop() {

    const [dragOver, setDragOver] = useState(false);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setDragOver(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);

        const file = e.dataTransfer.files?.[0];
        if (!file) return;

        const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];

        if (!validTypes.includes(file.type)) {
            console.log("Only JPG, PNG, and WEBP images are allowed.");
            return;
        }

        //const maxSize = 5 * 1024 * 1024; // 5MB

        // if (file.size > maxSize) {
        //   alert("File is too large. Max 5MB.");
        //   return;
        // }

        console.log("Dropped file:", file);
    }, []);

    return (
        <div className={`relative transition rounded-l-md ${dragOver ? "border border-[#c79df7]" : "border-transparent"}`} 
                onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-lg border-2 border-dashed border-white px-6 py-3 rounded-md font-[family-name:var(--font-geist-sans)] font-semibold">
                    Drag & Drop images
                </div>
            </div>
            <Image src="/landscape.svg" alt="Landscape" width={550} height={309} priority className="rounded-l-md object-cover"/>
        </div>
    );
}