"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white font-bold text-lg">K</span>
          <span className="font-bold tracking-tight text-slate-900">KelasKita</span>
          <span className="hidden text-xs text-slate-500 md:inline">· Vibe Coding & AI</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/courses" className="text-slate-600 hover:text-slate-900">Kelas</Link>
          <Link href="/tutorial" className="text-slate-600 hover:text-slate-900">Tutorial</Link>
          <Link href="/community" className="text-slate-600 hover:text-slate-900">Komunitas</Link>
          <Link href="/faq" className="text-slate-600 hover:text-slate-900">FAQ</Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login" className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">Masuk</Link>
          <Link href="/courses" className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Mulai Belajar</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="min-h-11 min-w-11 grid place-items-center rounded-lg border border-slate-200 px-3.5 py-2.5 md:hidden" aria-label="menu">☰</button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-2 md:hidden">
          <div className="flex flex-col text-sm">
            <Link href="/courses" onClick={() => setOpen(false)} className="py-3">Kelas</Link>
            <Link href="/tutorial" onClick={() => setOpen(false)} className="py-3">Tutorial</Link>
            <Link href="/community" onClick={() => setOpen(false)} className="py-3">Komunitas</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="py-3">FAQ</Link>
          </div>
        </div>
      )}
    </header>
  );
}
