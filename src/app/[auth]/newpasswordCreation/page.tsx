'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import BackSign from '@/components/BacksignHeader/BacksignHeader';

export default function NewPassword() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const otp = searchParams.get('otp');

    const icon = "/icons/icon.png";
    const iconImage = "/icons/iconImage.png";

    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

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
        if (!password || !email || !otp) {
            return setMessage("Missing information.");
        }

        const passwordValid = requirements.every(req => req.valid);
        if (!passwordValid) {
            return setMessage("Password does not meet all requirements.");
        }

        try {
            setLoading(true);
            const res = await fetch('https://avetiumbackupservice.avetiumconsult.com/api/auth/otp/reset-password/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    otp,
                    new_password: password,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/auth/resetSuccess');
            } else {
                setMessage(data.message || "Password reset failed.");
            }
        } catch {
            setMessage("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='h-screen px-8'>
            <BackSign />
            <div className="flex flex-col items-center justify-center bg-white px-4 md:px-8 mt-6">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full max-w-6xl">
                    <div className="w-full max-w-md border border-gray-300 rounded-lg shadow-md p-6 overflow-y-auto">
                        <div className="w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full mx-auto mb-4">
                            <Image src={icon} alt="Avetium Technologies" width={24} height={24} priority />
                        </div>

                        <h2 className="text-xl font-bold mb-4 text-gray-600 text-center">Create New Password</h2>

                        {message && <p className="text-red-500 text-sm mb-3">{message}</p>}

                        <label className="block text-sm font-semibold text-gray-600 mb-1">New Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full mb-2 p-2 border rounded-xl placeholder-gray-600 border-[#6F0C15]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <ul className="text-sm text-gray-600 mb-4 pl-5 list-disc space-y-1">
                            {requirements.map((req, idx) => (
                                <li key={idx} className={req.valid ? "text-green-600" : "text-red-500"}>
                                    {req.label}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={handleReset}
                            disabled={loading}
                            className="w-full bg-[#6F0C15] text-white py-2 rounded-xl hover:bg-[#5a0a11] cursor-pointer"
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </div>

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
    );
}
