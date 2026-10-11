export type Course = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Vibe Coding" | "Automation";
  price: number;
  discountPrice: number;
  thumbnail: string;
  lessons: number;
  level: string;
};

export const courses: Course[] = [
  {
    slug: "bikin-website-lms-pakai-ai",
    title: "Bikin Website Course Online (LMS) pakai AI",
    excerpt: "Buat platform kursus online tanpa langganan bulanan — dari landing, member area, admin, auth Clerk, NeonDB hingga deploy Vercel.",
    category: "Vibe Coding",
    price: 249000,
    discountPrice: 149000,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
    lessons: 42,
    level: "Pemula",
  },
  {
    slug: "n8n-automation-mastery",
    title: "n8n Automation Mastery",
    excerpt: "Workflow automation self-hosted: trigger, node fundamental, integrasi AI Agent & Google Sheets. Hemat waktu kerja harian.",
    category: "Automation",
    price: 249000,
    discountPrice: 149000,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    lessons: 36,
    level: "Pemula",
  },
  {
    slug: "ai-agent-untuk-bisnis",
    title: "AI Agent untuk Bisnis & Customer Service",
    excerpt: "Bangun AI agent mandiri yang balas chat, kelola order, dan sinkron ke sheet — studi kasus toko online nyata.",
    category: "Automation",
    price: 299000,
    discountPrice: 179000,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
    lessons: 28,
    level: "Menengah",
  },
  {
    slug: "vibe-coding-nextjs-clerk",
    title: "Vibe Coding Next.js + Clerk + NeonDB",
    excerpt: "Bangun web app modern bareng AI: auth, database relasi, payment QRIS, dan deploy production step-by-step.",
    category: "Vibe Coding",
    price: 199000,
    discountPrice: 119000,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop",
    lessons: 32,
    level: "Pemula",
  },
];

export const stats = { members: 1980, prdCount: 622 };
