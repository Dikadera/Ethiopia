import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Scroll, 
  Crown, 
  ChevronRight, 
  ShieldCheck, 
  Globe, 
  Heart,
  Feather,
  Sun,
  Flame
} from 'lucide-react';

interface LibraryHomeProps {
  onSelectPage: (pageId: 'ethiopian-bible' | 'infancy-thomas' | 'proto-james' | 'gospel-mary') => void;
}

export const LibraryHome: React.FC<LibraryHomeProps> = ({ onSelectPage }) => {
  return (
    <div className="space-y-12 fade-slide-in pb-12">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1C120C] via-[#2A1810] to-[#0D0B12] p-8 sm:p-12 border border-ethiopian-gold/40 shadow-2xl text-center space-y-6">
        <div className="absolute inset-0 geez-pattern-bg opacity-30 pointer-events-none"></div>
        
        {/* Free & Open Access Banner */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ethiopian-gold/20 via-ethiopian-gold/30 to-ethiopian-gold/20 border border-ethiopian-gold/50 px-4 py-1.5 rounded-full text-xs font-semibold text-ethiopian-goldBright uppercase tracking-widest shadow-lg">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>100% Free & Open Access to All — No Restrictions</span>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-manuscript text-parchment-50 tracking-tight leading-tight">
            The Digital Sanctuary of Sacred Texts
          </h1>
          <p className="text-sm sm:text-lg text-parchment-200 font-serif leading-relaxed">
            Explore the ancient 81-book Ethiopian Orthodox Bible alongside preserved Early Christian Apocrypha & Lost Gospels. Fully open, interactive, and free for all scholars and seekers worldwide.
          </p>
        </div>

        {/* Key Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4 text-xs font-medium">
          <div className="bg-ethiopian-obsidianCard/80 border border-ethiopian-gold/20 p-3 rounded-xl">
            <span className="block text-xl font-bold font-manuscript text-ethiopian-gold">81 Books</span>
            <span className="text-parchment-400">Complete Ethiopic Canon</span>
          </div>
          <div className="bg-ethiopian-obsidianCard/80 border border-ethiopian-gold/20 p-3 rounded-xl">
            <span className="block text-xl font-bold font-manuscript text-ethiopian-gold">Ge'ez & Dual</span>
            <span className="text-parchment-400">Original & English Texts</span>
          </div>
          <div className="bg-ethiopian-obsidianCard/80 border border-ethiopian-gold/20 p-3 rounded-xl">
            <span className="block text-xl font-bold font-manuscript text-ethiopian-gold">3 Apocrypha</span>
            <span className="text-parchment-400">Infancy & Lost Gospels</span>
          </div>
          <div className="bg-ethiopian-obsidianCard/80 border border-ethiopian-gold/20 p-3 rounded-xl">
            <span className="block text-xl font-bold font-manuscript text-emerald-400">Free Forever</span>
            <span className="text-parchment-400">Unrestricted Access</span>
          </div>
        </div>
      </div>

      {/* Main Pages Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-ethiopian-gold/30 pb-3">
          <div>
            <h2 className="text-2xl font-bold font-manuscript text-parchment-900 dark:text-parchment-50">
              Sacred Library Pages
            </h2>
            <p className="text-xs text-ethiopian-gold font-medium">
              Select any sacred text to open its full reader, commentary, and chapters
            </p>
          </div>
          <span className="text-xs text-emerald-500 font-semibold flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" /> All 4 Pages Unlocked
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 1. Ethiopian Bible Page Card */}
          <div 
            onClick={() => onSelectPage('ethiopian-bible')}
            className="group relative illuminated-card rounded-2xl p-6 bg-gradient-to-br from-parchment-100 to-parchment-50 dark:from-ethiopian-obsidianCard dark:to-[#17171C] border border-ethiopian-gold/40 hover:border-ethiopian-gold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-ethiopian-gold to-ethiopian-crimson p-0.5 shadow-md">
                  <div className="w-full h-full bg-ethiopian-obsidian rounded-[10px] flex items-center justify-center text-ethiopian-gold">
                    <Crown className="w-6 h-6" />
                  </div>
                </div>
                <span className="bg-ethiopian-gold/20 text-ethiopian-gold border border-ethiopian-gold/40 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Flagship Canon
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-manuscript text-parchment-900 dark:text-parchment-50 group-hover:text-ethiopian-gold transition-colors">
                  The Ethiopian Bible (81 Books)
                </h3>
                <p className="text-xs text-ethiopian-crimson dark:text-ethiopian-gold/90 font-geez font-semibold mt-1">
                  መጽሐፍ ቅዱስ ፹፩ — ኦርቶዶክሳዊት ተዋሕዶ ቤተ ክርስቲያን
                </p>
                <p className="text-xs text-parchment-700 dark:text-parchment-300 mt-3 leading-relaxed">
                  Explore the complete 81-book canonical Bible of the Ethiopian Orthodox Tewahedo Church. Includes 1 Enoch, Jubilees, Meqabyan, Ge'ez Fidel syllabary chart, cross references, and manuscript gallery.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-ethiopian-gold/20 flex items-center justify-between text-xs font-semibold text-ethiopian-gold">
              <span>Read 81 Books & Ge'ez Reader</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Page <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* 2. Infancy Gospel of Thomas Card */}
          <div 
            onClick={() => onSelectPage('infancy-thomas')}
            className="group relative illuminated-card rounded-2xl p-6 bg-gradient-to-br from-parchment-100 to-parchment-50 dark:from-ethiopian-obsidianCard dark:to-[#17171C] border border-ethiopian-gold/40 hover:border-ethiopian-gold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 shadow-md">
                  <div className="w-full h-full bg-ethiopian-obsidian rounded-[10px] flex items-center justify-center text-amber-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
                <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Apocrypha Page
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-manuscript text-parchment-900 dark:text-parchment-50 group-hover:text-amber-400 transition-colors">
                  Infancy Gospel of Thomas
                </h3>
                <p className="text-xs text-amber-400/90 font-serif font-medium mt-1">
                  The Childhood Deeds & Miracles of Jesus (Ages 5 to 12)
                </p>
                <p className="text-xs text-parchment-700 dark:text-parchment-300 mt-3 leading-relaxed">
                  Biographical narrative of Jesus's childhood miracles — from turning clay sparrows into living birds and carrying water in his cloak to confounding schoolmasters in the Temple.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-ethiopian-gold/20 flex items-center justify-between text-xs font-semibold text-amber-400">
              <span>Full 17 Chapters Text</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Page <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* 3. Protoevangelium of James Card */}
          <div 
            onClick={() => onSelectPage('proto-james')}
            className="group relative illuminated-card rounded-2xl p-6 bg-gradient-to-br from-parchment-100 to-parchment-50 dark:from-ethiopian-obsidianCard dark:to-[#17171C] border border-ethiopian-gold/40 hover:border-ethiopian-gold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-md">
                  <div className="w-full h-full bg-ethiopian-obsidian rounded-[10px] flex items-center justify-center text-blue-400">
                    <Scroll className="w-6 h-6" />
                  </div>
                </div>
                <span className="bg-blue-500/20 text-blue-400 border border-blue-500/40 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Apocrypha Page
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-manuscript text-parchment-900 dark:text-parchment-50 group-hover:text-blue-400 transition-colors">
                  Protoevangelium of James
                </h3>
                <p className="text-xs text-blue-400/90 font-serif font-medium mt-1">
                  The Birth & Early Life of the Virgin Mary
                </p>
                <p className="text-xs text-parchment-700 dark:text-parchment-300 mt-3 leading-relaxed">
                  The oldest Marian biography detailing Joachim and Anne, Mary's miraculous birth, her life in the Temple, betrothal to Joseph, the Annunciation, and the Nativity in the cave.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-ethiopian-gold/20 flex items-center justify-between text-xs font-semibold text-blue-400">
              <span>Full 20 Chapters Text</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Page <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* 4. Gospel of Mary Magdalene Card */}
          <div 
            onClick={() => onSelectPage('gospel-mary')}
            className="group relative illuminated-card rounded-2xl p-6 bg-gradient-to-br from-parchment-100 to-parchment-50 dark:from-ethiopian-obsidianCard dark:to-[#17171C] border border-ethiopian-gold/40 hover:border-ethiopian-gold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-rose-600 p-0.5 shadow-md">
                  <div className="w-full h-full bg-ethiopian-obsidian rounded-[10px] flex items-center justify-center text-purple-400">
                    <Feather className="w-6 h-6" />
                  </div>
                </div>
                <span className="bg-purple-500/20 text-purple-400 border border-purple-500/40 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Gnostic Gospel Page
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-manuscript text-parchment-900 dark:text-parchment-50 group-hover:text-purple-400 transition-colors">
                  Gospel of Mary Magdalene
                </h3>
                <p className="text-xs text-purple-400/90 font-serif font-medium mt-1">
                  Mystical Revelations & Soul's Ascension Past Seven Powers
                </p>
                <p className="text-xs text-parchment-700 dark:text-parchment-300 mt-3 leading-relaxed">
                  Discovered in the 1896 Berlin Coptic Codex. Depicts Mary Magdalene comforting the disciples after Christ's departure, sharing secret visions of the soul's liberation and defending women's spiritual leadership.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-ethiopian-gold/20 flex items-center justify-between text-xs font-semibold text-purple-400">
              <span>Full 5 Chapters Text</span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Page <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
