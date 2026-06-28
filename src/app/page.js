import HomeClient from './page.client';

export const metadata = {
  title: 'Full Stack Developer & AI Engineer | Hyderabad',
  description: 'Mahajan Ashok — AI Product Engineer & Full Stack Developer in Hyderabad. Freelance web/app development for Indian businesses, and remote AI/GenAI engineering for global clients.',
  alternates: { canonical: 'https://mahajanashok.in' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mahajanashok.in',
    siteName: 'Mahajan Ashok Portfolio',
    title: 'Full Stack Developer & AI Engineer | Hyderabad',
    description: 'Freelance web/app development in Hyderabad and across India, plus remote AI/GenAI engineering for global clients.',
    images: [{ url: '/ai-guru-preview.png', width: 1200, height: 630, alt: 'Mahajan Ashok — AI Engineer & Full Stack Developer' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Developer & AI Engineer | Hyderabad',
    description: 'Freelance web/app development in India, remote AI engineering worldwide.',
    images: ['/ai-guru-preview.png']
  },
};

export default function Home() {
  return <HomeClient />;
}