import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import University from "@/models/University";
import College from "@/models/College";
import Blog from "@/models/Blog";
import Course from "@/models/Course";

export async function GET() {
    try {
        await connectDB();

        // --- Universities ---
        const universities = [
            {
                name: "Indian Institute of Science (IISc)",
                slug: "iisc-bangalore",
                location: "Bengaluru, Karnataka",
                description: "The Indian Institute of Science is a public, deemed, research university for higher education and research in science, engineering, design, and management.",
                foundedYear: 1909,
                website: "https://iisc.ac.in",
                courses: ["Aerospace Engineering", "Computer Science", "Physics", "Biology"],
            },
            {
                name: "Bangalore University",
                slug: "bangalore-university",
                location: "Bengaluru, Karnataka",
                description: "Bangalore University is a public state university located in Bengaluru. It is one of the oldest universities in India.",
                foundedYear: 1886,
                website: "https://bangaloreuniversity.ac.in",
                courses: ["MBA", "M.Sc", "B.Com", "B.A"],
            }
        ];

        // --- Colleges ---
        const colleges = [
            {
                name: "Christ University",
                slug: "christ-university",
                location: "Koramangala, Bengaluru",
                description: "Christ University is a deemed to be university in Bangalore, Karnataka, India. Founded in 1969 as Christ College.",
                universityAffiliation: "Deemed University",
                establishedYear: 1969,
                website: "https://christuniversity.in",
                courses: ["BBA", "B.Com", "BCA", "MBA"],
            },
            {
                name: "RV College of Engineering",
                slug: "rv-college-of-engineering",
                location: "Mysore Road, Bengaluru",
                description: "Rashtreeya Vidyalaya College of Engineering is an autonomous private technical co-educational college in Bangalore.",
                universityAffiliation: "Visvesvaraya Technological University",
                establishedYear: 1963,
                website: "https://rvce.edu.in",
                courses: ["Computer Science", "Information Science", "Electronics", "Mechanical"],
            }
        ];

        // --- Blogs ---
        const blogs = [
            {
                title: "Top 10 Engineering Colleges in Bengaluru",
                slug: "top-10-engineering-colleges-bengaluru",
                summary: "Bengaluru is home to some of the best engineering colleges in India. Here is a comprehensive list of the top institutes to kickstart your career.",
                content: "<p>Bengaluru, often called the Silicon Valley of India, offers ample opportunities for engineering students...</p><p>1. IISc<br>2. IIIT-B<br>3. RVCE</p>",
                tags: ["Engineering", "Career Guidance"],
            },
            {
                title: "Why Choose Bengaluru for Higher Education?",
                slug: "why-choose-bengaluru-education",
                summary: "From world-class infrastructure to a thriving startup ecosystem, find out why Bengaluru is the ultimate student destination.",
                content: "<p>With a pleasant climate and a vibrant innovative culture, Bengaluru attracts students from all over the globe...</p>",
                tags: ["Student Life", "Bengaluru"],
            }
        ];

        // --- Courses ---
        const courses = [
            {
                title: "B.Tech in Computer Science",
                slug: "btech-computer-science",
                description: "A 4-year undergraduate program focusing on software development, algorithms, and system design.",
                level: "Undergraduate",
                mode: "Offline",
                duration: "4 Years",
            },
            {
                title: "MBA in Marketing (Online)",
                slug: "mba-marketing-online",
                description: "Master the art of marketing with our flexible online MBA program suitable for working professionals.",
                level: "Postgraduate",
                mode: "Online",
                duration: "2 Years",
            }
        ];

        // Upsert Logic
        const stats = { universities: 0, colleges: 0, blogs: 0, courses: 0 };

        for (const item of universities) { await University.findOneAndUpdate({ slug: item.slug }, item, { upsert: true }); stats.universities++; }
        for (const item of colleges) { await College.findOneAndUpdate({ slug: item.slug }, item, { upsert: true }); stats.colleges++; }
        for (const item of blogs) { await Blog.findOneAndUpdate({ slug: item.slug }, item, { upsert: true }); stats.blogs++; }
        for (const item of courses) { await Course.findOneAndUpdate({ slug: item.slug }, item, { upsert: true }); stats.courses++; }

        return NextResponse.json({
            message: "Database seeded successfully",
            stats
        }, { status: 200 });

    } catch (error) {
        console.error("Seeding Error:", error);
        return NextResponse.json({ message: "Internal Server Error", error: String(error) }, { status: 500 });
    }
}
