import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import connectDB from "./src/lib/db";
import University from "./src/models/University";
import Course from "./src/models/Course";

async function testCreateCourse() {
    await connectDB();

    const university = await University.findOne({ name: "Test Global College" });
    if (!university) {
        console.log("No university found with name 'Test Global College'. Creating one...");
        const newUniv = await University.create({
            name: "Test Global College",
            slug: "test-global-unique-" + Date.now(),
            location: "London",
            country: "UK",
            type: "public",
            description: "A test college created by script"
        });
        console.log("Created University:", newUniv._id);
        return testWithUniv(newUniv._id);
    } else {
        console.log("Found University:", university._id);
        return testWithUniv(university._id);
    }
}

async function testWithUniv(univId: any) {
    try {
        const courseData = {
            title: "Test Course via Script",
            slug: "test-course-" + Date.now(),
            description: "A test course description that is long enough to pass validation definitely.",
            level: "Undergraduate",
            duration: "3 Years",
            university: univId
        };

        const course = await Course.create(courseData);
        console.log("Successfully created course:", course._id);
    } catch (error) {
        console.error("Failed to create course:", error);
    }
    process.exit(0);
}

testCreateCourse();
