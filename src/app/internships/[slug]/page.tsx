import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, MapPin, Building, Clock, DollarSign, ExternalLink, Mail, ArrowLeft } from "lucide-react";
import connectDB from "@/lib/db";
import Internship from "@/models/Internship";
import { StructuredData } from "@/components/seo/StructuredData";
import { getSeoSettings } from "@/lib/seo";

async function getInternship(slug: string) {
  try {
    await connectDB();
    const internship = await Internship.findOne({ slug, isActive: true });
    return internship ? JSON.parse(JSON.stringify(internship)) : null;
  } catch (error) {
    console.error("Error fetching internship:", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const internship = await getInternship(params.slug);
  
  if (!internship) {
    return {
      title: "Internship Not Found",
      description: "The requested internship could not be found."
    };
  }

  return {
    title: `${internship.title} at ${internship.company} | Aptor Studies`,
    description: internship.description.substring(0, 160),
    keywords: [internship.title, internship.company, internship.location, internship.type, "internship", "career", "opportunity"],
  };
}

export default async function InternshipDetailPage({ params }: { params: { slug: string } }) {
  const internship = await getInternship(params.slug);
  const seoSettings = await getSeoSettings();

  if (!internship) {
    notFound();
  }

  const isExpired = new Date(internship.applicationDeadline) < new Date();

  return (
    <>
      <StructuredData 
        type="jobPosting" 
        data={{
          title: internship.title,
          company: internship.company,
          location: internship.location,
          description: internship.description,
          datePosted: internship.createdAt,
          validThrough: internship.applicationDeadline,
          employmentType: "INTERN",
          workHours: internship.duration,
          baseSalary: internship.stipend
        }} 
        seoSettings={seoSettings} 
      />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link 
            href="/internships"
            className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Internships
          </Link>

          {/* Header */}
          <div className="mb-8">
            {internship.featured && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                Featured Opportunity
              </div>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {internship.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-slate-600">
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                {internship.company}
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                {internship.location}
              </div>
              
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {internship.duration}
              </div>
              
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                {internship.stipend}
              </div>
            </div>
            
            <div className="mt-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-slate-600" />
              <span className={`text-sm ${isExpired ? 'text-red-600' : 'text-slate-600'}`}>
                Application Deadline: {new Date(internship.applicationDeadline).toLocaleDateString()}
                {isExpired && " (Expired)"}
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">About This Internship</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {internship.description}
                  </p>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {internship.requirements.map((requirement: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Internship Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-slate-700">Type:</span>
                    <p className="text-slate-600 capitalize">{internship.type}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-700">Start Date:</span>
                    <p className="text-slate-600">{new Date(internship.startDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-700">Duration:</span>
                    <p className="text-slate-600">{internship.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-700">Stipend:</span>
                    <p className="text-slate-600">{internship.stipend}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Application Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Apply for This Internship</h3>
                
                {isExpired ? (
                  <div className="text-center py-4">
                    <p className="text-red-600 font-medium mb-2">Application Deadline Passed</p>
                    <p className="text-sm text-slate-600">This internship is no longer accepting applications.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-sm text-slate-600">
                      <p className="mb-2">Deadline: {new Date(internship.applicationDeadline).toLocaleDateString()}</p>
                      <p>Start Date: {new Date(internship.startDate).toLocaleDateString()}</p>
                    </div>
                    
                    {internship.applicationUrl ? (
                      <a
                        href={internship.applicationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Apply on Company Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    ) : (
                      <div className="space-y-3">
                        <Link
                          href={`/contact?subject=Internship Application: ${internship.title}&message=I am interested in applying for the ${internship.title} internship at ${internship.company}.`}
                          className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Apply Through Aptor Studies
                        </Link>
                        
                        {internship.contactEmail && (
                          <a
                            href={`mailto:${internship.contactEmail}?subject=Internship Application: ${internship.title}`}
                            className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Email Directly
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Share */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-slate-900 mb-2">Share This Opportunity</h4>
                <p className="text-xs text-slate-600 mb-3">Help others discover this internship</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigator.share?.({ 
                      title: internship.title, 
                      text: `Check out this internship opportunity at ${internship.company}`, 
                      url: window.location.href 
                    })}
                    className="flex-1 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                  >
                    Share
                  </button>
                  <button
                    onClick={() => navigator.clipboard.writeText(window.location.href)}
                    className="flex-1 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}