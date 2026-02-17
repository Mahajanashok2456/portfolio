'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification after 2 seconds
    const showTimer = setTimeout(() => {
      setShowNotification(true);
    }, 2000);

    // Auto-hide notification after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowNotification(false);
    }, 10000);

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
        strategy="afterInteractive" 
      />
      <Script 
        src="https://files.bpcontent.cloud/2025/12/03/07/20251203071355-LADL5BMJ.js" 
        strategy="afterInteractive"
      />

      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed bottom-24 right-6 z-[999] cursor-pointer"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={handleNotificationClick}
          >
            <div className="bg-white text-dark p-4 rounded-2xl shadow-2xl flex items-center gap-4 relative border border-secondary/20">
              <span className="text-2xl">💬</span>
              <div>
                <strong className="block text-sm">Hi there! 👋</strong>
                <p className="text-xs text-gray-600">Need help? Ask me anything!</p>
              </div>
              <button 
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNotification(false);
                }}
              >
                &times;
              </button>
            </div>
            {/* Pointer arrow */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45 border-r border-b border-secondary/20"></div>
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
