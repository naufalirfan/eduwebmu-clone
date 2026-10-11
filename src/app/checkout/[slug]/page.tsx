import Link from "next/link";
import { courses } from "@/lib/data";
import { notFound } from "next/navigation";
export function generateStaticParams(){ return courses.map(c=>({slug:c.slug}));}
function formatRp(n:number){return "Rp "+n.toLocaleString("id-ID");}
export default async function Checkout({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=courses.find(x=>x.slug===slug);
  if(!c) notFound();
  return (
    <div className="mx-auto max-w-xl px-4 py-10 md:px-6">
      <Link href={`/course/${c.slug}`} className="text-sm font-medium text-indigo-600">← Kembali</Link>
      <h1 className="mt-3 text-2xl font-bold text-slate-900">Checkout — {c.title}</h1>
      <p className="mt-1 text-sm text-slate-600">Pembayaran via DOKU (QRIS & Virtual Account). Ini halaman dummy — integrasi DOKU tinggal colok env.</p>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex justify-between text-sm"><span className="text-slate-600">{c.title}</span><span className="font-semibold">{formatRp(c.discountPrice)}</span></div>
        <div className="mt-4 grid gap-3">
          <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Bayar via QRIS (DOKU)</button>
          <button className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Bayar via Virtual Account</button>
        </div>
        <p className="mt-4 text-xs text-slate-500">Env yang perlu diisi di Cloudflare Pages: DOKU_CLIENT_ID, DOKU_SECRET_KEY, DOKU_API_URL. Webhook: /api/doku/webhook</p>
      </div>
    </div>
  );
}
