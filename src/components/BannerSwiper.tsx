"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

/*
  ============================================================
  PETUNJUK BANNER:
  - Simpan file banner di folder: public/banners/
  - Ukuran ideal: 1200 × 471 px
  - Format: webp
  - Edit array BANNERS di bawah sesuai nama file kamu
  ============================================================
*/
const BANNERS = [
  {
    src: "/banners/banner1.webp",  
    alt: "SURAT4D - Pusat Hiburan Dengan Permainan Terlengkap dan Sangat di Minati Banyak Pengguna",
  },
  {
    src: "/banners/banner2.webp",
    alt: "SURAT4D - Proses Tercepat dan Terpercaya #1 Se Asia ",
  },
  {
    src: "/banners/banner3.webp",
    alt: "SURAT4D - Provider Terlengkap Dengan Akses Termudah dan sangat Relevan Untuk Semua jenis Perangkat",
  },
];

export default function BannerSwiper() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(BANNERS.map(() => false));

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % BANNERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleLoad = (i: number) => {
    setLoaded((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };

  return (
    <section aria-label="Banner promosi" className="bg-[#061020]">
      {/* Container dengan aspect ratio 1200:471 */}
      <div className="relative w-full overflow-hidden bg-[#0d1f3c]" style={{ aspectRatio: "1200 / 471" }}>
        {BANNERS.map((banner, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
              onLoad={() => handleLoad(i)}
              onError={(e) => {
                // Sembunyikan kalau file tidak ada
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center gap-1.5 py-2 bg-[#061020]">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === active ? "bg-[#00d4ff]" : "bg-[#1e4080]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
