"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1E3E2D] text-[#FFFFFF] shadow-xl border-b-4 border-[#00A859]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#00A859] rounded-xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-all duration-300">
              <span className="text-[#FFFFFF] font-black text-xl">⚖</span>
            </div>
            <div>
              <h1 className="font-black text-2xl tracking-tight">Digital Governance Hub</h1>
              <p className="text-[#00A859] text-sm font-semibold">
                Legal Compliance & Transparency
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="relative group">
              <span className="hover:text-[#00A859] transition-colors font-semibold">Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A859] group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link href="/dashboard" className="relative group">
              <span className="hover:text-[#00A859] transition-colors font-semibold">Dashboard</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A859] group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link href="/report" className="relative group">
              <span className="hover:text-[#00A859] transition-colors font-semibold">Report Issues</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A859] group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link href="/transparency" className="relative group">
              <span className="hover:text-[#00A859] transition-colors font-semibold">Transparency</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A859] group-hover:w-full transition-all duration-300"></div>
            </Link>

            <Link href="/services" className="relative group">
              <span className="hover:text-[#00A859] transition-colors font-semibold">Services</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00A859] group-hover:w-full transition-all duration-300"></div>
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-6 py-2.5 border-2 border-[#00A859] text-[#00A859] rounded-md hover:bg-[#00A859] hover:text-[#FFFFFF] transition-all duration-300 font-semibold"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2.5 bg-[#00A859] text-[#FFFFFF] rounded-md hover:bg-[#007A45] hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-[#00A859] rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#00A859] bg-[#0F2318]">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="py-3 px-4 hover:text-[#00A859] hover:bg-[#1E3E2D] rounded-lg transition-all font-semibold"
              >
                Home
              </Link>
              <Link
                href="/transparency"
                className="py-3 px-4 hover:text-[#00A859] hover:bg-[#1E3E2D] rounded-lg transition-all font-semibold"
              >
                Transparency Portal
              </Link>
              <Link
                href="/report"
                className="py-3 px-4 hover:text-[#00A859] hover:bg-[#1E3E2D] rounded-lg transition-all font-semibold"
              >
                Report Issues
              </Link>
              <Link
                href="/dashboard"
                className="py-3 px-4 hover:text-[#00A859] hover:bg-[#1E3E2D] rounded-lg transition-all font-semibold"
              >
                Dashboard
              </Link>
              <Link
                href="/services"
                className="py-3 px-4 hover:text-[#00A859] hover:bg-[#1E3E2D] rounded-lg transition-all font-semibold"
              >
                Services
              </Link>
              <div className="pt-4 space-y-3 border-t border-[#00A859]">
                <Link
                  href="/login"
                  className="block w-full text-center py-3 border-2 border-[#00A859] text-[#00A859] rounded-lg hover:bg-[#00A859] hover:text-[#FFFFFF] transition-all font-semibold"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block w-full text-center py-3 bg-[#00A859] text-[#FFFFFF] rounded-lg hover:bg-[#007A45] transition-all font-semibold"
                >
                  Register
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
