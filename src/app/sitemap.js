export default async function sitemap() {
  const baseUrl = "https://mahajanashok.in";

  // List of all static pages
  const staticPages = [
    "",
    "about",
    "experience",
    "projects",
    "contact",
    "web-development-hyderabad",
    "hire-ai-engineer",
    "fastapi-backend-development",
    "ai-chatbot-development",
    "rag-pipeline-development",
    "generative-ai-development",
  ].map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticPages];
}