"use server";

import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBlog(formData: FormData) {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const summary = formData.get("summary") as string;
    const content = formData.get("content") as string;
    const tags = (formData.get("tags") as string)?.split(",").map(tag => tag.trim()) || [];

    if (!title || !slug || !summary || !content) {
        throw new Error("Missing required fields");
    }

    await connectDB();

    await Blog.create({
        title,
        slug,
        summary,
        content,
        tags
    });

    revalidatePath("/blogs");
    revalidatePath("/admin/blogs");
    redirect("/admin/blogs");
}
