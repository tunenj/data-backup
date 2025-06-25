'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";


export default function AgentLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://avetiumbackupservice.avetiumconsult.com/api/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Login API response:", result);

      if (response.ok) {
        const { access, refresh, token } = result;

        // Store tokens in cookies
        if (access) document.cookie = `accessToken=${access}; path=/; max-age=3600; Secure; SameSite=Lax`;
        if (refresh) document.cookie = `refreshToken=${refresh}; path=/; max-age=86400; Secure; SameSite=Lax`;
        if (token) document.cookie = `sessionToken=${token}; path=/; max-age=3600; Secure; SameSite=Lax`;

        setTimeout(() => {
          router.push("/dashboard/agent");
        }, 100);
      } else {
        setError(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:px-20">
      {/* Header */}
      <div className="flex justify-between items-start px-4 md:px-12 pt-6 md:pt-8">
        <Link href="/">
          <Image src="/images/logo.png" alt="Avetium Technologies" width={140} height={32} priority />
        </Link>
        <div className="relative mt-2 md:mt-0">
          <Link href="/login/AdminLogin" className="inline-flex items-center text-sm font-medium text-[#6F0C15] border border-[#6F0C15] rounded-md px-6 py-2 bg-white">
            Sign-in as Admin
          </Link>
          <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#6F0C15] rounded-full flex items-center justify-center shadow-md">
            <Image src="/icons/Arrow.png" alt="Arrow" width={16} height={16} />
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 justify-between items-start px-4 md:px-9 pt-6 md:pt-4 gap-8">
        {/* Login Form */}
        <div className="w-full md:max-w-md lg:w-[42rem] h-[30rem] border border-gray-400 rounded-lg px-6">
          <h2 className="text-center text-xl font-semibold mb-8 text-gray-600 lg:mt-6 pt-2">Agent Sign In</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 font-medium mb-1">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-[#6F0C15] rounded-md px-3 placeholder-gray-600 text-gray-600 py-2 focus:outline-none focus:ring-2 focus:ring-[#6F0C15] text-sm"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-sm text-gray-600 font-medium mb-1">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-[#6F0C15] rounded-md px-3 placeholder-gray-600 text-gray-600 py-2 focus:outline-none focus:ring-2 focus:ring-[#6F0C15] text-sm pr-10"
                required
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-gray-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>} {/* Display error message */}

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 accent-[#6F0C15]" />
                Remember me?
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-blue-700 hover:underline">Forgot Password?</Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#6F0C15] text-white font-semibold py-2 rounded-md mt-2 hover:bg-[#4e0910] transition cursor-pointer ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Logging in..." : "Next"}
            </button>
          </form>

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm gap-2">
            <span className="text-gray-600">
              Don&#39;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 hover:underline font-medium">Sign up</Link>
            </span>
            <Link href="/about-signin" className="text-gray-500 hover:underline">Learn more about signing in</Link>
          </div>
        </div>

        {/* Info Card */}
        <div className="w-full md:max-w-xl">
          <div className="rounded-lg border border-[#6F0C15] overflow-y-hidden bg-white shadow-sm p-2">
            <div className="h-48 md:h-[19rem] w-full relative">
              <Image src="/images/Info.png" alt="info" fill style={{ objectFit: "cover" }} />
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
