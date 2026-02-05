import { Calendar, MapPin, Users, Clock, Globe, Mail, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import connectDB from "@/lib/db";
import Event from "@/models/Event";

interface EventPageProps {
  params: {
    slug: string;
  };
}

async function getEvent(slug: string) {
  try {
    await connectDB();
    const event = await Event.findOne({ slug, isActive: true });
    return event ? JSON.parse(JSON.stringify(event)) : null;
  } catch (error) {
    console.error("Failed to fetch event:", error);
    return null;
  }
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const event = await getEvent(params.slug);

  if (!event) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      full: date.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  const getTypeColor = (type: string) => {
    const colors = {
      workshop: "bg-blue-100 text-blue-800",
      seminar: "bg-green-100 text-green-800",
      webinar: "bg-purple-100 text-purple-800",
      conference: "bg-red-100 text-red-800",
      fair: "bg-yellow-100 text-yellow-800",
      other: "bg-gray-100 text-gray-800"
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  const startDate = formatDate(event.startDate);
  const endDate = formatDate(event.endDate);
  const isMultiDay = event.startDate !== event.endDate;
  const registrationDeadline = event.registrationDeadline ? formatDate(event.registrationDeadline) : null;

  return (
    <div className="bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-gray-700">Events</Link>
            <span>/</span>
            <span className="text-gray-900">{event.title}</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </span>
            {event.featured && (
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {event.title}
          </h1>

          {/* Event Meta */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50 rounded-lg">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">
                    {isMultiDay ? `${startDate.full} - ${endDate.full}` : startDate.full}
                  </div>
                  <div className="text-sm text-gray-500">
                    {startDate.time} {isMultiDay && `- ${endDate.time}`}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="font-medium text-gray-900">{event.location}</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {event.capacity && (
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">{event.capacity} seats available</div>
                  </div>
                </div>
              )}

              {event.fee && (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-gray-400 font-bold">₹</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{event.fee}</div>
                  </div>
                </div>
              )}

              {registrationDeadline && (
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium text-gray-900">Registration Deadline</div>
                    <div className="text-sm text-red-600">{registrationDeadline.full}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <div className="text-gray-700 whitespace-pre-line">
                {event.description}
              </div>
            </div>

            {event.organizer && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Organized by</h3>
                <p className="text-gray-700">{event.organizer}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Registration Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Register for this Event</h3>
                
                {registrationDeadline && new Date(event.registrationDeadline) < new Date() ? (
                  <div className="text-center py-4">
                    <p className="text-red-600 font-medium">Registration Closed</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Registration deadline has passed
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-500">
                        Free registration • Instant confirmation
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <a href="mailto:info@aptorstudies.com" className="text-blue-600 hover:underline">
                      info@aptorstudies.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <a href="tel:+911234567890" className="text-blue-600 hover:underline">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share This Event</h3>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    Facebook
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-400 text-white rounded text-sm hover:bg-blue-500">
                    Twitter
                  </button>
                  <button className="flex-1 px-4 py-2 bg-blue-700 text-white rounded text-sm hover:bg-blue-800">
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Events */}
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            ← Back to All Events
          </Link>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: EventPageProps) {
  const event = await getEvent(params.slug);
  
  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  return {
    title: event.seo?.title || `${event.title} | Aptor Studies`,
    description: event.seo?.description || event.description.substring(0, 160),
    keywords: event.seo?.keywords || [event.type, 'education', 'event', 'workshop'],
  };
}