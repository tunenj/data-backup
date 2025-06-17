'use client';

import { useRouter } from 'next/navigation';
import BackSign from '@/components/BacksignHeader/BacksignHeader';
import Image from 'next/image';

export default function CheckEmail() {
  const router = useRouter();

  const handleOpenEmail = () => {
    // Simulate clicking the link in email by redirecting to NewPassword page with token
    router.push('/auth/newpasswordCreation?token=demo-token-123');
  };

  return (
    <div className='min-h-screen px-8'>
      <BackSign />
      <div className="flex items-center justify-center bg-white mt-[14rem]">
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full h-[26rem] flex flex-col border-gray-300 border-2 items-center mt-[-12rem]">
          <div className="w-12 h-12 bg-gray-400 flex items-center justify-center rounded-full mb-6">
            <Image
              src="/icons/mailicon.png"
              alt="Email icon"
              width={24}
              height={24}
            />
          </div>

          <h2 className="text-2xl font-bold text-center mb-1">Check your email</h2>
          <p className="text-gray-600 text-center mb-6 text-sm">
            We sent a reset link to <br />
            <span className="font-medium">email@email.com</span>
          </p>

          <button
            onClick={handleOpenEmail}
            className="w-full bg-[#6F0C15] hover:bg-[#6F0C15] text-white font-semibold py-3 rounded-md mb-6 transition cursor-pointer"
          >
            Open Email app
          </button>

          <div className="w-full flex justify-between items-center text-sm">
            <span className="text-gray-400">Didn't receive email?</span>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Click to resend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
