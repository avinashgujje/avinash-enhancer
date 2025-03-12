
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#" className="text-xl font-medium tracking-tight opacity-90 hover:opacity-100 transition-opacity">
          Avinash<span className="text-primary">.</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a 
            href="#contact" 
            className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </nav>
        
        <button className="md:hidden text-foreground/80 hover:text-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
