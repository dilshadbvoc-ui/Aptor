import { createBlog } from "@/actions/blog";

export default function NewBlogPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Add New Blog Post</h1>

            <form action={createBlog} className="bg-white shadow-xs rounded-lg border border-gray-200 p-6 space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" name="title" id="title" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" />
                </div>

                <div>
                    <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug (URL)</label>
                    <input type="text" name="slug" id="slug" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="e.g. top-10-colleges" />
                </div>

                <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags (comma separated)</label>
                    <input type="text" name="tags" id="tags" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="Engineering, Career" />
                </div>

                <div>
                    <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
                    <textarea name="summary" id="summary" rows={2} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"></textarea>
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content (HTML allowed)</label>
                    <textarea name="content" id="content" rows={8} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 font-mono text-sm"></textarea>
                    <p className="mt-1 text-xs text-gray-500">Basic HTML tags supported.</p>
                </div>

                <div className="flex justify-end pt-4">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Publish Post
                    </button>
                </div>
            </form>
        </div>
    );
}
