'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [config, setConfig] = useState(null);

  const [status, setStatus] = useState('');

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

  const email = config?.email || "hello@mahajanashok.in";
  const phone = config?.phone || "+91 94935 10236";
  const location = config?.location || "Hyderabad, India";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const { name, email: userEmail, message } = formData;

    // 1. Save to Database
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email: userEmail, message }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error saving contact to DB:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-48 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-minimal">Get In Touch</h2>
            <p className="text-4xl md:text-6xl font-black text-black/10 uppercase tracking-tighter leading-none mt-4 mb-12">
              LET&apos;S WORK <br /> TOGETHER
            </p>
            
            <div className="space-y-8 mt-16">
              <div>
                <p className="text-[0.6rem] font-bold text-black/40 uppercase tracking-[0.3em] mb-2">Email</p>
                <a href={`mailto:${email}`} className="text-xl md:text-3xl font-black text-black hover:text-black/60 transition-colors uppercase tracking-tight break-all">
                  {email}
                </a>
              </div>
              <div>
                <p className="text-[0.6rem] font-bold text-black/40 uppercase tracking-[0.3em] mb-2">Phone</p>
                <p className="text-xl md:text-3xl font-black text-black tracking-tight uppercase">{phone}</p>
              </div>
              <div>
                <p className="text-[0.6rem] font-bold text-black/40 uppercase tracking-[0.3em] mb-2">Location</p>
                <p className="text-xl md:text-3xl font-black text-black tracking-tight uppercase">{location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50/50 p-8 md:p-12 border border-black/5"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <label className="text-[0.6rem] font-bold text-black/40 uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="bg-transparent border-b border-black/10 py-4 text-xl font-bold text-black outline-none focus:border-black transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[0.6rem] font-bold text-black/40 uppercase tracking-widest">Your Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-transparent border-b border-black/10 py-4 text-xl font-bold text-black outline-none focus:border-black transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[0.6rem] font-bold text-black/40 uppercase tracking-widest">Message</label>
                <textarea
                  placeholder="Message"
                  required
                  rows="3"
                  className="bg-transparent border-b border-black/10 py-4 text-xl font-bold text-black outline-none focus:border-black transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-6 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-all cursor-pointer disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
              {status === 'error' && <p className="text-red-500 text-[0.6rem] font-bold uppercase tracking-widest mt-2">Something went wrong. Please try again.</p>}
              {status === 'success' && <p className="text-green-500 text-[0.6rem] font-bold uppercase tracking-widest mt-2">Thank you! I will get back to you soon.</p>}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
