"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Search, Filter, Calendar, MapPin, Building, Briefcase } from "lucide-react";

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
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminInternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [showForm, setShowForm] = useState(false);
  const [editingInternship, setEditingInternship] = useState<Internship | null>(null);

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const response = await fetch("/api/admin/internships");
      if (!response.ok) {
        throw new Error("Failed to fetch internships");
      }
      const data = await response.json();
      setInternships(data.internships || []);
    } catch (error) {
      console.error("Error fetching internships:", error);
      setInternships([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || internship.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (internship: Internship) => {
    setEditingInternship(internship);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this internship?")) {
      try {
        const response = await fetch(`/api/admin/internships/${id}`, { 
          method: "DELETE" 
        });
        if (!response.ok) {
          throw new Error("Failed to delete internship");
        }
        setInternships(internships.filter(i => i._id !== id));
      } catch (error) {
        console.error("Error deleting internship:", error);
        alert("Failed to delete internship. Please try again.");
      }
    }
  };

  const toggleStatus = async (id: string) => {
    try {
      const internship = internships.find(i => i._id === id);
      if (!internship) return;

      const response = await fetch(`/api/admin/internships/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: !internship.isActive }),
      });

      if (!response.ok) {
        throw new Error("Failed to update internship status");
      }

      setInternships(internships.map(i => 
        i._id === id ? { ...i, isActive: !i.isActive } : i
      ));
    } catch (error) {
      console.error("Error toggling internship status:", error);
      alert("Failed to update internship status. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Internships</h1>
            <p className="text-gray-300 mt-2">
              Manage internship opportunities and applications.
            </p>
          </div>
          <button
            onClick={() => {
              setEditingInternship(null);
              setShowForm(true);
            }}
            className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Internship
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search internships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 bg-gray-800 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Types</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      {/* Internships Grid */}
      <div className="grid gap-6">
        {filteredInternships.map((internship) => (
          <div key={internship._id} className="bg-gray-800 rounded-lg border border-gray-700 p-6 hover:shadow-lg hover:shadow-black/20 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{internship.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    internship.isActive 
                      ? "bg-green-900/50 text-green-300 border border-green-700" 
                      : "bg-gray-700 text-gray-300 border border-gray-600"
                  }`}>
                    {internship.isActive ? "Active" : "Inactive"}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    internship.type === "remote" 
                      ? "bg-blue-900/50 text-blue-300 border border-blue-700"
                      : internship.type === "hybrid"
                      ? "bg-purple-900/50 text-purple-300 border border-purple-700"
                      : "bg-orange-900/50 text-orange-300 border border-orange-700"
                  }`}>
                    {internship.type.charAt(0).toUpperCase() + internship.type.slice(1)}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Building className="w-4 h-4" />
                    {internship.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {internship.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {internship.duration}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-3 line-clamp-2">{internship.description}</p>
                
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-medium text-green-400">Stipend: {internship.stipend}</span>
                  <span className="text-gray-400">
                    Deadline: {new Date(internship.applicationDeadline).toLocaleDateString()}
                  </span>
                </div>
                
                {internship.requirements.length > 0 && (
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      {internship.requirements.slice(0, 3).map((req, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600">
                          {req}
                        </span>
                      ))}
                      {internship.requirements.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs border border-gray-600">
                          +{internship.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={() => toggleStatus(internship._id)}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    internship.isActive
                      ? "bg-yellow-900/50 text-yellow-300 hover:bg-yellow-900/70 border border-yellow-700"
                      : "bg-green-900/50 text-green-300 hover:bg-green-900/70 border border-green-700"
                  }`}
                >
                  {internship.isActive ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleEdit(internship)}
                  className="p-2 text-blue-400 hover:bg-blue-900/50 rounded-lg border border-transparent hover:border-blue-700 transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(internship._id)}
                  className="p-2 text-red-400 hover:bg-red-900/50 rounded-lg border border-transparent hover:border-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {filteredInternships.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <Briefcase className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No internships found</h3>
            <p className="text-gray-400 mb-4">
              {searchTerm || filterType !== "all" 
                ? "Try adjusting your search or filters" 
                : "Get started by adding your first internship opportunity"
              }
            </p>
            {!searchTerm && filterType === "all" && (
              <button
                onClick={() => {
                  setEditingInternship(null);
                  setShowForm(true);
                }}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add First Internship
              </button>
            )}
          </div>
        )}
      </div>

      {/* Form Modal would go here */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {editingInternship ? "Edit Internship" : "Add New Internship"}
              </h2>
              <p className="text-gray-300 mb-6">
                This form would contain fields for creating/editing internships. 
                API integration needed for full functionality.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}