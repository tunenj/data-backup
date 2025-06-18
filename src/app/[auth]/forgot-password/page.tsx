'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BacksignHeader from "@/components/BacksignHeader/BacksignHeader";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSendResetLink = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://avetiumbackupservice.avetiumconsult.com/api/auth/forget-password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Pass type=forgot and email to the OTP page
        router.push(`/auth/otp-verification?type=forgot&email=${encodeURIComponent(email)}`);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-8">
      <BacksignHeader />
      <div className="bg-white flex flex-col items-center justify-center mt-[14rem]">
        <div className="flex flex-col items-center w-[40rem] h-[26rem] justify-center border-gray-300 bg-white rounded-2xl border-2 mt-[-12rem]">
          <div className="w-12 h-12 bg-gray-400 flex items-center justify-center rounded-full">
            <Image src="/icons/icon.png" alt="icon" width={24} height={24} />
          </div>
          <h2 className="text-2xl font-semibold mt-4">Forgot Password</h2>
          <p className="text-gray-600 text-sm mt-1">
            No worries, we&apos;ll send you reset instructions.
          </p>

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

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
                onChange={(e) => setEmail(e.target.value)}
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
