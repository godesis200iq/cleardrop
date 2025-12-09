import React from 'react';
import { motion } from 'framer-motion';
import { Logo } from '../components/Logo';
import { ArrowLeft, Printer, Download } from 'lucide-react';

export function PosterPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Controls - hidden when printing */}
      <div className="no-print fixed top-4 left-4 right-4 z-50 flex justify-between">
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:bg-gray-50"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>חזרה</span>
        </a>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
        >
          <Printer className="w-5 h-5" />
          <span>הדפסה</span>
        </button>
      </div>

      {/* Poster Content */}
      <div className="poster-page max-w-4xl mx-auto bg-white shadow-2xl my-8 p-8" dir="rtl">
        {/* Header */}
        <header className="text-center mb-8 pb-6 border-b-4 border-green-500">
          <div className="flex justify-center mb-4">
            <Logo variant="light" size="xl" />
          </div>
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'hsl(150 25% 20%)' }}>
            מערכת סינון מים אפורים למדשאות ומרפסות
          </h1>
          <p className="text-xl text-gray-600">
            גולן, איתן, דניאל — כיתה ט', אלתרמן הרצליה
          </p>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Problem */}
          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <h2 className="text-2xl font-bold mb-4 text-red-700 flex items-center gap-2">
              🚨 הבעיה
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• ישראל סובלת ממחסור חמור במים</li>
              <li>• משפחות רבות משקות צמחים במי שתייה טריים</li>
              <li>• מים אפורים (מקלחת/כיור/מזגן) נזרקים לביוב</li>
              <li>• בזבוז של עד 10 ליטר מים ביום לכל משפחה</li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
            <h2 className="text-2xl font-bold mb-4 text-green-700 flex items-center gap-2">
              💡 הפתרון — ClearDrop
            </h2>
            <p className="mb-4 text-gray-700">
              מערכת סינון זולה ובטוחה שממחזרת מים אפורים להשקיה באמצעות:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• צרורות קטנים</li>
              <li>• חול</li>
              <li>• פחם פעיל</li>
            </ul>
          </div>
        </div>

        {/* How it works - Layers */}
        <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
            🔬 איך זה עובד — 3 שכבות סינון
          </h2>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-lg mb-2 flex items-center justify-center text-white font-bold"
                style={{ background: 'linear-gradient(180deg, #e0c090 0%, #c0a070 100%)' }}>
                שכבה 1
              </div>
              <p className="font-medium">צרורות + חול</p>
              <p className="text-sm text-gray-500">סינון ראשוני</p>
            </div>
            <div className="flex items-center text-4xl text-blue-400">→</div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-lg mb-2 flex items-center justify-center text-white font-bold"
                style={{ background: 'linear-gradient(180deg, #404040 0%, #202020 100%)' }}>
                שכבה 2
              </div>
              <p className="font-medium">פחם פעיל</p>
              <p className="text-sm text-gray-500">טיהור עמוק</p>
            </div>
            <div className="flex items-center text-4xl text-blue-400">→</div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-lg mb-2 flex items-center justify-center text-white font-bold"
                style={{ background: 'linear-gradient(180deg, #60b0e0 0%, #3090c0 100%)' }}>
                שכבה 3
              </div>
              <p className="font-medium">מים נקיים</p>
              <p className="text-sm text-gray-500">איסוף</p>
            </div>
          </div>
        </div>

        {/* Materials and Safety */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Materials */}
          <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
            <h2 className="text-xl font-bold mb-4 text-amber-700">📦 חומרים נדרשים</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 3 × בקבוקי פלסטיק 1.5 ליטר</li>
              <li>• פחם פעיל (גרגירי)</li>
              <li>• חול (שטוף)</li>
              <li>• צרורות קטנים</li>
              <li>• גרב ישנה / בד כותנה</li>
              <li>• מספריים, סרט דבק, מיכל לאיסוף</li>
            </ul>
            <div className="mt-4 p-3 bg-green-100 rounded-lg text-center">
              <span className="font-bold text-green-700">עלות: פחות מ-10 ש"ח!</span>
            </div>
          </div>

          {/* Safety */}
          <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
            <h2 className="text-xl font-bold mb-4 text-yellow-700">⚠️ הנחיות בטיחות</h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>❌ רק לצמחים לא אכילים</li>
              <li>❌ אין לחבר למערכת צנרת</li>
              <li>✓ לפי הנחיות משרד הסביבה 2021</li>
              <li>🔄 החלפת פחם כל 2-6 שבועות</li>
              <li>🦟 למנוע מים עומדים (יתושים)</li>
            </ul>
          </div>
        </div>

        {/* Pro Version Improvements */}
        <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 mb-8">
          <h2 className="text-xl font-bold mb-4 text-purple-700 flex items-center gap-2">
            ⭐ גרסת PRO — שיפורים אופציונליים
          </h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium">תא שקיעה</p>
              <p className="text-gray-500">לתת למוצקים לשקוע</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium">פחם גרגירי (GAC)</p>
              <p className="text-gray-500">זרימה טובה יותר</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium">שכבת חול עדין</p>
              <p className="text-gray-500">סינון משופר</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium">פילטר בד סופי</p>
              <p className="text-gray-500">לפני האיסוף</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium">בקרת זרימה</p>
              <p className="text-gray-500">שליטה בקצב</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium">מערכת דו-שלבית</p>
              <p className="text-gray-500">שקיעה 30 דק' לפני סינון</p>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🌍 השפעה סביבתית</h2>
          <div className="flex justify-center gap-12">
            <div>
              <p className="text-4xl font-bold">~300</p>
              <p>ליטר נחסכים בחודש</p>
            </div>
            <div>
              <p className="text-4xl font-bold">3</p>
              <p>בקבוקים ממוחזרים</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10₪</p>
              <p>עלות מינימלית</p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 pt-6 border-t-2 border-gray-200">
          <p className="text-xl italic" style={{ color: 'hsl(152 60% 35%)' }}>
            "קלירדרופ הופך טיפות מבוזבזות לצמיחה ירוקה — מרפסת אחת בכל פעם."
          </p>
        </div>
      </div>
    </div>
  );
}

export default PosterPage;
