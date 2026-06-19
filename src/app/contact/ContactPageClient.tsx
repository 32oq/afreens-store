"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { siteData } from "@/utils/data";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "A valid email is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.message.trim() || form.message.length < 10) newErrors.message = "Message should be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <SectionTitle eyebrow="Contact" title="Reach out for your custom project" description="Share your details or request a consultation. All fields are validated locally and no data is submitted externally." />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Contact details</h2>
            <div className="mt-6 space-y-4 text-sm text-zinc-700 dark:text-zinc-300">
              <p><strong>Email:</strong> {siteData.email}</p>
              <p><strong>Phone:</strong> {siteData.phone}</p>
              <p><strong>Address:</strong> {siteData.address}</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Studio location</h2>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-black/10 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
              <Image src="/images/map.svg" alt="Studio map illustration" width={960} height={480} className="w-full object-cover" />
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm text-zinc-700 dark:text-zinc-300">
              <span className="mb-2 block">Name</span>
              <input
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                className="w-full rounded-3xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
              />
              {errors.name ? <p className="mt-2 text-xs text-rose-500">{errors.name}</p> : null}
            </label>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300">
              <span className="mb-2 block">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className="w-full rounded-3xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
              />
              {errors.email ? <p className="mt-2 text-xs text-rose-500">{errors.email}</p> : null}
            </label>
          </div>
          <label className="block text-sm text-zinc-700 dark:text-zinc-300">
            <span className="mb-2 block">Phone</span>
            <input
              value={form.phone}
              onChange={(event) => setForm({ ...form, phone: event.target.value })}
              className="w-full rounded-3xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
            />
            {errors.phone ? <p className="mt-2 text-xs text-rose-500">{errors.phone}</p> : null}
          </label>
          <label className="block text-sm text-zinc-700 dark:text-zinc-300">
            <span className="mb-2 block">Message</span>
            <textarea
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              rows={6}
              className="w-full rounded-3xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
            />
            {errors.message ? <p className="mt-2 text-xs text-rose-500">{errors.message}</p> : null}
          </label>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button type="submit">Send message</Button>
            {submitted ? (
              <p className="rounded-full bg-emerald-950/10 px-4 py-3 text-sm text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">
                Your message is ready to send. Thank you!
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
