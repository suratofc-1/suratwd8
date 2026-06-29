import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Halaman kontak SURAT4D untuk pengguna yang ingin menghubungi dukungan atau mendapatkan informasi lebih lanjut.",
  alternates: { canonical: "https://suratwd8.pages.dev/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#061020] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#1e4080] bg-[#0d2044] p-6 shadow-lg">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">
          SURAT4D
        </p>
        <h1 className="text-2xl font-black sm:text-3xl">Hubungi Kami</h1>
        <p className="mt-4 text-sm leading-7 text-[#8ab5df]">
          Jika Anda memiliki pertanyaan, saran, atau membutuhkan bantuan terkait akses layanan, silakan gunakan kanal dukungan yang tersedia di situs ini.
        </p>
        <p className="mt-4 text-sm leading-7 text-[#8ab5df]">
          Tim dukungan kami siap membantu seputar akses akun, tata cara penggunaan layanan, serta informasi umum lainnya untuk memastikan pengalaman pengguna tetap aman dan nyaman.
        </p>
      </div>
    </main>
  );
}
