"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  CreditCard,
  BarChart2,
  Crown,
  User,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGrid },
    { name: "Site Updata", href: "/dashboard/sit-update", icon: CreditCard },
    // { name: "Statistics", href: "/dashboard/user-manager", icon: BarChart2 },
    // { name: "Premium", href: "/premium", icon: Crown },
    { name: "User Manager", href: "/dashboard/user-manager", icon: User },
    // { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside className="h-screen w-56 bg-white border-r border-gray-200 flex flex-col py-6">
      <nav className="flex flex-col gap-2">
        {links.map(({ name, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-4 py-2 text-gray-700 transition-colors ${
                active
                  ? "bg-gray-900 text-white"
                  : "hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
