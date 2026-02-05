import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import University from "@/models/University";
import College from "@/models/College";
import Blog from "@/models/Blog";
import Course from "@/models/Course";
import Event from "@/models/Event";
import Internship from "@/models/Internship";
import Contact from "@/models/Contact";
import SeoSettings from "@/models/SeoSettings";
import bcrypt from "bcryptjs";

export async function POST() {
    try {
        await connectDB();
        console.log("Connected to MongoDB Atlas");

        const results = {
            admin: false,
            universities: 0,
            colleges: 0,
            blogs: 0,
            courses: 0,
            events: 0,
            internships: 0,
            contacts: 0,
            seoSettings: false
        };

        // 1. Create Admin User
        try {
            const existingAdmin = await User.findOne({ email: 'info@aptorstudies.com' });
            if (!existingAdmin) {
                const password = process.env.ADMIN_PASSWORD || 'SecureAdmin123!';
                const salt = await bcrypt.genSalt(12);
                const hashedPassword = await bcrypt.hash(password, salt);
                
                const adminUser = new User({
                    name: 'Admin User',
                    email: 'info@aptorstudies.com',
                    password: hashedPassword,
                    role: 'admin',
                    isActive: true
                });
                
                await adminUser.save();
                results.admin = true;
                console.log("Admin user created");
            } else {
                results.admin = true;
                console.log("Admin user already exists");
            }
        } catch (error) {
            console.error("Error creating admin user:", error);
        }

        // 2. Seed Universities
        const universities = [
            {
                name: "Harvard University",
                slug: "harvard-university",
                location: "Cambridge, Massachusetts, USA",
                country: "USA",
                description: "Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636, Harvard is the oldest institution of higher education in the United States.",
                foundedYear: 1636,
                website: "https://harvard.edu",
                ranking: 1,
                courses: ["Business Administration", "Computer Science", "Medicine", "Law", "Engineering"],
                tuitionFee: "₹44,00,000",
                published: true,
                featured: true,
                seo: {
                    title: "Harvard University - World's Top University",
                    description: "Apply to Harvard University, the world's leading institution for higher education and research.",
                    keywords: ["Harvard", "University", "USA", "Ivy League"]
                }
            },
            {
                name: "Stanford University",
                slug: "stanford-university",
                location: "Stanford, California, USA",
                country: "USA",
                description: "Stanford University is a private research university in Stanford, California. Known for its academic strength, wealth, and proximity to Silicon Valley.",
                foundedYear: 1885,
                website: "https://stanford.edu",
                ranking: 2,
                courses: ["Computer Science", "Engineering", "Business", "Medicine"],
                tuitionFee: "₹45,00,000",
                published: true,
                featured: true,
                seo: {
                    title: "Stanford University - Innovation and Excellence",
                    description: "Join Stanford University, a world leader in technology and innovation education.",
                    keywords: ["Stanford", "University", "Silicon Valley", "Technology"]
                }
            },
            {
                name: "MIT",
                slug: "mit",
                location: "Cambridge, Massachusetts, USA",
                country: "USA",
                description: "Massachusetts Institute of Technology is a private research university in Cambridge, Massachusetts. MIT has played a key role in the development of modern technology and science.",
                foundedYear: 1861,
                website: "https://mit.edu",
                ranking: 3,
                courses: ["Engineering", "Computer Science", "Physics", "Mathematics"],
                tuitionFee: "₹43,00,000",
                published: true,
                featured: true,
                seo: {
                    title: "MIT - Massachusetts Institute of Technology",
                    description: "Study at MIT, the world's leading institution for science and technology.",
                    keywords: ["MIT", "Technology", "Engineering", "Science"]
                }
            },
            {
                name: "Indian Institute of Science (IISc)",
                slug: "iisc-bangalore",
                location: "Bengaluru, Karnataka, India",
                country: "India",
                description: "The Indian Institute of Science is a public, deemed, research university for higher education and research in science, engineering, design, and management.",
                foundedYear: 1909,
                website: "https://iisc.ac.in",
                ranking: 1,
                courses: ["Aerospace Engineering", "Computer Science", "Physics", "Biology"],
                tuitionFee: "₹2,00,000",
                published: true,
                featured: true,
                seo: {
                    title: "IISc Bangalore - Premier Research Institute",
                    description: "Join IISc Bangalore, India's leading research institution for science and engineering.",
                    keywords: ["IISc", "Bangalore", "Research", "Science"]
                }
            },
            {
                name: "Indian Institute of Technology Delhi",
                slug: "iit-delhi",
                location: "New Delhi, India",
                country: "India",
                description: "IIT Delhi is one of the premier engineering institutions in India, known for its excellence in technical education and research.",
                foundedYear: 1961,
                website: "https://iitd.ac.in",
                ranking: 2,
                courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering"],
                tuitionFee: "₹2,50,000",
                published: true,
                featured: true,
                seo: {
                    title: "IIT Delhi - Premier Engineering Institute",
                    description: "Study at IIT Delhi, one of India's top engineering institutions.",
                    keywords: ["IIT", "Delhi", "Engineering", "Technology"]
                }
            }
        ];

        for (const uni of universities) {
            await University.findOneAndUpdate({ slug: uni.slug }, uni, { upsert: true });
            results.universities++;
        }

        // 3. Seed Colleges
        const colleges = [
            {
                name: "Williams College",
                slug: "williams-college",
                location: "Williamstown, Massachusetts, USA",
                country: "USA",
                description: "Williams College is a private liberal arts college in Williamstown, Massachusetts. It was established in 1793 with funds from the estate of Ephraim Williams.",
                establishedYear: 1793,
                type: "arts",
                affiliation: "Liberal Arts College",
                website: "https://williams.edu",
                ranking: 1,
                published: true,
                featured: true,
                courses: ["Liberal Arts", "Sciences", "Humanities"],
                facilities: ["Library", "Sports Complex", "Research Labs"],
                seo: {
                    title: "Williams College - Top Liberal Arts College",
                    description: "Experience excellence at Williams College, America's premier liberal arts institution.",
                    keywords: ["Williams", "Liberal Arts", "College", "Massachusetts"]
                }
            },
            {
                name: "Amherst College",
                slug: "amherst-college",
                location: "Amherst, Massachusetts, USA",
                country: "USA",
                description: "Amherst College is a private liberal arts college in Amherst, Massachusetts. Founded in 1821, it is one of the most prestigious liberal arts colleges in the United States.",
                establishedYear: 1821,
                type: "arts",
                affiliation: "Liberal Arts College",
                website: "https://amherst.edu",
                ranking: 2,
                published: true,
                featured: true,
                courses: ["Liberal Arts", "Economics", "Psychology"],
                facilities: ["Modern Library", "Athletic Center", "Art Museum"],
                seo: {
                    title: "Amherst College - Excellence in Liberal Arts",
                    description: "Join Amherst College for a world-class liberal arts education.",
                    keywords: ["Amherst", "Liberal Arts", "College", "Education"]
                }
            },
            {
                name: "Christ University",
                slug: "christ-university",
                location: "Bengaluru, Karnataka, India",
                country: "India",
                description: "Christ University is a deemed to be university in Bangalore, Karnataka, India. Founded in 1969 as Christ College.",
                establishedYear: 1969,
                type: "other",
                affiliation: "Deemed University",
                website: "https://christuniversity.in",
                ranking: 1,
                published: true,
                featured: true,
                courses: ["BBA", "B.Com", "BCA", "MBA"],
                facilities: ["Modern Campus", "Library", "Sports Complex"],
                seo: {
                    title: "Christ University Bangalore - Premier Education",
                    description: "Study at Christ University, one of Bangalore's leading educational institutions.",
                    keywords: ["Christ University", "Bangalore", "Education", "Deemed University"]
                }
            }
        ];

        for (const college of colleges) {
            await College.findOneAndUpdate({ slug: college.slug }, college, { upsert: true });
            results.colleges++;
        }

        // 4. Seed Blogs
        const blogs = [
            {
                title: "Top 10 Universities in the World for 2024",
                slug: "top-10-universities-world-2024",
                summary: "Discover the world's leading universities that offer exceptional education, research opportunities, and career prospects for international students.",
                content: `<h2>Introduction</h2>
                <p>Choosing the right university is one of the most important decisions in your academic journey. Here are the top 10 universities globally that consistently rank highest for academic excellence, research output, and student satisfaction.</p>
                
                <h3>1. Harvard University</h3>
                <p>Harvard continues to lead in multiple disciplines including business, law, and medicine. With an acceptance rate of just 3.4%, it remains highly selective.</p>
                
                <h3>2. Stanford University</h3>
                <p>Known for its innovation and proximity to Silicon Valley, Stanford excels in technology and entrepreneurship programs.</p>
                
                <h3>3. MIT</h3>
                <p>The Massachusetts Institute of Technology is unparalleled in engineering and technology education.</p>
                
                <p>These institutions offer world-class education and open doors to exceptional career opportunities.</p>`,
                tags: ["Universities", "Rankings", "Education", "Study Abroad"],
                published: true,
                featured: true,
                author: "Aptor Studies Team",
                seo: {
                    title: "Top 10 Universities in the World 2024 - Complete Guide",
                    description: "Explore the world's best universities for 2024. Get insights into admission requirements, programs, and career prospects.",
                    keywords: ["top universities", "world rankings", "study abroad", "higher education"]
                }
            },
            {
                title: "Complete Guide to Studying in the USA",
                slug: "complete-guide-studying-usa",
                summary: "Everything you need to know about studying in the United States, from application processes to visa requirements and living expenses.",
                content: `<h2>Why Study in the USA?</h2>
                <p>The United States hosts over 1 million international students annually, making it the world's top destination for higher education.</p>
                
                <h3>Application Process</h3>
                <p>The application process typically involves:</p>
                <ul>
                <li>Standardized tests (SAT, GRE, GMAT)</li>
                <li>English proficiency tests (TOEFL, IELTS)</li>
                <li>Letters of recommendation</li>
                <li>Personal statements</li>
                </ul>
                
                <h3>Visa Requirements</h3>
                <p>International students need an F-1 student visa, which requires acceptance at a SEVP-approved institution.</p>
                
                <h3>Living Costs</h3>
                <p>Annual living expenses range from $10,000 to $25,000 depending on the location and lifestyle.</p>`,
                tags: ["USA", "Study Abroad", "Student Visa", "International Students"],
                published: true,
                featured: true,
                author: "Aptor Studies Team",
                seo: {
                    title: "Complete Guide to Studying in USA - 2024 Edition",
                    description: "Comprehensive guide for international students planning to study in the USA. Visa, costs, applications, and more.",
                    keywords: ["study in USA", "student visa", "international students", "American universities"]
                }
            },
            {
                title: "Scholarship Opportunities for International Students",
                slug: "scholarship-opportunities-international-students",
                summary: "Discover various scholarship programs available for international students to fund their education abroad.",
                content: `<h2>Types of Scholarships</h2>
                <p>International students can access various types of financial aid:</p>
                
                <h3>Merit-Based Scholarships</h3>
                <p>Awarded based on academic excellence, these scholarships can cover full or partial tuition fees.</p>
                
                <h3>Need-Based Financial Aid</h3>
                <p>Provided to students who demonstrate financial need through documentation.</p>
                
                <h3>Country-Specific Scholarships</h3>
                <p>Many universities offer scholarships specifically for students from certain countries or regions.</p>
                
                <h3>Program-Specific Scholarships</h3>
                <p>Available for students in specific fields like STEM, arts, or business.</p>
                
                <h2>How to Apply</h2>
                <p>Start your scholarship search early, typically 12-18 months before your intended start date.</p>`,
                tags: ["Scholarships", "Financial Aid", "International Students", "Education Funding"],
                published: true,
                featured: false,
                author: "Aptor Studies Team",
                seo: {
                    title: "International Student Scholarships - Complete Guide 2024",
                    description: "Find scholarship opportunities for international students. Merit-based, need-based, and program-specific funding options.",
                    keywords: ["international scholarships", "student financial aid", "education funding", "study abroad scholarships"]
                }
            }
        ];

        for (const blog of blogs) {
            await Blog.findOneAndUpdate({ slug: blog.slug }, blog, { upsert: true });
            results.blogs++;
        }

        // 5. Seed Courses
        const courses = [
            {
                title: "Master of Business Administration (MBA)",
                slug: "mba-program",
                description: "A comprehensive 2-year program designed to develop leadership and management skills for senior executive roles in global organizations.",
                level: "Postgraduate",
                mode: "Hybrid",
                duration: "2 Years",
                price: "₹70,00,000",
                university: "Harvard Business School",
                category: "business",
                published: true,
                featured: true,
                curriculum: ["Strategic Management", "Finance", "Marketing", "Operations", "Leadership"],
                prerequisites: ["Bachelor's degree", "GMAT/GRE scores", "Work experience preferred"],
                seo: {
                    title: "MBA Program - Master of Business Administration",
                    description: "Advance your career with our comprehensive MBA program. Develop leadership skills and business acumen.",
                    keywords: ["MBA", "business administration", "management", "leadership"]
                }
            },
            {
                title: "Master of Science in Computer Science",
                slug: "ms-computer-science",
                description: "Advanced computer science program focusing on cutting-edge technologies including AI, machine learning, and software engineering.",
                level: "Postgraduate",
                mode: "On-Campus",
                duration: "2 Years",
                price: "₹53,00,000",
                university: "Stanford University",
                category: "technology",
                published: true,
                featured: true,
                curriculum: ["Algorithms", "Machine Learning", "Software Engineering", "Database Systems", "Computer Networks"],
                prerequisites: ["Bachelor's in Computer Science or related field", "GRE scores", "Programming experience"],
                seo: {
                    title: "MS Computer Science - Advanced Technology Program",
                    description: "Master cutting-edge computer science technologies with our comprehensive MS program.",
                    keywords: ["computer science", "MS program", "technology", "software engineering"]
                }
            },
            {
                title: "Doctor of Medicine (MD)",
                slug: "md-program",
                description: "Comprehensive medical education program preparing students for careers as physicians and medical researchers.",
                level: "Doctorate",
                mode: "On-Campus",
                duration: "4 Years",
                price: "₹98,00,000",
                university: "Johns Hopkins University",
                category: "medical",
                published: true,
                featured: true,
                curriculum: ["Anatomy", "Physiology", "Pathology", "Clinical Medicine", "Medical Ethics"],
                prerequisites: ["Bachelor's degree", "MCAT scores", "Medical school prerequisites", "Clinical experience"],
                seo: {
                    title: "MD Program - Doctor of Medicine",
                    description: "Become a physician with our comprehensive medical education program.",
                    keywords: ["medical degree", "MD program", "physician", "medical education"]
                }
            }
        ];

        for (const course of courses) {
            await Course.findOneAndUpdate({ slug: course.slug }, course, { upsert: true });
            results.courses++;
        }

        // 6. Seed Events
        const events = [
            {
                title: "Global Education Summit 2024",
                slug: "global-education-summit-2024",
                description: "Join the largest gathering of educators, students, and policymakers to discuss the future of international education.",
                startDate: new Date("2024-03-15T10:00:00Z"),
                endDate: new Date("2024-03-17T18:00:00Z"),
                date: new Date("2024-03-15T10:00:00Z"),
                location: "Convention Center, New Delhi",
                type: "conference",
                capacity: 5000,
                registrationDeadline: new Date("2024-03-01T23:59:59Z"),
                fee: "₹5,000",
                organizer: "Aptor Studies",
                published: true,
                featured: true,
                seo: {
                    title: "Global Education Summit 2024 - International Education Conference",
                    description: "Join the premier international education conference. Network with educators and explore global opportunities.",
                    keywords: ["education summit", "international education", "conference", "networking"]
                }
            },
            {
                title: "University Application Workshop",
                slug: "university-application-workshop",
                description: "Comprehensive workshop covering university applications, essay writing, and interview preparation for international students.",
                startDate: new Date("2024-02-10T14:00:00Z"),
                endDate: new Date("2024-02-10T17:00:00Z"),
                date: new Date("2024-02-10T14:00:00Z"),
                location: "Aptor Studies Office, Calicut",
                type: "workshop",
                capacity: 50,
                registrationDeadline: new Date("2024-02-05T23:59:59Z"),
                fee: "Free",
                organizer: "Aptor Studies",
                published: true,
                featured: true,
                seo: {
                    title: "University Application Workshop - Free Student Workshop",
                    description: "Learn how to create winning university applications. Free workshop for aspiring international students.",
                    keywords: ["university applications", "student workshop", "college admissions", "study abroad"]
                }
            },
            {
                title: "Career Guidance Seminar",
                slug: "career-guidance-seminar",
                description: "Expert guidance on career paths, industry trends, and skill development for students and professionals.",
                startDate: new Date("2024-04-20T15:00:00Z"),
                endDate: new Date("2024-04-20T18:00:00Z"),
                date: new Date("2024-04-20T15:00:00Z"),
                location: "Online Webinar",
                type: "seminar",
                capacity: 1000,
                registrationDeadline: new Date("2024-04-15T23:59:59Z"),
                fee: "₹500",
                organizer: "Aptor Studies",
                published: true,
                featured: false,
                seo: {
                    title: "Career Guidance Seminar - Professional Development",
                    description: "Get expert career guidance and industry insights. Online seminar for students and professionals.",
                    keywords: ["career guidance", "professional development", "career planning", "industry trends"]
                }
            }
        ];

        for (const event of events) {
            await Event.findOneAndUpdate({ slug: event.slug }, event, { upsert: true });
            results.events++;
        }

        // 7. Seed Internships
        const internships = [
            {
                title: "Software Development Intern",
                company: "Tech Innovations Inc.",
                location: "Bangalore, India",
                type: "hybrid",
                duration: "3 months",
                stipend: "₹25,000/month",
                description: "Join our development team to work on cutting-edge web applications using React, Node.js, and cloud technologies.",
                requirements: ["Computer Science or related field", "Knowledge of JavaScript", "Familiarity with React", "Problem-solving skills"],
                applicationDeadline: new Date("2024-03-31T23:59:59Z"),
                startDate: new Date("2024-05-01T09:00:00Z"),
                applicationUrl: "https://techinnovations.com/internships",
                contactEmail: "internships@techinnovations.com",
                published: true,
                featured: true,
                slug: "software-development-intern-tech-innovations",
                seo: {
                    title: "Software Development Internship - Tech Innovations",
                    description: "Join our software development team as an intern. Work with modern technologies and gain valuable experience.",
                    keywords: ["software internship", "development intern", "tech internship", "programming"]
                }
            },
            {
                title: "Digital Marketing Intern",
                company: "Global Marketing Solutions",
                location: "Mumbai, India",
                type: "onsite",
                duration: "6 months",
                stipend: "₹20,000/month",
                description: "Learn digital marketing strategies, social media management, and content creation in a fast-paced marketing environment.",
                requirements: ["Marketing or related field", "Social media knowledge", "Creative thinking", "Communication skills"],
                applicationDeadline: new Date("2024-04-15T23:59:59Z"),
                startDate: new Date("2024-06-01T09:00:00Z"),
                applicationUrl: "https://globalmarketing.com/careers",
                contactEmail: "hr@globalmarketing.com",
                published: true,
                featured: true,
                slug: "digital-marketing-intern-global-marketing",
                seo: {
                    title: "Digital Marketing Internship - Global Marketing Solutions",
                    description: "Gain hands-on experience in digital marketing, social media, and content creation.",
                    keywords: ["marketing internship", "digital marketing", "social media", "content creation"]
                }
            },
            {
                title: "Research Assistant Intern",
                company: "Academic Research Institute",
                location: "Delhi, India",
                type: "onsite",
                duration: "4 months",
                stipend: "₹18,000/month",
                description: "Assist in academic research projects, data analysis, and publication preparation in various fields of study.",
                requirements: ["Graduate degree", "Research experience", "Data analysis skills", "Academic writing"],
                applicationDeadline: new Date("2024-05-30T23:59:59Z"),
                startDate: new Date("2024-07-01T09:00:00Z"),
                applicationUrl: "https://academicresearch.org/internships",
                contactEmail: "research@academicresearch.org",
                published: true,
                featured: false,
                slug: "research-assistant-intern-academic-institute",
                seo: {
                    title: "Research Assistant Internship - Academic Research Institute",
                    description: "Join our research team and contribute to academic publications and data analysis projects.",
                    keywords: ["research internship", "academic research", "data analysis", "research assistant"]
                }
            }
        ];

        for (const internship of internships) {
            await Internship.findOneAndUpdate({ slug: internship.slug }, internship, { upsert: true });
            results.internships++;
        }

        // 8. Seed Sample Contacts
        const contacts = [
            {
                name: "John Smith",
                email: "john.smith@email.com",
                phone: "+91 98765 43210",
                message: "I'm interested in MBA programs at top universities. Please provide more information about admission requirements and scholarships.",
                source: "website",
                status: "new",
                priority: "medium"
            },
            {
                name: "Sarah Johnson",
                email: "sarah.j@email.com",
                phone: "+91 87654 32109",
                message: "Looking for guidance on studying computer science in the USA. Need help with university selection and application process.",
                source: "lead_modal",
                status: "contacted",
                priority: "high"
            },
            {
                name: "Raj Patel",
                email: "raj.patel@email.com",
                phone: "+91 76543 21098",
                message: "Interested in medical schools abroad. Please schedule a counseling session to discuss options.",
                source: "counselling",
                status: "new",
                priority: "high"
            }
        ];

        for (const contact of contacts) {
            const existingContact = await Contact.findOne({ email: contact.email });
            if (!existingContact) {
                await Contact.create(contact);
                results.contacts++;
            }
        }

        // 9. Seed SEO Settings
        const seoSettings = {
            siteName: "Aptor Studies",
            siteDescription: "Experience education services with Aptor Studies. Get expert guidance, explore colleges, universities, and courses worldwide.",
            siteKeywords: ["education portal", "universities", "colleges", "courses", "student counseling", "study abroad"],
            siteUrl: "https://aptorstudies.com",
            logoUrl: "/logo.png",
            contactEmail: "info@aptorstudies.com",
            contactPhone: "+91 95267 97987",
            address: "Calicut, Kerala, India",
            socialMedia: {
                facebook: "https://facebook.com/aptorstudies",
                twitter: "https://twitter.com/aptorstudies",
                linkedin: "https://linkedin.com/company/aptorstudies",
                instagram: "https://instagram.com/aptorstudies"
            },
            analytics: {
                googleAnalyticsId: "",
                facebookPixelId: "",
                linkedinInsightTag: ""
            },
            isActive: true
        };

        const existingSeoSettings = await SeoSettings.findOne();
        if (!existingSeoSettings) {
            await SeoSettings.create(seoSettings);
            results.seoSettings = true;
        } else {
            results.seoSettings = true;
        }

        console.log("Database seeding completed successfully");

        return NextResponse.json({
            success: true,
            message: "Database seeded successfully with all data",
            results: results,
            summary: {
                totalCollections: 8,
                adminUser: results.admin ? "Created/Exists" : "Failed",
                dataSeeded: {
                    universities: results.universities,
                    colleges: results.colleges,
                    blogs: results.blogs,
                    courses: results.courses,
                    events: results.events,
                    internships: results.internships,
                    contacts: results.contacts,
                    seoSettings: results.seoSettings ? "Created/Exists" : "Failed"
                }
            }
        }, { status: 200 });

    } catch (error) {
        console.error("Database seeding error:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to seed database",
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        
        // Check database status
        const stats = {
            users: await User.countDocuments(),
            universities: await University.countDocuments(),
            colleges: await College.countDocuments(),
            blogs: await Blog.countDocuments(),
            courses: await Course.countDocuments(),
            events: await Event.countDocuments(),
            internships: await Internship.countDocuments(),
            contacts: await Contact.countDocuments(),
            seoSettings: await SeoSettings.countDocuments()
        };

        const adminExists = await User.findOne({ email: 'info@aptorstudies.com', role: 'admin' });

        return NextResponse.json({
            success: true,
            message: "Database status retrieved successfully",
            stats: stats,
            adminUser: adminExists ? "Exists" : "Not Found",
            totalRecords: Object.values(stats).reduce((sum, count) => sum + count, 0)
        }, { status: 200 });

    } catch (error) {
        console.error("Error checking database status:", error);
        return NextResponse.json({
            success: false,
            message: "Failed to check database status",
            error: error instanceof Error ? error.message : "Unknown error"
        }, { status: 500 });
    }
}