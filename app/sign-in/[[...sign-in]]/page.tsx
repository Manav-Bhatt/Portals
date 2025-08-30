// FILE: app/sign-in/[[...sign-in]]/page.tsx

"use client";

import Image from "next/image"; // 1. Import the Next.js Image component
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    // 2. Use a flex container to center and stack items vertically
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
      <div className="flex flex-col items-center gap-y-6"> {/* 3. A container for the logo and SignIn component */}
        
        {/* Your Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80} // Set your desired width
          height={80} // Set your desired height
          className="animate-spin duration-300"
        />

        {/* The Clerk Sign-In Component */}
        <SignIn />

      </div>
    </div>
  );
}