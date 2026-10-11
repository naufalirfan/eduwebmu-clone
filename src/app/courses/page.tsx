import { courses } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
export const metadata = { title: "Kelas — KelasKita" };
export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <h1 className="text-2xl font-bold tracking-tight">Semua Kelas</h1>
      <p className="mt-1 text-sm text-slate-600">Pilih kelas, bayar QRIS/VA, akses selamanya. Filter kategori tersedia.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => <CourseCard key={c.slug} c={c} />)}
      </div>
    </div>
  );
}
