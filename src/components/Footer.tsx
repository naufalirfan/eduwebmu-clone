import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold"><span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-white">K</span>KelasKita</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">Platform belajar Vibe Coding, AI Agent & Automation — studi kasus nyata, akses selamanya.</p>
            <p className="mt-3 text-sm text-slate-600">Email: hello@kelaskita.id<br/>WhatsApp: 0857-0000-0000</p>
          </div>
          <div><h4 className="text-sm font-semibold">Produk & Tools</h4><ul className="mt-3 space-y-1 text-sm text-slate-600"><li><Link href="/courses" className="inline-block py-1.5">Kelas</Link></li><li><Link href="/tutorial" className="inline-block py-1.5">Tutorial</Link></li><li><Link href="/prd-generator" className="inline-block py-1.5">AI PRD Generator</Link></li><li><Link href="/mvp-generator" className="inline-block py-1.5">AI MVP Generator</Link></li></ul></div>
          <div><h4 className="text-sm font-semibold">Program & Info</h4><ul className="mt-3 space-y-1 text-sm text-slate-600"><li><Link href="/community" className="inline-block py-1.5">Komunitas</Link></li><li><Link href="/faq" className="inline-block py-1.5">FAQ</Link></li><li><Link href="#" className="inline-block py-1.5">Program Affiliate</Link></li></ul></div>
          <div><h4 className="text-sm font-semibold">Bantuan & Legal</h4><ul className="mt-3 space-y-1 text-sm text-slate-600"><li><Link href="#" className="inline-block py-1.5">Kebijakan Privasi</Link></li><li><Link href="#" className="inline-block py-1.5">Syarat & Ketentuan</Link></li><li><Link href="#" className="inline-block py-1.5">Hubungi Kami</Link></li></ul></div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row">
          <span>© 2026 KelasKita. Dibuat dengan vibe coding.</span><span>Powered by Next.js · DOKU QRIS</span>
        </div>
      </div>
    </footer>
  );
}
