import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon, SendIcon } from 'lucide-react';
import { createInquiry } from '../../services/inquiryService';
import type { Product } from '../../types';

interface InquiryFormProps {
  product?: Product;
  title?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function InquiryForm({ product, title = 'Send an Inquiry' }: InquiryFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: product ? `I would like a quote for ${product.name} (${product.model}).` : ''
  });

  const update = (key: keyof typeof form) => (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => {
      try {
        createInquiry({ ...form, product });
        setStatus('success');
        setForm({ name: '', phone: '', email: '', message: '' });
      } catch {
        setStatus('error');
      }
    }, 600);
  };

  const inputClass =
  'h-11 w-full rounded-md border border-zinc-300 bg-white px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-zinc-400 focus:border-accent';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center">
        <CheckCircle2Icon size={30} className="text-emerald-600" />
        <h3 className="font-display text-xl font-bold uppercase text-ink">
          Inquiry Received
        </h3>
        <p className="max-w-sm text-sm text-zinc-600">
          Thank you — our team will contact you shortly with availability, specifications
          and the best price.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-1 text-xs font-bold uppercase tracking-wider text-accent hover:underline">
          
          Send another inquiry
        </button>
      </div>);

  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-zinc-200 bg-white p-5 sm:p-6"
      noValidate>
      
      <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-1 text-sm text-zinc-500">
        Share your requirement and we will respond with a quotation.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            Name *
          </span>
          <input
            required
            value={form.name}
            onChange={update('name')}
            className={inputClass}
            placeholder="Your full name" />
          
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            Phone *
          </span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            className={inputClass}
            placeholder="+91 ..." />
          
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            Email
          </span>
          <input
            type="email"
            value={form.email}
            onChange={update('email')}
            className={inputClass}
            placeholder="you@company.com" />
          
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            Requirement
          </span>
          <textarea
            rows={4}
            value={form.message}
            onChange={update('message')}
            className="w-full rounded-md border border-zinc-300 bg-white p-3.5 text-sm text-ink outline-none transition-colors placeholder:text-zinc-400 focus:border-accent"
            placeholder="Tell us about your venue, setup or the products you need." />
          
        </label>
      </div>

      {status === 'error' &&
      <p role="alert" className="mt-3 text-xs font-semibold text-red-600">
          Please enter at least your name and phone number.
        </p>
      }

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-ink text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent disabled:opacity-60 sm:w-auto sm:px-8">
        
        {status === 'submitting' ?
        <Loader2Icon size={16} className="animate-spin" /> :

        <SendIcon size={15} />
        }
        {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>);

}