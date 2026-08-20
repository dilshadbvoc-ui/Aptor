"use client";

import { useState, useEffect } from "react";
import { X, Send, GraduationCap, User, Mail, Phone, MapPin, School, Crown, Sparkles, Award, CheckCircle2 } from "lucide-react";

interface ScholarshipApplicationFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function ScholarshipApplicationForm({ onClose, onSuccess }: ScholarshipApplicationFormProps) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
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

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const validateField = (name: string, value: string | string[]) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case "email":
        if (typeof value === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = "Please enter a valid email address";
        } else {
          delete newErrors.email;
        }
        break;
      case "mobile":
        if (typeof value === 'string' && !/^[\+]?[\d\s\-\(\)]{10,15}$/.test(value)) {
          newErrors.mobile = "Please enter a valid mobile number";
        } else {
          delete newErrors.mobile;
        }
        break;
      case "pin":
        if (typeof value === 'string' && value.length < 4) {
          newErrors.pin = "PIN must be at least 4 characters";
        } else {
          delete newErrors.pin;
        }
        break;
    }
    
    setErrors(newErrors);
  };

  const handleCourseChange = (courseId: string, checked: boolean) => {
    const newCourses = checked
      ? [...formData.coursePreferred, courseId]
      : formData.coursePreferred.filter(c => c !== courseId);
    
    setFormData(prev => ({
      ...prev,
      coursePreferred: newCourses
    }));
    
    if (newCourses.length === 0) {
      setErrors(prev => ({ ...prev, coursePreferred: "Please select at least one course" }));
    } else {
      setErrors(prev => {
        const { coursePreferred, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.coursePreferred.length === 0) {
      setErrors(prev => ({ ...prev, coursePreferred: "Please select at least one course" }));
      return;
    }
    
    if (Object.keys(errors).length > 0) {
      alert("Please resolve form errors before submitting");
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch("/api/scholarship-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      alert("Scholarship application submitted successfully! Our counselling team will contact you soon.");
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
    <div className="fixed inset-0 z-modal flex items-center justify-center p-3 sm:p-4 mobile-safe-area">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#01160d]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-emerald-100 flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-[#01160d] via-[#032619] to-[#063326] p-6 sm:p-8 text-white">
          {/* Subtle Ambient Glow */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <Crown className="w-6 sm:w-7 h-6 sm:h-7 text-[#eab308]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#095738] border border-emerald-500/30 rounded-full text-[11px] font-bold text-emerald-300 uppercase tracking-wider mb-1.5 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#eab308]" />
                  <span>Official Aptor Scholarship</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">Scholarship Application</h2>
                <p className="text-emerald-100/80 text-xs sm:text-sm font-medium mt-0.5">
                  Fill in your details below to apply for financial assistance & counselling
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/90 hover:text-white flex items-center justify-center transition-all shrink-0 ml-2 border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Section 1: Applicant Information */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#063326] flex items-center gap-2 mb-4 pb-2 border-b border-emerald-100">
              <User className="w-4 h-4 text-[#eab308]" />
              <span>Personal Details</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Father&apos;s Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fatherName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fatherName: e.target.value }))}
                  placeholder="Father's full name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Mother&apos;s Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.motherName}
                  onChange={(e) => setFormData(prev => ({ ...prev, motherName: e.target.value }))}
                  placeholder="Mother's full name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  School / College Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.schoolName}
                  onChange={(e) => setFormData(prev => ({ ...prev, schoolName: e.target.value }))}
                  placeholder="Current or last attended school"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Contact & Address */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#063326] flex items-center gap-2 mb-4 pb-2 border-b border-emerald-100">
              <MapPin className="w-4 h-4 text-[#eab308]" />
              <span>Contact & Address</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Address <span className="text-rose-500">*</span>
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  rows={2}
                  placeholder="Enter complete residential address"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none resize-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    PIN Code <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.pin}
                    onChange={(e) => setFormData(prev => ({ ...prev, pin: e.target.value }))}
                    onBlur={(e) => validateField('pin', e.target.value)}
                    placeholder="PIN Code"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.pin ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none`}
                    required
                  />
                  {errors.pin && <p className="mt-1 text-xs font-semibold text-rose-500">{errors.pin}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    E-mail Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    onBlur={(e) => validateField('email', e.target.value)}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.email ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none`}
                    required
                  />
                  {errors.email && <p className="mt-1 text-xs font-semibold text-rose-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData(prev => ({ ...prev, mobile: e.target.value }))}
                    onBlur={(e) => validateField('mobile', e.target.value)}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 bg-slate-50 border ${errors.mobile ? 'border-rose-500' : 'border-slate-200'} rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none`}
                    required
                  />
                  {errors.mobile && <p className="mt-1 text-xs font-semibold text-rose-500">{errors.mobile}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Course Preferences */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#063326] flex items-center gap-2 mb-3 pb-2 border-b border-emerald-100">
              <GraduationCap className="w-4 h-4 text-[#eab308]" />
              <span>Preferred Courses <span className="text-rose-500">*</span></span>
            </h3>

            <p className="text-xs text-slate-500 mb-3 font-medium">Select one or more courses you are interested in pursuing:</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {courses.map((course) => {
                const isSelected = formData.coursePreferred.includes(course.id);
                return (
                  <label 
                    key={course.id} 
                    className={`cursor-pointer px-3.5 py-2.5 rounded-xl border flex items-center gap-2.5 transition-all text-xs font-bold uppercase tracking-wider select-none ${
                      isSelected
                        ? "bg-[#d8f5e5] border-[#10b981] text-[#095738] shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => handleCourseChange(course.id, e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? "bg-[#095738] border-[#095738] text-white" : "border-slate-300 bg-white"
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3 h-3 text-emerald-300" />}
                    </div>
                    <span className="truncate">{course.label}</span>
                  </label>
                );
              })}
            </div>
            {errors.coursePreferred && <p className="mt-2 text-xs font-semibold text-rose-500">{errors.coursePreferred}</p>}

            {/* Other Course Input */}
            {formData.coursePreferred.includes("Others") && (
              <div className="mt-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Specify Other Course
                </label>
                <input
                  type="text"
                  value={formData.otherCourse}
                  onChange={(e) => setFormData(prev => ({ ...prev, otherCourse: e.target.value }))}
                  placeholder="Enter custom course name"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#10b981] focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
                />
              </div>
            )}
          </div>

          {/* Form Actions Footer */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || formData.coursePreferred.length === 0 || Object.keys(errors).length > 0}
              className="px-7 py-3 bg-[#eab308] hover:bg-[#d99b0c] text-[#05291b] rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-[#05291b]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Crown className="w-4 h-4 shrink-0" />
                  <span>Submit Application</span>
                  <Send className="w-3.5 h-3.5 shrink-0" />
                </>
              )}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}