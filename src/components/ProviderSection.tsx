"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BUTTONS = [
  { icon: "🔗", label: "LINK DAFTAR", href: "https://shorthe.link/SURAT4D" },
  { icon: "🔗", label: "LINK ALTERNATIF", href: "https://shorthe.link/SURAT4D" },
  { icon: "🔗", label: "PROMOSI SURAT4D", href: "https://shorthe.link/SURAT4D" },
  { icon: "🔗", label: "TELEGRAM RESMI", href: "https://t.me/maxwinslotsurat4d" }
];


const POPUP_IMAGE = "/providers/popup.png";

export default function ProviderSection() {
  const router = useRouter();
  const [popup, setPopup] = useState({ label: "", visible: false, href: "" });

  const handleClick = (href: string, label: string) => {
    setPopup({ label, visible: true, href });
    window.setTimeout(() => {
      router.push(href);
    }, 900);
    window.setTimeout(() => {
      setPopup({ label: "", visible: false, href: "" });
    }, 1400);
  };

  return (
    <>
      <style>{`
        .animated-btn{position:relative;overflow:hidden}
        .animated-btn::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#00d4ff,#7ab0e0,#ffd700,#00d4ff);background-size:200% 100%;opacity:0.12;z-index:0;animation:gradientShift 6s linear infinite}
        .animated-btn .btn-content{position:relative;z-index:1}
        @keyframes gradientShift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
      `}</style>

      <section className="relative overflow-hidden bg-[#0d2044] px-4 py-6" aria-label="Menu game populer">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl" aria-hidden="true">📶</span>
        <div>
          <h2 className="text-[15px] font-black uppercase text-white tracking-wide">
             INFORMASI TERLENGKAP SURAT4D
          </h2>
          <p className="text-[11px] text-[#7ab0e0] mt-0.5">
             Pilih informasi yang ingin kamu ketahui.
          </p>
        </div>
      </div>

      <div className="space-y-3 md:space-y-0">
        <div className="grid gap-3 md:grid-cols-2">
          {BUTTONS.map((button) => (
            <button
              key={button.label}
              type="button"
              onClick={() => handleClick(button.href, button.label)}
              className="animated-btn group flex flex-col items-start justify-between gap-4 overflow-hidden rounded-[28px] border border-[#1e4585] bg-[#071a3c] px-5 py-4 text-left shadow-[0_20px_50px_-35px_rgba(0,212,255,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00d4ff] hover:bg-[#0f3f7c] md:flex-row"
            >
              <div className="btn-content flex w-full items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-2xl text-[#00d4ff] shadow-[0_0_0_1px_rgba(0,212,255,0.2)]">
                  {button.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-[#7ab0e0]">PILIH SEKARANG</div>
                  <div className="mt-1 text-sm font-black uppercase text-white tracking-[0.08em]">
                    {button.label}
                  </div>
                </div>
              </div>
              <span className="btn-content rounded-full border border-[#0f3d77] bg-[#0b2b57] px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-[#7ab0e0] md:ml-auto">
                Buka
              </span>
            </button>
          ))}
        </div>
      </div>

      {popup.visible ? (
        <div className="fixed inset-x-4 bottom-4 z-50 rounded-[32px] border border-white/15 bg-[#081f42]/95 px-5 py-4 text-white shadow-2xl backdrop-blur-xl animate-slide-up">
          <div className="flex items-center gap-3">
            <img
              src={POPUP_IMAGE}
              alt="Popup image"
              className="h-14 w-14 rounded-2xl object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#7ab0e0]">
                LANGSUNG MELUNCUR
              </p>
              <p className="text-sm font-black uppercase text-white truncate">
                {popup.label}
              </p>
            </div>
          </div>
        </div>
      ) : null}
      </section>
    </>
  );
}

