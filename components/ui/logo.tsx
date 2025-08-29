import Image from "next/image";

export const Logo = () => {
    return (
        <div className="w-full flex justify-center mt-auto">
            <Image
                src="/logo.svg"
                width={150}
                height={150}
                alt="Logo"

            />
        </div>
    );
};