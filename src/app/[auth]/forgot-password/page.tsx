'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BacksignHeader from '../../../components/BacksignHeader/BacksignHeader';

export default function ForgotPassword({
    logo = "/images/logo.png",
    Arrow = "/icons/Arrow.png",
    icon = "/icons/icon.png",
    Arrow2 = "/icons/Arrow2.png"
}) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Handle form submission and route to /check-email
    const handleSendResetLink = async  (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call or add your logic here
        setTimeout(() => {
            setLoading(false);
            router.push("/auth/check-email");
        }, 1000);
    };
    
    return (
        <div className="min-h-screen px-8">
            <BacksignHeader />
            <div className=" bg-white flex flex-col items-center justify-center mt-[14rem]">  
                <div className="flex flex-col items-center w-[40rem] h-[26rem] justify-center border-gray-300 bg-white rounded-2xl border-2 mt-[-12rem]">
                    <div className="w-12 h-12 bg-gray-400 flex items-center justify-center rounded-full">
                        <Image
                            src={icon}
                            alt="icon"
                            width={24}
                            height={24}
                        />
                    </div>
                    <h2 className="text-2xl font-semibold mt-4">
                        Forgot Password
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">
                        No worries, we'll send you reset instructions.
                    </p>

                    {/* Form */}
                    <div className="mt-6 w-[352px]">
                        <form onSubmit={handleSendResetLink}>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-700"
                            >
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full border border-[#6F0C15] py-2 px-3 rounded-md lg:mb-4"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full mt-4 bg-[#6F0C15] text-white py-3 rounded-xl cursor-pointer"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Reset Link"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
