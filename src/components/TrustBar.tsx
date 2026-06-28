const TRUST_ITEMS = [
  { icon: "✓", label: "Terpercaya Sejak 2020" },
  { icon: "🔒", label: "SSL Secured" },
  { icon: "🏆", label: "500K+ Member" },
];

export default function TrustBar() {
  return (
    <div
      className="bg-[#061020] border-t border-b border-[#1e4080] px-4 py-2.5 flex flex-wrap justify-center gap-4"
      aria-label="Keunggulan SURAT4D"
    >
      {TRUST_ITEMS.map((item) => (
        <div key={item.label} className="flex items-center gap-1.5 text-[11px] text-[#5a8abf]">
          <span className="text-[#00d4ff]">{item.icon}</span>
          {item.label}
        </div>
      ))}
    </div>
  );
}
