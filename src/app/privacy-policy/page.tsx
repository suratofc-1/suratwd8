import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Informasi tentang pengelolaan data, privasi pengguna, dan kebijakan perlindungan informasi di SURAT4D.",
  alternates: { canonical: "https://suratwd8.pages.dev/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#061020] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#1e4080] bg-[#0d2044] p-6 shadow-lg">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">
          SURAT4D
        </p>
        <h1 className="text-2xl font-black sm:text-3xl">Kebijakan Privasi</h1>
        <p className="mt-4 text-sm leading-7 text-[#8ab5df]">
          SURAT4D berkomitmen untuk menjaga keamanan dan kerahasiaan data pengguna. Informasi yang dikumpulkan digunakan untuk memperlancar akses layanan, meningkatkan pengalaman pengguna, serta menjaga keamanan platform.
        </p>
        <p className="mt-4 text-sm leading-7 text-[#8ab5df]">
          Kami dapat mengumpulkan data teknis seperti alamat IP, informasi browser, dan aktivitas akses untuk keperluan analitik, keamanan, serta pemeliharaan layanan. Pengguna disarankan untuk tidak membagikan data login kepada pihak lain.
        </p>
        <p className="mt-4 text-sm leading-7 text-[#8ab5df]">
          Informasi yang kami kelola akan diperlakukan dengan aman dan hanya digunakan sesuai kebutuhan operasional layanan. Untuk informasi lebih lanjut, pengguna dapat menghubungi tim dukungan melalui kanal yang tersedia di situs.
        </p>
      </div>
    </main>
  );
}
