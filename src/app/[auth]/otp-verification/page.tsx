'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import BackSign from '@/components/BacksignHeader/BacksignHeader';

const CODE_LENGTH = 4;

const VerificationCode: React.FC = () => {
    const [code, setCode] = useState<string[]>(Array(CODE_LENGTH).fill(''));
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const searchParams = useSearchParams();
    const type = searchParams.get('type'); // "register" or "forgot"
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

    const handleVerify = async () => {
        const otp = code.join('');
        let endpoint = '';
        let payload: any = { otp };

        if (type === 'register') {
            endpoint = 'https://avetiumbackupservice.avetiumconsult.com/api/auth/otp/verify/';
        } else if (type === 'forgot') {
            endpoint = 'https://avetiumbackupservice.avetiumconsult.com/api/auth/otp/reset-password/';
            payload.email = email;
        } else {
            setError('Invalid flow type');
            return;
        }

        console.log('Verifying OTP with:', { endpoint, payload });

        try {
            setLoading(true);
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            console.log('Response status:', res.status);
            console.log('Response body:', data);

            if (res.ok) {
                if (type === 'register') {
                    router.push('/dashboard/admin');
                } else if (type === 'forgot') {
                    router.push(`/auth/newpasswordCreation?email=${encodeURIComponent(email || '')}`);
                }
            } else {
                setError(data.message || JSON.stringify(data) || 'OTP verification failed');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-8">
            <BackSign />
            <div className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-2xl mt-4">
                <Link href={type === 'register' ? '/signup' : '/auth/forgot-password'}>
                    <button className="text-sm mb-4 flex items-center text-[#6F0C15] cursor-pointer">
                        <span className="mr-2">&larr;</span> Back
                    </button>
                </Link>
                <h2 className="text-xl font-semibold text-center mb-2 text-[#6F0C15]">Verification Code</h2>
                <p className="text-gray-500 text-center mb-6 text-sm">
                    We have sent the verification code to your email address
                </p>
                <div className="flex justify-center gap-4 mb-6">
                    {Array.from({ length: CODE_LENGTH }).map((_, idx) => (
                        <input
                            key={idx}
                            ref={(el) => {
                                inputsRef.current[idx] = el;
                            }}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={code[idx]}
                            onChange={(e) => handleChange(e.target.value, idx)}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                            className="w-12 h-12 text-center text-2xl border border-[#6F0C15] rounded-2xl focus:outline-[#6F0C15]"
                        />
                    ))}
                </div>
                <button
                    onClick={handleVerify}
                    className="w-full bg-[#6F0C15] text-white py-3 rounded-lg font-semibold mb-4 cursor-pointer"
                    disabled={loading || code.some((val) => !val)}
                >
                    {loading ? 'Verifying...' : 'Next'}
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