import logo from "@/assets/beacon-hill-logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { name: "HOME", href: "/", active: true },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICE", href: "/service" },
  { name: "HOSPITAL", href: "/hospital" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Image src={logo} alt="Logo" className="w-48" />
          {/* Logo */}
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.active
                    ? "text-green-500 border-b-2 border-green-500 pb-1"
                    : "text-blue-600 hover:text-green-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
