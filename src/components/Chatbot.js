'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification much later after 5 seconds instead of 2 to prioritize content load
    const showTimer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);

    // Auto-hide notification after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleNotificationClick = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({ type: "show" });
    }
    setShowNotification(false);
  };

  return (
    <>
      <Script 
        src="https://cdn.botpress.cloud/webchat/v3.4/inject.js" 
        strategy="lazyOnload" 
      />
      <Script 
        src="https://files.bpcontent.cloud/2025/12/03/07/20251203071355-LADL5BMJ.js" 
        strategy="lazyOnload"
      />

      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed bottom-24 right-6 z-[999] cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={handleNotificationClick}
          >
            <div className="bg-black text-white p-6 border border-white/10 shadow-2xl flex items-center gap-6 relative">
              <div className="flex flex-col">
                <strong className="block text-xs uppercase tracking-widest mb-1">AI Assistant</strong>
                <p className="text-[0.65rem] text-white/60 uppercase tracking-widest font-bold">Ask me anything</p>
              </div>
              <button 
                className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black border border-black/5 flex items-center justify-center text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
              >
                &times;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        /* Botpress customization to match theme if needed */
        .bp-widget-widget {
          z-index: 1001 !important;
        }
      `}</style>
    </>
  );
}
