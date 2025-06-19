'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from "lucide-react";
import BackSign from '@/components/BacksignHeader/BacksignHeader';

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
    companyName: '',
    jobTitle: '',
    sector: '',
    country: '',
    stateProvince: '',
    agreeToTerms: false
  });

  const password = formData.password;
  const requirements = useMemo(() => [
    { label: "Must be at least 8 characters", valid: password.length >= 8 },
    { label: "At least one Uppercase letter (A-Z)", valid: /[A-Z]/.test(password) },
    { label: "At least one number", valid: /\d/.test(password) },
    { label: "At least one special character (!@#$%^&*)", valid: /[!@#$%^&*]/.test(password) },
  ], [password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';

    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const passwordValid = requirements.every(r => r.valid);
    if (!passwordValid) {
      alert("Password does not meet all requirements.");
      return;
    }

    if (formData.password !== formData.password2) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      username: formData.email,
      email: formData.email,
      phone_number: formData.phone,
      password: formData.password,
      password2: formData.password2,
      agreement: formData.agreeToTerms,
      organization: {
        name: formData.companyName,
        job_title: formData.jobTitle,
        sector: formData.sector,
        state: formData.stateProvince,
        country: formData.country
      }
    };

    try {
      const response = await fetch('https://avetiumbackupservice.avetiumconsult.com/api/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      const data = await response.json();
      console.log("Signup success:", data);

      if (response.ok) {
        router.push(`/auth/otp-verification?email=${encodeURIComponent(formData.email)}&type=register`);
      } else {
        alert(JSON.stringify(data));
      }
    } catch (error: unknown) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        alert("Request timed out. Please check your connection.");
      } else {
        alert("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackSign />
      <div className="bg-white min-h-screen flex flex-col sm:text-gray-500 px-8">
        <div className="min-h-screen flex flex-col px-8 py-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Let&#39;s set you up!</h1>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white  p-6 rounded shadow">
            <div className="flex gap-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="w-1/2 border border-[#6F0C15] p-2 rounded"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="w-1/2 border border-[#6F0C15] p-2 rounded"
              />
            </div>

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Business Email"
              className="w-full border border-[#6F0C15] p-2 rounded"
            />
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full border border-[#6F0C15] p-2 rounded"
            />

            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full border border-[#6F0C15] p-2 rounded pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
              {isFocused && (
                <ul className="mt-2 text-sm space-y-1">
                  {requirements.map((req, i) => (
                    <li key={i} className={req.valid ? 'text-green-600' : 'text-red-600'}>
                      {req.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              name="password2"
              type={showPassword ? "text" : "password"}
              value={formData.password2}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              className="w-full border border-[#6F0C15] p-2 rounded"
            />

            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="Company Name"
              className="w-full border border-[#6F0C15] p-2 rounded"
            />

            <div className="flex gap-4">
              <input
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                placeholder="Job Title"
                className="w-1/2 border border-[#6F0C15] p-2 rounded"
              />
              <input
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                required
                placeholder="Sector (e.g. FinTech)"
                className="w-1/2 border border-[#6F0C15] p-2 rounded"
              />
            </div>

            <div className="flex gap-4">
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                placeholder="Country"
                className="w-1/2 border border-[#6F0C15] p-2 rounded"
              />
              <input
                name="stateProvince"
                value={formData.stateProvince}
                onChange={handleChange}
                required
                placeholder="State/Province"
                className="w-1/2 border border-[#6F0C15] p-2 rounded"
              />
            </div>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="h-4 w-4"
              />
              <span className="text-sm">I agree to the Terms and Privacy Policy</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded font-semibold ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#6F0C15] text-white'}`}
            >
              {loading ? 'Submitting...' : 'Next'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
