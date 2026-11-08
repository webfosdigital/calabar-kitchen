import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { RESTAURANT_PROFILE } from '../data/restaurantData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  // Requirement #130: Mandatory Dynamic Copyright Year Computation
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#181512] text-[#D8D2C5] border-t border-[#2A2420] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2A2420]">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <span className="font-display text-2xl font-semibold text-white tracking-tight block">
              Calabar Kitchen
            </span>
            <p className="text-xs uppercase tracking-widest text-[#C85A17] font-semibold">
              Cross River Native Delicacies
            </p>
            <p className="text-xs text-[#A89E92] leading-relaxed">
              Authentic native Afang, White soup (Afia Efere), Edikang Ikong, 404 pepper soup, and traditional swallows cooked with deep respect for ancestral Nigerian culinary craft.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs">
              <span className="text-[#8A8073]">Social:</span>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <span className="text-[#5A5146]">·</span>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span className="text-[#5A5146]">·</span>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore Our Kitchen
            </h4>
            <ul className="space-y-2.5 text-xs text-[#B8ADA1]">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Traditional Native Menu
                </a>
              </li>
              <li>
                <a href="#daily-pots" className="hover:text-white transition-colors">
                  Today&apos;s Simmering Pot Status
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-white transition-colors">
                  Cross River Cultural Heritage
                </a>
              </li>
              <li>
                <a href="#reservation" className="hover:text-white transition-colors">
                  Table Reservation & Booking
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Find Us on Ikwerre Road
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Dishes */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Native Specialties
            </h4>
            <ul className="space-y-2 text-xs text-[#B8ADA1]">
              <li>Royal Afang Soup with Periwinkles</li>
              <li>Calabar White Soup (Afia Efere)</li>
              <li>Edikang Ikong Royale</li>
              <li>Special 404 Native Pepper Soup</li>
              <li>Cow Head & Tail Pepper Soup</li>
              <li>Fresh Pounded Yam & Eba</li>
              <li>Tapped Sweet Palm Wine</li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Port Harcourt Kitchen
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-[#B8ADA1]">
              <MapPin className="w-4 h-4 text-[#C85A17] shrink-0 mt-0.5" />
              <span>{RESTAURANT_PROFILE.address}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#B8ADA1]">
              <Phone className="w-4 h-4 text-[#C85A17] shrink-0" />
              <a href={`tel:${RESTAURANT_PROFILE.phone}`} className="hover:text-white transition-colors">
                {RESTAURANT_PROFILE.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#B8ADA1]">
              <Mail className="w-4 h-4 text-[#C85A17] shrink-0" />
              <a href={`mailto:${RESTAURANT_PROFILE.email}`} className="hover:text-white transition-colors">
                {RESTAURANT_PROFILE.email}
              </a>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#B8ADA1] pt-1">
              <Clock className="w-4 h-4 text-[#C85A17] shrink-0 mt-0.5" />
              <div>
                <span>{RESTAURANT_PROFILE.hours.weekdays}</span>
                <span className="block text-[#8A8073]">{RESTAURANT_PROFILE.hours.sunday}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Dynamic Copyright (Requirement #130) and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8073]">
          <p>
            &copy; <span id="copyright-year">{currentYear}</span> {RESTAURANT_PROFILE.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
