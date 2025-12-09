import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../components/Logo';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Clock, PlayCircle } from 'lucide-react';

interface ScriptSection {
  title: string;
  duration: string;
  content: string[];
  notes?: string;
}

const presentationScript: ScriptSection[] = [
  {
    title: 'פתיחה',
    duration: '15 שניות',
    content: [
      'שלום לכולם!',
      'אנחנו גולן, איתן ודניאל מכיתה ט\' בבית ספר אלתרמן הרצליה.',
      'היום נציג בפניכם את ClearDrop — קלירדרופ.',
      'מערכת סינון מים אפורים פשוטה וזולה שכל אחד יכול לבנות בבית.',
    ],
    notes: 'דברו באנרגיה ובהתלהבות. הציגו את עצמכם בביטחון.',
  },
  {
    title: 'הבעיה',
    duration: '30 שניות',
    content: [
      'ישראל נמצאת במשבר מים מתמשך.',
      'אבל האם ידעתם שמשפחה ממוצעת יכולה לחסוך עד 10 ליטר מים ביום?',
      'בכל פעם שאנחנו מתקלחים, שוטפים ידיים, או מפעילים מזגן — מים יורדים ישירות לביוב.',
      'אלה נקראים "מים אפורים" — מים שאינם מזוהמים מאוד, וניתן לסנן אותם בקלות.',
      'במקום לבזבז אותם, אפשר להשתמש בהם להשקיית צמחים!',
    ],
    notes: 'הדגישו את הבעיה בקול רציני. הראו דאגה אמיתית.',
  },
  {
    title: 'הפתרון — ClearDrop',
    duration: '20 שניות',
    content: [
      'הפתרון שלנו הוא ClearDrop — מערכת סינון מים אפורים להשקיה.',
      'המערכת בנויה מ-3 בקבוקי פלסטיק ממוחזרים וחומרי סינון פשוטים.',
      'העלות הכוללת? פחות מ-10 שקלים!',
      'וכל אחד יכול לבנות אותה בבית בלי כלים מיוחדים.',
    ],
    notes: 'הצביעו על המודל אם יש. הדגישו את הפשטות והמחיר הנמוך.',
  },
  {
    title: 'איך זה עובד',
    duration: '45 שניות',
    content: [
      'המערכת עובדת ב-3 שכבות סינון:',
      '',
      'שכבה ראשונה: צרורות וחול גס — עוצרים חלקיקים גדולים.',
      '',
      'שכבה שנייה: פחם פעיל — מסיר ריחות, צבעים וזיהומים קלים.',
      '',
      'שכבה שלישית: תא איסוף — כאן נאספים המים הנקיים והמסוננים.',
      '',
      'המים זורמים מלמעלה למטה רק בכוח הכבידה — בלי צורך בחשמל!',
      'פשוט מזרימים מים אפורים מלמעלה, ומקבלים מים מסוננים למטה.',
    ],
    notes: 'הסבירו בצורה ויזואלית. הראו על המודל כל שכבה.',
  },
  {
    title: 'בדיקות ותוצאות',
    duration: '20 שניות',
    content: [
      'ביצענו מספר ניסויים עם המערכת.',
      'המים שיצאו היו צלולים יותר, ללא ריח, ומתאימים להשקיית צמחי נוי.',
      'בדקנו את המערכת במשך שבועיים ברציפות — והיא עבדה מצוין!',
      'הצמחים שהושקו עם המים המסוננים גדלו באותו קצב כמו צמחים שהושקו במים רגילים.',
    ],
    notes: 'אם יש תמונות או נתונים — הציגו אותם.',
  },
  {
    title: 'השפעה סביבתית',
    duration: '20 שניות',
    content: [
      'אז מה ההשפעה של ClearDrop?',
      'כ-300 ליטר מים נחסכים כל חודש לכל משפחה.',
      '3 בקבוקי פלסטיק ממוחזרים במקום להיזרק לזבל.',
      'המערכת מתאימה לבתים, מרפסות, וגם לגינות קהילתיות.',
      'טיפה אחת בכל פעם — ויחד אנחנו יכולים לעשות שינוי!',
    ],
    notes: 'הראו התלהבות! זו הנקודה להשפיע רגשית.',
  },
  {
    title: 'שיפורים עתידיים',
    duration: '15 שניות',
    content: [
      'אנחנו כבר מתכננים שיפורים לגרסה הבאה:',
      'הוספת תא שקיעה לשיפור הסינון.',
      'בקרת זרימה לשליטה טובה יותר.',
      'ומערכת דו-שלבית שנותנת למים לשקוע לפני הסינון.',
    ],
    notes: 'הראו שאתם חושבים קדימה וממשיכים לפתח.',
  },
  {
    title: 'סיכום וסיום',
    duration: '15 שניות',
    content: [
      'לסיכום — ClearDrop הוא פתרון פשוט, זול וידידותי לסביבה.',
      'כל אחד יכול לבנות אותו ולהתחיל לחסוך מים כבר היום.',
      '',
      '"קלירדרופ הופך טיפות מבוזבזות לצמיחה ירוקה — מרפסת אחת בכל פעם."',
      '',
      'תודה רבה! יש שאלות?',
    ],
    notes: 'סיימו בחיוך ובביטחון. היו מוכנים לשאלות.',
  },
];

export function PresentationPage() {
  const [currentSection, setCurrentSection] = useState(0);

  const totalDuration = '3 דקות';

  const goToPrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const goToNext = () => {
    if (currentSection < presentationScript.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm no-print">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowRight className="w-5 h-5" />
            חזרה לאתר
          </a>
          <Logo variant="light" size="sm" />
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>זמן כולל: {totalDuration}</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'hsl(150 25% 20%)' }}>
            תסריט מצגת ClearDrop
          </h1>
          <p className="text-gray-600">מצגת של 2-3 דקות להצגה בתחרות</p>
        </div>

        {/* Navigation pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 no-print">
          {presentationScript.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentSection === index
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {index + 1}. {section.title}
            </button>
          ))}
        </div>

        {/* Current section content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold" style={{ color: 'hsl(150 25% 20%)' }}>
                {presentationScript[currentSection].title}
              </h2>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                ⏱️ {presentationScript[currentSection].duration}
              </span>
            </div>

            <div className="space-y-4 mb-6">
              {presentationScript[currentSection].content.map((line, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed ${line === '' ? 'h-2' : ''}`}
                  style={{ color: 'hsl(150 20% 30%)' }}
                >
                  {line}
                </p>
              ))}
            </div>

            {presentationScript[currentSection].notes && (
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <p className="text-sm">
                  <span className="font-bold text-amber-700">💡 טיפ למציג: </span>
                  <span className="text-amber-800">{presentationScript[currentSection].notes}</span>
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center no-print">
          <button
            onClick={goToPrevious}
            disabled={currentSection === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentSection === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
            הקודם
          </button>

          <span className="text-gray-500">
            {currentSection + 1} / {presentationScript.length}
          </span>

          <button
            onClick={goToNext}
            disabled={currentSection === presentationScript.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentSection === presentationScript.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700 shadow-md'
            }`}
          >
            הבא
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Full script for printing */}
        <div className="mt-12 print-only hidden">
          <h2 className="text-2xl font-bold mb-6 text-center">תסריט מלא</h2>
          {presentationScript.map((section, index) => (
            <div key={index} className="mb-8 page-break-inside-avoid">
              <h3 className="text-xl font-bold mb-2">
                {index + 1}. {section.title} ({section.duration})
              </h3>
              <div className="pr-4 border-r-4 border-green-500">
                {section.content.map((line, i) => (
                  <p key={i} className="mb-2">{line}</p>
                ))}
              </div>
              {section.notes && (
                <p className="mt-2 text-sm italic text-gray-600">
                  טיפ: {section.notes}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Print button */}
        <div className="text-center mt-8 no-print">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            <PlayCircle className="w-5 h-5" />
            הדפסת תסריט מלא
          </button>
        </div>
      </main>
    </div>
  );
}

export default PresentationPage;
