import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://suratwd8.pages.dev"),
  applicationName: "SURAT4D",
  category: "entertainment",
  title: {
    default: "SURAT4D — Platform Hiburan Online yang Aman dan Praktis",
    template: "%s | SURAT4D",
  },
  description:
    "SURAT4D adalah platform hiburan online yang aman, responsif, dan mudah diakses dari desktop maupun ponsel untuk menikmati konten interaktif dan acara live.",
  keywords: [
    "surat4d",
    "surat 4d",
    "situs surat4d",
    "login surat4d",
    "link surat4d",
    "daftar surat4d",
  ],
  authors: [{ name: "SURAT4D" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://suratwd8.pages.dev",
    siteName: "SURAT4D",
    title: "SURAT4D — Platform Hiburan Online yang Aman dan Praktis",
    description: "Nikmati pengalaman hiburan online yang aman, cepat, dan nyaman dari berbagai perangkat.",
    images: [{ url: "https://suratwd8.pages.dev/og-image.jpg", width: 1200, height: 630, alt: "SURAT4D Banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SURAT4D — Platform Hiburan Online yang Aman dan Praktis",
    description: "Nikmati pengalaman hiburan online yang aman, cepat, dan nyaman dari berbagai perangkat.",
    images: ["https://suratwd8.pages.dev/og-image.jpg"],
  },
  alternates: { canonical: "https://suratwd8.pages.dev/" },
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
              url: "https://suratwd8.pages.dev/",
              logo: "https://suratwd8.pages.dev/logo.png",
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
  