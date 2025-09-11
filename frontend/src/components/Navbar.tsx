'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AuthModal from "@/components/AuthModal";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Quiz", href: "/quiz" },
    { name: "Courses", href: "/courses" },
    { name: "Colleges", href: "/colleges" },
    { name: "Timeline", href: "/timeline" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CareerPath
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <AuthModal>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </AuthModal>
              <AuthModal>
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </AuthModal>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2 px-3">
              <AuthModal>
                <Button variant="ghost" size="sm" className="w-full">
                  Sign In
                </Button>
              </AuthModal>
              <AuthModal>
                <Button variant="default" size="sm" className="w-full">
                  Get Started
                </Button>
              </AuthModal>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;