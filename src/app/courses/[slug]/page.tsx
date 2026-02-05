import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Award, BookOpen } from "lucide-react";

// This would typically come from a database
const getCourse = async (slug: string) => {
  // Mock data - replace with actual database query
  const courses = {
    "computer-science": {
      id: "1",
      name: "Computer Science Engineering",
      slug: "computer-science",
      description: "Comprehensive program covering software development, algorithms, and computer systems.",
      duration: "4 Years",
      level: "Undergraduate",
      mode: "Full-time",
      fees: "₹2,50,000 per year",
      eligibility: "12th with PCM, minimum 75% marks",
      subjects: ["Programming", "Data Structures", "Algorithms", "Database Systems", "Software Engineering"],
      career: ["Software Developer", "Data Scientist", "System Analyst", "Product Manager"],
      universities: ["IIT Bangalore", "IIIT Bangalore", "PES University"],
    },
    "business-administration": {
      id: "2", 
      name: "Master of Business Administration",
      slug: "business-administration",
      description: "Advanced business program focusing on leadership, strategy, and management skills.",
      duration: "2 Years",
      level: "Postgraduate", 
      mode: "Full-time",
      fees: "₹8,00,000 per year",
      eligibility: "Bachelor's degree with minimum 50% marks, CAT/GMAT score",
      subjects: ["Strategic Management", "Finance", "Marketing", "Operations", "Leadership"],
      career: ["Business Analyst", "Consultant", "Product Manager", "Entrepreneur"],
      universities: ["IIM Bangalore", "ISB Hyderabad", "XLRI Jamshedpur"],
    }
  };
  
  return courses[slug as keyof typeof courses] || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const course = await getCourse(params.slug);
  
  if (!course) {
    return {
      title: "Course Not Found | Aptor Studies",
    };
  }

  return {
    title: `${course.name} | Aptor Studies - Course Details`,
    description: `Learn about ${course.name} - ${course.description} Duration: ${course.duration}. Find top universities offering this course.`,
    keywords: `${course.name}, ${course.level}, course details, universities, ${course.subjects.join(', ')}`,
    openGraph: {
      title: `${course.name} | Aptor Studies`,
      description: course.description,
      type: "article",
    },
  };
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourse(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/courses" className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>

        {/* Course Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{course.name}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{course.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Clock className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="font-semibold text-slate-900">Duration</span>
                  </div>
                  <p className="text-gray-700">{course.duration}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="font-semibold text-slate-900">Level</span>
                  </div>
                  <p className="text-gray-700">{course.level}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Users className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="font-semibold text-slate-900">Mode</span>
                  </div>
                  <p className="text-gray-700">{course.mode}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-5 h-5 text-teal-600 mr-2" />
                    <span className="font-semibold text-slate-900">Fees</span>
                  </div>
                  <p className="text-gray-700">{course.fees}</p>
                </div>
              </div>
            </section>

            {/* Subjects */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Subjects</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center p-4 bg-teal-50 rounded-lg">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                    <span className="text-slate-900 font-medium">{subject}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Opportunities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Career Opportunities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.career.map((career, index) => (
                  <div key={index} className="flex items-center p-4 bg-amber-50 rounded-lg">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-slate-900 font-medium">{career}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Eligibility */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Eligibility Criteria</h3>
              <p className="text-gray-700">{course.eligibility}</p>
            </div>

            {/* Top Universities */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Top Universities</h3>
              <div className="space-y-3">
                {course.universities.map((university, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <span className="text-slate-900 font-medium">{university}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Need Guidance?</h3>
              <p className="mb-4 text-teal-100">Get personalized counseling for this course</p>
              <Link 
                href="/contact" 
                className="inline-block w-full text-center bg-white text-teal-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Free Counseling
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}