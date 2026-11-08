import { MenuItem } from './data/restaurantData';

export interface CartItem {
  id: string; // unique cart entry key
  dish: MenuItem;
  selectedSwallow?: string;
  spicePreference?: string;
  quantity: number;
  unitPrice: number;
}

export interface ReservationSubmission {
  guestName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: number;
  seatingZone: 'Main Dining Room' | 'Outdoor Cultural Terrace' | 'Private VIP Lounge';
  specialRequest?: string;
}

export interface ContactInquiry {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
