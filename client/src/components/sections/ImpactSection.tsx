import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, Recycle, Home, Leaf } from 'lucide-react';

export function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const impactStats = [
    {
      icon: <Droplets className="w-10 h-10" />,
      value: '~300',
      unit: 'ליטר',
      label: 'נחסכים בחודש',
      color: 'hsl(195 70% 45%)',
    },
    {
      icon: <Recycle className="w-10 h-10" />,
      value: '3',
      unit: 'בקבוקים',
      label: 'ממוחזרים לשימוש',
      color: 'hsl(152 60% 42%)',
    },
    {
      icon: <Home className="w-10 h-10" />,
      value: '∞',
      unit: '',
      label: 'מתאים לכל בית',
      color: 'hsl(45 85% 55%)',
    },
  ];

  const useCases = [
    { emoji: '🏠', title: 'בתים פרטיים', desc: 'השקיית גינה ומדשאה' },
    { emoji: '🏢', title: 'מרפסות', desc: 'עציצים וצמחי נוי' },
    { emoji: '🌻', title: 'גינות קהילתיות', desc: 'פרויקטים משותפים' },
    { emoji: '🏫', title: 'מוסדות חינוך', desc: 'למידה וחינוך סביבתי' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(152 40% 92%) 0%, hsl(152 50% 88%) 100%)' }}
    >
      {/* Decorative leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + (i % 3) * 30}%`,
              background: 'linear-gradient(135deg, hsl(120 45% 50% / 0.1) 0%, hsl(120 45% 35% / 0.1) 100%)',
              borderRadius: '0 50% 50% 50%',
              transform: `rotate(${45 + i * 30}deg)`,
            }}
            animate={{
              rotate: [45 + i * 30, 55 + i * 30, 45 + i * 30],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title" dir="rtl">
            השפעה סביבתית
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" dir="rtl">
            כל טיפה שנחסכת היא צעד לעבר עתיד ירוק יותר
          </p>
        </motion.div>

        {/* Impact stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center shadow-lg"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                style={{ background: stat.color, color: 'white' }}
              >
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
                <span className="text-2xl mr-1">{stat.unit}</span>
              </div>
              <p className="text-muted-foreground font-medium" dir="rtl">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/60 backdrop-blur rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: 'hsl(150 25% 20%)' }} dir="rtl">
            מתאים לשימוש ב:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <span className="text-4xl mb-3 block">{useCase.emoji}</span>
                <h4 className="font-bold mb-1" style={{ color: 'hsl(150 25% 25%)' }}>
                  {useCase.title}
                </h4>
                <p className="text-sm text-muted-foreground">{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <blockquote 
            className="text-xl md:text-2xl font-medium italic max-w-3xl mx-auto"
            style={{ color: 'hsl(152 60% 32%)' }}
            dir="rtl"
          >
            <Leaf className="inline w-6 h-6 ml-2" />
            "קלירדרופ הופך טיפות מבוזבזות לצמיחה ירוקה — מרפסת אחת בכל פעם."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default ImpactSection;
