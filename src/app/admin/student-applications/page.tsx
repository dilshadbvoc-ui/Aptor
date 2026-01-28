"use client";

import { useState, useEffect } from "react";
import { FileText, Eye, Trash2, Crown, User, Calendar, Mail, Phone, GraduationCap, Building2, Filter, Search, Clock } from "lucide-react";

interface StudentApplication {
    _id: string;
    studentName: string;
    email: string;
    phone: string;
    university: string;
    course: string;
    applicationDate: string;
    status: 'pending' | 'approved' | 'rejected' | 'under-review';
    documents: string[];
    message?: string;
    source: string;
    createdAt: string;
}

export default function AdminStudentApplicationsPage() {
    const [applications, setApplications] = useState<StudentApplication[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedApplication, setSelectedApplication] = useState<StudentApplication | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            // Mock data for now - replace with actual API call
            const mockApplications: StudentApplication[] = [
                {
                    _id: "1",
                    studentName: "John Smith",
                    email: "john.smith@email.com",
                    phone: "+91 98765 43210",
                    university: "IIT Delhi",
                    course: "Computer Science Engineering",
                    applicationDate: "2024-01-15",
                    status: "pending",
                    documents: ["transcript.pdf", "recommendation.pdf"],
                    message: "I am very interested in pursuing my masters in Computer Science.",
                    source: "website",
                    createdAt: "2024-01-15T10:30:00Z"
                },
                {
                    _id: "2",
                    studentName: "Sarah Johnson",
                    email: "sarah.j@email.com",
                    phone: "+91 87654 32109",
                    university: "IIM Bangalore",
                    course: "MBA",
                    applicationDate: "2024-01-20",
                    status: "approved",
                    documents: ["resume.pdf", "essays.pdf", "gmat_score.pdf"],
                    message: "Looking forward to joining the MBA program.",
                    source: "counselling",
                    createdAt: "2024-01-20T14:15:00Z"
                },
                {
                    _id: "3",
                    studentName: "Raj Patel",
                    email: "raj.patel@email.com",
                    phone: "+91 76543 21098",
                    university: "AIIMS Delhi",
                    course: "MBBS",
                    applicationDate: "2024-01-25",
                    status: "under-review",
                    documents: ["neet_score.pdf", "certificates.pdf"],
                    source: "lead_modal",
                    createdAt: "2024-01-25T09:45:00Z"
                }
            ];
            
            setApplications(mockApplications);
        } catch (error) {
            console.error("Error fetching applications:", error);
            setError("Failed to fetch applications");
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (id: string, status: 'pending' | 'approved' | 'rejected' | 'under-review') => {
        try {
            // Mock API call - replace with actual implementation
            setApplications(applications.map(app => 
                app._id === id ? { ...app, status } : app
            ));
            if (selectedApplication?._id === id) {
                setSelectedApplication({ ...selectedApplication, status });
            }
        } catch (error) {
            console.error("Error updating application status:", error);
            alert("Failed to update application status");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this application?")) return;

        try {
            // Mock API call - replace with actual implementation
            setApplications(applications.filter(app => app._id !== id));
            if (selectedApplication?._id === id) {
                setSelectedApplication(null);
            }
        } catch (error) {
            console.error("Error deleting application:", error);
            alert("Failed to delete application");
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-yellow-500/20 text-yellow-400';
            case 'approved': return 'bg-green-500/20 text-green-400';
            case 'rejected': return 'bg-red-500/20 text-red-400';
            case 'under-review': return 'bg-blue-500/20 text-blue-400';
            default: return 'bg-gray-500/20 text-gray-400';
        }
    };

    const filteredApplications = applications.filter(app => {
        const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             app.university.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || app.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const stats = {
        total: applications.length,
        pending: applications.filter(a => a.status === 'pending').length,
        approved: applications.filter(a => a.status === 'approved').length,
        rejected: applications.filter(a => a.status === 'rejected').length,
        underReview: applications.filter(a => a.status === 'under-review').length,
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-2">
                    <FileText className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-medium">APPLICATIONS</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Student Applications</h1>
                <p className="text-gray-400 mt-1">Review and manage student university applications</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                    { title: "Total", value: stats.total, icon: FileText, color: "from-blue-500 to-blue-600" },
                    { title: "Pending", value: stats.pending, icon: Clock, color: "from-yellow-500 to-yellow-600" },
                    { title: "Under Review", value: stats.underReview, icon: Eye, color: "from-blue-500 to-blue-600" },
                    { title: "Approved", value: stats.approved, icon: GraduationCap, color: "from-green-500 to-green-600" },
                    { title: "Rejected", value: stats.rejected, icon: Trash2, color: "from-red-500 to-red-600" },
                ].map((stat, index) => (
                    <div key={index} className="card-premium p-4 hover-lift-premium">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm">{stat.title}</p>
                                <p className="text-xl font-bold text-white mt-1">{stat.value}</p>
                            </div>
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                                <stat.icon className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="card-premium p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search applications..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Filter className="w-4 h-4 text-gray-400" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="under-review">Under Review</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400">{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Applications List */}
                <div className="lg:col-span-2">
                    <div className="card-premium overflow-hidden">
                        {filteredApplications.length === 0 ? (
                            <div className="text-center py-12">
                                <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-white mb-2">No Applications Found</h3>
                                <p className="text-gray-400">Student applications will appear here when submitted.</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-yellow-400/10">
                                {filteredApplications.map((application) => (
                                    <div
                                        key={application._id}
                                        className={`p-4 hover:bg-yellow-400/5 transition-colors cursor-pointer ${
                                            selectedApplication?._id === application._id ? 'bg-yellow-400/10' : ''
                                        }`}
                                        onClick={() => setSelectedApplication(application)}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-white font-medium truncate">{application.studentName}</h3>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                                                        {application.status.replace('-', ' ')}
                                                    </span>
                                                </div>
                                                <p className="text-gray-400 text-sm mb-1">{application.email}</p>
                                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                                                    <span className="flex items-center gap-1">
                                                        <Building2 className="w-3 h-3" />
                                                        {application.university}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <GraduationCap className="w-3 h-3" />
                                                        {application.course}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <span>{new Date(application.createdAt).toLocaleDateString()}</span>
                                                    <span>via {application.source}</span>
                                                    <span>{application.documents.length} documents</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 ml-4">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedApplication(application);
                                                    }}
                                                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDelete(application._id);
                                                    }}
                                                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Application Details */}
                <div className="lg:col-span-1">
                    <div className="card-premium p-6 sticky top-6">
                        {selectedApplication ? (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <User className="w-5 h-5 text-yellow-400" />
                                    <h3 className="text-lg font-semibold text-white">Application Details</h3>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">Student Name</label>
                                    <p className="text-white font-medium">{selectedApplication.studentName}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">Email</label>
                                    <p className="text-white">
                                        <a 
                                            href={`mailto:${selectedApplication.email}`}
                                            className="text-yellow-400 hover:text-yellow-300 transition-colors"
                                        >
                                            {selectedApplication.email}
                                        </a>
                                    </p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">Phone</label>
                                    <p className="text-white">
                                        <a 
                                            href={`tel:${selectedApplication.phone}`}
                                            className="text-yellow-400 hover:text-yellow-300 transition-colors"
                                        >
                                            {selectedApplication.phone}
                                        </a>
                                    </p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">University</label>
                                    <p className="text-white font-medium">{selectedApplication.university}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">Course</label>
                                    <p className="text-white">{selectedApplication.course}</p>
                                </div>
                                
                                <div>
                                    <label className="text-sm text-gray-400">Status</label>
                                    <div className="flex gap-2 mt-1 flex-wrap">
                                        {['pending', 'under-review', 'approved', 'rejected'].map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => updateStatus(selectedApplication._id, status as any)}
                                                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                                    selectedApplication.status === status
                                                        ? getStatusColor(status)
                                                        : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                                                }`}
                                            >
                                                {status.replace('-', ' ')}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                
                                {selectedApplication.message && (
                                    <div>
                                        <label className="text-sm text-gray-400">Message</label>
                                        <div className="bg-black/30 rounded-lg p-3 mt-1">
                                            <p className="text-white text-sm leading-relaxed">
                                                {selectedApplication.message}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                
                                <div>
                                    <label className="text-sm text-gray-400">Documents</label>
                                    <div className="mt-1 space-y-2">
                                        {selectedApplication.documents.map((doc, index) => (
                                            <div key={index} className="flex items-center gap-2 p-2 bg-black/30 rounded-lg">
                                                <FileText className="w-4 h-4 text-yellow-400" />
                                                <span className="text-white text-sm">{doc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-yellow-400/20">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(selectedApplication.createdAt).toLocaleString()}
                                    </div>
                                </div>
                                
                                <div className="text-xs text-gray-500">
                                    Source: {selectedApplication.source}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-white font-medium mb-2">Select an Application</h3>
                                <p className="text-gray-400 text-sm">Choose an application from the list to view details</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}