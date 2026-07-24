// app/blog/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, Clock, ArrowRight, Search, ChevronDown } from "lucide-react";
import { 
  BLOG_POSTS, 
  getCategories, 
  getFeaturedPosts, 
  getPostsByCategory, 
  searchPosts 
} from "@/lib/blog-data";

// Get unique categories
const CATEGORIES = getCategories();

// Featured posts
const FEATURED_POSTS = getFeaturedPosts();

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
      filtered = getPostsByCategory(selectedCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      filtered = searchPosts(searchQuery);
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