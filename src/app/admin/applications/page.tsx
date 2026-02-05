"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/components/providers/SessionProvider";
import { useRouter } from "next/navigation";
import { Search, Eye, CheckCircle, Clock, Star, Mail, Phone, MapPin, Calendar, User, GraduationCap } from "lucide-react";

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  source: string;
  status: 'new' | 'contacted' | 'resolved';
  createdAt: string;
  interest?: string;
  currentEducation?: string;
  preferredCountry?: string;
}

export default function ApplicationsPage() {
  const { status } = useSession();
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

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
      // Mock data for now
      const mockApplications: Application[] = [
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          phone: "+1234567890",
          message: "Interested in computer science programs",
          source: "website",
          status: "new",
          createdAt: new Date().toISOString(),
          interest: "Computer Science",
          currentEducation: "High School",
          preferredCountry: "USA"
        }
      ];
      setApplications(mockApplications);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, newStatus: string) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status: newStatus as any } : app
      )
    );
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new': return <Clock className="w-4 h-4 text-blue-400" />;
      case 'contacted': return <CheckCircle className="w-4 h-4 text-yellow-400" />;
      case 'resolved': return <Star className="w-4 h-4 text-green-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'contacted': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'resolved': return 'bg-green-500/10 text-green-400 border-green-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center mobile-safe-area">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading applications...</p>
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
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">APPLICATIONS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Student <span className="gradient-text">Applications</span>
          </h1>
          <p className="text-gray-400">Review and manage student applications and inquiries</p>
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
              
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid gap-6">
          {filteredApplications.map((application) => (
            <div key={application.id} className="card-premium p-6 hover-lift-premium">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
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
                            {application.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {getStatusIcon(application.status)}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusBadgeColor(application.status)}`}>
                        {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {application.interest && (
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <GraduationCap className="w-4 h-4" />
                        <span>Interest: {application.interest}</span>
                      </div>
                    )}
                    {application.currentEducation && (
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>Education: {application.currentEducation}</span>
                      </div>
                    )}
                    {application.preferredCountry && (
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>Country: {application.preferredCountry}</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{application.message}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Source: {application.source}</span>
                    <span>Applied: {new Date(application.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 lg:ml-6">
                  <button
                    onClick={() => updateApplicationStatus(application.id, 'contacted')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 rounded-lg hover:bg-yellow-400/20 transition-colors text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Mark Contacted
                  </button>
                  <button
                    onClick={() => updateApplicationStatus(application.id, 'resolved')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/30 rounded-lg hover:bg-green-500/20 transition-colors text-sm"
                  >
                    <Star className="w-4 h-4" />
                    Mark Resolved
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 transition-colors text-sm">
                    <Eye className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredApplications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Applications Found</h3>
            <p className="text-gray-400">No applications match your current filters.</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {[
            { title: "Total Applications", value: applications.length.toString(), icon: User, color: "from-blue-500 to-blue-600" },
            { title: "New Applications", value: applications.filter(a => a.status === 'new').length.toString(), icon: Clock, color: "from-yellow-500 to-yellow-600" },
            { title: "Contacted", value: applications.filter(a => a.status === 'contacted').length.toString(), icon: CheckCircle, color: "from-orange-500 to-orange-600" },
            { title: "Resolved", value: applications.filter(a => a.status === 'resolved').length.toString(), icon: Star, color: "from-green-500 to-green-600" },
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