import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollObserver from "@/components/ScrollObserver";
import { Providers } from "@/components/Providers";
import SchemaMarkup from "@/components/SchemaMarkup";

const outfit = Outfit({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://mahajanashok.in'),
  title: {
    default: 'Mahajan Ashok | AI Engineer & Full Stack Developer',
    template: '%s | Mahajan Ashok'
  },
  description: 'Mahajan Ashok — AI Product Engineer & Full Stack Developer. Specializing in RAG pipelines, GenAI, and scalable web apps. Available for freelance projects and full-time opportunities.',
  authors: [{ name: 'Mahajan Ashok', url: 'https://mahajanashok.in' }],
  creator: 'Mahajan Ashok',
  publisher: 'Mahajan Ashok',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  verification: {
    google: 'k5fYCUlQxNXneZTyVg9w97dJT24IDlVRlahDXD7jsBo',
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-JZ84LL1J03"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JZ84LL1J03');
        `}
      </Script>
      <body className={`${outfit.className} antialiased bg-dark text-light`} suppressHydrationWarning={true}>
        <Providers>
          <ScrollObserver />
          {children}
        </Providers>
        <SchemaMarkup />
      </body>
    </html>
  );
}
