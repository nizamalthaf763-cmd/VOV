"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginExact() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "bondi" && password === "bondi@12") {
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        backgroundImage: 'url("/images/login.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-6 items-center">
        {/* LEFT: Waves or leave empty */}
        <div className="relative rounded-3xl md:rounded-l-3xl md:rounded-r-none h-[640px] w-full">
          {/* You can add overlays or SVG here if needed */}
        </div>

        {/* RIGHT: Form in yellow card */}
        <div className="flex items-center justify-center h-[640px]">
          <div className="relative">
            {/* Offset shadow behind card */}
            <div
              className="absolute -right-4 -bottom-4 w-[420px] h-[520px] rounded-[36px] opacity-40"
              style={{ backgroundColor: "#84FAAE" }}
            />

            {/* Actual card */}
            <div
              className="relative w-[420px] h-[520px] rounded-[36px] p-10"
              style={{ backgroundColor: "#4EBC73" }}
            >
              <h2 className="text-center font-semibold text-gray-800 text-xl mb-6">
                Login to continue
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Username */}
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-[#58A3DC] flex items-center justify-center text-white mr-3 shrink-0">
                    <FaUser size={14} />
                  </div>
                  <input
                    type="text"
                    placeholder="Username/Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-sm placeholder:text-gray-400"
                  />
                </div>

                {/* Password */}
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-[#58A3DC] flex items-center justify-center text-white mr-3 shrink-0">
                    <FaLock size={14} />
                  </div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-sm placeholder:text-gray-400"
                  />
                </div>

                {/* Options row */}
                <div className="flex items-center justify-between text-sm text-[#2297F2]">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded-full border-2 border-gray-300 checked:bg-[#58A3DC] checked:border-[#58A3DC] focus:outline-none"
                    />
                    <span>Remember me</span>
                  </label>
                </div>

                {/* Error message */}
                {error && (
                  <div className="text-red-500 text-sm text-center">{error}</div>
                )}

                {/* Login button */}
                <button
                  type="submit"
                  className="w-full mt-1 py-3 rounded-full text-white font-medium shadow-md"
                  style={{ backgroundColor: "#2297F2" }}
                >
                  Login
                </button>
              </form>

              {/* subtle bottom-right shadow for depth */}
              <div className="absolute -bottom-3 -right-3 w-28 h-6 rounded-xl opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
