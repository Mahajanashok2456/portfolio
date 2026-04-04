'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch('/api/testimonials');
        const data = await res.json();
        if (data.success) {
          // Only show approved testimonials on the main site
          const approved = data.data.filter(t => t.isApproved);
          setTestimonials(approved);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  const formatUrl = (url) => {
    if (!url) return '';
    let formatted = url.trim();
    
    // Remove all whitespace for basic validation
    if (formatted.includes(' ')) {
      // Try to take the first word if there are spaces, or just skip if it's not a link
      formatted = formatted.split(' ')[0];
    }
    
    if (!formatted.startsWith('http://') && !formatted.startsWith('https://')) {
      formatted = `https://${formatted}`;
    }
    
    try {
      const urlObj = new URL(formatted);
      // Ensure there's a dot in the hostname (e.g., google.com, not just google)
      if (!urlObj.hostname.includes('.')) return '';
      return formatted;
    } catch (e) {
      return '';
    }
  };

  if (loading || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 md:py-48 bg-gray-50 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <h2 className="section-title-minimal">Client Feedback</h2>
        <p className="text-4xl md:text-6xl font-black text-black/10 uppercase tracking-tighter leading-none mt-4 mb-24">
          TRUSTED BY <br /> VISIONARIES
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => {
            const liveUrl = formatUrl(item.websiteLink);
            return (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-black/10 group-hover:text-black transition-colors">
                      <FaQuoteLeft size={32} />
                    </div>
                    <div className="flex gap-1 text-xs text-black">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>

                  <p className="text-lg font-medium text-black/80 leading-relaxed italic mb-8">
                    "{item.feedback}"
                  </p>
                </div>

                <div className="border-t border-black/5 pt-6">
                  <h3 className="font-black uppercase tracking-tight text-sm mb-3">{item.name}</h3>
                  {liveUrl && (
                    <div className="space-y-4">
                      <a 
                        href={liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-black/40 uppercase tracking-widest hover:text-black transition-colors flex items-center gap-2 mb-4"
                      >
                        View Live Website <FaExternalLinkAlt size={8} />
                      </a>
                      
                      {/* Live Preview Iframe */}
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-black/5 bg-gray-100 group/preview">
                        <iframe 
                          src={liveUrl} 
                          className="w-[200%] h-[200%] scale-50 origin-top-left pointer-events-none opacity-60 group-hover/preview:opacity-100 transition-opacity"
                          title={`Preview of ${item.name}'s project`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/preview:bg-black/20 transition-all">
                          <span className="bg-white text-black text-[8px] font-black uppercase tracking-widest px-3 py-2 rounded shadow-xl opacity-0 group-hover/preview:opacity-100 transition-all translate-y-2 group-hover/preview:translate-y-0">
                            Visit Site
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
