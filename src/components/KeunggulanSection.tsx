const ITEMS = [
  {
    icon: "💰",
    title: "BONUS HARIAN",
    desc: "Bonus deposit 10% setiap hari tanpa syarat ribet",
  },
  {
    icon: "⚡",
    title: "PROSES CEPAT",
    desc: "Deposit & withdraw diproses dalam 3 menit",
  },
  {
    icon: "🔒",
    title: "100% AMAN",
    desc: "Enkripsi SSL & sistem keamanan berlapis",
  },
  {
    icon: "📱",
    title: "MUDAH DIAKSES",
    desc: "Bisa dimainkan via HP, tablet, maupun PC",
  },
];

export default function KeunggulanSection() {
  return (
    <section className="bg-[#061020] px-4 py-5" aria-label="Mengapa memilih SURAT4D">
      <h2 className="text-[15px] font-black uppercase text-white tracking-wide text-center mb-4">
        ⭐ MENGAPA MEMILIH SURAT4D?
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="bg-[#0d2044] border border-[#1e4080] rounded-lg px-3 py-4 text-center"
          >
            <div className="text-3xl mb-2" aria-hidden="true">{item.icon}</div>
            <h3 className="text-[11px] font-black text-[#00d4ff] uppercase mb-1.5 tracking-wide">
              {item.title}
            </h3>
            <p className="text-[10px] text-[#7ab0e0] leading-snug">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
