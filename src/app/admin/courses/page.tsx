"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Search, BookOpen, GraduationCap, X, Star } from "lucide-react";

interface College {
    _id: string;
    name: string;
}

interface Course {
    _id: string;
    title: string;
    description: string;
    level: "Undergraduate" | "Postgraduate" | "Diploma" | "Certificate";
    mode: "Offline" | "Online" | "Hybrid";
    duration: string;
    college?: College;
    isActive: boolean;
    price?: string;
    category?: string;
    createdAt: string;
}

export default function AdminCoursesPage() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [colleges, setColleges] = useState<College[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editingCourse, setEditingCourse] = useState<Course | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [coursesRes, collegesRes] = await Promise.all([
                fetch("/api/admin/courses"),
                fetch("/api/admin/colleges")
            ]);

            if (coursesRes.ok) {
                const data = await coursesRes.json();
                setCourses(data.courses || []);
            }

            if (collegesRes.ok) {
                const data = await collegesRes.json();
                setColleges(data.colleges || []);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = async (id: string) => {
        if (confirm("Are you sure you want to delete this course?")) {
            try {
                const response = await fetch(`/api/admin/courses/${id}`, { method: "DELETE" });
                if (response.ok) {
                    setCourses(courses.filter(c => c._id !== id));
                }
            } catch (error) {
                console.error("Error deleting course:", error);
            }
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 border border-green-300 rounded-full mb-2">
                        <BookOpen className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 text-sm font-medium">COURSES</span>
                    </div>
                    <h1 className="text-3xl font-bold text-green-900">Manage <span className="gradient-text">Courses</span></h1>
                    <p className="text-green-700 mt-1">Add and manage courses offered by colleges</p>
                </div>
                <button
                    onClick={() => {
                        setEditingCourse(null);
                        setShowForm(true);
                    }}
                    className="btn-premium px-4 py-2 text-black font-semibold flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Add New Course
                </button>
            </div>

            <div className="card-premium p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCourses.length === 0 ? (
                    <div className="md:col-span-2 card-premium text-center py-12">
                        <BookOpen className="w-12 h-12 text-green-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-green-900 mb-2">No Courses Found</h3>
                        <button
                            onClick={() => setShowForm(true)}
                            className="text-green-600 font-semibold hover:underline"
                        >
                            Add your first course
                        </button>
                    </div>
                ) : (
                    filteredCourses.map((course) => (
                        <div key={course._id} className="card-premium p-6 hover-lift-premium">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-green-900">{course.title}</h3>
                                        {course.isActive ? (
                                            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Active</span>
                                        ) : (
                                            <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">Inactive</span>
                                        )}
                                    </div>
                                    <div className="flex flex-wrap gap-3 text-sm text-green-700 mb-3">
                                        <div className="flex items-center gap-1">
                                            <GraduationCap className="w-4 h-4" />
                                            {course.level}
                                        </div>
                                        {course.college && (
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4" />
                                                {course.college.name}
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-green-800 text-sm line-clamp-2">{course.description}</p>
                                </div>
                                <div className="flex gap-2 ml-4">
                                    <button onClick={() => { setEditingCourse(course); setShowForm(true); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit className="w-4 h-4" /></button>
                                    <button onClick={() => handleDelete(course._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {showForm && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
                    <div className="card-premium max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-green-900">{editingCourse ? "Edit Course" : "Add New Course"}</h2>
                                <button onClick={() => setShowForm(false)} className="text-green-600 hover:bg-green-50 p-2 rounded-lg"><X className="w-6 h-6" /></button>
                            </div>

                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const data = Object.fromEntries(formData.entries());

                                try {
                                    const method = editingCourse ? "PATCH" : "POST";
                                    const url = editingCourse ? `/api/admin/courses/${editingCourse._id}` : "/api/admin/courses";
                                    const response = await fetch(url, {
                                        method,
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(data),
                                    });
                                    if (response.ok) { setShowForm(false); fetchData(); }
                                } catch (error) { console.error(error); }
                            }} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-green-900 mb-2">Course Title</label>
                                        <input name="title" defaultValue={editingCourse?.title} required className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-green-900 mb-2">Level</label>
                                        <select name="level" defaultValue={editingCourse?.level || "Undergraduate"} className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500">
                                            <option value="Undergraduate">Undergraduate</option>
                                            <option value="Postgraduate">Postgraduate</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="Certificate">Certificate</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-green-900 mb-2">College</label>
                                        <select name="college" defaultValue={editingCourse?.college?._id} className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500">
                                            <option value="">Select a College</option>
                                            {colleges.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-green-900 mb-2">Duration</label>
                                        <input name="duration" defaultValue={editingCourse?.duration} required placeholder="e.g. 3 Years" className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-green-900 mb-2">Description</label>
                                    <textarea name="description" defaultValue={editingCourse?.description} rows={4} required className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl outline-none focus:ring-2 focus:ring-green-500"></textarea>
                                </div>
                                <div className="flex justify-end gap-3 pt-6 border-t border-green-100">
                                    <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2.5 text-green-700 font-semibold border border-green-200 rounded-xl hover:bg-green-50">Cancel</button>
                                    <button type="submit" className="btn-premium px-8 py-2.5 text-black font-bold">{editingCourse ? "Update Course" : "Create Course"}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
