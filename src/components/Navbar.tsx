import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle resize event to close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // Handle scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled ? 
          "py-2 bg-white shadow-md" : 
          "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          <h1 className="text-xl md:text-2xl font-bold text-black">
            <span className="text-black">A to Z</span> Udaipur
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Services', 'Destinations', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item}
              href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
              className="text-black hover:text-gray-600 text-sm font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call Now Button */}
        <div className="hidden md:block">
          <Button 
            variant="default" 
            className="bg-black hover:bg-gray-800 text-white transition-colors duration-300"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col h-full p-6">
          <nav className="flex flex-col space-y-6 mt-8">
            <Link 
              to="/"
              className="text-slate-800 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#services"
              className="text-slate-800 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#destinations"
              className="text-slate-800 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </a>
            <a 
              href="#testimonials"
              className="text-slate-800 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact"
              className="text-slate-800 text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          <div className="mt-auto mb-6">
            <Button 
              variant="default" 
              className="w-full bg-black hover:bg-gray-800 text-white transition-colors duration-300"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
