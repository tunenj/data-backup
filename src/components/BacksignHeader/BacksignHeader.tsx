'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BackSign() {
    const [open, setOpen] = useState(false);

    return (
        <div className="p-0">
            <div className="flex justify-between items-start px-4 pt-6">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/images/logo.png"
                        alt="Avetium Technologies"
                        width={140}
                        height={32}
                        priority
                    />
                </Link>

                {/* Back to Sign In Dropdown */}
                <div className="relative mt-2 md:mt-0 inline-block text-left">
                    <button
                        onClick={() => setOpen(!open)}
                        className="inline-flex items-center text-sm font-medium text-[#6F0C15] border border-[#6F0C15] rounded-md px-6 py-2 bg-white cursor-pointer"
                    >
                        Login to Existing Account
                    </button>
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#6F0C15] rounded-full flex items-center justify-center shadow-md">
                        <Image
                            src="/icons/Arrow.png"
                            alt="Arrow"
                            width={16}
                            height={16}
                            className="text-white"
                        />
                    </span>

                    {open && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border shadow-lg rounded-md z-50 p-2">
                            <Link
                                href="/login/AdminLogin"
                                className="block px-4 py-2 font-bold text-[#6F0C15] hover:bg-[#6F0C15] hover:text-white"
                            >
                                Admin Login
                            </Link>
                            <Link
                                href="/login/AgentLogin"
                                className="block px-4 py-2 font-bold text-[#6F0C15] hover:bg-[#6F0C15] hover:text-white"
                            >
                                Agent Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full h-px bg-[#6F0C15] my-1"></div>
        </div>
    );
}
