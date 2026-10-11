import Link from "next/link";
import { courses, stats } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
export default function Home() {
  return (
    <div>
      <section className="border-b border-slate-100 bg-gradient-to-b from-indigo-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold text-white">VIBE CODING & AI AGENT</span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight md:text-5xl">Belajar bikin <span className="text-indigo-600">website & automasi</span> bareng AI — tanpa pusing koding.</h1>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600">Platform belajar Vibe Coding, AI Agent & n8n Automation — studi kasus nyata untuk bisnis. Akses selamanya, update materi, grup diskusi.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/courses" className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700">Mulai Belajar — Lihat Kelas</Link>
                <Link href="/tutorial" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-50">Lihat Tutorial Gratis</Link>
              </div>
              <div className="mt-6 flex gap-6 text-sm">
                <div><div className="text-xl font-extrabold">{stats.members.toLocaleString("id-ID")}+</div><div className="text-slate-500">member</div></div>
                <div><div className="text-xl font-extrabold">{stats.prdCount}+</div><div className="text-slate-500">PRD dibuat</div></div>
                <div><div className="text-xl font-extrabold">4.9/5</div><div className="text-slate-500">rating kelas</div></div>
              </div>
            </div>
            <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-xl">
              <div className="rounded-2xl bg-slate-900 p-4 text-white">
                <div className="text-xs opacity-60">preview · kelas terlaris</div>
                <div className="mt-1 font-semibold leading-6">Bikin Website Course Online (LMS) pakai AI — tanpa langganan bulanan</div>
                <div className="mt-3 flex items-center gap-2 text-xs opacity-80"><span className="rounded-full bg-white/15 px-2 py-1">42 materi</span><span className="rounded-full bg-white/15 px-2 py-1">Clerk + NeonDB</span><span className="rounded-full bg-white/15 px-2 py-1">QRIS</span></div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {courses.slice(0, 2).map(c => <div key={c.slug} className="rounded-xl border border-slate-200 p-3"><div className="text-xs font-semibold line-clamp-2 leading-5">{c.title}</div><div className="mt-1 text-xs text-slate-500">{c.category}</div></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Kelas Terpopuler</h2>
          <Link href="/courses" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Lihat semua →</Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map(c => <CourseCard key={c.slug} c={c} />)}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <h2 className="text-center text-2xl font-bold">Alur Belajar 4 Langkah</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">Mulai dari ide → PRD → MVP → deploy. Didampingi AI generator + studi kasus nyata.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { n: "01", t: "Tentukan Ide", d: "Validasi ide & riset pasar bareng AI PRD." },
              { n: "02", t: "Generate PRD", d: "Pakai AI PRD Generator — 1 klik jadi dokumen." },
              { n: "03", t: "Build MVP", d: "Vibe coding Next.js, auth, DB, payment QRIS." },
              { n: "04", t: "Deploy & Jualan", d: "Deploy Vercel + domain, kelola member & transaksi." },
            ].map(s => <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="text-xs font-bold text-indigo-600">{s.n}</div><div className="mt-1 font-semibold">{s.t}</div><div className="mt-1 text-sm leading-6 text-slate-600">{s.d}</div></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight">3 AI Tools — hemat jam kerja</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/prd-generator" className="rounded-2xl border border-slate-200 p-6 hover:bg-slate-50"><div className="text-sm font-bold text-indigo-600">01 · PRD Generator</div><div className="mt-1 font-semibold">PRD 1 kredit</div><p className="mt-1 text-sm text-slate-600">Generate product requirement doc lengkap dari prompt singkat.</p></Link>
          <Link href="/mvp-generator" className="rounded-2xl border border-slate-200 p-6 hover:bg-slate-50"><div className="text-sm font-bold text-indigo-600">02 · MVP Generator</div><div className="mt-1 font-semibold">MVP 0.33 kredit</div><p className="mt-1 text-sm text-slate-600">Plan MVP + backlog prioritas — siap eksekusi vibe coding.</p></Link>
          <Link href="/agents-generator" className="rounded-2xl border border-slate-200 p-6 hover:bg-slate-50"><div className="text-sm font-bold text-indigo-600">03 · AGENTS.md</div><div className="mt-1 font-semibold">0.33 kredit</div><p className="mt-1 text-sm text-slate-600">Generate AGENTS.md untuk orkestrasi AI agent tim.</p></Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div><h2 className="text-2xl font-bold">Siap mulai vibe coding hari ini?</h2><p className="mt-1 text-sm text-slate-300">Akses selamanya + update + grup. Bayar sekali via QRIS/VA DOKU.</p></div>
            <Link href="/courses" className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100">Pilih Kelas →</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <h2 className="text-xl font-bold">FAQ</h2>
        <div className="mt-4 grid gap-3 text-sm">
          <details className="rounded-xl border border-slate-200 p-4"><summary className="font-semibold cursor-pointer">Apakah perlu bisa koding?</summary><p className="mt-2 text-slate-600">Tidak — semua kelas dirancang untuk pemula. Kita pakai AI + vibe coding step-by-step.</p></details>
          <details className="rounded-xl border border-slate-200 p-4"><summary className="font-semibold cursor-pointer">Pembayaran pakai apa?</summary><p className="mt-2 text-slate-600">DOKU QRIS & Virtual Account. Akses aktif otomatis setelah bayar.</p></details>
          <details className="rounded-xl border border-slate-200 p-4"><summary className="font-semibold cursor-pointer">Akses berapa lama?</summary><p className="mt-2 text-slate-600">Selamanya, termasuk update materi ke depan.</p></details>
        </div>
        <div className="mt-4"><Link href="/faq" className="text-sm font-semibold text-indigo-600">Lihat semua FAQ →</Link></div>
      </section>
    </div>
  );
}
