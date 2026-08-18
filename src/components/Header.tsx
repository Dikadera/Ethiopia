import React from 'react';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Bookmark, 
  Image as ImageIcon, 
  GitMerge, 
  Sun, 
  Moon, 
  Crown,
  Languages
} from 'lucide-react';
import { AudioAmbiencePlayer } from './AudioAmbiencePlayer';

interface HeaderProps {
  activeTab: 'canon' | 'reader' | 'crossref' | 'gallery' | 'fidel' | 'notes';
  setActiveTab: (tab: 'canon' | 'reader' | 'crossref' | 'gallery' | 'fidel' | 'notes') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  theme: 'parchment' | 'obsidian' | 'royal';
  setTheme: (theme: 'parchment' | 'obsidian' | 'royal') => void;
  languageMode: 'english' | 'amharic' | 'dual';
  setLanguageMode: (mode: 'english' | 'amharic' | 'dual') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  theme,
  setTheme,
  languageMode,
  setLanguageMode,
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-parchment-100/90 dark:bg-ethiopian-obsidian/90 border-b border-ethiopian-gold/30 shadow-lg transition-colors duration-300">
      {/* Top Banner Ribbon */}
      <div className="bg-ethiopian-flag-gradient h-1 w-full opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Brand Logo & Title */}
          <div 
            onClick={() => setActiveTab('canon')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-ethiopian-gold to-ethiopian-crimson p-0.5 shadow-md shadow-ethiopian-gold/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-parchment-100 dark:bg-ethiopian-obsidian rounded-[10px] flex items-center justify-center">
                {/* Traditional Ethiopian Cross Motif Icon */}
                <svg className="w-7 h-7 text-ethiopian-gold group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 2h2v4h4v2h-4v4h4v2h-4v8h-2v-8H7v-2h4V8H7V6h4V2zm0 10v2h2v-2h-2z"/>
                  <circle cx="12" cy="12" r="1.5" fill="#B22222" />
                </svg>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-manuscript tracking-tight text-parchment-900 dark:text-parchment-50">
                  The Ethiopian Bible
                </h1>
                <span className="bg-ethiopian-gold/20 text-ethiopian-gold dark:text-ethiopian-goldBright border border-ethiopian-gold/40 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  81 Books Canon
                </span>
              </div>
              <p className="text-xs font-geez text-ethiopian-crimson dark:text-ethiopian-gold/90 font-medium">
                መጽሐፍ ቅዱስ ፹፩ — ኦርቶዶክሳዊት ተዋሕዶ ቤተ ክርስቲያን
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ethiopian-gold" />
            <input
              type="text"
              placeholder="Search 81 books, Ge'ez titles, 1 Enoch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-sm bg-parchment-50/80 dark:bg-ethiopian-obsidianCard/90 border border-ethiopian-gold/30 rounded-full focus:outline-none focus:border-ethiopian-gold focus:ring-1 focus:ring-ethiopian-gold text-parchment-900 dark:text-parchment-100 placeholder-parchment-500/70"
            />
          </div>

          {/* Audio Ambience & Controls */}
          <div className="flex items-center gap-3">
            <AudioAmbiencePlayer theme={theme} />

            {/* Language Switcher */}
            <div className="flex bg-parchment-200 dark:bg-ethiopian-obsidianCard border border-ethiopian-gold/30 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setLanguageMode('english')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  languageMode === 'english' ? 'bg-ethiopian-gold text-black font-semibold' : 'text-parchment-700 dark:text-parchment-300'
                }`}
                title="English Only"
              >
                EN
              </button>
              <button
                onClick={() => setLanguageMode('dual')}
                className={`px-2 py-1 rounded-md transition-colors ${
                  languageMode === 'dual' ? 'bg-ethiopian-gold text-black font-semibold' : 'text-parchment-700 dark:text-parchment-300'
                }`}
                title="Dual English & Amharic / Ge'ez"
              >
                <Languages className="w-3 h-3 inline mr-1" />
                Dual
              </button>
              <button
                onClick={() => setLanguageMode('amharic')}
                className={`px-2 py-1 rounded-md transition-colors font-geez ${
                  languageMode === 'amharic' ? 'bg-ethiopian-gold text-black font-semibold' : 'text-parchment-700 dark:text-parchment-300'
                }`}
                title="Amharic / Ge'ez Only"
              >
                ግዕዝ
              </button>
            </div>

            {/* Theme Selector */}
            <div className="flex bg-parchment-200 dark:bg-ethiopian-obsidianCard border border-ethiopian-gold/30 rounded-lg p-0.5 text-xs">
              <button
                onClick={() => setTheme('parchment')}
                className={`p-1.5 rounded-md ${theme === 'parchment' ? 'bg-ethiopian-gold text-black' : 'text-ethiopian-gold'}`}
                title="Parchment Aged Paper Mode"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme('obsidian')}
                className={`p-1.5 rounded-md ${theme === 'obsidian' ? 'bg-ethiopian-gold text-black' : 'text-ethiopian-gold'}`}
                title="Abyssinian Obsidian Dark Mode"
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTheme('royal')}
                className={`p-1.5 rounded-md ${theme === 'royal' ? 'bg-ethiopian-gold text-black' : 'text-ethiopian-gold'}`}
                title="Royal Velvet & Emerald Mode"
              >
                <Crown className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-2 mt-3 pt-2 border-t border-ethiopian-gold/20 overflow-x-auto no-scrollbar text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('canon')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'canon' 
                ? 'bg-ethiopian-gold text-black font-semibold shadow-sm' 
                : 'text-parchment-700 dark:text-parchment-300 hover:bg-ethiopian-gold/15'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            81 Books Canon
          </button>

          <button
            onClick={() => setActiveTab('reader')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'reader' 
                ? 'bg-ethiopian-gold text-black font-semibold shadow-sm' 
                : 'text-parchment-700 dark:text-parchment-300 hover:bg-ethiopian-gold/15'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Scripture Reader
          </button>

          <button
            onClick={() => setActiveTab('crossref')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'crossref' 
                ? 'bg-ethiopian-gold text-black font-semibold shadow-sm' 
                : 'text-parchment-700 dark:text-parchment-300 hover:bg-ethiopian-gold/15'
            }`}
          >
            <GitMerge className="w-4 h-4" />
            Cross-References
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'gallery' 
                ? 'bg-ethiopian-gold text-black font-semibold shadow-sm' 
                : 'text-parchment-700 dark:text-parchment-300 hover:bg-ethiopian-gold/15'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            Manuscript Gallery
          </button>

          <button
            onClick={() => setActiveTab('fidel')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'fidel' 
                ? 'bg-ethiopian-gold text-black font-semibold shadow-sm' 
                : 'text-parchment-700 dark:text-parchment-300 hover:bg-ethiopian-gold/15'
            }`}
          >
            <span className="font-geez font-bold text-base">ሀ</span>
            Ge'ez Fidel Explorer
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'notes' 
                ? 'bg-ethiopian-gold text-black font-semibold shadow-sm' 
                : 'text-parchment-700 dark:text-parchment-300 hover:bg-ethiopian-gold/15'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            Bookmarks & Notes
          </button>
        </nav>
      </div>
    </header>
  );
};
