
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const menuItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border/30' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#" className="text-xl font-medium tracking-tight opacity-90 hover:opacity-100 transition-opacity">
          Avinash<span className="text-primary">.</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
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
        
        <button 
          className="md:hidden text-foreground/80 hover:text-foreground z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 md:hidden',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <nav className="flex flex-col items-center space-y-8 py-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              onClick={toggleMobileMenu}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
