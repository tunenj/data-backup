'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import BackSign from '@/components/BacksignHeader/BacksignHeader';

const CODE_LENGTH = 4;

const VerificationCode: React.FC = () => {
    const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''));
    const [error, setError] = useState<string | null>(null);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const router = useRouter();

    const handleChange = (value: string, idx: number) => {
        if (!/^[0-9]?$/.test(value)) return;
        const newCode = [...code];
        newCode[idx] = value;
        setCode(newCode);
        if (value && idx < CODE_LENGTH - 1) {
            inputsRef.current[idx + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
        if (e.key === 'Backspace' && !code[idx] && idx > 0) {
            inputsRef.current[idx - 1]?.focus();
        }
    };

    const handleNext = () => {
        const otp = code.join('');
        if (code.some((digit) => digit === '')) {
            setError('Please complete the OTP');
            return;
        }

        if (!email) {
            setError('Missing email');
            return;
        }

        // ✅ Navigate to password page with email and otp
        router.push(`/auth/newpasswordCreation?email=${encodeURIComponent(email)}&otp=${otp}`);
    };

    return (
        <div className="px-8">
            <BackSign />
            <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-2xl mt-4">
                <Link href="/auth/forgot-password">
                    <button className="text-sm mb-4 flex items-center text-[#6F0C15] cursor-pointer">
                        <span className="mr-2">&larr;</span> Back
                    </button>
                </Link>
                <h2 className="text-xl font-semibold text-center mb-2 text-[#6F0C15]">Verification Code</h2>
                <p className="text-gray-500 text-center mb-6 text-sm">
                    We have sent a verification code to your email address.
                </p>
                <div className="flex justify-center gap-4 mb-6">
                    {Array.from({ length: CODE_LENGTH }).map((_, idx) => (
                        <input
                            key={idx}
                            ref={(el) => { (inputsRef.current[idx] = el) }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={code[idx]}
                            onChange={(e) => handleChange(e.target.value, idx)}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                            className="w-12 h-12 text-center text-2xl border border-[#6F0C15] text-gray-600 rounded-2xl focus:outline-[#6F0C15]"
                        />
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="w-full bg-[#6F0C15] text-white py-3 rounded-lg font-semibold mb-4 cursor-pointer"
                    disabled={code.some((val) => !val)}
                >
                    Next
                </button>
                {error && (
                    <p className="text-red-500 text-center text-sm mb-4">{error}</p>
                )}
                <div className="text-center text-sm text-gray-500">
                    Didn&apos;t get the email?{' '}
                    <button className="text-[#0377BFEB] cursor-pointer">Send Again</button>
                </div>
            </div>
        </div>
    );
};

export default VerificationCode;
