import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Wrench, Clock, Gauge } from 'lucide-react';

export function ImprovementsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const improvements = [
    {
      icon: '🧪',
      title: 'תא שקיעה',
      description: 'הוספת תא שקיעה בחלק העליון לתת למוצקים לשקוע לפני הסינון',
    },
    {
      icon: '⚫',
      title: 'פחם גרגירי (GAC)',
      description: 'שימוש בפחם פעיל גרגירי במקום אבקה — זרימה טובה יותר, פחות סתימות',
    },
    {
      icon: '🏖️',
      title: 'שכבת חול עדין',
      description: 'הוספת שכבת חול עדין מעל הפחם לשיפור הסרת חלקיקים',
    },
    {
      icon: '☕',
      title: 'פילטר בד סופי',
      description: 'הוספת פילטר קפה או בד לפני תא האיסוף',
    },
    {
      icon: '🚰',
      title: 'בקרת זרימה',
      description: 'הוספת חור קטן או ברז פשוט לשליטה בקצב הזרימה',
    },
    {
      icon: '⏱️',
      title: 'מערכת דו-שלבית',
      description: 'לתת למים לשקוע 30 דקות לפני הסינון לתוצאות טובות יותר',
    },
  ];

  const maintenance = [
    { task: 'ניקוי השכבה העליונה', frequency: 'אחת לשבוע' },
    { task: 'החלפת פחם (שימוש רב)', frequency: 'אחת לחודש' },
    { task: 'החלפת פחם (שימוש קל)', frequency: 'כל 6 שבועות' },
    { task: 'ייבוש המערכת בין שימושים', frequency: 'לפי הצורך' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24"
      style={{ background: 'linear-gradient(180deg, hsl(270 30% 95%) 0%, hsl(270 25% 92%) 100%)' }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'hsl(270 50% 50%)', color: 'white' }}>
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">גרסת PRO</span>
          </div>
          <h2 className="section-title" dir="rtl">
            שיפורים אופציונליים
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" dir="rtl">
            שדרוגים פשוטים להגברת יעילות המערכת
          </p>
        </motion.div>

        {/* Improvements grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" dir="rtl">
          {improvements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-md border border-purple-100"
            >
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'hsl(270 40% 30%)' }}>
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Maintenance section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6" dir="rtl">
              <Wrench className="w-6 h-6" style={{ color: 'hsl(270 50% 50%)' }} />
              <h3 className="text-xl font-bold" style={{ color: 'hsl(270 40% 30%)' }}>
                הוראות תחזוקה
              </h3>
            </div>
            
            <div className="space-y-4" dir="rtl">
              {maintenance.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg"
                  style={{ background: 'hsl(270 30% 97%)' }}
                >
                  <span className="font-medium" style={{ color: 'hsl(270 30% 25%)' }}>
                    {item.task}
                  </span>
                  <span className="flex items-center gap-2 text-sm px-3 py-1 rounded-full"
                    style={{ background: 'hsl(270 50% 50%)', color: 'white' }}>
                    <Clock className="w-4 h-4" />
                    {item.frequency}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Performance note */}
            <div className="mt-6 p-4 rounded-lg flex items-start gap-3" 
              style={{ background: 'hsl(152 50% 95%)' }} dir="rtl">
              <Gauge className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'hsl(152 60% 35%)' }} />
              <p className="text-sm" style={{ color: 'hsl(152 40% 30%)' }}>
                <strong>שיפור ביצועים:</strong> יישום השיפורים יכול להגביר את קצב הזרימה ואת בהירות המים המסוננים.
                מומלץ לייבש את המערכת בין שימושים למניעת ריחות.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ImprovementsSection;
