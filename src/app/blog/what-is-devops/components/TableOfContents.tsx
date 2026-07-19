// app/blog/what-is-devops/components/TableOfContents.tsx
"use client";

import { useState, useEffect } from "react";
import { BookOpen, ChevronDown, ChevronRight } from "lucide-react";

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-80px 0px -40% 0px",
        threshold: 0.1
      }
    );

    const sectionElements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex w-full items-center justify-between rounded-lg border border-mist bg-white px-4 py-3 text-left shadow-sm transition-colors hover:border-teal-deep/30"
        >
          <span className="font-medium text-ink">Table of Contents</span>
          <ChevronDown className={`h-5 w-5 text-slate transition-transform ${isMobileOpen ? "rotate-180" : ""}`} />
        </button>
        {isMobileOpen && (
          <div className="mt-2 rounded-lg border border-mist bg-white p-4 shadow-sm">
            <nav className="space-y-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                    activeId === item.id
                      ? "bg-teal-deep/10 text-teal-deep font-medium pl-4 border-l-2 border-teal-deep"
                      : "text-slate hover:bg-mist/50 hover:pl-4"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      activeId === item.id ? "bg-teal-deep" : "bg-slate/30"
                    }`} />
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sticky TOC */}
      <div className="hidden lg:block sticky top-24 self-start w-64 shrink-0">
        <div className="rounded-xl border border-mist bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-teal-deep" />
            <p className="text-sm font-semibold text-ink">Contents</p>
          </div>
          <nav className="space-y-1">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-all ${
                    isActive
                      ? "bg-teal-deep/10 text-teal-deep font-medium"
                      : "text-slate hover:bg-mist/50 hover:text-ink"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full transition-all ${
                    isActive 
                      ? "bg-teal-deep w-2 h-2" 
                      : "bg-slate/30 group-hover:bg-slate/50"
                  }`} />
                  <span className="flex-1 text-left">{item.label}</span>
                  {isActive && (
                    <ChevronRight className="h-3 w-3 text-teal-deep" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}