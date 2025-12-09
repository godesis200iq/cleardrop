import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AlertTriangle, XCircle, CheckCircle, Calendar, Bug, FileText } from 'lucide-react';

export function SafetySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const safetyRules = [
    {
      icon: <XCircle className="w-6 h-6" />,
      rule: 'רק לצמחים לא אכילים',
      description: 'אין להשתמש במים המסוננים להשקיית ירקות, פירות או צמחי תבלין',
      type: 'warning',
    },
    {
      icon: <XCircle className="w-6 h-6" />,
      rule: 'אין לחבר למערכת צנרת',
      description: 'המערכת מיועדת לשימוש ידני בלבד, לא לחיבור לצנרת הבית',
      type: 'warning',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      rule: 'עמידה בהנחיות',
      description: 'פועל בהתאם להנחיות המשרד להגנת הסביבה 2021',
      type: 'info',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      rule: 'החלפת פחם',
      description: 'יש להחליף את הפחם הפעיל כל 2-6 שבועות',
      type: 'info',
    },
    {
      icon: <Bug className="w-6 h-6" />,
      rule: 'מניעת יתושים',
      description: 'אין להשאיר מים עומדים — יש לרוקן את המערכת לאחר שימוש',
      type: 'warning',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24"
      style={{ background: 'linear-gradient(180deg, hsl(45 60% 96%) 0%, hsl(40 50% 93%) 100%)' }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" 
            style={{ background: 'hsl(45 85% 55%)', color: 'hsl(45 90% 20%)' }}>
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="section-title" dir="rtl">
            הנחיות בטיחות
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" dir="rtl">
            חשוב לעקוב אחר ההנחיות הבאות לשימוש בטוח ויעיל
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" dir="rtl">
          {safetyRules.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`rounded-xl p-6 border-2 ${
                item.type === 'warning' 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    item.type === 'warning' 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'hsl(150 25% 20%)' }}>
                    {item.rule}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Official compliance badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center" dir="rtl">
            <CheckCircle className="w-10 h-10 mx-auto mb-4 text-green-600" />
            <h4 className="font-bold text-lg mb-2" style={{ color: 'hsl(150 50% 30%)' }}>
              תואם להנחיות רשמיות
            </h4>
            <p className="text-sm text-muted-foreground">
              המערכת פועלת בהתאם להנחיות המשרד להגנת הסביבה לשימוש במים אפורים לגינון ביתי (2021)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SafetySection;
