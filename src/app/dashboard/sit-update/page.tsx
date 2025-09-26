"use client";

import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

export default function SitUpdate() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-[#2297F2] mb-4">Sit Updata</h1>
          <p className="text-lg text-gray-700">This is the Sit Updata page.</p>
        </main>
      </div>
    </div>
  );
}