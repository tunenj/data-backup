'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface Props {
  logoSrc?: string;
  Arrow?: string;
  Info?: string;
}

export default function AdminLogin({
  logoSrc = "/images/logo.png",
  Arrow = "/icons/Arrow.png",
  Info = "/images/Info.png",
}: Props) {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/dashboard/admin");
      } else {
        alert(result.message || "Login failed");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:px-20">
      {/* Header */}
      <div className="flex justify-between items-start px-4 md:px-12 pt-6 md:pt-8">
        <Link href="/">
          <Image src={logoSrc} alt="Avetium Technologies" width={140} height={32} priority />
        </Link>
        <div className="relative mt-2 md:mt-0">
          <Link href="/login/AgentLogin" className="inline-flex items-center text-sm font-medium text-[#6F0C15] border border-[#6F0C15] rounded-md px-6 py-2 bg-white">
            Sign-in as Agent
          </Link>
          <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#6F0C15] rounded-full flex items-center justify-center shadow-md">
            <Image src={Arrow} alt="Arrow" width={16} height={16} />
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 justify-between items-start px-4 md:px-9 pt-6 md:pt-8 gap-8">
        {/* Login Form */}
        <div className="w-full md:max-w-md lg:w-[45rem] h-[30rem] border border-gray-400 rounded-lg px-6">
          <h2 className="text-center text-xl font-semibold mb-8 lg:mt-6">Admin Sign In</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-[#6F0C15] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6F0C15] text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-[#6F0C15] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6F0C15] text-sm"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2 accent-[#6F0C15]" />
                Remember me?
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-blue-700 hover:underline">Forgot Password?</Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#6F0C15] text-white font-semibold py-2 rounded-md mt-2 hover:bg-[#4e0910] transition cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {loading ? "Logging in..." : "Next"}
            </button>
          </form>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm gap-2">
            <span>
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline font-medium">Sign up</Link>
            </span>
            <Link href="/about-signin" className="text-gray-500 hover:underline">Learn more about signing in</Link>
          </div>
        </div>

        {/* Info Card */}
        <div className="w-full md:max-w-xl">
          <div className="rounded-lg border border-[#6F0C15] overflow-hidden bg-white shadow-sm p-2">
            <div className="h-48 md:h-[20rem] w-full relative">
              <Image src={Info} alt="info" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="p-5">
              <div className="font-semibold text-[#6F0C15] text-lg mb-2">Did You Know?</div>
              <div className="text-sm text-[#6F0C15] mb-2">
                Company name got your workloads covered - cloud, on-prem, remote sites, and everything else in between. Our Zero Trust principles are baked into every backup, ensuring your data is protected and ready for recovery.
              </div>
              <button className="w-full border border-[#6F0C15] text-white bg-[#6F0C15] rounded-md py-2 font-medium cursor-pointer">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
