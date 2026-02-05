"use client";

import { useState } from "react";
import { X, Send, GraduationCap, User, Mail, Phone, MapPin, School } from "lucide-react";

interface ScholarshipApplicationFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function ScholarshipApplicationForm({ onClose, onSuccess }: ScholarshipApplicationFormProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    schoolName: "",
    address: "",
    pin: "",
    email: "",
    mobile: "",
    landPhone: "",
    coursePreferred: [] as string[],
    otherCourse: ""
  });

  const courses = [
    { id: "MBBS", label: "MBBS" },
    { id: "BDS", label: "BDS" },
    { id: "ENGG", label: "Engineering" },
    { id: "PharmD", label: "PharmD" },
    { id: "Nursing", label: "Nursing" },
    { id: "Paramedical", label: "Paramedical" },
    { id: "Others", label: "Others" }
  ];

  const handleCourseChange = (courseId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        coursePreferred: [...prev.coursePreferred, courseId]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        coursePreferred: prev.coursePreferred.filter(c => c !== courseId)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/scholarship-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit application");
      }

      alert("Scholarship application submitted successfully! We will contact you soon.");
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(error instanceof Error ? error.message : "Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b">
            <div className="text-center flex-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <GraduationCap className="w-6 h-6 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-800">SCHOLARSHIP</h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-700">APPLICATION/ENQUIRY FORM</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Father's Name *
              </label>
              <input
                type="text"
                value={formData.fatherName}
                onChange={(e) => setFormData(prev => ({ ...prev, fatherName: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mother's Name *
              </label>
              <input
                type="text"
                value={formData.motherName}
                onChange={(e) => setFormData(prev => ({ ...prev, motherName: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <School className="w-4 h-4" />
                School Name *
              </label>
              <input
                type="text"
                value={formData.schoolName}
                onChange={(e) => setFormData(prev => ({ ...prev, schoolName: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4" />
              Address *
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PIN Code *
              </label>
              <input
                type="text"
                value={formData.pin}
                onChange={(e) => setFormData(prev => ({ ...prev, pin: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4" />
                E-mail *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Phone className="w-4 h-4" />
                Mobile *
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Land Phone
              </label>
              <input
                type="tel"
                value={formData.landPhone}
                onChange={(e) => setFormData(prev => ({ ...prev, landPhone: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Course Preferences */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Course Preferred * (Select at least one)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {courses.map((course) => (
                <label key={course.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.coursePreferred.includes(course.id)}
                    onChange={(e) => handleCourseChange(course.id, e.target.checked)}
                    className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500"
                  />
                  <span className="text-sm text-gray-700">{course.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Other Course */}
          {formData.coursePreferred.includes("Others") && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Please specify other course:
              </label>
              <input
                type="text"
                value={formData.otherCourse}
                onChange={(e) => setFormData(prev => ({ ...prev, otherCourse: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Enter course name"
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end gap-3 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || formData.coursePreferred.length === 0}
              className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}