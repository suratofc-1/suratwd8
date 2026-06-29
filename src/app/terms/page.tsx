import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description: "Syarat dan ketentuan penggunaan layanan SURAT4D untuk pengguna yang mengakses platform.",
  alternates: { canonical: "https://suratwd8.pages.dev/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#061020] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#1e4080] bg-[#0d2044] p-6 shadow-lg">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#00d4ff]">
          SURAT4D
        </p>
        <h1 className="text-2xl font-black sm:text-3xl">Syarat dan Ketentuan</h1>
        <p className="mt-4 text-sm leading-7 text-[#8ab5df]">
          Dengan mengakses dan menggunakan layanan SURAT4D, pengguna dianggap telah membaca, memahami, dan menerima syarat yang berlaku. Penggunaan layanan harus sesuai dengan ketentuan hukum dan etika digital yang berlaku.
        </p>
        <p className="mt-4 text-sm leading-7 text-[#8ab5df]">
          Pengguna bertanggung jawab atas data akun, informasi yang disampaikan, dan aktivitas yang dilakukan selama menggunakan layanan. Kami berhak melakukan pembatasan atau penangguhan akses jika ditemukan pelanggaran terhadap ketentuan penggunaan.
        </p>
        <p className="mt-4 text-sm leading-7 text-[#8ab5df]">
          Layanan dapat diperbarui sewaktu-waktu untuk meningkatkan kualitas, keamanan, dan pengalaman pengguna. Untuk informasi lebih lanjut, silakan hubungi tim dukungan melalui kanal resmi yang tersedia di situs.
        </p>
      </div>
    </main>
  );
}
