import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { RESTAURANT_PROFILE } from '../data/restaurantData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      <div className="relative bg-white rounded-2xl border border-[#DFD7CB] shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-[#ECE6DB]">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-[#B84A12]" />
            ) : (
              <FileText className="w-5 h-5 text-[#B84A12]" />
            )}
            <h3 className="font-display text-xl font-semibold text-[#1E1B18]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#6C6357] hover:text-[#1E1B18] hover:bg-[#F2EDE4]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-4 text-xs text-[#5C5348] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>{RESTAURANT_PROFILE.name}</strong> (located at {RESTAURANT_PROFILE.address}), we take the privacy of our valued diners and customers seriously.
              </p>
              <h4 className="font-semibold text-sm text-[#1E1B18] pt-2">1. Information We Collect</h4>
              <p>
                We collect your contact name, phone number, delivery address in Port Harcourt, and dietary preferences when you place an order, make a table reservation, or send an enquiry.
              </p>
              <h4 className="font-semibold text-sm text-[#1E1B18] pt-2">2. How Your Information is Used</h4>
              <p>
                Your phone number is used exclusively by our dispatch riders and kitchen staff to confirm order delivery status or table reservations. We do not sell, rent, or distribute your personal details to third parties.
              </p>
              <h4 className="font-semibold text-sm text-[#1E1B18] pt-2">3. Direct Communications</h4>
              <p>
                If you choose to contact us via WhatsApp or phone at {RESTAURANT_PROFILE.phoneFormatted}, messages are handled strictly for customer service and meal fulfillment.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>{RESTAURANT_PROFILE.name}</strong>. By making a reservation or placing an order through this website, you agree to these operational terms.
              </p>
              <h4 className="font-semibold text-sm text-[#1E1B18] pt-2">1. Fresh Daily Preparations</h4>
              <p>
                Because our native Cross River soups (Afang, White soup, Edikang Ikong) and pepper soups are prepared daily using authentic wild herbs and fresh ingredients, all orders are subject to fresh pot availability.
              </p>
              <h4 className="font-semibold text-sm text-[#1E1B18] pt-2">2. Delivery and Self-Pickup</h4>
              <p>
                Dispatch delivery is provided throughout Port Harcourt (GRA, D-Line, Trans-Amadi, Mile 1/2/3, Choba, Peter Odili). Dispatch fees reflect distance and road logistics. Self-pickup is always complimentary at 41 & 42 Ikwerre Road.
              </p>
              <h4 className="font-semibold text-sm text-[#1E1B18] pt-2">3. Payments</h4>
              <p>
                Payment for orders may be settled upon delivery or pickup via Cash on Delivery or verified Direct Bank Transfer.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-[#ECE6DB] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1E1B18] text-white text-xs font-semibold rounded-lg hover:bg-black"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
