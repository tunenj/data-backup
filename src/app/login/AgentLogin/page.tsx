import Image from "next/image";
import Link from "next/link";

export default function LoginPage({
  logoSrc = "/images/logo.png",
  Arrow = "/icons/Arrow.png",
  Infos = "/images/Infos.png",
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:px-20">
      <div className="flex justify-between items-start px-4 md:px-12 pt-6 md:pt-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Avetium Technologies"
            width={140}
            height={32}
            priority
          />
        </Link>
        {/* Sign-in as Admin Button */}
        <div className="relative mt-2 md:mt-0">
          <Link
            href="/login/AdminLogin"
            className="inline-flex items-center text-sm font-medium text-[#6F0C15] border border-[#6F0C15] rounded-md px-6 py-2 pr-6 bg-white"
          >
            Sign-in as Admin
          </Link>
          <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#6F0C15] rounded-full flex items-center justify-center shadow-md">
            <Image
              src={Arrow}
              alt="Arrow"
              width={16}
              height={16}
              className="text-white"
            />
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row justify-between items-start px-4 md:px-9 pt-6 md:pt-8 gap-8">
        {/* Login Form */}
        <div className="w-full md:max-w-md lg:w-[45rem] h-[30rem] border border-gray-400 rounded-lg px-6">
          <h2 className="text-center text-xl font-semibold mb-8 lg:mt-6">
            Agent Sign In
          </h2>
          <form className="space-y-6">
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-[#6F0C15] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6F0C15] text-sm"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
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
              <Link
                href="/auth/forgot-password"
                className="text-sm text-blue-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6F0C15] text-white font-semibold py-2 rounded-md mt-2 hover:bg-[#4e0910] transition cursor-pointer"
            >
              Next
            </button>
          </form>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm gap-2">
            <span>
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up
              </Link>
            </span>
            <Link
              href="/about-signin"
              className="text-gray-500 hover:underline cursor-pointer"
            >
              Learn more about signing in
            </Link>
          </div>
        </div>

        {/*  Card */}
        <div className="w-full md:max-w-xl md:ml-16">
          <div className="rounded-lg border border-[#6F0C15] overflow-hidden bg-white shadow-sm p-2">
            <div className="h-48 md:h-[20rem] w-full relative">
              <Image
                src={Infos}
                alt="info"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-5">
              <div className="font-semibold text-[#6F0C15] text-lg mb-2">
                Did You Know?
              </div>
              <div className="text-sm text-[#6F0C15] mb-2">
                Company name got your workloads covered - cloud, on-prem,
                remote sites, and everything else in between. Our Zero Trust
                principles are baked into every backup, ensuring your data is
                protected and ready for recovery.
              </div>
              <button className="w-full border border-[#6F0C15] text-white bg-[#6F0C15] rounded-md lg:px-4 py-2 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
