"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "@/components/providers/SessionProvider";
import { ArrowLeft, Save, Eye, Building } from "lucide-react";
import Link from "next/link";

interface College {
  _id: string;
  name: string;
  description: string;
  location: string;
  establishedYear: number;
  type: "engineering" | "medical" | "arts" | "science" | "commerce" | "law" | "other";
  affiliation?: string;
  website?: string;
  slug: string;
  featured: boolean;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export default function EditCollegePage() {
  const { status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [college, setCollege] = useState<College | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    establishedYear: new Date().getFullYear(),
    type: "engineering" as "engineering" | "medical" | "arts" | "science" | "commerce" | "law" | "other",
    affiliation: "",
    website: "",
    slug: "",
    featured: false,
    seo: {
      title: "",
      description: "",
      keywords: [] as string[]
    }
  });

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    fetchCollege();
  }, [status, router, params.id]);

  const fetchCollege = async () => {
    try {
      const response = await fetch(`/api/admin/colleges/${params.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch college");
      }
      const data = await response.json();
      setCollege(data.college);
      setFormData({
        name: data.college.name || "",
        description: data.college.description || "",
        location: data.college.location || "",
        establishedYear: data.college.establishedYear || new Date().getFullYear(),
        type: data.college.type || "engineering",
        affiliation: data.college.affiliation || "",
        website: data.college.website || "",
        slug: data.college.slug || "",
        featured: data.college.featured || false,
        seo: {
          title: data.college.seo?.title || "",
          description: data.college.seo?.description || "",
          keywords: data.college.seo?.keywords || []
        }
      });
    } catch (error) {
      console.error("Error fetching college:", error);
      alert("Failed to fetch college. Please try again.");
      router.push("/admin/colleges");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/admin/colleges/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update college");
      }

      alert("College updated successfully!");
      router.push("/admin/colleges");
    } catch (error) {
      console.error("Error updating college:", error);
      alert(error instanceof Error ? error.message : "Failed to update college. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleNameChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      name,
      slug: generateSlug(name)
    }));
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center mobile-safe-area">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading college...</p>
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
            href="/admin/colleges"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Colleges
          </Link>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4">
            <Building className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">EDIT COLLEGE</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Edit <span className="gradient-text">College</span>
          </h1>
          <p className="text-gray-400">Update college information and settings</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="card-premium p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  College Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Established Year *
                </label>
                <input
                  type="number"
                  value={formData.establishedYear}
                  onChange={(e) => setFormData(prev => ({ ...prev, establishedYear: parseInt(e.target.value) }))}
                  min="1800"
                  max={new Date().getFullYear()}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as any }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                >
                  <option value="engineering">Engineering</option>
                  <option value="medical">Medical</option>
                  <option value="arts">Arts</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                  <option value="law">Law</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Affiliation
                </label>
                <input
                  type="text"
                  value={formData.affiliation}
                  onChange={(e) => setFormData(prev => ({ ...prev, affiliation: e.target.value }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="e.g., University of XYZ"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Website
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="https://example.com"
              />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={6}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>

            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="mr-2 rounded border-gray-600 bg-gray-700 text-yellow-400 focus:ring-yellow-400"
                />
                <span className="text-gray-300">Featured College</span>
              </label>
            </div>
          </div>

          {/* SEO Section */}
          <div className="card-premium p-6">
            <h2 className="text-xl font-semibold text-white mb-4">SEO Settings</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SEO Title
                </label>
                <input
                  type="text"
                  value={formData.seo.title}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    seo: { ...prev.seo, title: e.target.value } 
                  }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SEO Description
                </label>
                <textarea
                  value={formData.seo.description}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    seo: { ...prev.seo, description: e.target.value } 
                  }))}
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  SEO Keywords (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.seo.keywords.join(", ")}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    seo: { 
                      ...prev.seo, 
                      keywords: e.target.value.split(",").map(keyword => keyword.trim()).filter(keyword => keyword) 
                    } 
                  }))}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <Link
              href={`/colleges/${formData.slug}`}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Preview
            </Link>
            
            <div className="flex gap-3">
              <Link
                href="/admin/colleges"
                className="px-6 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 font-medium transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}