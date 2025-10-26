"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "../ui/Card";
import { Text } from "../ui/Typography";
import { Users, Settings, Briefcase, Building2, FileText, LayoutDashboard } from "lucide-react";

const dashboardLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/businesses", label: "Businesses", icon: Building2 },
  { href: "/users", label: "Users", icon: Users },
  { href: "/jobs", label: "Jobs", icon: Briefcase },
  { href: "/posts", label: "Posts", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings },
];

export const SideBarContent = () => {
  const pathname = usePathname();
  return <Card className="flex flex-col h-full p-4">
    <div className="flex items-center gap-2 mb-8">
      <Image src="/images/vybout-logo.svg" alt="vybout admin logo" width={32} height={32} className="mr-2" />
      <Text variant="h2" className="font-bold text-lg text-gray-800">vybout admin</Text>
    </div>
    <nav className="flex flex-col gap-2">
      {dashboardLinks.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 px-3 py-2 rounded transition-colors text-gray-700 hover:bg-gray-100 ${isActive ? "bg-gray-200 text-gray-900" : ""}`}
            style={isActive ? { backgroundColor: "#f3f4f6", color: "#222" } : {}}
          >
            <Icon size={20} className={isActive ? "text-gray-900" : "text-gray-500"} />
            <Text variant="p">{label}</Text>
          </Link>
        );
      })}
    </nav>
    <div className="mt-auto pt-8">
      <Text variant="p" className="text-xs text-gray-400">&copy; {new Date().getFullYear()} vybout admin</Text>
    </div>
  </Card>
}

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 h-screen bg-white border-r shadow-sm fixed top-0 left-0 z-30">
      <SideBarContent />
    </aside>
  );
}