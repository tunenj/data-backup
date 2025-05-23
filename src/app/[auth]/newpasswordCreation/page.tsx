'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import BackSign from '@/components/BacksignHeader/BacksignHeader';

export default function NewPassword({ icon = "/icons/icon.png", iconImage = "/icons/iconImage.png" }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const token = searchParams.get('token');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const [requirements, setRequirements] = useState([
        { label: 'At least 8 characters', valid: false },
        { label: 'At least one uppercase letter', valid: false },
        { label: 'At least one lowercase letter', valid: false },
        { label: 'At least one number', valid: false },
        { label: 'At least one special character (!@#$%^&*)', valid: false },
    ]);

    useEffect(() => {
        const validations = [
            { label: 'At least 8 characters', valid: password.length >= 8 },
            { label: 'At least one uppercase letter', valid: /[A-Z]/.test(password) },
            { label: 'At least one lowercase letter', valid: /[a-z]/.test(password) },
            { label: 'At least one number', valid: /[0-9]/.test(password) },
            { label: 'At least one special character (!@#$%^&*)', valid: /[!@#$%^&*]/.test(password) },
        ];
        setRequirements(validations);
    }, [password]);

    const handleReset = async () => {
        if (!password || !confirmPassword) {
            return setMessage("Please fill all fields");
        }

        const passwordValid = requirements.every(req => req.valid);
        if (!passwordValid) {
            return setMessage("Password does not meet all requirements");
        }

        if (password !== confirmPassword) {
            return setMessage("Passwords do not match");
        }

        try {
            // ... your API call here
            router.push('/auth/resetSuccess'); 
        } catch (err) {
            setMessage("Something went wrong");
        }
    };

    return (
        <div className='h-screen px-8'>
            <BackSign />
            <div className="flex flex-col items-center justify-center bg-white px-4 md:px-8  mt-6">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full max-w-6xl">
                    {/* Form Card */}
                    <div className="w-full max-w-md border border-gray-300 rounded-lg shadow-md p-6 overflow-y-auto">
                        {/* Logo */}
                        <div className="w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full mx-auto mb-4">
                            <Image src={icon} alt="Avetium Technologies" width={24} height={24} priority />
                        </div>

                        <h2 className="text-xl font-bold mb-4 text-center">Create New Password</h2>

                        {message && <p className="text-red-500 text-sm mb-3">{message}</p>}

                        {/* Password Field */}
                        <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full mb-2 p-2 border rounded-xl border-[#6F0C15]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Requirements */}
                        <ul className="text-sm text-gray-600 mb-4 pl-5 list-disc space-y-1">
                            {requirements.map((req, idx) => (
                                <li key={idx} className={req.valid ? "text-green-600" : "text-red-500"}>
                                    {req.label}
                                </li>
                            ))}
                        </ul>

                        {/* Confirm Field */}
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full mb-4 p-2 border rounded-xl border-[#6F0C15]"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button
                            onClick={handleReset}
                            className="w-full bg-[#6F0C15] text-white py-2 rounded-xl hover:bg-[#5a0a11] cursor-pointer"
                        >
                            Reset Password
                        </button>
                    </div>

                    {/* Image (hidden on small screens) */}
                    <div className="hidden md:block">
                        <Image
                            src={iconImage}
                            alt="Avetium Technologies"
                            width={350}
                            height={480}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
