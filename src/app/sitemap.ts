import type { MetadataRoute } from "next";

const BASE_URL = "https://hiredevopsexpert.com";

// Page configuration with metadata
interface SitemapPage {
  path: string;
  lastModified?: string;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

// Centralized page data with proper dates and priorities
const PAGES: SitemapPage[] = [
  // Homepage - Highest priority
  {
    path: "/",
    changeFrequency: "daily",
    priority: 1.0,
  },
  
  // Core pages
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  
  // Hiring pages (High priority - core business)
  {
    path: "/hire-devops-engineer",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/hire-azure-devops-engineer",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // Main service pages (High priority)
  {
    path: "/devops-as-a-service",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/managed-devops-services",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/devops-for-startups",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/aws-devops-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/aws-devops-consulting-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/azure-devops-consulting-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/gcp-devops-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/google-cloud-devops-consulting",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // Infrastructure & Automation
  {
    path: "/infrastructure-as-code-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/infrastructure-automation-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/cloud-automation-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/terraform-consulting-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/terraform-aws-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // Kubernetes & Containers
  {
    path: "/kubernetes-consulting-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/kubernetes-cluster-setup-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/eks-setup-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/kubernetes-migration-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/docker-consulting-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/docker-deployment-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/dockerize-application-service",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // CI/CD
  {
    path: "/ci-cd-pipeline-setup-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/secure-ci-cd-pipeline-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/jenkins-pipeline-setup",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/github-actions-setup-service",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/gitlab-ci-cd-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // DevOps Specializations
  {
    path: "/devops-automation-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/devsecops-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/devops-monitoring-observability-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/cloud-security-devops-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/devops-support-for-saas-companies",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/ongoing-devops-support",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/pci-dss-devops-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // Cloud Migration
  {
    path: "/cloud-migration-devops-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/aws-migration-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/azure-migration-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/heroku-to-aws-migration-services",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/render-to-aws-migration-services",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/firebase-to-aws-migration-services",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  
  // Cloud Cost & Optimization
  {
    path: "/aws-cost-optimization-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // Monitoring & Observability
  {
    path: "/datadog-implementation-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/prometheus-grafana-setup-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // Specialized
  {
    path: "/devops-for-ai-startups",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/devops-for-fintech-startups",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/devops-for-ecommerce-peak-scaling",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/devops-for-edtech-startups",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/llm-app-deployment-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/gpu-infrastructure-setup-service",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/mlops-setup-services-for-startups",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // White Label
  {
    path: "/white-label-devops-services",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/white-label-devops-for-agencies",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  
  // Blog posts - High priority, frequent updates
  {
    path: "/blog/how-to-hire-a-devops-engineer",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/when-to-hire-a-devops-engineer",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/how-to-set-up-ci-cd-pipeline-for-saas",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/devops-engineer-hourly-rate-cost",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/dedicated-devops-engineer-vs-freelance",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/minimum-viable-devops-for-startups",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/do-i-need-devops-for-my-saas",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/how-to-reduce-aws-cloud-costs",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/aws-ecs-vs-eks",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/terraform-vs-cloudformation",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/devops-monitoring-checklist",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/devops-agency-vs-in-house-vs-fractional",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/jenkins-vs-github-actions",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/docker-vs-kubernetes",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/best-devops-services-for-startups",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/what-does-a-devops-engineer-do",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/devops-tools-for-startups",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/blog/devops-roadmap-for-startups",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

// Helper function to get last modified date
function getLastModified(path: string): string {
  // You can replace this with actual data from your CMS
  // For now, use a reasonable default based on path type
  const now = new Date();
  
  if (path === "/") {
    return now.toISOString();
  }
  
  if (path.startsWith("/blog/")) {
    // Blog posts - assume updated within last 30 days
    const date = new Date(now);
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    return date.toISOString();
  }
  
  if (path.startsWith("/hire-") || path === "/devops-as-a-service" || path === "/managed-devops-services") {
    // Core business pages - updated within last 15 days
    const date = new Date(now);
    date.setDate(date.getDate() - Math.floor(Math.random() * 15));
    return date.toISOString();
  }
  
  // Other pages - updated within last 60 days
  const date = new Date(now);
  date.setDate(date.getDate() - Math.floor(Math.random() * 60));
  return date.toISOString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => {
    // Ensure path has proper formatting
    const path = page.path.startsWith("/") ? page.path : `/${page.path}`;
    const url = path === "/" ? BASE_URL : `${BASE_URL}${path}`;
    
    return {
      url,
      lastModified: page.lastModified || getLastModified(path),
      changeFrequency: page.changeFrequency || "weekly",
      priority: page.priority || 0.5,
    };
  });
}