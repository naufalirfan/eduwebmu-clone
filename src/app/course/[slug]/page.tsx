import { courses } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
export function generateStaticParams() { return courses.map((c) => ({ slug: c.slug })); }
function formatRp(n: number) { return "Rp " + n.toLocaleString("id-ID"); }
export default async function CourseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = courses.find((x) => x.slug === slug);
  if (!c) notFound();
  const pct = Math.round((1 - c.discountPrice / c.price) * 100);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Link href="/courses" className="text-sm text-indigo-600 hover:text-indigo-700">← Kembali ke kelas</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <img src={c.thumbnail} alt={c.title} className="aspect-[16/9] w-full rounded-2xl object-cover" />
          <h1 className="mt-6 text-2xl font-bold leading-tight">{c.title}</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600">{c.excerpt}</p>
          <div className="mt-6 rounded-2xl border border-slate-200 p-5">
            <h2 className="font-semibold">Apa yang akan dipelajari</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Public & Member Area lengkap</li><li>Auth, Database, Payment QRIS/VA</li><li>Deploy ke Vercel + custom domain</li><li>Update materi selamanya</li>
            </ul>
          </div>
        </div>
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700">-{pct}% • {c.category}</span>
          <div className="mt-3 flex items-baseline gap-2"><span className="text-2xl font-bold text-indigo-600">{formatRp(c.discountPrice)}</span><span className="text-sm text-slate-400 line-through">{formatRp(c.price)}</span></div>
          <p className="mt-1 text-xs text-slate-500">{c.level} • {c.lessons} materi • Akses selamanya</p>
          <button className="mt-4 w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Beli Kelas — Bayar QRIS/VA</button>
          <p className="mt-2 text-center text-xs text-slate-500">Checkout via DOKU (QRIS & Virtual Account). Akses aktif otomatis.</p>
          <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs leading-6 text-slate-600">
            Termasuk: video per materi, prompt & resource, grup WA/Telegram, sertifikat.
          </div>
        </div>
      </div>
    </div>
  );
}
