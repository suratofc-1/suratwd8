const KEUNTUNGAN = [
  "Akses cepat ke berbagai pilihan hiburan digital",
  "Antarmuka sederhana dan nyaman untuk pemula maupun pengguna berpengalaman",
  "Dukungan pelanggan yang responsif dan mudah dijangkau",
  "Keamanan data dengan perlindungan standar industri",
];

const KELEBIHAN = [
  "Proses pendaftaran yang cepat dan mudah",
  "Desain responsif untuk mobile dan desktop",
  "Konten yang terus diperbarui untuk pengalaman yang segar",
  "Akses ke komunitas interaktif dan acara live yang aktif",
];

const ARTICLES = [
  {
    heading: "Mengapa SURAT4D Menjadi Pilihan Banyak Pengguna",
    paragraphs: [
      "SURAT4D hadir sebagai platform hiburan online yang fokus pada kenyamanan, keamanan, dan akses yang lancar untuk pengguna di berbagai perangkat.",
      "Dengan desain yang responsif dan fitur yang terus dikembangkan, situs ini dirancang agar pengalaman pengguna tetap nyaman baik saat mengakses dari desktop maupun ponsel.",
    ],
  },
  {
    heading: "Cara Daftar dan Mengakses Konten",
    paragraphs: [
      "Proses pendaftaran dibuat sederhana sehingga pengguna dapat segera mulai menjelajahi layanan yang tersedia.",
      "Setelah masuk, pengguna dapat memilih kategori hiburan, mengikuti acara live, dan memanfaatkan fitur yang tersedia langsung dari browser.",
    ],
  },
  {
    heading: "Keamanan, Privasi, dan Dukungan",
    paragraphs: [
      "Situs ini mengutamakan perlindungan data pengguna dengan standar keamanan yang sesuai kebutuhan platform digital modern.",
      "Jika ada pertanyaan seputar akun, privasi, atau penggunaan layanan, tim dukungan siap membantu melalui berbagai channel yang tersedia.",
    ],
  },
  {
    heading: "Panduan Singkat untuk Pengguna Baru",
    paragraphs: [
      "1. Klik tombol daftar yang tersedia di halaman utama.",
      "2. Isi formulir dengan data yang valid dan lengkap.",
      "3. Lakukan verifikasi jika diperlukan untuk mengaktifkan akun.",
      "4. Masuk dan pilih konten atau fitur yang ingin digunakan.",
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
