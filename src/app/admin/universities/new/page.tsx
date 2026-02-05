import { createUniversity } from "@/actions/university";
import { GraduationCap, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewCollegePage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <Link
                        href="/admin/universities"
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-2 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Colleges
                    </Link>
                    <h1 className="text-3xl font-bold text-green-900">Add New <span className="gradient-text">College</span></h1>
                </div>
            </div>

            <form action={createUniversity} className="card-premium p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-green-900 mb-2">College Name</label>
                        <input type="text" name="name" id="name" required className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
                    </div>

                    <div>
                        <label htmlFor="slug" className="block text-sm font-semibold text-green-900 mb-2">Slug (URL)</label>
                        <input type="text" name="slug" id="slug" required className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="e.g. oxford-university" />
                    </div>

                    <div>
                        <label htmlFor="location" className="block text-sm font-semibold text-green-900 mb-2">Location (City)</label>
                        <input type="text" name="location" id="location" required className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
                    </div>

                    <div>
                        <label htmlFor="country" className="block text-sm font-semibold text-green-900 mb-2">Country</label>
                        <input type="text" name="country" id="country" required className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
                    </div>

                    <div>
                        <label htmlFor="type" className="block text-sm font-semibold text-green-900 mb-2">Type</label>
                        <select name="type" id="type" required className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="website" className="block text-sm font-semibold text-green-900 mb-2">Website</label>
                        <input type="url" name="website" id="website" className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="https://..." />
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-semibold text-green-900 mb-2">Description</label>
                    <textarea name="description" id="description" rows={5} required className="w-full px-4 py-3 bg-white border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"></textarea>
                </div>

                <div className="flex justify-end pt-4">
                    <button type="submit" className="btn-premium px-8 py-3 text-black font-bold flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-black" />
                        Create College
                    </button>
                </div>
            </form>
        </div>
    );
}
