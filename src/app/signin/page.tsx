"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SigninRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the correct login page
    router.replace("/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-green-600">Redirecting to login...</p>
      </div>
    </div>
  );
}