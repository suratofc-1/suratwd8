import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      <div className="mb-3 flex flex-wrap items-center justify-center gap-3 text-xs text-[#8ab5df]">
        <Link href="/privacy-policy" className="hover:text-white">
          Kebijakan Privasi
        </Link>
        <Link href="/terms" className="hover:text-white">
          Syarat & Ketentuan
        </Link>
        <Link href="/contact" className="hover:text-white">
          Kontak
        </Link>
      </div>
      <div>© {new Date().getFullYear()} SURAT4D. All rights reserved.</div>
    </footer>
  );
}
