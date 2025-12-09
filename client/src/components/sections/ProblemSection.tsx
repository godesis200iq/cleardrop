import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, AlertTriangle, Trash2 } from 'lucide-react';

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const problems = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: 'מחסור חמור במים',
      description: 'ישראל סובלת ממחסור חמור במים, אך משפחות רבות משקות צמחים במי שתייה טריים.',
      color: 'hsl(195 70% 45%)',
    },
    {
      icon: <Trash2 className="w-12 h-12" />,
      title: 'מים אפורים מבוזבזים',
      description: 'מים מקלחת, כיור ומזגן נזרקים לביוב למרות שניתן לסנן אותם בקלות.',
      color: 'hsl(150 50% 40%)',
    },
    {
      icon: <AlertTriangle className="w-12 h-12" />,
      title: 'בזבוז משאבים',
      description: 'כל יום משפחות מבזבזות ליטרים רבים של מים שיכולים לשמש להשקיה.',
      color: 'hsl(45 85% 50%)',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(200 60% 95%) 0%, hsl(195 50% 92%) 100%)' }}
    >
      {/* Decorative water waves */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,0 L0,0 Z"
            fill="hsl(152 60% 95%)"
          />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title" dir="rtl">
            הבעיה
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" dir="rtl">
            ישראל מתמודדת עם אתגר מים משמעותי, אך הפתרון נמצא ממש בבית שלנו
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" dir="rtl">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="eco-card text-center"
            >
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                style={{ 
                  background: `linear-gradient(135deg, ${problem.color} 0%, hsl(from ${problem.color} h s calc(l - 15)) 100%)`,
                  color: 'white',
                }}
              >
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'hsl(150 25% 20%)' }}>
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}
        >
          <p className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'hsl(150 25% 20%)' }} dir="rtl">
            עד <span style={{ color: 'hsl(195 70% 45%)' }}>10 ליטר מים</span> ביום יכולים להיחסך
          </p>
          <p className="text-muted-foreground" dir="rtl">
            בעזרת מערכת סינון פשוטה וזולה
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProblemSection;
