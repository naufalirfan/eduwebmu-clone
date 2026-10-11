export const metadata={title:"FAQ — KelasKita"};
const faqs=[
  {q:"Berapa lama akses kelas?",a:"Selamanya. Termasuk update materi baru di kelas yang sama."},
  {q:"Belum bisa coding?",a:"Cocok — pendekatan vibe coding bareng AI dari nol sampai deploy."},
  {q:"Metode pembayaran?",a:"QRIS & Virtual Account via DOKU. Konfirmasi otomatis via email."},
  {q:"AI Tools pakai kredit?",a:"Ya — 1 kredit = 1 PRD, atau 3x MVP/AGENTS.md. Satu saldo untuk semua."},
  {q:"Butuh bantuan?",a:"WA 0857-0000-0000 atau hello@kelaskita.id — sertakan email akun & no pesanan."},
];
export default function FAQPage(){
  return (<div className="mx-auto max-w-3xl px-4 py-10 md:px-6"><h1 className="text-2xl font-bold">FAQ</h1><div className="mt-6 space-y-3">{faqs.map(f=><details key={f.q} className="rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm"><summary className="cursor-pointer list-none text-sm font-semibold">{f.q}</summary><p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p></details>)}</div></div>);
}