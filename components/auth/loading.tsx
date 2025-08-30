// in your components/loading.tsx (or wherever this file is)

import Image from "next/image";

export const Loading = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Image
                src="/logo.svg"
                width={120}
                height={120}
                alt="Logo"
                // Change animate-pulse to animate-spin
                className="animate-spin duration-700" // You can adjust duration, e.g., 'duration-1000'
            />
        </div>
    );
};