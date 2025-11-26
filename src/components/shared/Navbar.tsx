"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

export const Navbar = () => {
  const pathName = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: "News", href: "/news" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const servicesLinks = [
    { name: "Web Development", href: "/services/web" },
    { name: "App Development", href: "/services/app" },
    { name: "Competitive Programming", href: "/services/cp" },
  ];

  const isActive = (href: string) => pathName === href;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <header className="py-4 shadow-md">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="uppercase">
              Buggy_News
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-5">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink
                      href={link.href}
                      className={`hover:text-blue-500 ${
                        isActive(link.href)
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                {/* Services Dropdown */}
                <NavigationMenuItem className="relative">
                  <NavigationMenuTrigger
                    className={`hover:text-blue-500 ${
                      servicesLinks.some((s) => s.href === pathName)
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    Services
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="absolute left-0 mt-2 min-w-[200px] bg-white shadow-lg rounded-md z-50">
                    <ul className="text-gray-700 py-2">
                      {servicesLinks.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink
                            href={service.href}
                            className={`block px-4 py-2 hover:bg-gray-100 ${
                              isActive(service.href)
                                ? "bg-gray-200 font-semibold"
                                : ""
                            }`}
                          >
                            {service.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Dark Mode & Login */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="mr-2">Dark Mode</span>
                <Switch />
              </div>
              <Button variant="default">Login</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <PiDotsThreeOutlineVerticalFill size={24} />
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded hover:bg-gray-100 ${
                  isActive(link.href) ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div className="px-4">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full text-left px-2 py-2 rounded hover:bg-gray-100 ${
                  servicesLinks.some((s) => s.href === pathName)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                Services
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`block px-2 py-1 rounded hover:bg-gray-100 ${
                        isActive(service.href)
                          ? "bg-gray-200 font-semibold"
                          : ""
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode & Login */}
            <div className="flex items-center space-x-4 px-4 mt-2">
              <div className="flex items-center">
                <span className="mr-2">Dark Mode</span>
                <Switch />
              </div>
              <Button variant="default">Login</Button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
