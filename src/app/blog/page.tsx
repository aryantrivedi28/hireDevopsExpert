"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, Clock, ArrowRight, Search, Tag, ChevronDown } from "lucide-react";

// All blog posts data - Sorted by date (newest first)
const BLOG_POSTS = [
  // Foundational Cluster - DevOps Fundamentals (Newest first)
  {
    slug: "what-is-kubernetes",
    title: "What Is Kubernetes? A Plain-English Guide for Startups",
    excerpt: "Kubernetes (K8s) automates running containers at scale. Here's what it is, how pods, nodes, and clusters fit together, and whether your startup actually needs it.",
    category: "Cloud & Infrastructure",
    readTime: "8 min read",
    date: "2024-01-15",
    image: "https://miro.medium.com/v2/resize:fit:1080/1*_iIgBd9iYDJWDpjKDhX_ew.jpeg",
    tags: ["Kubernetes", "Containers", "Cloud Native", "DevOps"],
    featured: true,
  },
  {
    slug: "what-is-infrastructure-as-code",
    title: "What Is Infrastructure as Code (IaC)? A 2026 Guide",
    excerpt: "Infrastructure as code (IaC) lets you build and manage cloud infrastructure with version-controlled code instead of manual setup. Here's what it means and how to start.",
    category: "Cloud & Infrastructure",
    readTime: "8 min read",
    date: "2024-01-15",
    image: "https://mobilecoderz.com/blog/wp-content/uploads/2022/03/2-1.jpg",
    tags: ["Infrastructure as Code", "Terraform", "OpenTofu", "IaC"],
    featured: true,
  },
  {
    slug: "what-is-ci-cd",
    title: "What Is CI/CD? Continuous Integration & Delivery (2026)",
    excerpt: "CI/CD automates building, testing, and releasing code so your team ships faster without breaking production. Here's what it means and how to start.",
    category: "DevOps Fundamentals",
    readTime: "8 min read",
    date: "2024-01-15",
    image: "https://signmycode.com/blog/wp-content/uploads/2024/04/ci-cd-pipeline-jpg.webp",
    tags: ["CI/CD", "Continuous Integration", "Continuous Delivery", "DevOps Pipelines"],
    featured: true,
  },
  {
    slug: "what-does-a-devops-engineer-do",
    title: "What Does a DevOps Engineer Do? Role, Skills & Cost (2026)",
    excerpt: "A DevOps engineer owns the path from a developer's laptop to production. Here's what they do, the skills they use, what they cost, and if your startup needs one.",
    category: "DevOps Careers & Hiring",
    readTime: "9 min read",
    date: "2024-01-15",
    image: "https://devopsexpertsindia.com/wp-content/uploads/2024/10/Roles-and-Responsibilities-of-a-DevOps-Engineer-1024x719.png",
    tags: ["DevOps Engineer", "DevOps Hiring", "Role & Skills", "DevOps Cost"],
    featured: true,
  },
  {
    slug: "what-is-devops",
    title: "What Is DevOps? A Practical Guide for Startups & SaaS Teams",
    excerpt: "DevOps done right means shipping faster without breaking production. Here's what DevOps actually is, how it works, and when your startup or SaaS team really needs it.",
    category: "DevOps Fundamentals",
    readTime: "12 min read",
    date: "2024-01-15",
    image: "https://testautomationtools.dev/wp-content/uploads/2025/07/What-is-DevOps-main_img.jpeg",
    tags: ["DevOps", "Startups", "SaaS", "CI/CD"],
    featured: true,
  },

  // Existing Blog Posts
  {
    slug: "aws-ecs-vs-eks",
    title: "AWS ECS vs EKS: Which Container Orchestration Should You Choose?",
    excerpt: "Compare AWS ECS and EKS for container orchestration. Learn the key differences, use cases, and when to choose each for your startup infrastructure.",
    category: "AWS",
    readTime: "8 min read",
    date: "2024-01-15",
    image: "https://www.rishabhsoft.com/wp-content/uploads/2024/03/Banner-Image-AWS-ECS-VS-EKS.jpg",
    tags: ["AWS", "ECS", "EKS", "Container Orchestration"],
  },
  {
    slug: "best-devops-services-for-startups",
    title: "Best DevOps Services for Startups in 2024",
    excerpt: "Discover the essential DevOps services every startup needs. From CI/CD to infrastructure automation, learn how to build a robust DevOps foundation.",
    category: "DevOps",
    readTime: "10 min read",
    date: "2024-01-10",
    image: "/images/blog/devops-startups.jpg",
    tags: ["DevOps", "Startups", "Best Practices"],
  },
  {
    slug: "dedicated-devops-engineer-vs-freelance",
    title: "Dedicated DevOps Engineer vs Freelance: Which is Right for Your Startup?",
    excerpt: "Compare dedicated DevOps engineers and freelance contractors. Learn the pros, cons, and cost implications for your startup infrastructure needs.",
    category: "Hiring",
    readTime: "9 min read",
    date: "2024-01-08",
    image: "/images/blog/dedicated-vs-freelance.jpg",
    tags: ["Hiring", "Freelance", "DevOps"],
  },
  {
    slug: "devops-agency-vs-in-house-vs-fractional",
    title: "DevOps Agency vs In-House vs Fractional: Which Model Works Best?",
    excerpt: "Compare different DevOps engagement models. Learn the pros and cons of agencies, in-house teams, and fractional DevOps engineers.",
    category: "DevOps",
    readTime: "11 min read",
    date: "2024-01-05",
    image: "/images/blog/devops-models.jpg",
    tags: ["DevOps", "Agency", "Fractional", "In-House"],
  },
  {
    slug: "devops-engineer-hourly-rate-cost",
    title: "DevOps Engineer Hourly Rate & Cost Guide 2024",
    excerpt: "Complete guide to DevOps engineer hourly rates. Learn about cost factors, regional differences, and what to expect when hiring DevOps talent.",
    category: "Hiring",
    readTime: "10 min read",
    date: "2024-01-03",
    image: "/images/blog/devops-rates.jpg",
    tags: ["Hiring", "Cost", "Rates"],
  },
  {
    slug: "devops-monitoring-checklist",
    title: "DevOps Monitoring Checklist: Essential Metrics for Production Systems",
    excerpt: "A comprehensive DevOps monitoring checklist. Learn what to monitor, key metrics, and how to set up effective observability for your infrastructure.",
    category: "Monitoring",
    readTime: "12 min read",
    date: "2024-01-01",
    image: "/images/blog/monitoring-checklist.jpg",
    tags: ["Monitoring", "Observability", "Metrics"],
  },
  {
    slug: "devops-roadmap-for-startups",
    title: "DevOps Roadmap for Startups: From MVP to Scale",
    excerpt: "A step-by-step DevOps roadmap for startups. Learn how to build your infrastructure from MVP to production-scale systems.",
    category: "Startups",
    readTime: "14 min read",
    date: "2023-12-28",
    image: "/images/blog/devops-roadmap.jpg",
    tags: ["Startups", "Roadmap", "Scaling"],
  },
  {
    slug: "devops-tools-for-startups",
    title: "Best DevOps Tools for Startups in 2024",
    excerpt: "Discover the essential DevOps tools every startup needs. From CI/CD to monitoring, learn which tools to use and when to adopt them.",
    category: "Tools",
    readTime: "11 min read",
    date: "2023-12-25",
    image: "/images/blog/devops-tools.jpg",
    tags: ["Tools", "CI/CD", "Monitoring", "Startups"],
  },
  {
    slug: "do-i-need-devops-for-my-saas",
    title: "Do I Need DevOps for My SaaS? A Decision Guide",
    excerpt: "Learn when your SaaS needs dedicated DevOps expertise. Understand the signs, timing, and benefits of adopting DevOps for your SaaS product.",
    category: "SaaS",
    readTime: "9 min read",
    date: "2023-12-22",
    image: "/images/blog/saas-devops.jpg",
    tags: ["SaaS", "Decision Guide", "DevOps"],
  },
  {
    slug: "docker-vs-kubernetes",
    title: "Docker vs Kubernetes: Understanding the Difference",
    excerpt: "Compare Docker and Kubernetes for container orchestration. Learn when to use each and how they work together in modern infrastructure.",
    category: "Containers",
    readTime: "10 min read",
    date: "2023-12-20",
    image: "/images/blog/docker-vs-k8s.jpg",
    tags: ["Docker", "Kubernetes", "Containers"],
  },
  {
    slug: "how-to-hire-a-devops-engineer",
    title: "How to Hire a DevOps Engineer: The Complete Guide",
    excerpt: "Learn the essential steps to hire the right DevOps engineer. From writing job descriptions to interviewing, this guide covers everything you need.",
    category: "Hiring",
    readTime: "15 min read",
    date: "2023-12-18",
    image: "/images/blog/hire-devops-engineer.jpg",
    tags: ["Hiring", "DevOps", "Interview"],
  },
  {
    slug: "how-to-reduce-aws-cloud-costs",
    title: "How to Reduce AWS Cloud Costs: Practical Strategies",
    excerpt: "Practical strategies to reduce AWS cloud costs. Learn about cost optimization, resource management, and best practices for AWS cost savings.",
    category: "AWS",
    readTime: "12 min read",
    date: "2023-12-15",
    image: "/images/blog/aws-cost-reduction.jpg",
    tags: ["AWS", "Cost Optimization", "Cloud"],
  },
  {
    slug: "how-to-set-up-ci-cd-pipeline-for-saas",
    title: "How to Set Up CI/CD Pipeline for SaaS: Complete Guide",
    excerpt: "Step-by-step guide to setting up CI/CD pipelines for SaaS applications. Learn best practices, tools, and automation strategies.",
    category: "CI/CD",
    readTime: "13 min read",
    date: "2023-12-12",
    image: "/images/blog/ci-cd-saas.jpg",
    tags: ["CI/CD", "SaaS", "Automation"],
  },
  {
    slug: "jenkins-vs-github-actions",
    title: "Jenkins vs GitHub Actions: Which CI/CD Tool Should You Choose?",
    excerpt: "Compare Jenkins and GitHub Actions for CI/CD. Learn the pros, cons, and use cases for each tool in modern DevOps workflows.",
    category: "CI/CD",
    readTime: "9 min read",
    date: "2023-12-10",
    image: "/images/blog/jenkins-vs-github-actions.jpg",
    tags: ["Jenkins", "GitHub Actions", "CI/CD"],
  },
  {
    slug: "minimum-viable-devops-for-startups",
    title: "Minimum Viable DevOps for Startups: What You Actually Need",
    excerpt: "Learn what constitutes minimum viable DevOps for startups. Focus on what matters most and avoid over-engineering your infrastructure.",
    category: "Startups",
    readTime: "10 min read",
    date: "2023-12-08",
    image: "/images/blog/mvp-devops.jpg",
    tags: ["Startups", "MVP", "DevOps"],
  },
  {
    slug: "terraform-vs-cloudformation",
    title: "Terraform vs CloudFormation: Infrastructure as Code Comparison",
    excerpt: "Compare Terraform and AWS CloudFormation for infrastructure as code. Learn which tool is right for your cloud infrastructure needs.",
    category: "Infrastructure",
    readTime: "11 min read",
    date: "2023-12-05",
    image: "/images/blog/terraform-vs-cf.jpg",
    tags: ["Terraform", "CloudFormation", "IaC"],
  },
  {
    slug: "when-to-hire-a-devops-engineer",
    title: "When to Hire a DevOps Engineer: Key Signs and Timing",
    excerpt: "Learn when to hire your first DevOps engineer. Understand the key signs, timing, and what to look for in a DevOps professional.",
    category: "Hiring",
    readTime: "8 min read",
    date: "2023-12-01",
    image: "/images/blog/when-to-hire.jpg",
    tags: ["Hiring", "Timing", "DevOps"],
  },
];

// Get unique categories and sort them
const CATEGORIES = ["All", ...new Set(BLOG_POSTS.map(post => post.category))].sort();

// Featured posts
const FEATURED_POSTS = BLOG_POSTS.filter(post => post.featured);

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Filter posts
  const getFilteredPosts = () => {
    let filtered = BLOG_POSTS;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  const filteredPosts = getFilteredPosts();

  // Format date
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM d, yyyy");
    } catch {
      return dateString;
    }
  };

  // Load more
  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 6, filteredPosts.length));
  };

  // Reset visible posts when filters change
  useEffect(() => {
    setVisiblePosts(6);
  }, [searchQuery, selectedCategory]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.category-dropdown')) {
        setIsCategoryDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle image error
  const handleImageError = (slug: string) => {
    setImageErrors(prev => ({ ...prev, [slug]: true }));
  };

  // Check if image should be shown
  const shouldShowImage = (post: typeof BLOG_POSTS[0]) => {
    return post.image && !imageErrors[post.slug];
  };

  return (
    <main className="min-h-screen bg-off">
      {/* Hero Section */}
      <section className="border-b border-mist bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="max-w-[68ch]">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate md:text-sm">
              Insights & Resources
            </span>
            <h1 className="mt-3 text-3xl font-semibold leading-[1.15] text-ink md:text-4xl lg:text-5xl">
              DevOps Blog
            </h1>
            <p className="mt-4 text-base text-slate md:text-lg">
              Insights, best practices, and expert advice on DevOps, cloud infrastructure, 
              and modern software delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {FEATURED_POSTS.length > 0 && searchQuery === "" && selectedCategory === "All" && (
        <section className="border-b border-mist bg-white/50 py-8 md:py-12">
          <div className="mx-auto max-w-[1120px] px-4 md:px-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray mb-4">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {FEATURED_POSTS.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl border border-mist bg-white p-4 md:p-6 transition-all hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-deep/10 text-teal-deep">
                      <span className="text-lg">📘</span>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-teal-deep">{post.category}</span>
                      <h3 className="mt-1 font-medium text-ink group-hover:text-teal-deep transition-colors text-sm md:text-base">
                        {post.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-3 text-xs text-gray">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="border-b border-mist bg-off py-6 md:py-8">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-mist bg-white px-10 py-2.5 text-sm text-ink placeholder:text-gray focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20"
                aria-label="Search blog posts"
              />
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden flex-wrap gap-2 sm:flex">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-teal-deep text-white"
                      : "bg-white text-slate hover:bg-mist hover:text-ink"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Category Filter - Mobile Dropdown */}
            <div className="relative sm:hidden category-dropdown">
              <button
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="flex w-full items-center justify-between rounded-lg border border-mist bg-white px-4 py-2.5 text-sm text-ink focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20"
              >
                <span>{selectedCategory}</span>
                <ChevronDown className={`h-4 w-4 text-gray transition-transform ${isCategoryDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isCategoryDropdownOpen && (
                <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-60 overflow-auto rounded-lg border border-mist bg-white shadow-lg">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsCategoryDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-2.5 text-left text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-teal-deep/10 text-teal-deep font-medium"
                          : "text-slate hover:bg-mist"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-[1120px] px-4 md:px-6">
          {/* Results count */}
          <div className="mb-6 text-sm text-slate">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </div>

          {/* No results */}
          {filteredPosts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="text-lg text-slate">No posts found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-sm font-medium text-teal-deep hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.slice(0, visiblePosts).map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-mist bg-white transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Image */}
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden bg-mist">
                  <div className="relative aspect-[16/9] w-full">
                    {shouldShowImage(post) ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => handleImageError(post.slug)}
                        unoptimized={post.image.startsWith('http')}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-mist/30 to-mist/60 text-gray">
                        <span className="text-3xl mb-1">📄</span>
                        <span className="text-xs font-medium">{post.category}</span>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray">
                    <span className="inline-block rounded-full bg-mist px-2.5 py-0.5 text-xs font-medium text-slate">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`} className="mt-2 block">
                    <h2 className="text-base font-medium leading-[1.25] text-ink transition-colors group-hover:text-teal-deep md:text-lg line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="mt-2 flex-1 text-sm text-slate line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-mist/50 px-2 py-0.5 text-xs text-gray">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-xs text-gray">+{post.tags.length - 2}</span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-3 flex items-center justify-between border-t border-mist pt-3">
                    <span className="flex items-center gap-1.5 text-xs text-gray">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-sm font-medium text-teal-deep transition-colors hover:gap-2"
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          {visiblePosts < filteredPosts.length && (
            <div className="mt-8 flex justify-center md:mt-12">
              <button
                onClick={loadMore}
                className="rounded-lg border border-mist bg-white px-8 py-3 text-sm font-medium text-ink transition-colors hover:bg-mist hover:text-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20"
              >
                Load More Posts ({visiblePosts} of {filteredPosts.length})
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-mist bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1120px] px-4 text-center md:px-6">
          <div className="mx-auto max-w-[68ch]">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate md:text-sm">
              Stay Updated
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-ink md:text-3xl">
              Get DevOps Insights in Your Inbox
            </h2>
            <p className="mt-3 text-base text-slate md:text-lg">
              Subscribe to our newsletter for the latest DevOps best practices, 
              cloud infrastructure tips, and industry updates.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-[200px] max-w-sm rounded-lg border border-mist px-4 py-3 text-sm text-ink placeholder:text-gray focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20"
                aria-label="Email address"
              />
              <button className="rounded-lg bg-teal-deep px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-deep/90">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-gray">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </main>
  );
}