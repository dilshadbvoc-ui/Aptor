"use client";

import { Calendar, MapPin, Users, Clock, Crown, Star, Diamond, Sparkles, ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { LeadModal } from "@/components/ui";

interface Event {
  _id: string;
  title: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  capacity?: number;
  fee?: string;
  registrationDeadline?: string;
  slug: string;
  isActive: boolean;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string>("");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setEvents(data.events);
        }
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterClick = (eventTitle: string) => {
    setSelectedEvent(eventTitle);
    setIsModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      full: date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
  };

  const getTypeColor = (type: string) => {
    const colors = {
      workshop: "from-blue-400 to-blue-600",
      seminar: "from-green-400 to-green-600",
      webinar: "from-purple-400 to-purple-600",
      conference: "from-red-400 to-red-600",
      fair: "from-yellow-400 to-yellow-600",
      other: "from-gray-400 to-gray-600"
    };
    return colors[type as keyof typeof colors] || colors.other;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-black animate-pulse" />
          </div>
          <p className="text-yellow-400">Loading premium events...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">PREMIUM EVENTS</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Elite</span>
              <br />
              <span className="text-white">Educational Events</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join exclusive workshops, seminars, and networking sessions designed for elite students and professionals. Advance your educational journey with premium events.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {events.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Upcoming Premium Events</h3>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Check back soon for exclusive workshops, seminars, and elite networking opportunities.
              </p>
              <Link 
                href="/contact" 
                className="btn-premium inline-flex items-center gap-2 text-black font-semibold"
              >
                <Crown className="w-5 h-5" />
                Contact Elite Team
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="gradient-text">Upcoming</span> Premium Events
                </h2>
                <p className="text-gray-400">
                  {events.length} exclusive event{events.length !== 1 ? 's' : ''} available
                </p>
              </div>

              <div className="space-y-8">
                {events.map((event, index) => {
                  const startDate = formatDate(event.startDate);
                  const endDate = formatDate(event.endDate);
                  const isMultiDay = event.startDate !== event.endDate;
                  
                  return (
                    <div
                      key={event._id}
                      className="card-premium hover-lift-premium slide-up group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-6 flex flex-col lg:flex-row items-start lg:items-center gap-6">
                        {/* Premium Date Card */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex flex-col items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-black">{startDate.day}</span>
                            <span className="text-sm uppercase text-black font-medium">{startDate.month}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                              {event.title}
                            </h3>
                            <div className={`w-8 h-8 bg-gradient-to-br ${getTypeColor(event.type)} rounded-lg flex items-center justify-center`}>
                              <Crown className="w-4 h-4 text-white" />
                            </div>
                            <span className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-xs font-medium text-yellow-400 uppercase">
                              {event.type}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                            <span className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-yellow-400" />
                              {isMultiDay ? `${startDate.full} - ${endDate.full}` : startDate.full}
                            </span>
                            <span className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-yellow-400" />
                              {startDate.time}
                            </span>
                            <span className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-yellow-400" />
                              {event.location}
                            </span>
                            {event.capacity && (
                              <span className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-yellow-400" />
                                {event.capacity} elite seats
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed mb-4">{event.description}</p>
                          
                          <div className="flex flex-wrap gap-4">
                            {event.fee && (
                              <div className="flex items-center gap-2">
                                <Diamond className="w-4 h-4 text-yellow-400" />
                                <span className="text-sm font-medium text-yellow-400">
                                  Course Fee: {event.fee}
                                </span>
                              </div>
                            )}
                            
                            {event.registrationDeadline && (
                              <div className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-red-400" />
                                <span className="text-sm text-red-400">
                                  Registration Deadline: {formatDate(event.registrationDeadline).full}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Premium Actions */}
                        <div className="flex flex-col gap-3 min-w-[200px]">
                          <Link
                            href={`/events/${event.slug}`}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black/50 border border-yellow-400/30 text-gray-300 rounded-lg font-medium hover:bg-yellow-400/10 hover:text-yellow-400 transition-all duration-300"
                          >
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                          <button 
                            onClick={() => handleRegisterClick(event.title)}
                            className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
                          >
                            <Crown className="w-4 h-4" />
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12 text-center glow">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">NETWORKING EXCELLENCE</span>
              <Diamond className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Network with <span className="gradient-text">Elite Professionals?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our exclusive events and connect with industry leaders, successful alumni, and like-minded peers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/counselling"
                className="btn-premium inline-flex items-center justify-center gap-2 text-black font-semibold"
              >
                <Crown className="w-5 h-5" />
                Get Event Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 glass"
              >
                <Trophy className="w-5 h-5" />
                Contact Elite Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Register for ${selectedEvent}`}
        subtitle="Join Our Premium Event"
        source={`event-${selectedEvent.toLowerCase().replace(/\s+/g, '-')}`}
      />
    </div>
  );
}
