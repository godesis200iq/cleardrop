import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../Logo';
import { Heart, Github, ExternalLink } from 'lucide-react';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16" style={{ background: 'hsl(150 25% 15%)' }}>
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="text-center md:text-right" dir="rtl">
            <Logo variant="dark" size="lg" />
            <p className="mt-4 text-sm" style={{ color: 'hsl(150 20% 70%)' }}>
              הופך טיפות מבוזבזות לצמיחה ירוקה — מרפסת אחת בכל פעם.
            </p>
          </div>

          {/* Links */}
          <div className="text-center" dir="rtl">
            <h4 className="font-bold text-lg mb-4" style={{ color: 'hsl(152 60% 65%)' }}>
              ניווט מהיר
            </h4>
            <nav className="space-y-2">
              {[
                { label: 'הבעיה', href: '#problem' },
                { label: 'הפתרון', href: '#solution' },
                { label: 'איך זה עובד', href: '#how-it-works' },
                { label: 'בטיחות', href: '#safety' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block transition-colors hover:underline"
                  style={{ color: 'hsl(150 15% 65%)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="text-center md:text-left" dir="rtl">
            <h4 className="font-bold text-lg mb-4" style={{ color: 'hsl(152 60% 65%)' }}>
              משאבים
            </h4>
            <nav className="space-y-2">
              <a
                href="/poster"
                className="flex items-center justify-center md:justify-start gap-2 transition-colors hover:underline"
                style={{ color: 'hsl(150 15% 65%)' }}
              >
                <ExternalLink className="w-4 h-4" />
                פוסטר להדפסה
              </a>
              <a
                href="/presentation"
                className="flex items-center justify-center md:justify-start gap-2 transition-colors hover:underline"
                style={{ color: 'hsl(150 15% 65%)' }}
              >
                <ExternalLink className="w-4 h-4" />
                תסריט מצגת
              </a>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: 'hsl(150 20% 25%)' }} />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm flex items-center gap-2" style={{ color: 'hsl(150 15% 55%)' }} dir="rtl">
            נוצר עם <Heart className="w-4 h-4 text-red-400" /> על ידי גולן, איתן ודניאל
          </p>
          <p className="text-sm" style={{ color: 'hsl(150 15% 55%)' }}>
            כיתה ט', אלתרמן הרצליה — {currentYear}
          </p>
        </div>

        {/* Color palette reference */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-xl"
          style={{ background: 'hsl(150 20% 20%)' }}
        >
          <h4 className="text-center font-bold mb-4" style={{ color: 'hsl(152 60% 65%)' }}>
            Color Palette
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Primary Green', hex: '#2d8a5e', hsl: 'hsl(152 60% 42%)' },
              { name: 'Water Blue', hex: '#3498db', hsl: 'hsl(195 70% 45%)' },
              { name: 'Accent Green', hex: '#27ae60', hsl: 'hsl(145 60% 42%)' },
              { name: 'Sand', hex: '#c2b280', hsl: 'hsl(40 35% 63%)' },
              { name: 'Charcoal', hex: '#2c3e50', hsl: 'hsl(210 25% 24%)' },
              { name: 'Off White', hex: '#f8faf8', hsl: 'hsl(120 20% 97%)' },
            ].map((color) => (
              <div key={color.name} className="text-center">
                <div
                  className="w-12 h-12 rounded-lg mx-auto mb-2 shadow-md"
                  style={{ background: color.hex }}
                />
                <p className="text-xs font-medium" style={{ color: 'hsl(150 15% 70%)' }}>
                  {color.name}
                </p>
                <p className="text-xs" style={{ color: 'hsl(150 15% 55%)' }}>
                  {color.hex}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default FooterSection;
