"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Search, Filter, Building, MapPin, Calendar, Globe, Crown } from "lucide-react";

interface College {
  _id: string;
  name: string;
  description: string;
  location: string;
  establishedYear: number;
  type: "engineering" | "medical" | "arts" | "science" | "commerce" | "law" | "other";
  affiliation?: string;
  website?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminCollegesPage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [showForm, setShowForm] = useState(false);
  const [editingCollege, setEditingCollege] = useState<College | null>(null);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      const response = await fetch("/api/admin/colleges");
      if (!response.ok) {
        throw new Error("Failed to fetch colleges");
      }
      const data = await response.json();
      setColleges(data.colleges || []);
    } catch (error) {
      console.error("Error fetching colleges:", error);
      setColleges([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || college.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleEdit = (college: College) => {
    setEditingCollege(college);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this college?")) {
      try {
        const response = await fetch(`/api/admin/colleges/${id}`, { 
          method: "DELETE" 
        });
        if (!response.ok) {
          throw new Error("Failed to delete college");
        }
        setColleges(colleges.filter(c => c._id !== id));
      } catch (error) {
        console.error("Error deleting college:", error);
        alert("Failed to delete college. Please try again.");
      }
    }
  };

  const toggleStatus = async (id: string) => {
    try {
      const college = colleges.find(c => c._id === id);
      if (!college) return;

      const response = await fetch(`/api/admin/colleges/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isActive: !college.isActive }),
      });

      if (!response.ok) {
        throw new Error("Failed to update college status");
      }

      setColleges(colleges.map(c => 
        c._id === id ? { ...c, isActive: !c.isActive } : c
      ));
    } catch (error) {
      console.error("Error toggling college status:", error);
      alert("Failed to update college status. Please try again.");
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      engineering: "bg-blue-500/20 text-blue-400",
      medical: "bg-red-500/20 text-red-400",
      arts: "bg-purple-500/20 text-purple-400",
      science: "bg-green-500/20 text-green-400",
      commerce: "bg-yellow-500/20 text-yellow-400",
      law: "bg-gray-500/20 text-gray-400",
      other: "bg-indigo-500/20 text-indigo-400"
    };
    return colors[type as keyof typeof colors] || colors.other;
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-2">
            <Building className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">COLLEGES</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Manage Colleges</h1>
          <p className="text-gray-400 mt-1">Add, edit, and manage college listings</p>
        </div>
        <button
          onClick={() => {
            setEditingCollege(null);
            setShowForm(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-medium transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          Add College
        </button>
      </div>

      {/* Filters */}
      <div className="card-premium p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-3 bg-black/50 border border-yellow-400/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="all">All Types</option>
              <option value="engineering">Engineering</option>
              <option value="medical">Medical</option>
              <option value="arts">Arts</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="law">Law</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="space-y-4">
        {filteredColleges.length === 0 ? (
          <div className="card-premium text-center py-12">
            <Building className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No Colleges Found</h3>
            <p className="text-gray-400 mb-4">
              {searchTerm || filterType !== "all" 
                ? "Try adjusting your search or filters" 
                : "Get started by adding your first college"
              }
            </p>
            {!searchTerm && filterType === "all" && (
              <button
                onClick={() => {
                  setEditingCollege(null);
                  setShowForm(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg font-medium transition-colors duration-200"
              >
                <Plus className="w-4 h-4" />
                Add First College
              </button>
            )}
          </div>
        ) : (
          filteredColleges.map((college) => (
            <div key={college._id} className="card-premium p-6 hover-lift-premium">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white">{college.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      college.isActive 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-gray-500/20 text-gray-400"
                    }`}>
                      {college.isActive ? "Active" : "Inactive"}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(college.type)}`}>
                      {college.type.charAt(0).toUpperCase() + college.type.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {college.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Est. {college.establishedYear}
                    </div>
                    {college.website && (
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        <a 
                          href={college.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-yellow-400 hover:text-yellow-300 transition-colors"
                        >
                          Website
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-3 line-clamp-2">{college.description}</p>
                  
                  {college.affiliation && (
                    <div className="text-sm">
                      <span className="font-medium text-gray-400">Affiliation: </span>
                      <span className="text-gray-300">{college.affiliation}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button
                    onClick={() => toggleStatus(college._id)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      college.isActive
                        ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                        : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                    }`}
                  >
                    {college.isActive ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    onClick={() => handleEdit(college)}
                    className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-lg transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(college._id)}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="card-premium max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-5 h-5 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">
                  {editingCollege ? "Edit College" : "Add New College"}
                </h2>
              </div>
              <p className="text-gray-400 mb-6">
                This form would contain fields for creating/editing colleges. 
                API integration is ready for full functionality.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 text-gray-400 border border-gray-600 rounded-lg hover:bg-gray-600/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 font-medium transition-colors"
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