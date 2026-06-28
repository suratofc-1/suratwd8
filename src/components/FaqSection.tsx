"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Apa itu layanan ini?",
    a: "Platform hiburan online yang menyajikan beragam konten seperti permainan kasual, acara live, dan turnamen komunitas. Fokus kami adalah menghadirkan pengalaman santai dan interaktif untuk pengguna.",
  },
  {
    q: "Bagaimana cara memulai?",
    a: "Cukup buat akun, masuk ke area 'Menu', lalu pilih kategori yang Anda minati. Semua fitur mudah diakses, tanpa perlu instalasi tambahan pada perangkat modern.",
  },
  {
    q: "Metode pembayaran dan keamanan",
    a: "Kami mendukung beberapa metode pembayaran populer dan menjaga keamanan data dengan enkripsi standar industri. Jika ada pertanyaan terkait transaksi, tim dukungan siap membantu.",
  },
  {
    q: "Apakah layanan ini tersedia di ponsel?",
    a: "Ya — situs dioptimalkan untuk tampilan mobile dan desktop sehingga Anda dapat menikmati konten kapan saja dari browser.",
  },
  {
    q: "Apakah ada persyaratan usia?",
    a: "Harap gunakan layanan sesuai dengan peraturan dan batasan usia di wilayah Anda. Beberapa konten mungkin memiliki batasan usia; cek ketentuan penggunaan kami untuk detail.",
  },
  {
    q: "Bagaimana cara menghubungi dukungan?",
    a: "Dukungan tersedia melalui Live Chat dan email. Tim kami berusaha merespon secepat mungkin untuk membantu kendala teknis atau pertanyaan umum.",
  },
  {
    q: "Di mana saya bisa membaca kebijakan privasi dan ketentuan?",
    a: "Kebijakan privasi dan syarat layanan tersedia pada tautan di bagian bawah situs. Kami merekomendasikan membacanya untuk memahami hak dan kewajiban pengguna.",
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-[#0d2044] border border-[#1e4080] rounded-md overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-3.5 py-3 text-left text-[12px] font-bold text-white cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          className={`text-[#00d4ff] text-lg leading-none transition-transform duration-200 flex-shrink-0 ml-2 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-3.5 pb-3 text-[11.5px] text-[#8ab5df] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="bg-[#0a1628] px-4 py-5" aria-label="Pertanyaan yang sering diajukan">
      <h2 className="text-[15px] font-black text-white uppercase tracking-wide text-center mb-3">
        ❓ Pertanyaan yang Sering Diajukan
      </h2>
      <div className="space-y-2">
        {FAQS.map((faq, i) => (
          <FaqItem key={faq.q} q={faq.q} a={faq.a} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}
