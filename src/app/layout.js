import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL("https://www.mahajanashok.in"),
  title: {
    default: "AI Engineer & SaaS Architect | Build Custom RAG & Full Stack Apps",
    template: "%s | Mahajan Ashok"
  },
  description: "Hire a top-tier AI Engineer & SaaS Architect specializing in RAG pipelines, Agentic workflows, and High-Performance Next.js/FastAPI apps. Turn your vision into a scalable global product.",
  keywords: [
    "RAG pipeline developer",
    "Agentic AI workflows",
    "Generative AI consultant",
    "LangChain development services",
    "FastAPI AI backend developer",
    "Custom LLM integration",
    "Vector database implementation",
    "Agentforce specialist",
    "SaaS MVP developer",
    "Next.js expert for hire",
    "React application architecture",
    "Scalable web application",
    "Full stack SaaS development",
    "Performance optimized web apps",
    "Custom CRM development",
    "Startup technical partner",
    "Remote full stack engineer",
    "Mahajan Ashok"
  ],
  authors: [{ name: "Mahajan Ashok", url: "https://www.mahajanashok.in" }],
  creator: "Mahajan Ashok",
  alternates: {
    canonical: "https://www.mahajanashok.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mahajanashok.in/",
    siteName: "Mahajan Ashok | AI & SaaS Architect",
    title: "AI Engineer & SaaS Architect | Build Custom RAG & Full Stack Apps",
    description: "Hire a top-tier AI Engineer & SaaS Developer. Specializing in RAG pipelines, Agentic workflows, and scalable Next.js applications.",
    images: [{
      url: "/profile.jpg",
      width: 1200,
      height: 630,
      alt: "Mahajan Ashok - AI Engineer & SaaS Architect",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Engineer & SaaS Developer | Mahajan Ashok",
    description: "Building intelligent RAG pipelines and scalable SaaS solutions. Expert in Next.js, FastAPI, and LangChain.",
    creator: "@mahajan_2456",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "google-site-verification": "k5fYCUlQxNXneZTyVg9w97dJT24IDlVRlahDXD7jsBo",
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.3850;78.4867",
    "ICBM": "17.3850, 78.4867"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mahajan Ashok",
  "url": "https://www.mahajanashok.in",
  "image": "https://www.mahajanashok.in/profile.jpg",
  "sameAs": [
    "https://github.com/Mahajanashok2456",
    "https://www.linkedin.com/in/mahajanashok78/",
    "https://www.instagram.com/mahajan_2456/"
  ],
  "jobTitle": "Best AI Engineer & Freelance Web Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "description": "Mahajan Ashok is the best freelance web developer and AI engineer in Hyderabad, specializing in Generative AI, Agentic Workflows, and Full Stack Web Development.",
  "knowsAbout": ["Web Development", "Artificial Intelligence", "Generative AI", "Next.js", "React", "Python", "RAG", "LangChain", "Salesforce Agentforce"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        {children}
      </body>
    </html>
  );
}
