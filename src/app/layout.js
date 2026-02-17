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
    default: "Mahajan Ashok | Best AI Engineer & Full Stack Freelancer in Hyderabad",
    template: "%s | Mahajan Ashok"
  },
  description: "Mahajan Ashok is the best freelance AI Engineer and Web Developer in Hyderabad. offering affordable web development, AI solutions, and Agentic workflows at low price. Expert in RAG, Next.js, and Python.",
  keywords: [
    "best web developer",
    "best web developer near me",
    "freelance web developer",
    "low price web development",
    "affordable web design hyderabad",
    "budget friendly AI solutions",
    "cheap website developer",
    "freelancer",
    "AI engineer",
    "Generative AI Specialist",
    "Agentic Workflows",
    "Full Stack Developer Freelancer",
    "low cost AI agents",
    "economic web architecture",
    "startup friendly developers",
    "Mahajan Ashok Portfolio"
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
    siteName: "Mahajan Ashok Portfolio",
    title: "Best Web Developer & AI Engineer | Mahajan Ashok",
    description: "Hire the best web developer and AI engineer for your next project. Specialize in Agentforce, RAG, and high-end full-stack applications.",
    images: [{
      url: "/profile.jpg",
      width: 1200,
      height: 630,
      alt: "Mahajan Ashok - Best Web Developer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Engineer & Web Architect | Mahajan Ashok",
    description: "Expert AI solutions, RAG systems, and Modern Full Stack Apps.",
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
    "google-site-verification": "Wh4o7rvSmKpZoFvfJVhUoLM21P0NnTimagu_77vsNUQ",
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
