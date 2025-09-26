"use client";

import Image from "next/image";

export default function Topbar() {
  return (
    <header className="w-full h-16 bg-white flex items-center px-6 shadow-sm">
      {/* Left side: logo/play icon */}
      <div className="flex items-center gap-2">
        {/* Logo image */}
        <Image
          src="/images/vov-logo.png"
          alt="VOV Logo"
          width={32}
          height={32}
          className="object-contain"
        />
        <h1 className="text-xl font-semibold text-gray-900">
          Hello, <span className="font-bold">Bondi</span>
        </h1>
        <p className="text-sm font-semibold text-gray-900">
          Welcome Back</p>
      </div>

      {/* Right side: search + mail + avatar */}
      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Mail icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4h16v16H4z M22 6l-10 7L2 6"
            />
          </svg>
        </button>

        {/* Avatar (replace src with your own) */}
        <Image
          src="/images/avatar.jpeg"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
      </div>
    </header>
  );
}
