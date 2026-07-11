import type { MetadataRoute } from "next";

const BASE_URL = "https://hiredevopsexpert.com";

// PLACEHOLDER: real routes get added here as pages ship in later parts.
const PATHS = [
  "/",
  "/contact",
  "/hire-devops-engineer",
  "/aws-devops-services",
  "/managed-devops-services",
  "/devops-for-startups",
  "/ci-cd-pipeline-setup-services",
  "/infrastructure-as-code-services",
  "/terraform-consulting-services",
  "/kubernetes-consulting-services",
  "/devops-automation-services",
  "/devsecops-services",
  "/devops-monitoring-observability-services",
  "/cloud-migration-devops-services",
  "/white-label-devops-services",
  "/docker-consulting-services",
  "/azure-devops-consulting-services",
  "/gcp-devops-services",
  "/devops-for-ai-startups",
  // Sprint 1 supporting pages (Part 7)
  "/blog/how-to-hire-a-devops-engineer",
  "/blog/when-to-hire-a-devops-engineer",
  "/ongoing-devops-support",
  "/devops-as-a-service",
  "/devops-support-for-saas-companies",
  "/aws-devops-consulting-services",
  "/blog/how-to-set-up-ci-cd-pipeline-for-saas",
  // Sprint 2 supporting pages (Part 7)
  "/blog/devops-engineer-hourly-rate-cost",
  "/blog/dedicated-devops-engineer-vs-freelance",
  "/blog/minimum-viable-devops-for-startups",
  "/blog/do-i-need-devops-for-my-saas",
  "/aws-cost-optimization-services",
  "/blog/how-to-reduce-aws-cloud-costs",
  "/blog/aws-ecs-vs-eks",
  "/jenkins-pipeline-setup",
  "/github-actions-setup-service",
  "/kubernetes-cluster-setup-services",
  "/eks-setup-services",
  "/terraform-aws-services",
  "/blog/terraform-vs-cloudformation",
  "/infrastructure-automation-services",
  "/secure-ci-cd-pipeline-services",
  "/cloud-security-devops-services",
  "/prometheus-grafana-setup-services",
  "/blog/devops-monitoring-checklist",
  "/aws-migration-services",
  "/white-label-devops-for-agencies",
  "/blog/devops-agency-vs-in-house-vs-fractional",
  // Sprint 3 supporting pages (Part 7)
  "/gitlab-ci-cd-services",
  "/blog/jenkins-vs-github-actions",
  "/blog/docker-vs-kubernetes",
  "/kubernetes-migration-services",
  "/cloud-automation-services",
  "/pci-dss-devops-services",
  "/datadog-implementation-services",
  "/azure-migration-services",
  "/heroku-to-aws-migration-services",
  "/docker-deployment-services",
  "/dockerize-application-service",
  "/hire-azure-devops-engineer",
  "/llm-app-deployment-services",
  "/devops-for-fintech-startups",
  "/blog/best-devops-services-for-startups",
  "/blog/what-does-a-devops-engineer-do",
  // Backlog supporting pages (Part 7)
  "/render-to-aws-migration-services",
  "/firebase-to-aws-migration-services",
  "/google-cloud-devops-consulting",
  "/gpu-infrastructure-setup-service",
  "/mlops-setup-services-for-startups",
  "/devops-for-ecommerce-peak-scaling",
  "/devops-for-edtech-startups",
  "/blog/devops-tools-for-startups",
  "/blog/devops-roadmap-for-startups",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PATHS.map((path) => ({
    url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
    lastModified,
  }));
}
