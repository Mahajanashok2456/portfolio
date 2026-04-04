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
    default: 'Mahajan Ashok | Remote AI Engineer & Full Stack Developer — US, UK, Global',
    template: '%s | Mahajan Ashok — Remote AI Expert'
  },
  description: 'Hire Mahajan Ashok — Senior Remote AI Engineer & Full Stack Developer. Specializing in RAG pipelines, LangChain, and Agentic Workflows for startups in the US, UK, and North America. Expert in FastAPI, React, and LLM integrations. Available for global freelance projects.',
  keywords: [
    'remote AI engineer US', 
    'freelance AI developer London', 
    'AI engineer for US startups', 
    'RAG pipeline expert remote', 
    'LangChain consultant UK', 
    'AI agent developer North America', 
    'Generative AI expert Europe', 
    'Full stack developer for global projects', 
    'Hire AI engineer India remote', 
    'Python AI developer US timezones', 
    'SaaS backend developer global', 
    'LLM integration expert worldwide', 
    'Mahajan Ashok', 
    'AI automation consultant US', 
    'Custom AI solutions for North America',
    'Remote full stack engineer London'
  ],
  authors: [{ name: 'Mahajan Ashok', url: 'https://mahajanashok.in' }],
  creator: 'Mahajan Ashok',
  publisher: 'Mahajan Ashok',
  alternates: { canonical: 'https://mahajanashok.in' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mahajanashok.in',
    siteName: 'Mahajan Ashok — Global AI Engineer Portfolio',
    title: 'Mahajan Ashok | Remote AI Engineer & Full Stack Developer for Global Startups',
    description: 'Expert AI Engineer available for remote hire in US, UK, and Worldwide. Building production-ready RAG pipelines, AI agents, and full-stack SaaS. FastAPI · React · LangChain · LLMs.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mahajan Ashok — Remote AI Engineer serving US, UK, and Global Markets' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahajan Ashok | Remote AI Engineer for US & UK Startups',
    description: 'Expert in RAG, AI Agents, and Full Stack SaaS. Serving global clients from Hyderabad, India.',
    images: ['/og-image.png']
  },
  verification: {
    google: 'k5fYCUlQxNXneZTyVg9w97dJT24IDlVRlahDXD7jsBo',
  },
  other: {
    "geo.region": "GLOBAL",
    "geo.placename": "Worldwide / Remote",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://mahajanashok.in" />
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
