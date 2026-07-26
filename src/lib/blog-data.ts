// lib/blog-data.ts
export interface BlogPost {
      slug: string;
      title: string;
      excerpt: string;
      category: string;
      readTime: string;
      date: string;
      image: string;
      tags: string[];
      featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
      {
            slug: "devops-lifecycle",
            title: "The DevOps Lifecycle: All 8 Phases Explained",
            excerpt: "The DevOps lifecycle is usually drawn as an eight-phase infinity loop, though some models list six or seven. Here is what each phase actually does, why it is a loop, and how security fits in.",
            category: "DevOps Fundamentals",
            readTime: "9 min read",
            date: "2026-07-27",
            image: "/images/blog/devops-lifecycle.jpg",
            tags: ["DevOps", "DevOps Lifecycle", "DevSecOps", "CI/CD", "Infinity Loop"],
            featured: true,
      },
      {
            slug: "do-i-need-devops-for-saas",
            title: "Do I Need DevOps for My SaaS? A Maturity Check",
            excerpt: "Not sure if your SaaS needs DevOps yet? Use the DevOps maturity model to find where your team actually stands, run an honest self-assessment with DORA metrics, and see which level you should aim for.",
            category: "DevOps Fundamentals",
            readTime: "9 min read",
            date: "2026-07-26",
            image: "/images/blog/do-i-need-devops-for-saas.jpg",
            tags: ["DevOps", "DevOps Maturity", "DORA Metrics", "Startups", "SaaS"],
            featured: true,
      },
      {
            slug: "benefits-of-devops",
            title: "The Benefits of DevOps: The Honest Version",
            excerpt: "DevOps promises faster releases, less downtime, and lower costs. Here is what those benefits actually look like for a startup, how to measure them, and why most of the statistics you will read are wrong.",
            category: "DevOps Fundamentals",
            readTime: "10 min read",
            date: "2026-07-24",
            image: "https://razorops.com/images/blog/devops-benefits.jpeg",
            tags: ["DevOps", "DevOps Benefits", "DORA Metrics", "Startups", "SaaS"],
            featured: true,
      },
      {
            slug: "what-is-docker",
            title: "What Is Docker? Containers Explained for Founders",
            excerpt: "Docker packages your app and everything it needs into a container that runs the same everywhere. Here's what Docker is, how images and containers differ, and when you need it.",
            category: "DevOps Fundamentals",
            readTime: "9 min read",
            date: "2026-07-24",
            image: "https://velog.velcdn.com/images/jiti/post/b188b8a3-69f2-4f4e-b2ae-65558d397868/image.png",
            tags: ["Docker", "Containers", "Docker Image vs Container", "DevOps", "Containerization"],
            featured: true,
      },
      {
            slug: "what-is-kubernetes",
            title: "What Is Kubernetes? A Plain-English Guide for Startups",
            excerpt: "Kubernetes (K8s) automates running containers at scale. Here's what it is, how pods, nodes, and clusters fit together, and whether your startup actually needs it.",
            category: "Cloud & Infrastructure",
            readTime: "8 min read",
            date: "2026-07-23",
            image: "https://images.prismic.io/alpacked/b7ca0af0-4971-4fdb-a6a4-b648c0160e63_What+is+Kubernetes.jpg?auto=compress,format",
            tags: ["Kubernetes", "Containers", "Cloud Native", "DevOps"],
            featured: true,
      },
      {
            slug: "what-is-infrastructure-as-code",
            title: "What Is Infrastructure as Code (IaC)? A 2026 Guide",
            excerpt: "Infrastructure as code (IaC) lets you build and manage cloud infrastructure with version-controlled code instead of manual setup. Here's what it means and how to start.",
            category: "Cloud & Infrastructure",
            readTime: "8 min read",
            date: "2026-07-22",
            image: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_03_MicrosoftTeams-image-1.jpg",
            tags: ["Infrastructure as Code", "Terraform", "OpenTofu", "IaC"],
            featured: true,
      },
      {
            slug: "what-is-ci-cd",
            title: "What Is CI/CD? Continuous Integration & Delivery (2026)",
            excerpt: "CI/CD automates building, testing, and releasing code so your team ships faster without breaking production. Here's what it means and how to start.",
            category: "DevOps Fundamentals",
            readTime: "8 min read",
            date: "2026-07-22",
            image: "https://www.atulhost.com/wp-content/uploads/2021/10/cicd.png",
            tags: ["CI/CD", "Continuous Integration", "Continuous Delivery", "DevOps Pipelines"],
            featured: true,
      },
      {
            slug: "what-does-a-devops-engineer-do",
            title: "What Does a DevOps Engineer Do? Role, Skills & Cost (2026)",
            excerpt: "A DevOps engineer owns the path from a developer's laptop to production. Here's what they do, the skills they use, what they cost, and if your startup needs one.",
            category: "DevOps Careers & Hiring",
            readTime: "9 min read",
            date: "2026-07-21",
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
            date: "2026-07-21",
            image: "https://testautomationtools.dev/wp-content/uploads/2025/07/What-is-DevOps-main_img.jpeg",
            tags: ["DevOps", "Startups", "SaaS", "CI/CD"],
            featured: true,
      },

      // Existing Blog Posts
      //   {
      //     slug: "aws-ecs-vs-eks",
      //     title: "AWS ECS vs EKS: Which Container Orchestration Should You Choose?",
      //     excerpt: "Compare AWS ECS and EKS for container orchestration. Learn the key differences, use cases, and when to choose each for your startup infrastructure.",
      //     category: "AWS",
      //     readTime: "8 min read",
      //     date: "2024-01-15",
      //     image: "https://www.rishabhsoft.com/wp-content/uploads/2024/03/Banner-Image-AWS-ECS-VS-EKS.jpg",
      //     tags: ["AWS", "ECS", "EKS", "Container Orchestration"],
      //   },
      //   {
      //     slug: "best-devops-services-for-startups",
      //     title: "Best DevOps Services for Startups in 2024",
      //     excerpt: "Discover the essential DevOps services every startup needs. From CI/CD to infrastructure automation, learn how to build a robust DevOps foundation.",
      //     category: "DevOps",
      //     readTime: "10 min read",
      //     date: "2024-01-10",
      //     image: "/images/blog/devops-startups.jpg",
      //     tags: ["DevOps", "Startups", "Best Practices"],
      //   },
      //   {
      //     slug: "dedicated-devops-engineer-vs-freelance",
      //     title: "Dedicated DevOps Engineer vs Freelance: Which is Right for Your Startup?",
      //     excerpt: "Compare dedicated DevOps engineers and freelance contractors. Learn the pros, cons, and cost implications for your startup infrastructure needs.",
      //     category: "Hiring",
      //     readTime: "9 min read",
      //     date: "2024-01-08",
      //     image: "/images/blog/dedicated-vs-freelance.jpg",
      //     tags: ["Hiring", "Freelance", "DevOps"],
      //   },
      //   {
      //     slug: "devops-agency-vs-in-house-vs-fractional",
      //     title: "DevOps Agency vs In-House vs Fractional: Which Model Works Best?",
      //     excerpt: "Compare different DevOps engagement models. Learn the pros and cons of agencies, in-house teams, and fractional DevOps engineers.",
      //     category: "DevOps",
      //     readTime: "11 min read",
      //     date: "2024-01-05",
      //     image: "/images/blog/devops-models.jpg",
      //     tags: ["DevOps", "Agency", "Fractional", "In-House"],
      //   },
      //   {
      //     slug: "devops-engineer-hourly-rate-cost",
      //     title: "DevOps Engineer Hourly Rate & Cost Guide 2024",
      //     excerpt: "Complete guide to DevOps engineer hourly rates. Learn about cost factors, regional differences, and what to expect when hiring DevOps talent.",
      //     category: "Hiring",
      //     readTime: "10 min read",
      //     date: "2024-01-03",
      //     image: "/images/blog/devops-rates.jpg",
      //     tags: ["Hiring", "Cost", "Rates"],
      //   },
      //   {
      //     slug: "devops-monitoring-checklist",
      //     title: "DevOps Monitoring Checklist: Essential Metrics for Production Systems",
      //     excerpt: "A comprehensive DevOps monitoring checklist. Learn what to monitor, key metrics, and how to set up effective observability for your infrastructure.",
      //     category: "Monitoring",
      //     readTime: "12 min read",
      //     date: "2024-01-01",
      //     image: "/images/blog/monitoring-checklist.jpg",
      //     tags: ["Monitoring", "Observability", "Metrics"],
      //   },
      //   {
      //     slug: "devops-roadmap-for-startups",
      //     title: "DevOps Roadmap for Startups: From MVP to Scale",
      //     excerpt: "A step-by-step DevOps roadmap for startups. Learn how to build your infrastructure from MVP to production-scale systems.",
      //     category: "Startups",
      //     readTime: "14 min read",
      //     date: "2023-12-28",
      //     image: "/images/blog/devops-roadmap.jpg",
      //     tags: ["Startups", "Roadmap", "Scaling"],
      //   },
      //   {
      //     slug: "devops-tools-for-startups",
      //     title: "Best DevOps Tools for Startups in 2024",
      //     excerpt: "Discover the essential DevOps tools every startup needs. From CI/CD to monitoring, learn which tools to use and when to adopt them.",
      //     category: "Tools",
      //     readTime: "11 min read",
      //     date: "2023-12-25",
      //     image: "/images/blog/devops-tools.jpg",
      //     tags: ["Tools", "CI/CD", "Monitoring", "Startups"],
      //   },
      //   {
      //     slug: "do-i-need-devops-for-my-saas",
      //     title: "Do I Need DevOps for My SaaS? A Decision Guide",
      //     excerpt: "Learn when your SaaS needs dedicated DevOps expertise. Understand the signs, timing, and benefits of adopting DevOps for your SaaS product.",
      //     category: "SaaS",
      //     readTime: "9 min read",
      //     date: "2023-12-22",
      //     image: "/images/blog/saas-devops.jpg",
      //     tags: ["SaaS", "Decision Guide", "DevOps"],
      //   },
      //   {
      //     slug: "docker-vs-kubernetes",
      //     title: "Docker vs Kubernetes: Understanding the Difference",
      //     excerpt: "Compare Docker and Kubernetes for container orchestration. Learn when to use each and how they work together in modern infrastructure.",
      //     category: "Containers",
      //     readTime: "10 min read",
      //     date: "2023-12-20",
      //     image: "/images/blog/docker-vs-k8s.jpg",
      //     tags: ["Docker", "Kubernetes", "Containers"],
      //   },
      //   {
      //     slug: "how-to-hire-a-devops-engineer",
      //     title: "How to Hire a DevOps Engineer: The Complete Guide",
      //     excerpt: "Learn the essential steps to hire the right DevOps engineer. From writing job descriptions to interviewing, this guide covers everything you need.",
      //     category: "Hiring",
      //     readTime: "15 min read",
      //     date: "2023-12-18",
      //     image: "/images/blog/hire-devops-engineer.jpg",
      //     tags: ["Hiring", "DevOps", "Interview"],
      //   },
      //   {
      //     slug: "how-to-reduce-aws-cloud-costs",
      //     title: "How to Reduce AWS Cloud Costs: Practical Strategies",
      //     excerpt: "Practical strategies to reduce AWS cloud costs. Learn about cost optimization, resource management, and best practices for AWS cost savings.",
      //     category: "AWS",
      //     readTime: "12 min read",
      //     date: "2023-12-15",
      //     image: "/images/blog/aws-cost-reduction.jpg",
      //     tags: ["AWS", "Cost Optimization", "Cloud"],
      //   },
      //   {
      //     slug: "how-to-set-up-ci-cd-pipeline-for-saas",
      //     title: "How to Set Up CI/CD Pipeline for SaaS: Complete Guide",
      //     excerpt: "Step-by-step guide to setting up CI/CD pipelines for SaaS applications. Learn best practices, tools, and automation strategies.",
      //     category: "CI/CD",
      //     readTime: "13 min read",
      //     date: "2023-12-12",
      //     image: "/images/blog/ci-cd-saas.jpg",
      //     tags: ["CI/CD", "SaaS", "Automation"],
      //   },
      //   {
      //     slug: "jenkins-vs-github-actions",
      //     title: "Jenkins vs GitHub Actions: Which CI/CD Tool Should You Choose?",
      //     excerpt: "Compare Jenkins and GitHub Actions for CI/CD. Learn the pros, cons, and use cases for each tool in modern DevOps workflows.",
      //     category: "CI/CD",
      //     readTime: "9 min read",
      //     date: "2023-12-10",
      //     image: "/images/blog/jenkins-vs-github-actions.jpg",
      //     tags: ["Jenkins", "GitHub Actions", "CI/CD"],
      //   },
      //   {
      //     slug: "minimum-viable-devops-for-startups",
      //     title: "Minimum Viable DevOps for Startups: What You Actually Need",
      //     excerpt: "Learn what constitutes minimum viable DevOps for startups. Focus on what matters most and avoid over-engineering your infrastructure.",
      //     category: "Startups",
      //     readTime: "10 min read",
      //     date: "2023-12-08",
      //     image: "/images/blog/mvp-devops.jpg",
      //     tags: ["Startups", "MVP", "DevOps"],
      //   },
      //   {
      //     slug: "terraform-vs-cloudformation",
      //     title: "Terraform vs CloudFormation: Infrastructure as Code Comparison",
      //     excerpt: "Compare Terraform and AWS CloudFormation for infrastructure as code. Learn which tool is right for your cloud infrastructure needs.",
      //     category: "Infrastructure",
      //     readTime: "11 min read",
      //     date: "2023-12-05",
      //     image: "/images/blog/terraform-vs-cf.jpg",
      //     tags: ["Terraform", "CloudFormation", "IaC"],
      //   },
      //   {
      //     slug: "when-to-hire-a-devops-engineer",
      //     title: "When to Hire a DevOps Engineer: Key Signs and Timing",
      //     excerpt: "Learn when to hire your first DevOps engineer. Understand the key signs, timing, and what to look for in a DevOps professional.",
      //     category: "Hiring",
      //     readTime: "8 min read",
      //     date: "2023-12-01",
      //     image: "/images/blog/when-to-hire.jpg",
      //     tags: ["Hiring", "Timing", "DevOps"],
      //   },
];

// Helper function to get unique categories
export const getCategories = () => {
      return ["All", ...new Set(BLOG_POSTS.map(post => post.category))].sort();
};

// Helper function to get featured posts
export const getFeaturedPosts = () => {
      return BLOG_POSTS.filter(post => post.featured);
};

// Helper function to get latest posts
export const getLatestPosts = (count: number = 3) => {
      return [...BLOG_POSTS]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, count);
};

// Helper function to get posts by category
export const getPostsByCategory = (category: string) => {
      if (category === "All") return BLOG_POSTS;
      return BLOG_POSTS.filter(post => post.category === category);
};

// Helper function to search posts
export const searchPosts = (query: string) => {
      if (!query.trim()) return BLOG_POSTS;
      const searchTerm = query.toLowerCase().trim();
      return BLOG_POSTS.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
};