import Image from "next/image";
import "./home.css";

import DragDrop from "./ui/DragDrop";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen p-8">
      <main className="grid grid-cols-2 w-fit rounded-md bg-[#3c424b]">
        <DragDrop />
        <div className="flex flex-col items-center justify-center gap-y-4 px-12">
          <label htmlFor="file-upload" className="inline-block cursor-pointer">
            <div className="flex items-center gap-x-2">
              <Image src="/image.png" width={32} height={32} alt="Landscape" priority />
              <span className="font-[family-name:var(--font-geist-sans)] font-semibold">Choose Photo</span>
            </div>
          </label>
          <input id="file-upload" type="file" accept=".png,.jpeg,.jpg,.webp" />
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="h-px w-16 bg-gray-500" />
            <span className="shrink-0 font-[family-name:var(--font-geist-sans)] font-semibold">or</span>
            <div className="h-px w-16 bg-gray-500" />
          </div>
          <input className="image-url-input bg-[#272a33] rounded-sm w-full py-1.5 font-[family-name:var(--font-geist-sans)] font-semibold text-center" placeholder="Image URL" />
        </div>
      </main>
    </div>
  );
}