"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "@/components/providers/SessionProvider";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import InternshipForm from "@/components/admin/InternshipForm";

interface Internship {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: "remote" | "onsite" | "hybrid";
  duration: string;
  stipend: string;
  description: string;
  requirements: string[];
  applicationDeadline: string;
  startDate: string;
  applicationUrl?: string;
  contactEmail?: string;
  slug: string;
  featured: boolean;
  isActive: boolean;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export default function EditInternshipPage() {
  const { status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [internship, setInternship] = useState<Internship | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    fetchInternship();
  }, [status, router, params.id]);

  const fetchInternship = async () => {
    try {
      const response = await fetch(`/api/admin/internships/${params.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch internship");
      }
      const data = await response.json();
      setInternship(data.internship);
    } catch (error) {
      console.error("Error fetching internship:", error);
      alert("Failed to fetch internship. Please try again.");
      router.push("/admin/internships");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: Partial<Internship>) => {
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/internships/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update internship");
      }

      alert("Internship updated successfully!");
      router.push("/admin/internships");
    } catch (error) {
      console.error("Error updating internship:", error);
      alert(error instanceof Error ? error.message : "Failed to update internship. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    router.push("/admin/internships");
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center mobile-safe-area">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading internship...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black mobile-safe-area">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/internships"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Internships
          </Link>
        </div>

        {/* Form */}
        {internship && (
          <InternshipForm
            internship={internship}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            loading={saving}
          />
        )}
      </div>
    </div>
  );
}