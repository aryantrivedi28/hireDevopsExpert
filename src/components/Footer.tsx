"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaYoutube
} from "react-icons/fa";

const COLUMNS: {
  heading: string;
  links: { label: string; href: string }[];
}[] = [
    {
      heading: "Services",
      links: [
        { label: "Hire DevOps Engineer", href: "/hire-devops-engineer/" },
        { label: "Managed DevOps", href: "/managed-devops-services/" },
        { label: "AWS DevOps", href: "/aws-devops-services/" },
        { label: "CI/CD Setup", href: "/ci-cd-pipeline-setup-services/" },
        { label: "DevOps for Startups", href: "/devops-for-startups/" },
        { label: "Kubernetes Consulting", href: "/kubernetes-consulting-services/" },
        { label: "Terraform Consulting", href: "/terraform-consulting-services/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about/" },
        { label: "How We Work", href: "/#how-we-work" },
        { label: "Our Process", href: "/#process" },
        { label: "Why Us", href: "/#why-us" },
        { label: "Careers", href: "/careers/" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Blog", href: "/blog/" },
        { label: "FAQs", href: "/#faq" },
        { label: "Case Studies", href: "/case-studies/" },
        { label: "DevOps Glossary", href: "/glossary/" },
        { label: "Contact", href: "/contact/" },
      ],
    },
  ];

// Social media links
// Social media links with brand colors
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/hiredevopsexpert",
    icon: FaLinkedin,
    color: "#0A66C2"
  },
  {
    label: "Twitter",
    href: "https://twitter.com/hiredevopsexpert",
    icon: FaTwitter,
    color: "#1DA1F2"
  },
  {
    label: "GitHub",
    href: "https://github.com/hiredevopsexpert",
    icon: FaGithub,
    color: "#181717"
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@hiredevopsexpert",
    icon: FaYoutube,
    color: "#FF0000"
  },
];

// Then in the JSX, you can use the brand colors on hover:


export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  // Check if link is active
  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Handle scroll to hash links
  const handleHashLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#16222e] text-off" role="contentinfo">
      <Container className="py-8 md:py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Image
              src="/footerLogo.png"
              alt="Hire DevOps Expert Logo"
              width={90}
              height={90}
              className="h-auto w-auto"
              priority
            />
            <p className="mt-3 max-w-[40ch] text-sm text-gray md:text-base">
              Senior DevOps and cloud infrastructure expertise for startups and growing companies.
            </p>
            {/* Contact Info */}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray">
                <Mail className="h-4 w-4 shrink-0 text-teal" />
                <a
                  href="mailto:aryan@hiredevopsexpert.com"
                  className="hover:text-teal transition-colors"
                  aria-label="Email us"
                >
                  aryan@hiredevopsexpert.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray">
                <Phone className="h-4 w-4 shrink-0 text-teal" />
                <a
                  href="tel:+919893270210"
                  className="hover:text-teal transition-colors"
                  aria-label="Call us"
                >
                  +91 98932 70210
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray">
                <MapPin className="h-4 w-4 shrink-0 text-teal mt-0.5" />
                <span>Gurugram, India</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {COLUMNS.map((column) => (
            <div key={column.heading} className="col-span-1">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-gray md:text-sm">
                {column.heading}
              </p>
              <ul className="mt-3 flex flex-col gap-1.5 md:mt-4 md:gap-2">
                {column.links.map((link) => {
                  const isActive = isActiveLink(link.href);
                  const isHashLink = link.href.startsWith("/#");

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={(e) => isHashLink && handleHashLink(e, link.href)}
                        className={`text-sm transition-colors hover:text-teal md:text-base ${isActive ? "text-teal font-medium" : "text-gray"
                          }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section with Social and Legal */}
        <div className="mt-8 flex flex-col gap-4 border-t border-mist/20 pt-6 md:mt-12 md:flex-row md:items-center md:justify-between md:pt-8">
          {/* Social Links */}
          <div className="flex items-center gap-3 order-2 md:order-1">
            <span className="text-xs text-gray uppercase tracking-[0.12em]">
              Follow Us
            </span>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-1.5 text-gray transition-all hover:text-[${social.color}] focus:outline-none focus:ring-2 focus:ring-teal/20 group"
                    aria-label={social.label}
                    style={{ '--hover-color': social.color } as React.CSSProperties}
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray md:text-sm order-1 md:order-2">
            <span>© {year} hiredevopsexpert.com</span>
            <span className="hidden sm:inline">·</span>
            <Link
              href="/privacy/"
              className="hover:text-teal transition-colors"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/terms/"
              className="hover:text-teal transition-colors"
            >
              Terms of Service
            </Link>
            <span>·</span>
            <Link
              href="/cookies/"
              className="hover:text-teal transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}