import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'הבעיה', href: '#problem' },
  { label: 'הפתרון', href: '#solution' },
  { label: 'איך זה עובד', href: '#how-it-works' },
  { label: 'חומרים', href: '#materials' },
  { label: 'בטיחות', href: '#safety' },
  { label: 'השפעה', href: '#impact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Logo variant={isScrolled ? 'light' : 'light'} size="sm" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6" dir="rtl">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:opacity-80 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/poster"
                className="eco-button text-sm"
              >
                פוסטר
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex flex-col gap-4" dir="rtl">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg font-medium py-3 border-b border-gray-100 text-right"
                    style={{ color: 'hsl(150 25% 25%)' }}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="/poster"
                    className="eco-button text-center"
                  >
                    פוסטר להדפסה
                  </a>
                  <a
                    href="/presentation"
                    className="eco-button text-center"
                    style={{ background: 'hsl(195 70% 45%)' }}
                  >
                    תסריט מצגת
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
