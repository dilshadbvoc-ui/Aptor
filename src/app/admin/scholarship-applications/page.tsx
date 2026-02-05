"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/components/providers/SessionProvider";
import { useRouter } from "next/navigation";
import { Search, Eye, CheckCircle, Clock, Star, Mail, Phone, MapPin, Calendar, User, GraduationCap, School, Filter } from "lucide-react";

interface ScholarshipApplication {
  _id: string;
  name: string;
  fatherName: string;
  motherName: string;
  schoolName: string;
  address: string;
  pin: string;
  email: string;
  mobile: string;
  landPhone?: string;
  coursePreferred: string[];
  otherCourse?: string;
  status: 'new' | 'under_review' | 'approved' | 'rejected' | 'contacted';
  notes?: string;
  assignedTo?: {
    _id: string;
    name: string;
    email: string;
  };
  reviewedAt?: string;
  reviewedBy?: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export default function ScholarshipApplicationsPage() {
  const { status } = useSession();
  const router = useRouter();
  const [applications, setApplications] = useState<ScholarshipApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [courseFilter, setCourseFilter] = useState<string>("all");

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    fetchApplications();
  }, [status, router]);

  const fetchApplications = async () => {
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.append("search", searchTerm);
      if (statusFilter !== "all") params.append("status", statusFilter);
      if (courseFilter !== "all") params.append("course", courseFilter);

      const response = await fetch(`/api/admin/scholarship-applications?${params}`);
      if (!response.ok) {
        throw new Error("Failed to fetch scholarship applications");
      }
      const data = await response.json();
      setApplications(data.applications || []);
    } catch (error) {
      console.error("Error fetching scholarship applications:", error);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status !== "loading" && status !== "unauthenticated") {
      fetchApplications();
    }
  }, [searchTerm, statusFilter, courseFilter]);

  const updateApplicationStatus = async (id: string, newStatus: string, notes?: string) => {
    try {
      const response = await fetch(`/api/admin/scholarship-applications/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus, notes }),
      });

      if (!response.ok) {
        throw new Error("Failed to update application status");
      }

      const result = await response.json();
      setApplications(prev => 
        prev.map(app => 
          app._id === id ? result.application : app
        )
      );
    } catch (error) {
      console.error("Error updating application status:", error);
      alert("Failed to update application status. Please try again.");
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Clock className="w-4 h-4 text-blue-400" />;
      case 'under_review': return <Eye className="w-4 h-4 text-yellow-400" />;
      case 'contacted': return <CheckCircle className="w-4 h-4 text-purple-400" />;
      case 'approved': return <Star className="w-4 h-4 text-green-400" />;
      case 'rejected': return <Clock className="w-4 h-4 text-red-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'under_review': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'contacted': return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'approved': return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'rejected': return 'bg-red-500/10 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center mobile-safe-area">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading scholarship applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black mobile-safe-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">SCHOLARSHIP APPLICATIONS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Scholarship <span className="gradient-text">Applications</span>
          </h1>
          <p className="text-gray-400">Review and manage scholarship applications</p>
        </div>

        {/* Controls */}
        <div className="card-premium p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              
              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="under_review">Under Review</option>
                  <option value="contacted">Contacted</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>

                <select
                  value={courseFilter}
                  onChange={(e) => setCourseFilter(e.target.value)}
                  className="px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option value="all">All Courses</option>
                  <option value="MBBS">MBBS</option>
                  <option value="BDS">BDS</option>
                  <option value="ENGG">Engineering</option>
                  <option value="PharmD">PharmD</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Paramedical">Paramedical</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid gap-6">
          {applications.map((application) => (
            <div key={application._id} className="card-premium p-6 hover-lift-premium">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{application.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {application.email}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {application.mobile}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {getStatusIcon(application.status)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(application.status)}`}>
                        {application.status.replace('_', ' ').charAt(0).toUpperCase() + application.status.replace('_', ' ').slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>Father: {application.fatherName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <User className="w-4 h-4" />
                      <span>Mother: {application.motherName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <School className="w-4 h-4" />
                      <span>School: {application.schoolName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>PIN: {application.pin}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>Preferred Courses:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {application.coursePreferred.map((course, index) => (
                        <span key={index} className="px-2 py-1 bg-yellow-400/10 text-yellow-400 rounded text-xs">
                          {course}
                        </span>
                      ))}
                      {application.otherCourse && (
                        <span className="px-2 py-1 bg-blue-400/10 text-blue-400 rounded text-xs">
                          Other: {application.otherCourse}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <strong>Address:</strong> {application.address}
                    </p>
                  </div>

                  {application.notes && (
                    <div className="mb-4 p-3 bg-black/30 rounded-lg">
                      <p className="text-gray-300 text-sm">
                        <strong>Notes:</strong> {application.notes}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Applied: {new Date(application.createdAt).toLocaleDateString()}</span>
                    {application.reviewedAt && (
                      <span>Reviewed: {new Date(application.reviewedAt).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:ml-6 min-w-[200px]">
                  <button
                    onClick={() => updateApplicationStatus(application._id, 'under_review')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 rounded-lg hover:bg-yellow-400/20 transition-colors text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    Under Review
                  </button>
                  <button
                    onClick={() => updateApplicationStatus(application._id, 'contacted')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-colors text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Mark Contacted
                  </button>
                  <button
                    onClick={() => updateApplicationStatus(application._id, 'approved')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-colors text-sm"
                  >
                    <Star className="w-4 h-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => updateApplicationStatus(application._id, 'rejected')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/20 transition-colors text-sm"
                  >
                    <Clock className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {applications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Applications Found</h3>
            <p className="text-gray-400">No scholarship applications match your current filters.</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
          {[
            { title: "Total Applications", value: applications.length.toString(), icon: User, color: "from-blue-500 to-blue-600" },
            { title: "New", value: applications.filter(a => a.status === 'new').length.toString(), icon: Clock, color: "from-blue-500 to-blue-600" },
            { title: "Under Review", value: applications.filter(a => a.status === 'under_review').length.toString(), icon: Eye, color: "from-yellow-500 to-yellow-600" },
            { title: "Approved", value: applications.filter(a => a.status === 'approved').length.toString(), icon: Star, color: "from-green-500 to-green-600" },
            { title: "Rejected", value: applications.filter(a => a.status === 'rejected').length.toString(), icon: Clock, color: "from-red-500 to-red-600" },
          ].map((stat, index) => (
            <div key={index} className="card-premium p-6 hover-lift-premium">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}