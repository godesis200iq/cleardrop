import React, { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import { FilterModel } from '../FilterModel';

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '1',
      title: 'בקבוק A (עליון)',
      subtitle: 'סינון ראשוני',
      details: [
        'צרורות בתחתית הבקבוק',
        'חול גס מעל הצרורות',
        'בד סינון (גרב/כותנה) בחלק העליון',
      ],
      color: 'hsl(40 60% 55%)',
    },
    {
      number: '2',
      title: 'בקבוק B (אמצעי)',
      subtitle: 'טיהור עמוק',
      details: [
        'פחם פעיל גרגירי (GAC)',
        'שכבה עבה לספיגת מזהמים',
        'הסרת ריחות וכימיקלים',
      ],
      color: 'hsl(0 0% 30%)',
    },
    {
      number: '3',
      title: 'בקבוק C (תחתון)',
      subtitle: 'איסוף מים נקיים',
      details: [
        'חלק עליון מוסר (צורת משפך)',
        'איסוף המים המסוננים',
        'חיבור למיכל קטן',
      ],
      color: 'hsl(195 70% 50%)',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(195 50% 92%) 0%, hsl(195 40% 95%) 100%)' }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title" dir="rtl">
            איך זה עובד?
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto" dir="rtl">
            מערכת שלושת הבקבוקים — פשוט, יעיל ובטוח
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="canvas-container order-2 lg:order-1"
            style={{ height: '500px' }}
          >
            <Canvas camera={{ position: [4, 3, 6], fov: 45 }}>
              <Suspense fallback={null}>
                <FilterModel autoRotate={false} />
              </Suspense>
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                minDistance={4}
                maxDistance={10}
                minPolarAngle={Math.PI / 6}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-sm text-muted-foreground bg-white/80 rounded-lg px-3 py-2 inline-block">
                גרור לסיבוב • צבוט לזום
              </p>
            </div>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6 order-1 lg:order-2" dir="rtl">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="relative"
              >
                <div className="flex gap-4">
                  {/* Number circle */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    style={{ background: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/80 backdrop-blur rounded-xl p-5 shadow-md">
                    <h3 className="font-bold text-lg mb-1" style={{ color: 'hsl(150 25% 20%)' }}>
                      {step.title}
                    </h3>
                    <p className="text-sm font-medium mb-3" style={{ color: step.color }}>
                      {step.subtitle}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: step.color }} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                    className="absolute right-7 top-14 w-0.5 h-8 origin-top"
                    style={{ background: 'hsl(195 50% 70%)' }}
                  />
                )}
              </motion.div>
            ))}

            {/* Flow direction note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-blue-50 rounded-xl p-4 mt-6 border border-blue-100"
            >
              <p className="text-sm text-center" style={{ color: 'hsl(195 70% 35%)' }}>
                💧 המים זורמים מלמעלה למטה בכוח הכבידה בלבד — ללא צורך בחשמל!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
