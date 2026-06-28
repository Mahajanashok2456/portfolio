import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Mahajan Ashok",
        "jobTitle": "Freelance AI Engineer & Full Stack Developer",
        "url": "https://mahajanashok.in",
        "email": "hello@mahajanashok.in",
        "telephone": "+919493510236",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "TKR College of Engineering and Technology"
        },
        "knowsAbout": [
          "RAG Pipelines",
          "LangChain",
          "FastAPI",
          "React",
          "Next.js",
          "MongoDB",
          "Prompt Engineering",
          "Generative AI",
          "Python",
          "TypeScript",
          "Docker",
          "HuggingFace",
          "PyTorch"
        ],
        "sameAs": [
          "https://github.com/Mahajanashok2456"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Salesforce Agentforce Specialist"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Oracle OCI Generative AI Professional"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "UiPath Automation Developer"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Google Cloud Gemini AI Apps"
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "Mahajan Ashok — Global AI & Full Stack Freelancer",
        "areaServed": [
          "United States",
          "United Kingdom",
          "North America",
          "South America",
          "Europe",
          "Worldwide"
        ],
        "description": "Remote AI Engineer & Full Stack Developer specializing in production-ready RAG pipelines, LangChain chatbots, FastAPI backends, and scalable SaaS applications for global startups."
      },
      {
        "@type": "WebSite",
        "url": "https://mahajanashok.in",
        "name": "Mahajan Ashok Portfolio",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://mahajanashok.in/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
