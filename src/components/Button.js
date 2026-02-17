'use client';

import Link from 'next/link';
import { clsx } from 'clsx';

export default function Button({ 
  href, 
  onClick, 
  children, 
  className, 
  variant = 'animated', // 'animated' | 'primary' | 'outline'
  type = 'button'
}) {
  const baseStyles = "relative inline-flex justify-center items-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 overflow-hidden";
  
  const variants = {
    animated: "bg-black/50 text-white border border-white/20 hover:bg-dark hover:shadow-[0_0_20px_rgba(214,188,250,0.2)] hover:-translate-y-0.5",
    primary: "bg-primary text-dark hover:opacity-90",
    outline: "bg-white/10 text-white border border-white/20 hover:bg-white/20"
  };

  const content = (
    <>
      <span className="relative z-[2] flex items-center gap-2">{children}</span>
      {variant === 'animated' && (
        <div className="absolute inset-0 rounded-inherit p-[1.5px] pointer-events-none z-[1] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]">
          <div 
            className="absolute top-0 left-0 w-[50px] h-[50px] bg-[radial-gradient(circle,var(--secondary)_0%,transparent_60%)]"
            style={{
              offsetPath: "rect(0 100% 100% 0 round 12px)",
              animation: "borderTravel 3s linear infinite"
            }}
          />
        </div>
      )}
    </>
  );

  const classes = clsx(baseStyles, variants[variant], className);

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
