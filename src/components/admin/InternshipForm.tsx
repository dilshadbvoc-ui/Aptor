"use client";

import { useState, useEffect } from "react";
import { Save, X, Briefcase, MapPin, Calendar, DollarSign, Crown } from "lucide-react";

interface Internship {
  _id?: string;
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

interface InternshipFormProps {
  internship?: Internship | null;
  onSubmit: (data: Partial<Internship>) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export default function InternshipForm({ internship, onSubmit, onCancel, loading = false }: InternshipFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "onsite" as "remote" | "onsite" | "hybrid",
    duration: "",
    stipend: "",
    description: "",
    requirements: [] as string[],
    applicationDeadline: "",
    startDate: "",
    applicationUrl: "",
    contactEmail: "",
    slug: "",
    featured: false,
    isActive: true,
    seo: {
      title: "",
      description: "",
      keywords: [] as string[]
    }
  });

  const [requirementInput, setRequirementInput] = useState("");

  useEffect(() => {
    if (internship) {
      const internshipData = {
        title: internship.title || "",
        company: internship.company || "",
        location: internship.location || "",
        type: internship.type || "onsite",
        duration: internship.duration || "",
        stipend: internship.stipend || "",
        description: internship.description || "",
        requirements: internship.requirements || [],
        applicationDeadline: internship.applicationDeadline ? new Date(internship.applicationDeadline).toISOString().slice(0, 16) : "",
        startDate: internship.startDate ? new Date(internship.startDate).toISOString().slice(0, 16) : "",
        applicationUrl: internship.applicationUrl || "",
        contactEmail: internship.contactEmail || "",
        slug: internship.slug || "",
        featured: internship.featured || false,
        isActive: internship.isActive !== false,
        seo: {
          title: internship.seo?.title || "",
          description: internship.seo?.description || "",
          keywords: internship.seo?.keywords || []
        }
      };
      setFormData(internshipData);
    }
  }, [internship]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };

  const addRequirement = () => {
    if (requirementInput.trim()) {
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, requirementInput.trim()]
      }));
      setRequirementInput("");
    }
  };

  const removeRequirement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      applicationDeadline: new Date(formData.applicationDeadline).toISOString(),
      startDate: new Date(formData.startDate).toISOString()
    };

    await onSubmit(submitData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-green-200 shadow-2xl">
        <form onSubmit={handleSubmit} className="section-padding space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-accent-500" />
              <h2 className="heading-lg text-foreground">
                {internship ? "Edit Internship" : "Add New Internship"}
              </h2>
            </div>
            <button
              type="button"
              onClick={onCancel}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="heading-md text-foreground">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">
                  <Briefcase className="w-4 h-4 inline mr-1" />
                  Internship Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">
                  Company *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div>
              <label className="form-label">
                Slug *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                className="form-input"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="form-label">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">
                  Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as any }))}
                  className="form-input"
                  required
                >
                  <option value="onsite">Onsite</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              
              <div>
                <label className="form-label">
                  Duration *
                </label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                  placeholder="e.g., 3 months, 6 weeks"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div>
              <label className="form-label">
                <DollarSign className="w-4 h-4 inline mr-1" />
                Stipend *
              </label>
              <input
                type="text"
                value={formData.stipend}
                onChange={(e) => setFormData(prev => ({ ...prev, stipend: e.target.value }))}
                placeholder="e.g., $1000/month, Unpaid, Performance-based"
                className="form-input"
                required
              />
            </div>

            <div>
              <label className="form-label">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="form-input"
                required
              />
            </div>

            <div>
              <label className="form-label">
                Requirements *
              </label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={requirementInput}
                    onChange={(e) => setRequirementInput(e.target.value)}
                    placeholder="Add a requirement"
                    className="flex-1 form-input"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                  />
                  <button
                    type="button"
                    onClick={addRequirement}
                    className="btn-primary"
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-1">
                  {formData.requirements.map((req, index) => (
                    <div key={index} className="flex items-center justify-between bg-secondary px-3 py-2 rounded-lg">
                      <span className="text-foreground">{req}</span>
                      <button
                        type="button"
                        onClick={() => removeRequirement(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Application Deadline *
                </label>
                <input
                  type="datetime-local"
                  value={formData.applicationDeadline}
                  onChange={(e) => setFormData(prev => ({ ...prev, applicationDeadline: e.target.value }))}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">
                  Start Date *
                </label>
                <input
                  type="datetime-local"
                  value={formData.startDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">
                  Application URL
                </label>
                <input
                  type="url"
                  value={formData.applicationUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, applicationUrl: e.target.value }))}
                  placeholder="https://company.com/apply"
                  className="form-input"
                />
              </div>
              
              <div>
                <label className="form-label">
                  Contact Email
                </label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                  placeholder="hr@company.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                  className="mr-2 rounded border-primary-300 bg-white text-primary-500 focus:ring-primary-400"
                />
                <span className="text-foreground">Featured Internship</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                  className="mr-2 rounded border-primary-300 bg-white text-primary-500 focus:ring-primary-400"
                />
                <span className="text-foreground">Active</span>
              </label>
            </div>
          </div>

          {/* SEO Section */}
          <div className="space-y-4">
            <h3 className="heading-md text-foreground">SEO Settings</h3>
            
            <div>
              <label className="form-label">
                SEO Title
              </label>
              <input
                type="text"
                value={formData.seo.title}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  seo: { ...prev.seo, title: e.target.value } 
                }))}
                className="form-input"
              />
            </div>
            
            <div>
              <label className="form-label">
                SEO Description
              </label>
              <textarea
                value={formData.seo.description}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  seo: { ...prev.seo, description: e.target.value } 
                }))}
                rows={3}
                className="form-input"
              />
            </div>
            
            <div>
              <label className="form-label">
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
                className="form-input"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <button
              type="button"
              onClick={onCancel}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {loading ? "Saving..." : "Save Internship"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}