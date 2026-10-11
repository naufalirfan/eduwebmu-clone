import Link from "next/link";
import { Course } from "@/lib/data";
function formatRp(n: number) { return "Rp " + n.toLocaleString("id-ID"); }
export default function CourseCard({ c }: { c: Course }) {
  const pct = Math.round((1 - c.discountPrice / c.price) * 100);
  return (
    <Link href={`/course/${c.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <img src={c.thumbnail} alt={c.title} className="h-full w-full object-cover transition group-hover:scale-[1.03]" />
        <span className="absolute left-3 top-3 rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white">-{pct}%</span>
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 backdrop-blur">{c.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-[15px] font-semibold leading-6 text-slate-900">{c.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{c.excerpt}</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500"><span>{c.level}</span><span>·</span><span>{c.lessons} materi</span></div>
        <div className="mt-4 flex items-end gap-2">
          <span className="text-lg font-bold text-indigo-600">{formatRp(c.discountPrice)}</span>
          <span className="pb-1 text-xs text-slate-400 line-through">{formatRp(c.price)}</span>
        </div>
        <span className="mt-4 inline-flex w-full justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white group-hover:bg-black">Lihat Detail</span>
      </div>
    </Link>
  );
}
