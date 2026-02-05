import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import connectDB from "./src/lib/db";
import University from "./src/models/University";
import College from "./src/models/College";
import Course from "./src/models/Course";

async function checkDB() {
    await connectDB();
    const universities = await University.find({});
    const colleges = await College.find({});
    const courses = await Course.find({});

    console.log("Universities count:", universities.length);
    universities.forEach(u => console.log(`- ${u.name} (${u._id})`));

    console.log("Colleges count:", colleges.length);
    colleges.forEach(c => console.log(`- ${c.name} (${c._id})`));

    console.log("Courses count:", courses.length);
    courses.forEach(c => console.log(`- ${c.title} (Univ: ${c.university}, Coll: ${c.college})`));

    process.exit(0);
}

checkDB();
