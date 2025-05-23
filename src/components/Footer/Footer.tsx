import Image from "next/image";
import { colors } from "@/utils/colors";
import { ProductArray } from '@/constants/footerMenu';
import { ResourcesArray } from '@/constants/footerMenu';
import { CompanyArray } from '@/constants/footerMenu';
import { LegalArray } from '@/constants/footerMenu';
import { PolicyArray } from '@/constants/footerMenu';
import { socialIcons } from '@/constants/socialIcons';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white pt-10 pb-5 px-4 md:px-16 w-90rem h-264rem"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo & Socials */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="mb-12">
            <Link href="/">
            <Image src="/images/logo2.png" alt="Avetium Logo" width={250} height={64} />
            </Link>
          </div>
          <div className="flex gap-6 mb-6"> {/* smaller gap for mobile */}
            {socialIcons.map((icon, index) => (
              <a href={icon.href} key={index} className="inline-block w-9 h-9">
                <Image src={icon.src} alt={icon.alt} width={36} height={36} />
              </a>
            ))}
          </div>
          <form className="flex mb-3 mt-14 max-w-md">
            <input
              type="email"
              placeholder="Enter E-mail"
              className="rounded-l-md px-4 py-2 text-white text-sm outline-1 outline-white flex-grow min-w-0"
            />
            <button
              type="submit"
              className="bg-white font-semibold px-6 py-2 rounded-r-md text-sm"
              style={{ color: colors.primary }}
            >
              Submit
            </button>
          </form>
          <p className="font-poppins font-normal text-base leading-none tracking-wide mt-6 max-w-md">
            By subscribing, you are agreeing to receive information
            about Avetium Technologies products and events and to have your personal
            information managed in accordance with the terms of Avetium Technologies{' '}
            <a href="#" className="underline">Privacy Policy</a>. You can unsubscribe at any time.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {/* Product */}
          <div>
            <h4 className="font-poppins font-bold text-base leading-none tracking-normal mb-6 md:mb-8">Product</h4>
            <ul className="space-y-6 md:space-y-8 font-poppins font-normal text-base leading-none tracking-normal">
              {ProductArray.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="font-poppins font-bold text-base leading-none tracking-normal mb-6 md:mb-8">Resources</h4>
            <ul className="space-y-6 md:space-y-8 font-poppins font-normal text-base leading-none tracking-normal">
              {ResourcesArray.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h4 className="font-poppins font-bold text-base leading-none tracking-normal mb-6 md:mb-8">Company</h4>
            <ul className="space-y-6 md:space-y-8 font-poppins font-normal text-base leading-none tracking-normal">
              {CompanyArray.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-poppins font-bold text-base leading-none tracking-normal mb-6 md:mb-8">Legal</h4>
            <ul className="space-y-6 md:space-y-8 font-poppins font-normal text-base leading-none tracking-normal">
              {LegalArray.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-end items-center text-xs text-gray-200 gap-2 mt-10">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-sm text-white max-w-full">
          <span>©2025 Avetium Technologies</span>
          {PolicyArray.map((item, index) => (
            <span key={index} className="whitespace-nowrap">
              <span className="mx-3">|</span>
              <a href={item.url} className="underline hover:text-gray-300">
                {item.title}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
