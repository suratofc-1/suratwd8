import Image from "next/image";
import Link from "next/link";

const LOGIN_URL = "https://shorthe.link/SURAT4D"; // Ganti ke link login yang diinginkan

export default function Navbar() {
  return (
    <header>
      <nav
        className="bg-[#0d2044] flex items-center justify-between px-4 py-2.5 border-b-2 border-[#1e4080] sticky top-0 z-50"
        aria-label="Navigasi utama"
      >
        <Link href="/" aria-label="SURAT4D - Halaman Utama">
          <Image
            src="/logo.png"
            alt="SURAT4D Logo"
            width={120}
            height={20}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href={LOGIN_URL}
            className="bg-[#0057c8] hover:bg-[#0066ee] transition-colors text-white font-bold text-xs px-3 py-1.5 rounded uppercase tracking-wide"
          >
            LOGIN DISINI
          </Link>
        </div>
      </nav>
    </header>
  );
}