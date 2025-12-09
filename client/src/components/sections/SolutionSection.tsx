import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Leaf, DollarSign, Wrench } from 'lucide-react';

export function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'ידידותי לסביבה',
      description: 'מנצל מים אפורים במקום לזרוק אותם',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'עלות נמוכה',
      description: 'פחות מ-10 ש"ח לבניית המערכת',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'קל לבנות',
      description: 'ללא צורך בכלים מיוחדים',
    },
  ];

  const filterComponents = [
    { name: 'צרורות קטנים', desc: 'סינון ראשוני של חלקיקים גדולים' },
    { name: 'חול', desc: 'סינון חלקיקים עדינים' },
    { name: 'פחם פעיל', desc: 'הסרת ריחות וזיהומים' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 eco-gradient"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title" dir="rtl">
            הפתרון — ClearDrop
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto" dir="rtl">
            מערכת סינון זולה ובטוחה שממחזרת מים אפורים להשקיה
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" dir="rtl">
          {/* Left side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255, 255, 255, 0.6)' }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'hsl(152 60% 42%)', color: 'white' }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: 'hsl(150 25% 20%)' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Filter components list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 rounded-xl"
              style={{ background: 'rgba(255, 255, 255, 0.8)' }}
            >
              <h4 className="font-bold text-lg mb-4" style={{ color: 'hsl(150 25% 20%)' }}>
                מרכיבי הסינון:
              </h4>
              <ul className="space-y-3">
                {filterComponents.map((comp, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{comp.name}</span>
                      <span className="text-muted-foreground"> — {comp.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right side - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Bottle visualization */}
              <div className="relative bg-white/80 rounded-3xl p-8 shadow-xl backdrop-blur">
                <h4 className="text-center font-bold mb-6" style={{ color: 'hsl(150 25% 20%)' }}>
                  מבנה המערכת
                </h4>
                
                {/* Water input */}
                <div className="text-center mb-4">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                    style={{ background: 'hsl(195 70% 85%)', color: 'hsl(195 70% 30%)' }}
                  >
                    💧 מים אפורים נכנסים
                  </motion.div>
                </div>

                {/* Layers */}
                <div className="space-y-2">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="layer layer-sand"
                  >
                    <span className="block text-lg font-bold">שכבה 1</span>
                    <span className="text-sm opacity-90">צרורות + חול</span>
                  </motion.div>

                  <div className="flex justify-center">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-0.5 h-4"
                      style={{ background: 'hsl(195 70% 50%)' }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="layer layer-charcoal"
                  >
                    <span className="block text-lg font-bold">שכבה 2</span>
                    <span className="text-sm opacity-90">פחם פעיל</span>
                  </motion.div>

                  <div className="flex justify-center">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                      className="w-0.5 h-4"
                      style={{ background: 'hsl(195 70% 50%)' }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="layer layer-water"
                  >
                    <span className="block text-lg font-bold">שכבה 3</span>
                    <span className="text-sm opacity-90">מים נקיים</span>
                  </motion.div>
                </div>

                {/* Water output */}
                <div className="text-center mt-4">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                    className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                    style={{ background: 'hsl(152 60% 85%)', color: 'hsl(152 60% 25%)' }}
                  >
                    🌱 מים מסוננים להשקיה
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
