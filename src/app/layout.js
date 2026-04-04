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
    default: 'Mahajan Ashok | Freelance AI Engineer & Full Stack Developer — Hyderabad',
    template: '%s | Mahajan Ashok'
  },
  description: 'Hire Mahajan Ashok — Freelance AI Engineer & Full Stack Developer from Hyderabad, India. Expert in RAG pipelines, LangChain, FastAPI, React, Next.js. Building AI-powered SaaS apps and agentic workflows. Available for remote projects.',
  keywords: ['freelance AI engineer India', 'AI developer Hyderabad', 'RAG pipeline developer', 'LangChain developer for hire', 'FastAPI developer freelance', 'prompt engineer India', 'generative AI developer', 'agentic workflow developer', 'full stack developer Hyderabad', 'Next.js developer India', 'SaaS backend developer', 'MongoDB developer freelance', 'Mahajan Ashok', 'AI engineer portfolio', 'hire AI developer India', 'React developer freelance India', 'Python FastAPI developer', 'LLM integration developer', 'HuggingFace developer', 'PyTorch developer India'],
  authors: [{ name: 'Mahajan Ashok', url: 'https://mahajanashok.in' }],
  creator: 'Mahajan Ashok',
  publisher: 'Mahajan Ashok',
  alternates: { canonical: 'https://mahajanashok.in' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mahajanashok.in',
    siteName: 'Mahajan Ashok — AI Engineer Portfolio',
    title: 'Mahajan Ashok | Freelance AI Engineer & Full Stack Developer',
    description: 'Available for hire. Building RAG pipelines, AI chatbots, and full-stack SaaS apps. FastAPI · React · LangChain · MongoDB. Based in Hyderabad, India.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mahajan Ashok — Freelance AI Engineer and Full Stack Developer from Hyderabad India' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahajan Ashok | Freelance AI Engineer & Full Stack Developer',
    description: 'Available for hire. RAG pipelines, LangChain, FastAPI, React. Hyderabad, India.',
    images: ['/og-image.png']
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
