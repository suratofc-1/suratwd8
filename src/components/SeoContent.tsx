const KEUNTUNGAN = [
  "Akses cepat ke beragam hiburan interaktif",
  "Antarmuka yang intuitif dan mudah digunakan",
  "Dukungan pelanggan responsif",
  "Keamanan data dengan enkripsi standar industri",
];

const KELEBIHAN = [
  "Proses pendaftaran cepat dan sederhana",
  "Desain responsif untuk mobile dan desktop",
  "Konten yang terus diperbarui secara berkala",
  "Akses ke fitur komunitas dan acara live",
];

const ARTICLES = [
  {
    heading: "Akses Hiburan Online Terpercaya — 2026",
    paragraphs: [
      "Platform ini dirancang untuk menjadi pusat hiburan online yang aman dan terpercaya pada 2026. Fokusnya adalah pada pengalaman pengguna, keamanan data, dan ketersediaan konten interaktif untuk semua perangkat.",
      "Kami menerapkan praktik keamanan modern dan dukungan teknis untuk memastikan akses yang andal dan nyaman setiap saat.",
    ],
  },
  {
    heading: "Cara Daftar & Mengakses Konten",
    paragraphs: [
      "Pendaftaran mudah: klik tombol 'Daftar', lengkapi informasi dasar, lalu verifikasi identitas jika diminta. Akun Anda siap dipakai dalam hitungan menit.",
      "Setelah masuk, kunjungi menu untuk memilih kategori hiburan atau acara live yang tersedia. Semua konten dapat diakses langsung melalui browser tanpa instalasi tambahan.",
    ],
  },
  {
    heading: "Keamanan & Privasi",
    paragraphs: [
      "Kami menggunakan enkripsi dan standar keamanan mutakhir untuk melindungi data pengguna. Untuk detail kebijakan privasi dan pengelolaan data, silakan baca halaman kebijakan privasi pada footer situs.",
      "Jika Anda memiliki pertanyaan tentang privasi atau keamanan, tim dukungan kami siap membantu melalui Live Chat atau email.",
    ],
  },
  {
    heading: "Panduan Singkat: Daftar di SURAT4D",
    paragraphs: [
      "1. Klik tombol 'Daftar' di pojok kanan atas halaman.",
      "2. Isi formulir pendaftaran dengan data yang valid.",
      "3. Verifikasi nomor telepon atau email bila diminta.",
      "4. Setelah terverifikasi, masuk dan pilih menu konten yang Anda sukai.",
    ],
  },
];

function SeoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#0d2044] rounded-md overflow-hidden">
      <div className="bg-[#0057c8] px-3 py-2 text-[11px] font-black text-white uppercase tracking-wide">
        {title}
      </div>
      <ul className="p-2.5 space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className="text-[10.5px] text-[#b8d4f0] pb-1 border-b border-[#1a3060] last:border-0 leading-snug"
          >
            <span className="text-[#00d4ff] font-bold mr-1">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SeoArticle({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  return (
    <article className="bg-[#0d2044] rounded-lg p-4 text-left">
      <h2 className="text-[13px] font-black text-[#00d4ff] uppercase tracking-wide mb-2 pb-1.5 border-b border-[#1e4080]">
        {heading}
      </h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-[11.5px] text-[#8ab5df] leading-relaxed mb-1.5 last:mb-0">
          {p}
        </p>
      ))}
    </article>
  );
}

export default function SeoContent() {
  return (
    <section className="bg-[#0a1628] px-4 py-5" aria-label="Konten informasi">
      <h2 className="text-[16px] font-black text-white uppercase tracking-widest text-center mb-4">
        KEUNTUNGAN & KELEBIHAN SURAT4D
      </h2>

      {/* Info cards */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <SeoCard title="Keuntungan SURAT4D" items={KEUNTUNGAN} />
        <SeoCard title="Kelebihan SURAT4D" items={KELEBIHAN} />
      </div>

      {/* Articles */}
      <div className="space-y-3.5">
        {ARTICLES.map((article) => (
          <SeoArticle key={article.heading} {...article} />
        ))}
      </div>
    </section>
  );
}
