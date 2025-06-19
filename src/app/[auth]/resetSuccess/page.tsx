'use client';

import BackSign from '@/components/BacksignHeader/BacksignHeader';
import Image from 'next/image';

export default function PasswordResetSuccess() {
    const successIcon = "/icons/successicon.png";

    return (
        <div className='min-h-screen px-8'>
            <BackSign />
            <div className="flex items-center justify-center bg-white mt-6">
                <div className="bg-white rounded-2xl text-2xl w-[40rem] h-[26rem] shadow-2xl p-8 max-w-md flex flex-col items-center">
                    <Image
                        src={successIcon}
                        alt="Success"
                        width={48}
                        height={48}
                        className="mb-4 rounded-full bg-green-100 mt-12 p-2"
                    />
                    <h2 className="text-2xl font-normal mb-2 text-center">Password Reset</h2>
                    <p className="font-[Poppins] font-normal text-[16px] leading-[30px] tracking-[-0.02em] text-center mb-6">
                        Your Password has been successfully reset.<br />
                        Click Below to log in
                    </p>
                    <button
                        onClick={() => window.location.href = '/login/AdminLogin'}
                        className="bg-[#6F0C15] text-white font-[Poppins] py-4 px-24 font-medium text-[20px] rounded-xl leading-[16px] tracking-[0em] cursor-pointer"
                    >
                        Continue to Login
                    </button>
                </div>
            </div>
        </div>
    );
}
