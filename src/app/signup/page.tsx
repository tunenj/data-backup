"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { colors } from '@/utils/colors';
import { Eye, EyeOff } from "lucide-react";
import BackSign from '@/components/BacksignHeader/BacksignHeader';



export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    companyName: '',
    jobTitle: '',
    sector: '',
    country: '',
    stateProvince: '',
    agreeToTerms: false
  });

  const password = formData.password;

  const requirements = [
    { label: "Must be at least 8 characters", valid: password.length >= 8 },
    { label: "At least one Uppercase letter (A-Z)", valid: /[A-Z]/.test(password) },
    { label: "At least one number", valid: /\d/.test(password) },
    { label: "At least one special character (!@#$%^&*)", valid: /[!@#$%^&*]/.test(password) },
  ];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const passwordValid = requirements.every(r => r.valid);

    if (!passwordValid) {
      alert("Password does not meet all requirements.");
      return;
    }

    console.log(formData);
    router.push('/auth/otp-verification');
  };


  return (
    <div className="min-h-screen flex flex-col px-8">
      <BackSign />
      {/* Main Form Content */}
      <div className="flex-grow flex items-center justify-center mt-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-7">Let's set you up!</h1>

          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Section - Stacked layout */}
              <div className="flex space-x-4">
                {/* First Name */}
                <div className="">
                  <label className="block font-poppins font-medium text-base leading-[16px] tracking-normal">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    placeholder="First Name"
                    className="mt-1 block w-full lg:w-[14.5rem] lg:h-[2.5rem] border border-[#6F0C15] rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                {/* Last Name */}
                <div className="">
                  <label className="block font-poppins font-medium text-base leading-[16px] tracking-normal">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    placeholder="Last Name"
                    className="mt-1 block w-full border lg:w-[14.5rem] border-[#6F0C15] rounded-md shadow-sm py-2 px-3"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="pt-2">
                <h2 className="font-poppins font-medium text-base leading-[16px] tracking-normal">Business E-mail</h2>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="mt-1 block w-full lg:w-[30rem] lg:h-[3rem] border border-[#6F0C15] rounded-md shadow-sm py-2 px-3"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="pt-2">
                <h2 className="font-poppins font-medium text-base leading-[16px] tracking-normal">Phone Number</h2>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="mt-1 block w-full border lg:w-[30rem] lg:h-[3rem] border-[#6F0C15] rounded-md shadow-sm py-2 px-3"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="relative pt-2">
                <h2 className="font-poppins font-medium text-base leading-[16px] tracking-normal">Password</h2>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  className="mt-1 block w-full border lg:w-[30rem] lg:h-[3rem] border-[#6F0C15] rounded-md shadow-sm py-2 px-3 pr-10"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute px-[27rem] top-[61%] transform -translate-y-1/2 cursor-pointer text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </span>

                {/* Password Strength Box */}
                {isFocused && (
                  <div className="absolute z-10 mt-2 w-full max-w-md rounded-md border border-gray-300 bg-white shadow-lg p-4 text-sm text-gray-700">
                    <p className="font-semibold mb-2">
                      {requirements.every(r => r.valid) ? "Strong" : "Weak"}
                    </p>
                    <ul className="space-y-1">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          {req.valid ? (
                            <span className="text-green-500">✔</span>
                          ) : (
                            <span className="text-red-500">✖</span>
                          )}
                          <span className={req.valid ? "text-gray-700" : "text-gray-400"}>
                            {req.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <h2 className="font-poppins font-medium  text-base leading-[16px] tracking-normal">Company Name</h2>
                <input
                  name="companyName"
                  type="text"
                  required
                  placeholder="Company name"
                  className="mt-1 block w-full border lg:w-[30rem] lg:h-[3rem] border-[#6F0C15] rounded-md shadow-sm py-2 px-3"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex space-x-4">
                {/* First Name */}
                <div className="">
                  <label className="block font-poppins font-medium text-base leading-[16px] tracking-normal">
                    Job Title
                  </label>
                  <input
                    name="jobTitle"
                    type="text"
                    required
                    placeholder="Job Title"
                    className="mt-1 block w-full lg:w-[14.5rem] lg:h-[2.5rem] border border-[#6F0C15] rounded-md shadow-sm py-2 px-3"
                    value={formData.jobTitle}
                    onChange={handleChange}
                  />
                </div>

                {/* Last Name */}
                <div className="">
                  <label className="block font-poppins font-medium lg:text-sm text-base leading-[16px] tracking-normal">
                    Sector (Oil  &  Gas, FinTech, He...)
                  </label>
                  <input
                    name="sector"
                    type="text"
                    required
                    placeholder="sector"
                    className="mt-1 block w-full border lg:w-[14.5rem] lg:h-[2.5rem] border-[#6F0C15] rounded-md shadow-sm py-2 px-3"
                    value={formData.sector}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                {/* First Name */}
                <div className="">
                  <label className="block font-poppins font-medium text-base leading-[16px] tracking-normal">
                    Country
                  </label>
                  <input
                    name="country"
                    type="text"
                    required
                    placeholder="Country"
                    className="mt-1 block w-full lg:w-[14.5rem] lg:h-[2.5rem] border border-[#6F0C15] rounded-md shadow-sm py-2 px-3"
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>

                {/* Last Name */}
                <div className="">
                  <label className="block font-poppins font-medium text-base leading-[16px] tracking-normal">
                    State/Province
                  </label>
                  <input
                    name="stateProvince"
                    type="text"
                    required
                    placeholder="State"
                    className="mt-1 block w-full border lg:w-[14.5rem] border-[#6F0C15] rounded-md shadow-sm py-2 px-3"
                    value={formData.stateProvince}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start pt-6">
                <div className="flex items-center h-5">
                  <input
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-[#6F0C15] rounded"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                </div>

                <div className="ml-3 text-sm">
                  <label className="font-medium text-gray-700">
                    By clicking this you are agreeing to Avetium Technologies Terms and conditions and privacy policy.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="lg:w-[30rem] w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white cursor-pointer"
                  style={{ backgroundColor: colors.primary }}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}