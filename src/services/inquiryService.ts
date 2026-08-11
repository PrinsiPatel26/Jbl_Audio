/**
 * Inquiry (lead) service.
 *
 * The site captures leads instead of orders. Today submissions are handed off to
 * WhatsApp and mirrored into local storage so nothing is lost; later this file is
 * the only place to swap in `POST /api/inquiries`.
 */
import type { Inquiry, InquiryStatus, Product } from '../types';

const STORAGE_KEY = 'jbl-audio-pro:inquiries';

export const INQUIRY_STATUSES: InquiryStatus[] = [
'New',
'Contacted',
'Follow Up',
'Converted',
'Closed'];


export function createInquiry(input: {
  name: string;
  phone: string;
  email?: string;
  message: string;
  product?: Product;
}): Inquiry {
  const inquiry: Inquiry = {
    name: input.name,
    phone: input.phone,
    email: input.email,
    productId: input.product?.id,
    productName: input.product?.name,
    message: input.message,
    createdAt: new Date().toISOString(),
    status: 'New'
  };
  saveInquiry(inquiry);
  return inquiry;
}

export function listInquiries(): Inquiry[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Inquiry[] : [];
  } catch {
    return [];
  }
}

function saveInquiry(inquiry: Inquiry): void {
  try {
    const all = listInquiries();
    all.unshift(inquiry);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(all.slice(0, 100)));
  } catch {

    /* storage unavailable — the WhatsApp handoff still works */}
}