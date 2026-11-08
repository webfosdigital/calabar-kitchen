import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2, Navigation } from 'lucide-react';
import { RESTAURANT_PROFILE } from '../data/restaurantData';
import { ContactInquiry } from '../types';

export const LocationContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactInquiry>({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Soup Pot Availability & Enquiries',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="location" className="py-20 bg-[#F4EFE6] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B84A12] mb-2">
            <span>Find Us in Port Harcourt</span>
            <span aria-hidden="true">·</span>
            <span>Reach Our Kitchen Team</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-[#1E1B18] font-semibold tracking-tight">
            Visit 41 & 42 Ikwerre Road or Send an Enquiry
          </h2>
          <p className="mt-3 text-base text-[#5C5348] leading-relaxed">
            Conveniently situated along the vibrant Ikwerre Road corridor, accessible from Mile 3, GRA, D-Line, and Olu Obasanjo road. 
            Drop in for a hearty dine-in meal, pick up hot takeout pots, or speak to our catering and reservations team.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact & Location info on Left, Working Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Location & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Navigation Card */}
            <div className="bg-white rounded-xl border border-[#DFD7CB] p-6 shadow-xs">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#FAF3EE] text-[#B84A12]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#1E1B18]">
                    Restaurant Location
                  </h3>
                  <p className="text-sm text-[#4A4136] font-medium mt-0.5">
                    {RESTAURANT_PROFILE.address}
                  </p>
                  <p className="text-xs text-[#7A7064] mt-1.5 leading-relaxed">
                    Easy parking available. Landmarks: Easily accessible between Mile 3 Market junction and Education Bus Stop on Ikwerre Road.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EBE2] flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=41+Ikwerre+Road+Port+Harcourt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold bg-[#1E1B18] text-white rounded-lg hover:bg-black transition-colors flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C85A17]" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href={`tel:${RESTAURANT_PROFILE.phone}`}
                  className="px-4 py-2 text-xs font-semibold border border-[#D5CDC0] text-[#3A322A] rounded-lg hover:bg-[#FAF8F5] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B84A12]" />
                  <span>Call {RESTAURANT_PROFILE.phone}</span>
                </a>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="bg-white rounded-xl border border-[#DFD7CB] p-6 shadow-xs space-y-4">
              <h3 className="font-display text-lg font-semibold text-[#1E1B18] mb-2">
                Direct Contact Channels
              </h3>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B84A12] shrink-0" />
                <div className="text-sm">
                  <span className="text-xs text-[#7A7064] block">Call / Text Orders:</span>
                  <a href={`tel:${RESTAURANT_PROFILE.phone}`} className="font-medium text-[#1E1B18] hover:text-[#B84A12] underline">
                    {RESTAURANT_PROFILE.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B84A12] shrink-0" />
                <div className="text-sm">
                  <span className="text-xs text-[#7A7064] block">Official Email:</span>
                  <a href={`mailto:${RESTAURANT_PROFILE.email}`} className="font-medium text-[#1E1B18] hover:text-[#B84A12] underline">
                    {RESTAURANT_PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#B84A12] shrink-0" />
                <div className="text-sm">
                  <span className="text-xs text-[#7A7064] block">Kitchen Service Hours:</span>
                  <span className="font-medium text-[#1E1B18] block">{RESTAURANT_PROFILE.hours.weekdays}</span>
                  <span className="text-xs text-[#5C5348] block">{RESTAURANT_PROFILE.hours.sunday}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0EBE2]">
                <a
                  href={`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=Hello%20Calabar%20Kitchen,%20I%20have%20an%20enquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#22673B] text-white text-xs font-semibold rounded-lg hover:bg-[#1A522E] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Front Desk on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Working Enquiry & Feedback Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#DFD7CB] p-6 sm:p-8 shadow-xs">
              
              {submitted ? (
                <div className="py-10 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-[#22673B]/10 text-[#22673B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#1E1B18] mb-1">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#5C5348] max-w-sm mx-auto mb-6">
                    Thank you, {formData.fullName}. Our kitchen supervisor will review your request and reply to {formData.phone} or {formData.email} promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        subject: 'Soup Pot Availability & Enquiries',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 bg-[#B84A12] text-white text-xs font-medium rounded-lg hover:bg-[#9E3E0E]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#ECE6DB] pb-3 mb-2">
                    <h3 className="font-display text-xl font-semibold text-[#1E1B18]">
                      Send an Enquiry or Pot Request
                    </h3>
                    <p className="text-xs text-[#7A7064] mt-0.5">
                      Need custom party pots, event catering, or have feedback? Let us know.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#4A4136] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Boma George"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4A4136] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 09016607242"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#4A4136] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#4A4136] mb-1">
                        Inquiry Topic *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white"
                      >
                        <option value="Soup Pot Availability & Enquiries">Soup Pot Availability Check</option>
                        <option value="Bulk Family / Office Food Order">Bulk Family / Office Food Order</option>
                        <option value="Event Catering in Port Harcourt">Event Catering in Port Harcourt</option>
                        <option value="General Dining Question">General Dining Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4A4136] mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can assist you..."
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#B84A12] text-white font-medium rounded-lg hover:bg-[#9E3E0E] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Enquiry...' : 'Submit Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
