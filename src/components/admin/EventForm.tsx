"use client";

import { useState, useEffect } from "react";
import { Save, X, Calendar, MapPin, Users, Clock, Crown } from "lucide-react";

interface Event {
  _id?: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "workshop" | "seminar" | "webinar" | "conference" | "fair" | "other";
  capacity?: number;
  registrationDeadline?: string;
  fee?: string;
  slug: string;
  featured: boolean;
  isActive: boolean;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

interface EventFormProps {
  event?: Event | null;
  onSubmit: (data: Partial<Event>) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

export default function EventForm({ event, onSubmit, onCancel, loading = false }: EventFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
    type: "workshop" as "workshop" | "seminar" | "webinar" | "conference" | "fair" | "other",
    capacity: "",
    registrationDeadline: "",
    fee: "",
    slug: "",
    featured: false,
    isActive: true,
    seo: {
      title: "",
      description: "",
      keywords: [] as string[]
    }
  });

  useEffect(() => {
    if (event) {
      const eventData = {
        title: event.title || "",
        description: event.description || "",
        startDate: event.startDate ? new Date(event.startDate).toISOString().slice(0, 16) : "",
        endDate: event.endDate ? new Date(event.endDate).toISOString().slice(0, 16) : "",
        location: event.location || "",
        type: event.type || "workshop",
        capacity: event.capacity?.toString() || "",
        registrationDeadline: event.registrationDeadline ? new Date(event.registrationDeadline).toISOString().slice(0, 16) : "",
        fee: event.fee || "",
        slug: event.slug || "",
        featured: event.featured || false,
        isActive: event.isActive !== false,
        seo: {
          title: event.seo?.title || "",
          description: event.seo?.description || "",
          keywords: event.seo?.keywords || []
        }
      };
      setFormData(eventData);
    }
  }, [event]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      capacity: formData.capacity ? parseInt(formData.capacity) : undefined,
      startDate: new Date(formData.startDate).toISOString(),
      endDate: new Date(formData.endDate).toISOString(),
      registrationDeadline: formData.registrationDeadline ? new Date(formData.registrationDeadline).toISOString() : undefined
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
                {event ? "Edit Event" : "Add New Event"}
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
                  Event Title *
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Start Date & Time *
                </label>
                <input
                  type="datetime-local"
                  value={formData.startDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label className="form-label">
                  <Clock className="w-4 h-4 inline mr-1" />
                  End Date & Time *
                </label>
                <input
                  type="datetime-local"
                  value={formData.endDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  Event Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as any }))}
                  className="form-input"
                  required
                >
                  <option value="workshop">Workshop</option>
                  <option value="seminar">Seminar</option>
                  <option value="webinar">Webinar</option>
                  <option value="conference">Conference</option>
                  <option value="fair">Fair</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="form-label">
                  <Users className="w-4 h-4 inline mr-1" />
                  Capacity
                </label>
                <input
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData(prev => ({ ...prev, capacity: e.target.value }))}
                  min="1"
                  className="form-input"
                />
              </div>
              
              <div>
                <label className="form-label">
                  Registration Deadline
                </label>
                <input
                  type="datetime-local"
                  value={formData.registrationDeadline}
                  onChange={(e) => setFormData(prev => ({ ...prev, registrationDeadline: e.target.value }))}
                  className="form-input"
                />
              </div>
              
              <div>
                <label className="form-label">
                  Fee
                </label>
                <input
                  type="text"
                  value={formData.fee}
                  onChange={(e) => setFormData(prev => ({ ...prev, fee: e.target.value }))}
                  placeholder="e.g., Free, $50, ₹500"
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
                <span className="text-foreground">Featured Event</span>
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
              {loading ? "Saving..." : "Save Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}