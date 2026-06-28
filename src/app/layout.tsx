import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.surat4d.com"),
  title: {
    default: "SURAT4D — Akses Hiburan Online Terpercaya 2026",
    template: "%s | SURAT4D",
  },
  description:
    "SURAT4D adalah platform hiburan online terpercaya pada 2026 yang menyediakan konten interaktif dan acara live dengan fokus keamanan dan kenyamanan pengguna.",
  keywords: [
    "surat4d","hiburan online","hiburan interaktif","acara live","platform hiburan",
  ],
  authors: [{ name: "SURAT4D" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.surat4d.com",
    siteName: "SURAT4D",
    title: "SURAT4D — Akses Hiburan Online Terpercaya",
    description: "Platform hiburan online yang aman dan responsif — akses konten interaktif dan acara live.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SURAT4D Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SURAT4D — Akses Hiburan Online Terpercaya",
    description: "Platform hiburan online yang aman dan responsif — akses konten interaktif dan acara live.",
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://www.surat4d.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png?v=2" />
        <link rel="manifest" href="/site.webmanifest?v=2" />
        <meta name="theme-color" content="#061434" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SURAT4D",
              url: "https://www.surat4d.com",
              logo: "https://www.surat4d.com/logo.png",
              description: "Platform hiburan online yang menyediakan konten interaktif dan acara live dengan fokus pada keamanan dan pengalaman pengguna.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Apa itu layanan ini?", acceptedAnswer: { "@type": "Answer", text: "Platform hiburan online yang menyajikan beragam konten seperti permainan kasual, acara live, dan turnamen komunitas." }},
                { "@type": "Question", name: "Bagaimana cara memulai?", acceptedAnswer: { "@type": "Answer", text: "Buat akun, masuk ke area 'Menu', lalu pilih kategori atau acara yang Anda minati. Semua fitur dapat diakses langsung melalui browser." }},
                { "@type": "Question", name: "Apakah layanan ini tersedia di ponsel?", acceptedAnswer: { "@type": "Answer", text: "Ya — situs dioptimalkan untuk tampilan mobile dan desktop sehingga Anda dapat menikmati konten kapan saja dari browser." }},
                { "@type": "Question", name: "Bagaimana cara menghubungi dukungan?", acceptedAnswer: { "@type": "Answer", text: "Dukungan tersedia melalui Live Chat dan email. Tim kami berusaha merespon secepat mungkin untuk membantu kendala teknis atau pertanyaan umum." }},
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0a1628] text-white antialiased">{children}</body>
    </html>
  );
}
