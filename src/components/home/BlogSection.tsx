// components/home/BlogSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";
import { getLatestPosts } from "@/lib/blog-data";

export default function BlogSection() {
  // Get the 3 most recent posts
  const latestPosts = getLatestPosts(3);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMMM d, yyyy");
    } catch {
      return dateString;
    }
  };

  return (
    <section className="border-y border-mist bg-off py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-teal-deep md:text-sm">
              Latest Insights
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-ink md:text-3xl lg:text-4xl">
              From Our Blog
            </h2>
            <p className="mt-2 max-w-[52ch] text-sm text-slate md:text-base">
              Practical DevOps insights, best practices, and expert advice for startups and SaaS teams.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-mist bg-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-mist hover:text-teal-deep whitespace-nowrap"
          >
            View All Posts
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-mist bg-white transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {/* Image */}
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden bg-mist">
                <div className="relative aspect-[16/9] w-full">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
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
                  <h3 className="text-base font-medium leading-[1.25] text-ink transition-colors group-hover:text-teal-deep md:text-lg line-clamp-2">
                    {post.title}
                  </h3>
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
      </div>
    </section>
  );
}