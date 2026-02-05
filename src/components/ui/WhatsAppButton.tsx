"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = "+919526797987"; // The phone number from the context
    const message = "Hi! I'm interested in learning more about APTOR Studies services.";
    
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

    return (
        <div className="fixed bottom-6 right-6 z-50 mobile-safe-area-bottom">
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                aria-label="Contact us on WhatsApp"
            >
                {/* WhatsApp Icon */}
                <MessageCircle className="w-7 h-7" />
                
                {/* Pulse Animation */}
                <div className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-20"></div>
                
                {/* Tooltip */}
                <div className={`absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                }`}>
                    Chat with us on WhatsApp
                    <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
            </a>
        </div>
    );
}