
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled ? 'bg-background/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
          Avinash<span className="text-primary">.</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <Button size="sm" asChild>
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
        </nav>
        
        <Button 
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile menu */}
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col justify-center z-40 transition-all duration-300 md:hidden',
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          )}
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </a>
            ))}
            <Button className="mt-4" onClick={toggleMobileMenu} asChild>
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
