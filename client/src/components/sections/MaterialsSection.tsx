import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Package, Scissors, Wrench } from 'lucide-react';

export function MaterialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const materials = [
    { name: '3 בקבוקי פלסטיק 1.5 ליטר', icon: '🍾', category: 'עיקרי' },
    { name: 'פחם פעיל (גרגירי)', icon: '⚫', category: 'עיקרי' },
    { name: 'חול (שטוף)', icon: '🏖️', category: 'עיקרי' },
    { name: 'צרורות קטנים', icon: '🪨', category: 'עיקרי' },
    { name: 'גרב ישנה / בד כותנה', icon: '🧦', category: 'סינון' },
    { name: 'מספריים', icon: '✂️', category: 'כלים' },
    { name: 'סרט דבק', icon: '📦', category: 'כלים' },
    { name: 'חבל (אופציונלי)', icon: '🪢', category: 'כלים' },
    { name: 'מיכל לאיסוף מים', icon: '🪣', category: 'כלים' },
  ];

  const categories = ['עיקרי', 'סינון', 'כלים'];

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
            חומרים נדרשים
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" dir="rtl">
            כל מה שצריך כדי לבנות את המערכת — רוב החומרים כבר נמצאים בבית
          </p>
        </motion.div>

        {/* Cost highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto mb-12 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: 'hsl(152 60% 42%)', color: 'white' }}
          >
            <span className="text-2xl">💰</span>
            <span className="font-bold text-lg">עלות כוללת: פחות מ-10 ש"ח!</span>
          </div>
        </motion.div>

        {/* Materials grid by category */}
        <div className="space-y-8" dir="rtl">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + catIndex * 0.15 }}
            >
              <h3 className="text-lg font-bold mb-4 text-muted-foreground">
                {category === 'עיקרי' && <Package className="inline w-5 h-5 ml-2" />}
                {category === 'סינון' && '🔍 '}
                {category === 'כלים' && <Scissors className="inline w-5 h-5 ml-2" />}
                {category}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {materials
                  .filter((m) => m.category === category)
                  .map((material, index) => (
                    <motion.div
                      key={material.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white/80 backdrop-blur rounded-xl p-4 shadow-md flex items-center gap-3"
                    >
                      <span className="text-2xl">{material.icon}</span>
                      <span className="font-medium" style={{ color: 'hsl(150 25% 25%)' }}>
                        {material.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Assembly note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white/60 backdrop-blur rounded-2xl p-6 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4" dir="rtl">
            <Wrench className="w-8 h-8 flex-shrink-0" style={{ color: 'hsl(150 50% 40%)' }} />
            <div>
              <h4 className="font-bold text-lg mb-2" style={{ color: 'hsl(150 25% 20%)' }}>
                טיפ להרכבה
              </h4>
              <p className="text-muted-foreground">
                השתמשו בסרט דבק חזק לחיבור בין הבקבוקים. וודאו שאין נזילות ושהמערכת יציבה.
                ניתן להשתמש בחבל לתליית המערכת על מרפסת או גדר.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MaterialsSection;
