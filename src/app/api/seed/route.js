import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Project from '@/models/Project';
import Client from '@/models/Client';
import Experience from '@/models/Experience';
import Education from '@/models/Education';
import Skill from '@/models/Skill';
import SiteConfig from '@/models/SiteConfig';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ success: false, error: 'Unauthorized. Please login as admin first.' }, { status: 401 });
  }

  try {
    await connectDB();

    // 1. Clear existing data (optional but recommended for fresh seed)
    await Promise.all([
      Project.deleteMany({}),
      Client.deleteMany({}),
      Experience.deleteMany({}),
      Education.deleteMany({}),
      Skill.deleteMany({}),
      SiteConfig.deleteMany({}),
    ]);

    // 2. Data to Seed
    const projects = [
        {
            title: 'PDF Toolkit',
            category: 'SaaS / Utility',
            description: 'Free, browser‑first PDF toolkit: organize pages, convert JPG/PDF/Word. API‑backed with streaming.',
            techStack: ['Next.js', 'Python', 'FastAPI', 'Vercel'],
            image: '/pdf-toolkit-preview.png',
            link: 'https://pdf-toolkit-beta.vercel.app/',
            featured: true
        },
        {
            title: 'AI Guru Multibot',
            category: 'Multimodal AI',
            description: 'Advanced multimodal AI assistant with self-learning, image understanding, and context-aware conversations.',
            techStack: ['React', 'Gemini API', 'MongoDB', 'Node.js'],
            image: '/ai-guru-preview.png',
            link: 'https://ai-guru-sage.vercel.app/',
            featured: true
        },
        {
            title: 'Mitra - AI Therapist',
            category: 'Healthcare / RAG',
            description: 'Empathetic AI therapist inspired by Mahabharata & Ramayana with RAG pipeline using Gemini 2.5 Flash.',
            techStack: ['RAG', 'LangChain', 'Vector DB', 'Next.js'],
            image: '/mitra-preview.png',
            link: 'https://mitra-silk.vercel.app/',
            featured: true
        },
        {
            title: 'Mahajan’s Store Management',
            category: 'Inventory System',
            description: 'Full-stack inventory system with real-time tracking, profit calcs, low-stock alerts, and analytics.',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
            image: '/store-preview.png',
            link: '#',
            featured: false
        },
        {
            title: 'Expenso - Expense Tracker',
            category: 'FinTech',
            description: 'Privacy-first expense tracker with CRUD, analytics, and export options (PDF/CSV/JSON).',
            techStack: ['React', 'Firebase', 'Chart.js', 'Tailwind'],
            image: '/expenso-preview.png',
            link: '#',
            featured: false
        },
        {
            title: 'Echoes of Mahajan',
            category: 'Content Platform',
            description: 'Quotes & poetry platform with SEO, AdSense integration, and dynamic admin dashboard.',
            techStack: ['Next.js', 'Sanity CMS', 'SEO', 'Tailwind'],
            image: '/echoes-preview.png',
            link: 'https://echoesofmahajan.vercel.app/',
            featured: false
        }
    ];

    const clients = [
      {
        title: 'Relicus',
        subtitle: 'Brand Identity & Web Architecture',
        description: 'A modern brand/product-focused website designed with a strong visual identity and performance-first architecture.',
        link: 'https://www.relicus.in/',
        tags: ['React', 'Modern UI/UX', 'SEO']
      },
      {
        title: 'Contentora Media',
        subtitle: 'Content Marketing Agency',
        description: 'A strategic content marketing platform focused on high-conversion copywriting and digital storytelling for growing brands.',
        link: 'https://www.contentoramedia.com/',
        tags: ['React', 'Marketing', 'SEO']
      },
      {
        title: '1x Urban Services',
        subtitle: 'Premium Home Services',
        description: 'Hyderabad\'s trusted partner for deep cleaning, pest control, painting, and complete home maintenance solutions by verified professionals.',
        link: 'https://1xurbanservices.com',
        tags: ['Next.js', 'Service Booking', 'Hyderabad']
      },
      {
        title: 'TRYITTECH',
        subtitle: 'IT Staffing & Recruitment',
        description: 'Specialized talent acquisition and strategic headhunting company in Hyderabad, building the foundation of organizational success.',
        link: 'https://www.tryittech.in/',
        tags: ['Full Stack', 'Recruitment', 'India']
      },
      {
        title: 'Venko Weddings',
        subtitle: 'Premium Wedding Planning',
        description: 'Elegant, visual-heavy portfolio for a premier wedding planning agency crafting timeless stories in AP, Telangana, and Bangalore.',
        link: 'https://venkoweddingplanners.com/',
        tags: ['React', 'Framer Motion', 'Events']
      },
      {
        title: 'InspectPro',
        subtitle: 'Thermal Imaging Inspection',
        description: 'Data-driven home inspection service using infrared technology and moisture detection to reveal hidden structural risks.',
        link: 'https://www.inspectpro.in/',
        tags: ['React', 'Civil Engineering', 'Tech']
      },
      {
        title: 'Aira Lab Equipment',
        subtitle: 'Pharma Infrastructure Manufacturer',
        description: 'Direct manufacturer of pharmaceutical lab furniture and industrial fume hoods with custom engineering and absolute workspace safety.',
        link: 'https://www.airalabequipment.com/',
        tags: ['React', 'Manufacturing', 'B2B']
      },
      {
        title: 'Jaagruthi Investmart',
        subtitle: 'Wealth Management Expert',
        description: 'Comprehensive financial advisory for Mutual Funds and Life Insurance, providing secure wealth creation strategies for 500+ families.',
        link: 'https://www.jaagruthiinvestmart.com/',
        tags: ['React', 'FinTech', 'Wealth Management']
      },
      {
        title: 'Civil Jobs Hub',
        subtitle: 'Engineering Career Portal',
        description: 'A specialized career portal for civil engineers in India, providing verified job openings, walk-ins, and career guidance.',
        link: 'https://civiljobshub.com/',
        tags: ['React', 'Job Board', 'Career Portal']
      },
      {
        title: 'Thridha Interior Solutions',
        subtitle: 'Premium Interior Design',
        description: 'High-end interior design and turnkey solutions platform for residential and commercial spaces in Hyderabad with 3D visualization.',
        link: 'https://www.thridha.co.in/',
        tags: ['React', 'Interior Design', 'Service']
      },
      {
        title: 'The Sky Technologies',
        subtitle: 'IT Academy & Certification',
        description: 'Premier IT education platform offering authorized certifications and personalized training in modern software and office tools.',
        link: 'https://www.theskytechnologies.com/',
        tags: ['React', 'Education', 'LMS']
      }
    ];

    const experiences = [
      {
        role: 'Artificial Intelligence Engineer',
        company: 'RoamVerse Solutions Pvt. Ltd.',
        location: 'Remote',
        period: 'Aug 2025 - Nov 2025',
        description: 'Engineered AI-driven web apps using FastAPI & React. Integrated generative models for multimodal automation. Optimized MongoDB queries reducing latency by 30%.',
      },
      {
        role: 'AI/ML Intern',
        company: 'SURE TRUST',
        location: 'Remote',
        period: 'Jul 2025 - Present',
        description: 'Contributed to building and deploying AI/ML models. Supported scalable solutions for real-world applications.',
      },
      {
        role: 'Full Stack Developer Intern',
        company: 'Flora Edze',
        location: 'Hyderabad, Remote',
        period: 'Mar 2025 - Jun 2025',
        description: 'Developed full-stack web applications using modern technologies, focusing on scalable and efficient solutions.',
      }
    ];

    const education = [
      {
        school: 'TKR College of Engineering & Technology',
        degree: 'B.Tech in CSE (Data Science)',
        period: '2022 – Present',
        description: 'Specializing in computer vision and NLP architectures. Active in technical coordination and core hackathons.',
        grade: 'CGPA: 8.06 / 10'
      },
      {
        school: 'Sri Medhavi Jr. College',
        degree: 'Intermediate (MPC)',
        period: '2020 – 2022',
        description: 'Advanced foundation in Mathematics, Physics, and Chemistry.',
        grade: 'Percentage: 77%'
      },
      {
        school: 'Shastha Grammar School',
        degree: 'SSC',
        period: '2020',
        description: 'Secondary School Certificate.',
        grade: 'CGPA: 9.8 / 10'
      }
    ];

    const skills = [
      { iconName: 'Cpu', title: 'AI/ML Deep Tech', description: 'PyTorch, LangChain, HuggingFace, RAG, Generative AI' },
      { iconName: 'Layers', title: 'Full Stack', description: 'React, Next.js, TypeScript, FastAPI' },
      { iconName: 'Database', title: 'Databases', description: 'MongoDB, Supabase, SQL' },
      { iconName: 'Eye', title: 'NLP & Vision', description: 'Transformers, Vision Transformers (ViT)' },
      { iconName: 'Terminal', title: 'Prompt Engineering', description: 'Gemini, LangChain APIs' },
      { iconName: 'GitBranch', title: 'DevOps', description: 'Git, Vercel, Railway, CI/CD' }
    ];

    const configs = [
      {
        section: 'hero',
        content: {
          heading: "FULL STACK DEV & <br className='hidden sm:block' /> AI ENGINEER",
          subheading: "Building scalable SaaS solutions and intelligent AI pipelines with modern technologies.",
          tags: ['PYTHON', 'REACT', 'NEXT.JS', 'FASTAPI', 'AI / ML', 'RAG', 'MONGODB', 'LLMs']
        }
      },
      {
        section: 'about',
        content: "I am a Full Stack Developer and AI Engineer driven by the goal of building products that solve real problems. My journey started with a curiosity for building scalable web applications and evolved into architecting complex RAG pipelines and intelligent AI-driven systems.\n\nI specialize in bridging the gap between production-ready software and cutting-edge AI. Whether it's architecting a high-performance Next.js application or fine-tuning a prompt for an LLM, I obsess over performance and user experience."
      },
      {
        section: 'contact',
        content: {
          email: "mahajanashok78@gmail.com",
          phone: "+91 94935 10236",
          location: "Hyderabad, India",
          linkedin: "https://www.linkedin.com/in/mahajanashok78/",
          github: "https://github.com/Mahajanashok2456",
          twitter: "https://twitter.com/mahajan_2456"
        }
      }
    ];

    // 3. Execute Insertions
    await Promise.all([
      Project.insertMany(projects),
      Client.insertMany(clients),
      Experience.insertMany(experiences),
      Education.insertMany(education),
      Skill.insertMany(skills),
      ...configs.map(c => SiteConfig.create(c))
    ]);

    return NextResponse.json({ success: true, message: 'Database seeded successfully with all existing data!' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
