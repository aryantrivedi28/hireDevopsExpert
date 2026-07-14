// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";

// GoHighLevel Webhook URL
// Replace with your actual GoHighLevel webhook URL
const GOHIGHLEVEL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/tLgocxm8SbQdnP97RnEb/webhook-trigger/a36559c3-66a1-4ae1-aec4-c6a038fa3dae";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "devops-as-a-service", label: "DevOps as a Service" },
  { value: "managed-devops", label: "Managed DevOps" },
  { value: "aws-devops", label: "AWS DevOps" },
  { value: "kubernetes-consulting", label: "Kubernetes Consulting" },
  { value: "ci-cd-pipeline", label: "CI/CD Pipeline Setup" },
  { value: "cloud-migration", label: "Cloud Migration" },
  { value: "devsecops", label: "DevSecOps" },
  { value: "terraform-consulting", label: "Terraform Consulting" },
  { value: "other", label: "Other" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select your budget range..." },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-plus", label: "$100,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^[\d\s\-+()]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 20) {
      newErrors.message = "Please provide more details (at least 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Prepare data for GoHighLevel
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        source: "Website Contact Form",
        timestamp: new Date().toISOString(),
      };

      // Send to GoHighLevel Webhook
      const response = await fetch(GOHIGHLEVEL_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success
      setSubmitStatus({
        type: "success",
        message: "Thank you! A senior engineer will review your message and get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
      
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly at hello@hiredevopsexpert.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Full Name <span className="text-teal-deep">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 w-full rounded-lg border ${
            errors.name ? "border-red-500" : "border-mist"
          } px-4 py-2.5 text-sm text-ink placeholder:text-gray focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20`}
          placeholder="John Doe"
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email Address <span className="text-teal-deep">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 w-full rounded-lg border ${
            errors.email ? "border-red-500" : "border-mist"
          } px-4 py-2.5 text-sm text-ink placeholder:text-gray focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20`}
          placeholder="john@company.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-ink">
          Phone Number <span className="text-xs text-slate">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-1 w-full rounded-lg border ${
            errors.phone ? "border-red-500" : "border-mist"
          } px-4 py-2.5 text-sm text-ink placeholder:text-gray focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20`}
          placeholder="+1 (234) 567-890"
          disabled={isSubmitting}
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink">
          Company Name <span className="text-xs text-slate">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-mist px-4 py-2.5 text-sm text-ink placeholder:text-gray focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20"
          placeholder="Acme Corp"
          disabled={isSubmitting}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-ink">
          Service Interested In <span className="text-xs text-slate">(optional)</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-mist px-4 py-2.5 text-sm text-ink focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20"
          disabled={isSubmitting}
        >
          {SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-ink">
          Budget Range <span className="text-xs text-slate">(optional)</span>
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-mist px-4 py-2.5 text-sm text-ink focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20"
          disabled={isSubmitting}
        >
          {BUDGET_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Tell us about your project <span className="text-teal-deep">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 w-full rounded-lg border ${
            errors.message ? "border-red-500" : "border-mist"
          } px-4 py-2.5 text-sm text-ink placeholder:text-gray focus:border-teal-deep focus:outline-none focus:ring-2 focus:ring-teal-deep/20`}
          placeholder="Tell us about your infrastructure, what's working, what's not, and what you're hoping to achieve..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message}</p>
        )}
        <p className="mt-1 text-xs text-slate">
          Minimum 20 characters. The more details, the better we can help.
        </p>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-deep px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-deep/90 focus:outline-none focus:ring-2 focus:ring-teal-deep/20 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus.type === "success" && (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          <div>
            <p className="font-medium text-green-800">Message Sent Successfully!</p>
            <p className="text-sm text-green-700">{submitStatus.message}</p>
          </div>
        </div>
      )}

      {submitStatus.type === "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <div>
            <p className="font-medium text-red-800">Something Went Wrong</p>
            <p className="text-sm text-red-700">{submitStatus.message}</p>
          </div>
        </div>
      )}

      {/* Privacy Note */}
      <p className="text-xs text-slate">
        By submitting this form, you agree to our{" "}
        <Link href="/privacy" className="text-teal-deep hover:underline">
          Privacy Policy
        </Link>
        . Your information will be used solely to respond to your inquiry.
      </p>
    </form>
  );
}