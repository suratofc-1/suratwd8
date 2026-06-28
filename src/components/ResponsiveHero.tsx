export default function ResponsiveHero() {
  return (
    <section className="bg-[#08162e] px-4 py-6 sm:px-6 lg:px-8">
      <div className="hidden md:grid md:grid-cols-[1.65fr_1fr] md:items-center gap-6">
        <div className="rounded-[32px] border border-[#1e3b67] bg-[#0b1b36]/95 p-8 shadow-[0_30px_80px_-60px_rgba(0,212,255,0.6)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[#7ab0e0]">Versi Desktop</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white">
            Akses hiburan online terpercaya dengan tampilan desktop yang luas dan rapi.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Didesain untuk pengalaman lebih fokus dan informatif, dengan konten terstruktur, navigasi cepat, dan highlight fitur utama dalam satu area.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-[#071e43] p-4 text-sm text-slate-200">
              Layout lebih luas
            </div>
            <div className="rounded-3xl bg-[#071e43] p-4 text-sm text-slate-200">
              Info ringkas & jelas
            </div>
            <div className="rounded-3xl bg-[#071e43] p-4 text-sm text-slate-200">
              Navigasi mudah
            </div>
            <div className="rounded-3xl bg-[#071e43] p-4 text-sm text-slate-200">
              Akses konten lengkap
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-[#0f3d76] bg-[#081a2f]/95 p-6 shadow-[0_30px_80px_-70px_rgba(0,212,255,0.7)]">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7ab0e0]">Highlight Desktop</p>
          <div className="mt-5 space-y-4">
            <div className="rounded-3xl bg-[#091f47] p-4 text-sm text-slate-100">
              Tata letak grid lebar untuk tampilan multi-konten.
            </div>
            <div className="rounded-3xl bg-[#091f47] p-4 text-sm text-slate-100">
              Banner, menu, dan artikel utama terlihat seimbang.
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden space-y-4">
        <div className="rounded-[28px] border border-[#1d3a67] bg-[#0d2145]/95 p-5 shadow-[0_20px_50px_-35px_rgba(0,212,255,0.65)]">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7ab0e0]">Versi Mobile</p>
          <h1 className="mt-3 text-2xl font-black leading-snug text-white">
            Tampilan mobile yang ringkas, mudah di-scroll, dan cepat diakses.
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Ideal untuk pengguna handphone: menu sederhana, tombol besar, serta informasi yang langsung terlihat tanpa harus mencari.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#1d3a67] bg-[#0b1c35]/95 p-4 shadow-[0_20px_50px_-35px_rgba(0,212,255,0.65)]">
          <div className="grid gap-3">
            <div className="rounded-3xl bg-[#0f2a55] p-3 text-sm text-slate-100">Konten ringkas di atas</div>
            <div className="rounded-3xl bg-[#0f2a55] p-3 text-sm text-slate-100">Scroll nyaman di layar kecil</div>
            <div className="rounded-3xl bg-[#0f2a55] p-3 text-sm text-slate-100">Akses cepat tanpa gangguan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
