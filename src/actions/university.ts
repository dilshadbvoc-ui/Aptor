"use server";

import connectDB from "@/lib/db";
import University from "@/models/University";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createUniversity(formData: FormData) {
    const name = formData.get("name") as string;
    const slug = formData.get("slug") as string;
    const location = formData.get("location") as string;
    const description = formData.get("description") as string;
    const website = formData.get("website") as string;

    if (!name || !slug || !location || !description) {
        throw new Error("Missing required fields");
    }

    await connectDB();

    await University.create({
        name,
        slug,
        location,
        description,
        website,
        courses: [] // Placeholder
    });

    revalidatePath("/universities");
    revalidatePath("/admin/universities");
    redirect("/admin/universities");
}
