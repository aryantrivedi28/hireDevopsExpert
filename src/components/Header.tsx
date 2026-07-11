"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";
import { SERVICES } from "@/lib/services";

const NAV_LINKS = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

interface HeaderProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  };
  homeUrl?: string;
}

export default function Header({ 
  logo, 
  homeUrl = "/" 
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Handle logo with fallback
  useEffect(() => {
    const src = logo?.src || "/hireDevOpsExpert.png";
    
    const img = new window.Image();
    img.onload = () => setLogoSrc(src);
    img.onerror = () => {
      setLogoSrc(null);
    };
    img.src = src;
  }, [logo]);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle click outside and escape key for services dropdown
  useEffect(() => {
    if (!servicesOpen) return;

    function onClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Render logo or fallback text
  const renderLogo = () => {
    if (!logoSrc) {
      return (
        <span className="text-lg font-bold text-teal-deep sm:text-xl">
          {logo?.alt || "Company"}
        </span>
      );
    }

    return (
      <Image
        src={logoSrc}
        alt={logo?.alt || "Company Logo"}
        width={logo?.width || 100}
        height={logo?.height || 35}
        className={`h-auto w-auto max-h-[30px] sm:max-h-[35px] md:max-h-[40px] ${logo?.className || ""}`}
        priority
        onError={() => setLogoSrc(null)}
      />
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-off transition-[border-color] duration-200 ${
        scrolled ? "border-b border-mist shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4">
        {/* Logo - Left side */}
        <Link 
          href={homeUrl} 
          className="flex shrink-0 items-center focus:outline-none focus:ring-2 focus:ring-teal-deep focus:ring-offset-2 rounded-lg"
          aria-label={logo?.alt || "Home"}
        >
          {renderLogo()}
        </Link>

        {/* Desktop Navigation - Center */}
        <nav aria-label="Primary" className="hidden items-center gap-4 lg:gap-8 xl:flex">
          <div ref={servicesRef} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors lg:text-body ${
                servicesOpen || pathname.startsWith("/services")
                  ? "text-teal-deep"
                  : "text-ink hover:text-teal-deep"
              }`}
            >
              Services
              <span 
                aria-hidden="true" 
                className={`transition-transform duration-200 text-xs ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            
            {servicesOpen && (
              <ul
                role="menu"
                className="absolute left-0 top-full mt-2 min-w-[200px] w-56 rounded-xl border border-mist bg-off py-2 shadow-lg animate-in fade-in zoom-in-95 duration-200 lg:w-64 xl:w-72"
              >
                {SERVICES.map((service) => (
                  <li key={service.href} role="none">
                    <Link
                      role="menuitem"
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-3 py-2 text-sm transition-colors lg:px-4 lg:text-small ${
                        pathname === service.href
                          ? "bg-mist text-teal-deep"
                          : "text-ink hover:bg-mist hover:text-teal-deep"
                      }`}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors lg:text-body ${
                isActiveLink(link.href)
                  ? "text-teal-deep"
                  : "text-ink hover:text-teal-deep"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA - Right side */}
        <div className="hidden xl:block">
          <Button href="/contact" className="whitespace-nowrap text-sm px-4 py-2 lg:px-5 lg:py-2.5">
            Book a Free Call
          </Button>
        </div>

        {/* Mobile/Tablet CTA and Menu Toggle - Right side */}
        <div className="flex items-center gap-2 xl:hidden">
          {/* Mobile CTA - visible on tablet and mobile */}
          <Button 
            href="/contact" 
            className="whitespace-nowrap text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2"
          >
            Book a Call
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink hover:bg-mist focus:outline-none focus:ring-2 focus:ring-teal-deep sm:h-9 sm:w-9 md:h-10 md:w-10"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="sm:w-[22px] sm:h-[22px] md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-mist bg-off px-4 py-4 md:hidden animate-in slide-in-from-top duration-200 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <p className="font-mono text-xs text-mono-label tracking-[0.12em] text-slate uppercase">
            Services
          </p>
          <ul className="mt-2 flex flex-col gap-1">
            {SERVICES.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm transition-colors ${
                    pathname === service.href
                      ? "text-teal-deep font-medium"
                      : "text-ink hover:text-teal-deep"
                  }`}
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-col gap-2 border-t border-mist pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActiveLink(link.href)
                      ? "text-teal-deep"
                      : "text-ink hover:text-teal-deep"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-mist">
            <Button href="/contact" className="w-full text-sm py-2.5">
              Book a Free Call
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}