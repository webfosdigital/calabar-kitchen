import React, { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { RESTAURANT_PROFILE } from '../data/restaurantData';
import { ReservationSubmission } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationSubmission>({
    guestName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '13:00',
    partySize: 2,
    seatingZone: 'Main Dining Room',
    specialRequest: '',
  });

  const [submittedReservation, setSubmittedReservation] = useState<{
    code: string;
    data: ReservationSubmission;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const confirmationCode = `CK-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedReservation({
        code: confirmationCode,
        data: formData,
      });
      setIsSubmitting(false);
    }, 600);
  };

  const timeSlots = [
    '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
    '02:00 PM', '03:00 PM', '05:00 PM', '06:00 PM', '07:00 PM',
    '08:00 PM', '08:30 PM'
  ];

  const handleWhatsAppConfirm = () => {
    if (!submittedReservation) return;
    const msg = encodeURIComponent(
      `Hello Calabar Kitchen, I just made a reservation on your website!\n\n` +
      `Confirmation Code: ${submittedReservation.code}\n` +
      `Name: ${submittedReservation.data.guestName}\n` +
      `Date: ${submittedReservation.data.date}\n` +
      `Time: ${submittedReservation.data.time}\n` +
      `Guests: ${submittedReservation.data.partySize}\n` +
      `Zone: ${submittedReservation.data.seatingZone}\n` +
      (submittedReservation.data.specialRequest ? `Special Request: ${submittedReservation.data.specialRequest}\n` : '') +
      `Please confirm my table.`
    );
    window.open(`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="reservation" className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Hospitality Information */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#B84A12] mb-2">
              <span>Table & Event Booking</span>
              <span aria-hidden="true">·</span>
              <span>41 & 42 Ikwerre Road</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl text-[#1E1B18] font-semibold tracking-tight leading-snug">
              Reserve Your Table for an Unhurried Calabar Feast
            </h2>

            <p className="mt-4 text-base text-[#5C5348] leading-relaxed">
              Whether you are dining with colleagues over steaming pepper soup, hosting an executive lunch in Port Harcourt, or sharing a Sunday pot of Afang with family, reserving guarantees your table and freshly simmered portions.
            </p>

            <div className="mt-8 space-y-4 pt-6 border-t border-[#E8E2D8] text-sm text-[#4A4136]">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#B84A12] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1E1B18]">Operating Hours</p>
                  <p className="text-xs text-[#6B6155]">{RESTAURANT_PROFILE.hours.weekdays}</p>
                  <p className="text-xs text-[#6B6155]">{RESTAURANT_PROFILE.hours.sunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#B84A12] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1E1B18]">Large Gatherings & VIP Bookings</p>
                  <p className="text-xs text-[#6B6155]">
                    For parties larger than 10 or private dining events, call our table manager directly at <a href={`tel:${RESTAURANT_PROFILE.phone}`} className="font-medium text-[#B84A12] underline">{RESTAURANT_PROFILE.phoneFormatted}</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Instant Action */}
            <div className="mt-8 p-4 bg-[#F2EDE4] rounded-xl border border-[#DFD7CB] flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[#1E1B18]">Prefer booking via WhatsApp?</p>
                <p className="text-[11px] text-[#6B6155]">Instant response from our front desk</p>
              </div>
              <a
                href={`https://wa.me/${RESTAURANT_PROFILE.whatsappNumber}?text=Hello%20Calabar%20Kitchen,%20I%20would%20like%20to%20reserve%20a%20table%20today.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#22673B] text-white text-xs font-semibold rounded-lg hover:bg-[#1A522E] transition-colors flex items-center gap-1.5 shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

          </div>

          {/* Right Column: Reservation Form or Confirmed State */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#DFD7CB] p-6 sm:p-8 shadow-sm">
              
              {submittedReservation ? (
                <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 bg-[#22673B]/10 text-[#22673B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-[#1E1B18] mb-1">
                    Table Reserved Successfully!
                  </h3>
                  <p className="text-sm text-[#5C5348] mb-6">
                    We look forward to hosting you at Calabar Kitchen, 41 & 42 Ikwerre Road, Port Harcourt.
                  </p>

                  {/* Summary Card */}
                  <div className="max-w-md mx-auto bg-[#FAF8F5] rounded-xl border border-[#DFD7CB] p-5 text-left mb-6 text-sm">
                    <div className="flex justify-between pb-3 border-b border-[#ECE6DB]">
                      <span className="text-[#6B6155]">Confirmation Code</span>
                      <span className="font-mono font-bold text-[#B84A12]">{submittedReservation.code}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#ECE6DB]">
                      <span className="text-[#6B6155]">Guest Name</span>
                      <span className="font-medium text-[#1E1B18]">{submittedReservation.data.guestName}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#ECE6DB]">
                      <span className="text-[#6B6155]">Date & Time</span>
                      <span className="font-medium text-[#1E1B18]">{submittedReservation.data.date} at {submittedReservation.data.time}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#ECE6DB]">
                      <span className="text-[#6B6155]">Party Size</span>
                      <span className="font-medium text-[#1E1B18]">{submittedReservation.data.partySize} Guests</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-[#6B6155]">Seating Area</span>
                      <span className="font-medium text-[#1E1B18]">{submittedReservation.data.seatingZone}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleWhatsAppConfirm}
                      className="px-5 py-3 bg-[#22673B] text-white text-sm font-medium rounded-lg hover:bg-[#1A522E] transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to Kitchen WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmittedReservation(null)}
                      className="px-5 py-3 border border-[#DFD7CB] text-[#4A4136] text-sm font-medium rounded-lg hover:bg-[#FAF8F5] transition-colors"
                    >
                      Book Another Table
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#ECE6DB] pb-3 mb-4">
                    <h3 className="font-display text-xl font-semibold text-[#1E1B18]">
                      Online Table Reservation Form
                    </h3>
                    <p className="text-xs text-[#7A7064] mt-0.5">
                      No prepayment required. Confirmation sent instantly.
                    </p>
                  </div>

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.guestName}
                        onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                        placeholder="e.g. Chief Bassey Okon"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 09016607242"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Date, Time, Party Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-1.5">
                        Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-1.5">
                        Preferred Time *
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white transition-all"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-1.5">
                        Number of Guests *
                      </label>
                      <select
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: parseInt(e.target.value) })}
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white transition-all"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Seating Zone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-1.5">
                      Preferred Seating Section
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(['Main Dining Room', 'Outdoor Cultural Terrace', 'Private VIP Lounge'] as const).map((zone) => (
                        <button
                          key={zone}
                          type="button"
                          onClick={() => setFormData({ ...formData, seatingZone: zone })}
                          className={`p-3 text-xs font-medium rounded-lg border text-left transition-all ${
                            formData.seatingZone === zone
                              ? 'border-[#B84A12] bg-[#FAF3EE] text-[#B84A12] shadow-xs'
                              : 'border-[#DFD7CB] bg-[#FAF8F5] text-[#5C5348] hover:border-[#C4B7A2]'
                          }`}
                        >
                          {zone}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special notes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3A322A] uppercase tracking-wider mb-1.5">
                      Special Dietary Notes or Pre-Ordered Pots (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      placeholder="e.g. Please reserve 2 bowls of White Soup with extra goat meat; celebrate a birthday."
                      className="w-full px-3.5 py-2 bg-[#FAF8F5] border border-[#D5CDC0] rounded-lg text-sm text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#B84A12] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#B84A12] text-white font-medium rounded-lg hover:bg-[#9E3E0E] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{isSubmitting ? 'Confirming Table...' : 'Confirm Reservation'}</span>
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
