"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

const NAV_LINKS = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

// All services - without trailing slashes
const SERVICES_DATA = [
  // Core DevOps Services
  { label: "DevOps as a Service", href: "/devops-as-a-service" },
  { label: "Managed DevOps Services", href: "/managed-devops-services" },
  { label: "DevOps for Startups", href: "/devops-for-startups" },
  { label: "DevOps Automation Services", href: "/devops-automation-services" },
  { label: "DevOps Monitoring & Observability", href: "/devops-monitoring-observability-services" },
  { label: "DevSecOps Services", href: "/devsecops-services" },
  { label: "Ongoing DevOps Support", href: "/ongoing-devops-support" },
  { label: "DevOps Support for SaaS", href: "/devops-support-for-saas-companies" },
  
  // Cloud Provider Services
  { label: "AWS DevOps Services", href: "/aws-devops-services" },
  { label: "AWS DevOps Consulting", href: "/aws-devops-consulting-services" },
  { label: "AWS Cost Optimization", href: "/aws-cost-optimization-services" },
  { label: "AWS Migration Services", href: "/aws-migration-services" },
  { label: "Azure DevOps Consulting", href: "/azure-devops-consulting-services" },
  { label: "Azure Migration Services", href: "/azure-migration-services" },
  { label: "GCP DevOps Services", href: "/gcp-devops-services" },
  { label: "Google Cloud DevOps Consulting", href: "/google-cloud-devops-consulting" },
  
  // CI/CD & Pipeline Services
  { label: "CI/CD Pipeline Setup", href: "/ci-cd-pipeline-setup-services" },
  { label: "Secure CI/CD Pipeline", href: "/secure-ci-cd-pipeline-services" },
  { label: "Jenkins Pipeline Setup", href: "/jenkins-pipeline-setup" },
  { label: "GitHub Actions Setup", href: "/github-actions-setup-service" },
  { label: "GitLab CI/CD Services", href: "/gitlab-ci-cd-services" },
  { label: "Datadog Implementation", href: "/datadog-implementation-services" },
  
  // Kubernetes & Containers
  { label: "Kubernetes Consulting", href: "/kubernetes-consulting-services" },
  { label: "Kubernetes Cluster Setup", href: "/kubernetes-cluster-setup-services" },
  { label: "Kubernetes Migration", href: "/kubernetes-migration-services" },
  { label: "EKS Setup Services", href: "/eks-setup-services" },
  { label: "Docker Consulting", href: "/docker-consulting-services" },
  { label: "Docker Deployment", href: "/docker-deployment-services" },
  { label: "Dockerize Application", href: "/dockerize-application-service" },
  { label: "Prometheus & Grafana Setup", href: "/prometheus-grafana-setup-services" },
  
  // Terraform & IaC
  { label: "Terraform Consulting", href: "/terraform-consulting-services" },
  { label: "Terraform AWS Services", href: "/terraform-aws-services" },
  { label: "Infrastructure as Code", href: "/infrastructure-as-code-services" },
  { label: "Infrastructure Automation", href: "/infrastructure-automation-services" },
  
  // Cloud & Security
  { label: "Cloud Automation", href: "/cloud-automation-services" },
  { label: "Cloud Security", href: "/cloud-security-devops-services" },
  { label: "Cloud Migration", href: "/cloud-migration-devops-services" },
  { label: "PCI DSS DevOps", href: "/pci-dss-devops-services" },
  
  // Migration Services
  { label: "Heroku to AWS Migration", href: "/heroku-to-aws-migration-services" },
  { label: "Render to AWS Migration", href: "/render-to-aws-migration-services" },
  { label: "Firebase to AWS Migration", href: "/firebase-to-aws-migration-services" },
  
  // Specialized Services
  { label: "DevOps for AI Startups", href: "/devops-for-ai-startups" },
  { label: "DevOps for Fintech Startups", href: "/devops-for-fintech-startups" },
  { label: "DevOps for E-commerce", href: "/devops-for-ecommerce-peak-scaling" },
  { label: "DevOps for EdTech Startups", href: "/devops-for-edtech-startups" },
  { label: "White Label DevOps", href: "/white-label-devops-services" },
  { label: "White Label for Agencies", href: "/white-label-devops-for-agencies" },
  
  // Specialized Tech
  { label: "LLM App Deployment", href: "/llm-app-deployment-services" },
  { label: "GPU Infrastructure Setup", href: "/gpu-infrastructure-setup-service" },
  { label: "MLOps Setup for Startups", href: "/mlops-setup-services-for-startups" },
  
  // Hiring Services
  { label: "Hire DevOps Engineer", href: "/hire-devops-engineer" },
  { label: "Hire Azure DevOps Engineer", href: "/hire-azure-devops-engineer" },
];

// Top services for quick access
const TOP_SERVICES = [
  { label: "Hire DevOps Engineer", href: "/hire-devops-engineer" },
  { label: "DevOps as a Service", href: "/devops-as-a-service" },
  { label: "Managed DevOps", href: "/managed-devops-services" },
  { label: "AWS DevOps", href: "/aws-devops-services" },
  { label: "Kubernetes Consulting", href: "/kubernetes-consulting-services" },
  { label: "CI/CD Pipeline Setup", href: "/ci-cd-pipeline-setup-services" },
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
    // Remove trailing slash for comparison
    const cleanPathname = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    const cleanHref = href.endsWith("/") ? href.slice(0, -1) : href;
    return cleanPathname === cleanHref || cleanPathname.startsWith(cleanHref + "/");
  };

  const isServiceActive = (href: string) => {
    const cleanPathname = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
    const cleanHref = href.endsWith("/") ? href.slice(0, -1) : href;
    return cleanPathname === cleanHref || cleanPathname.startsWith(cleanHref);
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
          className="flex shrink-0 items-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-deep focus:ring-offset-2 rounded-lg"
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
                servicesOpen || SERVICES_DATA.some(s => isServiceActive(s.href))
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
              <div className="absolute left-0 top-full mt-2 w-[800px] max-h-[70vh] overflow-y-auto rounded-xl border border-mist bg-off py-4 shadow-lg animate-in fade-in zoom-in-95 duration-200">
                <div className="grid grid-cols-3 gap-4 px-4">
                  {/* Group services by category for better organization */}
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate">Core DevOps</p>
                    <ul className="mt-2 flex flex-col gap-1">
                      {SERVICES_DATA.filter(s => 
                        s.href.includes("/devops-") || 
                        s.href === "/devops-as-a-service" ||
                        s.href === "/managed-devops-services" ||
                        s.href === "/devops-for-startups" ||
                        s.href === "/devops-automation-services" ||
                        s.href === "/devops-monitoring-observability-services" ||
                        s.href === "/devsecops-services" ||
                        s.href === "/ongoing-devops-support" ||
                        s.href === "/devops-support-for-saas-companies"
                      ).slice(0, 8).map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className={`block py-1 text-sm transition-colors ${
                              isServiceActive(service.href)
                                ? "text-teal-deep font-medium"
                                : "text-ink hover:text-teal-deep hover:underline"
                            }`}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate">Cloud & Infrastructure</p>
                    <ul className="mt-2 flex flex-col gap-1">
                      {SERVICES_DATA.filter(s => 
                        s.href.includes("/aws-") ||
                        s.href.includes("/azure-") ||
                        s.href.includes("/gcp-") ||
                        s.href.includes("/google-cloud-") ||
                        s.href.includes("/cloud-") ||
                        s.href.includes("/infrastructure-")
                      ).slice(0, 8).map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className={`block py-1 text-sm transition-colors ${
                              isServiceActive(service.href)
                                ? "text-teal-deep font-medium"
                                : "text-ink hover:text-teal-deep hover:underline"
                            }`}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate">Kubernetes & Containers</p>
                    <ul className="mt-2 flex flex-col gap-1">
                      {SERVICES_DATA.filter(s => 
                        s.href.includes("/kubernetes-") ||
                        s.href.includes("/docker-") ||
                        s.href.includes("/eks-") ||
                        s.href === "/prometheus-grafana-setup-services"
                      ).slice(0, 8).map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className={`block py-1 text-sm transition-colors ${
                              isServiceActive(service.href)
                                ? "text-teal-deep font-medium"
                                : "text-ink hover:text-teal-deep hover:underline"
                            }`}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate">CI/CD & Pipeline</p>
                    <ul className="mt-2 flex flex-col gap-1">
                      {SERVICES_DATA.filter(s => 
                        s.href.includes("/ci-cd-") ||
                        s.href.includes("/jenkins-") ||
                        s.href.includes("/github-actions") ||
                        s.href.includes("/gitlab-") ||
                        s.href.includes("/datadog-") ||
                        s.href.includes("/secure-ci-cd")
                      ).slice(0, 6).map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className={`block py-1 text-sm transition-colors ${
                              isServiceActive(service.href)
                                ? "text-teal-deep font-medium"
                                : "text-ink hover:text-teal-deep hover:underline"
                            }`}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate">Terraform & IaC</p>
                    <ul className="mt-2 flex flex-col gap-1">
                      {SERVICES_DATA.filter(s => 
                        s.href.includes("/terraform-") ||
                        s.href.includes("/infrastructure-as-code") ||
                        s.href.includes("/infrastructure-automation")
                      ).slice(0, 4).map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className={`block py-1 text-sm transition-colors ${
                              isServiceActive(service.href)
                                ? "text-teal-deep font-medium"
                                : "text-ink hover:text-teal-deep hover:underline"
                            }`}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate">Specialized</p>
                    <ul className="mt-2 flex flex-col gap-1">
                      {SERVICES_DATA.filter(s => 
                        s.href.includes("/devops-for-") ||
                        s.href.includes("/white-label-") ||
                        s.href.includes("/llm-") ||
                        s.href.includes("/gpu-") ||
                        s.href.includes("/mlops-") ||
                        s.href.includes("/pci-dss") ||
                        s.href.includes("/hire-")
                      ).slice(0, 8).map((service) => (
                        <li key={service.href}>
                          <Link
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className={`block py-1 text-sm transition-colors ${
                              isServiceActive(service.href)
                                ? "text-teal-deep font-medium"
                                : "text-ink hover:text-teal-deep hover:underline"
                            }`}
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
          <Button 
            href="/contact" 
            className="whitespace-nowrap text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2"
          >
            Book a Call
          </Button>

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
          {/* Top Services */}
          <div className="mb-4">
            <p className="font-mono text-xs text-mono-label tracking-[0.12em] text-slate uppercase">
              Popular Services
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {TOP_SERVICES.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg border border-mist px-3 py-2 text-sm transition-colors ${
                    isServiceActive(service.href)
                      ? "border-teal-deep bg-teal-deep/5 text-teal-deep font-medium"
                      : "hover:border-teal-deep/30 hover:bg-mist"
                  }`}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="font-mono text-xs text-mono-label tracking-[0.12em] text-slate uppercase">
            All Services
          </p>
          <ul className="mt-2 flex flex-col gap-1">
            {SERVICES_DATA.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 text-sm transition-colors ${
                    isServiceActive(service.href)
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