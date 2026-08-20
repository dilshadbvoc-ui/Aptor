import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Users, Award, BookOpen, Crown, Sparkles, CheckCircle2, Trophy, GraduationCap, Building2, ArrowRight, ShieldCheck } from "lucide-react";

// Database course lookup mock / fetch logic
const getCourse = async (slug: string) => {
  const courses = {
    "computer-science": {
      id: "1",
      name: "Computer Science Engineering",
      slug: "computer-science",
      description: "Comprehensive program covering software development, artificial intelligence, algorithms, cloud computing, and advanced computer systems.",
      duration: "4 Years",
      level: "Undergraduate",
      mode: "Full-time",
      fees: "₹2,50,000 per year",
      eligibility: "12th standard with PCM (Physics, Chemistry, Math), minimum 75% aggregate marks",
      subjects: ["Programming & Data Structures", "Algorithms & Complexity", "Database Systems", "Software Engineering", "Cloud & Web Technologies"],
      career: ["Software Engineer", "Data Scientist", "System Architect", "Full Stack Developer", "Product Manager"],
      universities: ["IIT Bangalore", "IIIT Bangalore", "PES University", "RV College of Engineering"],
    },
    "business-administration": {
      id: "2", 
      name: "Master of Business Administration",
      slug: "business-administration",
      description: "Advanced leadership and business administration program focusing on executive strategy, financial management, marketing, and entrepreneurship.",
      duration: "2 Years",
      level: "Postgraduate", 
      mode: "Full-time",
      fees: "₹8,00,000 per year",
      eligibility: "Bachelor's degree in any discipline with minimum 50% marks, valid CAT/GMAT/MAT score",
      subjects: ["Strategic Management", "Corporate Finance", "Digital Marketing", "Supply Chain Operations", "Executive Leadership"],
      career: ["Management Consultant", "Business Analyst", "Product Lead", "Financial Manager", "Entrepreneur"],
      universities: ["IIM Bangalore", "ISB Hyderabad", "XLRI Jamshedpur", "Alliance University"],
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
    <div className="bg-[#fbfdfc] bg-light-green-dots min-h-screen pb-20">
      
      {/* Dark Forest Green Hero Header Banner */}
      <section className="relative bg-gradient-to-b from-[#01160d] via-[#032619] to-[#063326] text-white pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Dot Matrix Pattern */}
        <div className="absolute inset-0 bg-light-green-dots-dark opacity-35 pointer-events-none z-0"></div>
        {/* Ambient Radial Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 via-emerald-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Navigation Button */}
          <div className="mb-6">
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#053722]/80 hover:bg-[#084e31] border border-[#1a6e46] rounded-full text-emerald-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-[#eab308]" />
              <span>Back to Courses</span>
            </Link>
          </div>

          {/* Level Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d8f5e5] border border-[#a3e6c2] rounded-full mb-4 shadow-sm">
            <Crown className="w-4 h-4 text-[#095738]" />
            <span className="text-[#095738] text-xs font-bold tracking-wide uppercase">{course.level} PROGRAM</span>
            <Sparkles className="w-3.5 h-3.5 text-[#095738]" />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
            {course.name}
          </h1>

          {/* Short Description */}
          <p className="text-emerald-100/90 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed font-normal mb-6">
            {course.description}
          </p>

          {/* Accent Line */}
          <div className="w-16 h-1 bg-[#10b981] rounded-full"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
          
          {/* Left / Main Column */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview Section with Stats Grid */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-emerald-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                <Crown className="w-6 h-6 text-[#eab308]" />
                <span>Program Overview</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d8f5e5] text-[#095738] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Duration</span>
                    <p className="text-base font-bold text-slate-900 mt-0.5">{course.duration}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d8f5e5] text-[#095738] flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Academic Level</span>
                    <p className="text-base font-bold text-slate-900 mt-0.5">{course.level}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d8f5e5] text-[#095738] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Study Mode</span>
                    <p className="text-base font-bold text-slate-900 mt-0.5">{course.mode}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#d8f5e5] text-[#095738] flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Estimated Tuition</span>
                    <p className="text-base font-bold text-[#095738] mt-0.5">{course.fees}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Subjects Section */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-emerald-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-[#063326]" />
                <span>Key Core Subjects</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center p-4 bg-[#f4fbf7] border border-[#d2f3e2] rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-[#10b981] mr-3 shrink-0" />
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">{subject}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Career Opportunities */}
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-emerald-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                <Trophy className="w-6 h-6 text-[#eab308]" />
                <span>Career Opportunities</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.career.map((career, index) => (
                  <div key={index} className="flex items-center p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl">
                    <Sparkles className="w-5 h-5 text-[#eab308] mr-3 shrink-0" />
                    <span className="text-slate-900 font-semibold text-sm sm:text-base">{career}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            
            {/* Eligibility Criteria */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-emerald-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#063326]" />
                <span>Eligibility Criteria</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 font-medium">
                {course.eligibility}
              </p>
            </div>

            {/* Top Universities */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-emerald-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#095738]" />
                <span>Top Partner Institutions</span>
              </h3>
              <div className="space-y-3">
                {course.universities.map((university, index) => (
                  <div key={index} className="p-3.5 bg-[#f4fbf7] border border-[#d2f3e2] rounded-xl flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-[#095738] shrink-0" />
                    <span className="text-slate-900 font-bold text-sm">{university}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Counselling CTA Box */}
            <div className="bg-gradient-to-br from-[#01160d] via-[#032619] to-[#063326] text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-emerald-500/30">
              {/* Background Accent */}
              <div className="absolute right-[-20%] bottom-[-20%] w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d8f5e5] text-[#095738] rounded-full text-xs font-bold mb-4">
                <Crown className="w-3.5 h-3.5" />
                <span>FREE ADMISSION GUIDANCE</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Need Help Choosing?</h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 font-normal">
                Get expert 1-on-1 career counselling and admission assistance for {course.name}.
              </p>

              <Link 
                href="/counselling" 
                className="w-full bg-[#eab308] hover:bg-[#d99b0c] text-[#05291b] font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Crown className="w-4 h-4" />
                <span>Get Free Counselling</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}