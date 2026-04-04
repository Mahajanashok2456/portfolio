'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaWhatsapp } from 'react-icons/fa6';

export default function ReviewPage() {
  const [formData, setFormData] = useState({ name: '', feedback: '', rating: 5, websiteLink: '' });
  const [submitted, setSubmitting] = useState(false);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch('/api/site-config?section=contact');
        const data = await res.json();
        if (data.success && data.data) setConfig(data.data);
      } catch (error) {
        console.error('Error fetching contact config:', error);
      }
    };
    fetchConfig();
  }, []);

  const phone = config?.phone || "+91 94935 10236";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // 1. Save to Database
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitting(true);
        alert('Thank you for your feedback!');
        setFormData({ name: '', feedback: '', rating: 5, websiteLink: '' });
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full"
      >
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-4">
            Leave a Review
          </h1>
          <p className="text-black/40 font-bold uppercase tracking-widest text-xs">
            Share your experience working with Mahajan Ashok
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Full Name</label>
            <input 
              required
              className="w-full bg-gray-50 border-b-2 border-black/5 p-4 text-xl font-bold text-black outline-none focus:border-black transition-all"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Project / Website Link</label>
            <input 
              className="w-full bg-gray-50 border-b-2 border-black/5 p-4 text-xl font-bold text-black outline-none focus:border-black transition-all"
              placeholder="https://yourwebsite.com"
              value={formData.websiteLink}
              onChange={(e) => setFormData({...formData, websiteLink: e.target.value})}
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Rating</label>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({...formData, rating: star})}
                  className={`text-3xl transition-all ${formData.rating >= star ? 'text-black scale-110' : 'text-black/10'}`}
                >
                  <FaStar />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Your Feedback</label>
            <textarea 
              required
              rows="5"
              className="w-full bg-gray-50 border-b-2 border-black/5 p-4 text-xl font-medium text-black outline-none focus:border-black transition-all resize-none"
              placeholder="How was your experience?"
              value={formData.feedback}
              onChange={(e) => setFormData({...formData, feedback: e.target.value})}
            />
          </div>

          <button 
            type="submit"
            disabled={submitted}
            className="w-full bg-black text-white py-6 font-black uppercase tracking-widest hover:bg-black/80 transition-all flex items-center justify-center gap-4"
          >
            {submitted ? 'Review Submitted!' : 'Submit Review'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
