'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { colors } from '../../utils/colors';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/constants/Navbar';

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard') ?? false;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [signInOpen, setSignInOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close SignIn dropdown on outside click
  useEffect(() => {
    const handler = (e: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setSignInOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 
        flex items-center justify-between 
        backdrop-blur-md transition-all duration-300
        ${isDashboard ? 'text-white bg-black/30 shadow-lg' : 'text-gray-800 bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative w-[10rem] sm:w-[12rem] h-[3rem] sm:h-[3.5rem]">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:space-x-8 md:text-[18px] md:font-semibold mt-2">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:underline transition"
              style={{ color: colors.primary }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/signup">
            <button
              style={{ color: colors.primary }}
              className="bg-transparent border-white w-[100px] h-[40px] font-bold border-2 rounded-xl cursor-pointer"
            >
              Register
            </button>
          </Link>

          {/* Sign in Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setSignInOpen(true)}
            onMouseLeave={() => setSignInOpen(false)}
          >
            <button
              onClick={() => setSignInOpen(prev => !prev)}
              style={{ backgroundColor: colors.primary }}
              className="text-white w-[100px] h-[40px] font-bold rounded-xl cursor-pointer"
            >
              Sign in
            </button>

            {signInOpen && (
              <div className="absolute right-0 mt-2 w-[12rem] bg-white border-1 px-2 border-[#6F0C15] rounded-lg shadow-lg z-50">
                <Link href="/login/AdminLogin" onClick={() => setSignInOpen(false)}>
                  <div className="px-4 py-2 text-[#6F0C15] cursor-pointer hover:bg-[#6F0C15] hover:text-white hover:border-2 hover:rounded-lg hover:mt-2">
                    Admin Sign in
                  </div>
                </Link>
                <Link href="/login/AgentLogin" onClick={() => setSignInOpen(false)}>
                  <div className="px-4 py-2  text-[#6F0C15] cursor-pointer hover:bg-[#6F0C15] hover:text-white hover:rounded-lg hover:mb-2">
                    Agent Sign in
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" style={{ color: colors.primary }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: colors.primary }} />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black text-white px-4 py-6 z-40">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium"
                  style={{ color: colors.primary }}
                >
                  {link.label}
                </Link>
              ))}

              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                <button
                  style={{ borderColor: colors.primary }}
                  className="bg-transparent text-white font-medium border-2 px-4 py-2 rounded-md"
                >
                  Register
                </button>
              </Link>

              {/* Sign in options (Mobile) */}
              <div className="flex flex-col space-y-2">
                <Link href="/AgentLogin" onClick={() => setMenuOpen(false)}>
                  <button
                    style={{ backgroundColor: colors.primary }}
                    className="text-white font-medium px-4 py-2 rounded-md"
                  >
                    Agent
                  </button>
                </Link>
                <Link href="/AdminLogin" onClick={() => setMenuOpen(false)}>
                  <button
                    style={{ backgroundColor: colors.primary }}
                    className="text-white font-medium px-4 py-2 rounded-md"
                  >
                    Admin
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
