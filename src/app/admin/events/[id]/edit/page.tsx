"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSession } from "@/components/providers/SessionProvider";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import EventForm from "@/components/admin/EventForm";

interface Event {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  type: "workshop" | "seminar" | "webinar" | "conference" | "fair" | "other";
  capacity?: number;
  registrationDeadline?: string;
  fee?: string;
  slug: string;
  featured: boolean;
  isActive: boolean;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

export default function EditEventPage() {
  const { status } = useSession();
  const router = useRouter();
  const params = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    fetchEvent();
  }, [status, router, params.id]);

  const fetchEvent = async () => {
    try {
      const response = await fetch(`/api/admin/events/${params.id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch event");
      }
      const data = await response.json();
      setEvent(data.event);
    } catch (error) {
      console.error("Error fetching event:", error);
      alert("Failed to fetch event. Please try again.");
      router.push("/admin/events");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: Partial<Event>) => {
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/events/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update event");
      }

      alert("Event updated successfully!");
      router.push("/admin/events");
    } catch (error) {
      console.error("Error updating event:", error);
      alert(error instanceof Error ? error.message : "Failed to update event. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    router.push("/admin/events");
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center mobile-safe-area">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading event...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black mobile-safe-area">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/events"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
        </div>

        {/* Form */}
        {event && (
          <EventForm
            event={event}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            loading={saving}
          />
        )}
      </div>
    </div>
  );
}