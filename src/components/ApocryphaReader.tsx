import React, { useState } from 'react';
import type { ApocryphaBook, ApocryphaChapter } from '../data/infancyGospelThomas';
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Sparkles, 
  Share2, 
  Check, 
  Scroll,
  Info,
  Layers,
  Award
} from 'lucide-react';

interface ApocryphaReaderProps {
  book: ApocryphaBook;
  onBackToLibrary?: () => void;
}

export const ApocryphaReader: React.FC<ApocryphaReaderProps> = ({
  book,
  onBackToLibrary,
}) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [copiedVerse, setCopiedVerse] = useState<string | null>(null);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<Record<string, boolean>>({});

  const currentChapter: ApocryphaChapter = book.chapters[currentChapterIndex] || book.chapters[0];

  const FONT_SIZE_CLASSES = {
    sm: 'text-sm leading-relaxed',
    md: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
    xl: 'text-xl leading-loose',
  };

  const handleCopyVerse = (chapterNum: number, verseNum: number, text: string) => {
    const key = `${chapterNum}:${verseNum}`;
    const copyText = `"${text}" — ${book.title}, Chapter ${chapterNum}:${verseNum}`;
    navigator.clipboard.writeText(copyText);
    setCopiedVerse(key);
    setTimeout(() => setCopiedVerse(null), 2000);
  };

  const toggleBookmark = (chapterNum: number, verseNum: number) => {
    const key = `${book.id}-${chapterNum}:${verseNum}`;
    setBookmarkedVerses(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 fade-slide-in">
      {/* Top Banner Navigation & Meta */}
      <div className="illuminated-card rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-parchment-50 to-parchment-100 dark:from-ethiopian-obsidianCard dark:to-[#15151A]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          {onBackToLibrary && (
            <button
              onClick={onBackToLibrary}
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-ethiopian-gold/20 hover:bg-ethiopian-gold text-ethiopian-gold hover:text-black transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Return to Library
            </button>
          )}

          <div className="flex items-center gap-2">
            <span className="bg-ethiopian-gold/20 text-ethiopian-gold dark:text-ethiopian-goldBright border border-ethiopian-gold/40 text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              ✨ 100% Free & Open Access
            </span>
            <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Full Unrestricted Text
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold font-manuscript text-parchment-900 dark:text-parchment-50 tracking-tight">
            {book.title}
          </h1>
          <p className="text-sm sm:text-base text-ethiopian-gold dark:text-ethiopian-goldBright font-medium">
            {book.subtitle}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-parchment-700 dark:text-parchment-300">
            <div className="flex items-center gap-2 bg-parchment-200/50 dark:bg-parchment-900/30 p-2.5 rounded-lg">
              <Scroll className="w-4 h-4 text-ethiopian-gold shrink-0" />
              <div>
                <span className="font-semibold text-ethiopian-gold">Date & Origin: </span>
                {book.datedTo}
              </div>
            </div>
            <div className="flex items-center gap-2 bg-parchment-200/50 dark:bg-parchment-900/30 p-2.5 rounded-lg">
              <Layers className="w-4 h-4 text-ethiopian-gold shrink-0" />
              <div>
                <span className="font-semibold text-ethiopian-gold">Language: </span>
                {book.originalLanguage}
              </div>
            </div>
            <div className="flex items-center gap-2 bg-parchment-200/50 dark:bg-parchment-900/30 p-2.5 rounded-lg">
              <Award className="w-4 h-4 text-ethiopian-gold shrink-0" />
              <div>
                <span className="font-semibold text-ethiopian-gold">Attribution: </span>
                {book.attribution}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Accordion */}
        <div className="mt-4 pt-4 border-t border-ethiopian-gold/20 text-xs sm:text-sm text-parchment-800 dark:text-parchment-200 leading-relaxed">
          <p className="mb-2">
            <span className="font-bold text-ethiopian-gold">Historical Summary: </span>
            {book.summary}
          </p>
          <p className="text-xs text-parchment-600 dark:text-parchment-400 italic">
            <span className="font-semibold not-italic text-ethiopian-gold">Theological Significance: </span>
            {book.significance}
          </p>
        </div>

        {/* Key Themes Chips */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="text-xs font-semibold text-ethiopian-gold">Key Themes:</span>
          {book.themes.map((theme, i) => (
            <span 
              key={i} 
              className="text-[11px] px-2.5 py-0.5 rounded-full bg-parchment-200 dark:bg-parchment-900/50 text-parchment-800 dark:text-parchment-200 border border-ethiopian-gold/30"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>

      {/* Chapter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-parchment-100 dark:bg-ethiopian-obsidianCard border border-ethiopian-gold/30 p-3 sm:p-4 rounded-xl shadow-md">
        {/* Chapter Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <span className="text-xs font-semibold text-ethiopian-gold whitespace-nowrap">Chapter:</span>
          {book.chapters.map((ch, idx) => (
            <button
              key={ch.number}
              onClick={() => setCurrentChapterIndex(idx)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                currentChapterIndex === idx
                  ? 'bg-ethiopian-gold text-black shadow-md scale-105'
                  : 'bg-parchment-200 dark:bg-parchment-900/40 text-parchment-800 dark:text-parchment-200 hover:bg-ethiopian-gold/20'
              }`}
            >
              {ch.number}
            </button>
          ))}
        </div>

        {/* Font Size Controls */}
        <div className="flex items-center gap-1 bg-parchment-200 dark:bg-parchment-900/40 p-1 rounded-lg text-xs">
          <span className="px-2 text-parchment-600 dark:text-parchment-400 font-semibold">Size:</span>
          {(['sm', 'md', 'lg', 'xl'] as const).map(sz => (
            <button
              key={sz}
              onClick={() => setFontSize(sz)}
              className={`px-2 py-1 rounded text-xs uppercase font-bold transition-colors ${
                fontSize === sz 
                  ? 'bg-ethiopian-gold text-black' 
                  : 'text-parchment-700 dark:text-parchment-300 hover:text-ethiopian-gold'
              }`}
            >
              {sz}
            </button>
          ))}
        </div>
      </div>

      {/* Main Scripture Text Panel */}
      <div className="illuminated-card rounded-2xl p-6 sm:p-10 bg-parchment-50/90 dark:bg-ethiopian-obsidianCard border border-ethiopian-gold/40 shadow-xl space-y-6">
        <div className="border-b border-ethiopian-gold/30 pb-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold font-manuscript text-ethiopian-gold">
            Chapter {currentChapter.number}
          </h2>
          {currentChapter.title && (
            <p className="text-sm font-serif italic text-parchment-700 dark:text-parchment-300 mt-1">
              — {currentChapter.title} —
            </p>
          )}
        </div>

        <div className="space-y-4">
          {currentChapter.verses.map((verse, idx) => {
            const verseKey = `${currentChapter.number}:${verse.number}`;
            const isBookmarked = !!bookmarkedVerses[`${book.id}-${verseKey}`];
            const isCopied = copiedVerse === verseKey;

            return (
              <div 
                key={verse.number}
                className={`group relative p-4 rounded-xl transition-all border ${
                  isBookmarked
                    ? 'bg-ethiopian-gold/10 border-ethiopian-gold/50'
                    : 'bg-transparent border-transparent hover:border-ethiopian-gold/20 hover:bg-parchment-100/50 dark:hover:bg-parchment-900/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Verse Number Pill */}
                  <span className="inline-flex items-center justify-center min-w-[28px] h-7 rounded-full bg-ethiopian-gold/20 text-ethiopian-gold dark:text-ethiopian-goldBright font-mono font-bold text-xs shrink-0 mt-0.5 border border-ethiopian-gold/30">
                    {verse.number}
                  </span>

                  {/* Verse Content */}
                  <p className={`flex-1 text-parchment-900 dark:text-parchment-100 ${FONT_SIZE_CLASSES[fontSize]} ${idx === 0 ? 'drop-cap' : ''}`}>
                    {verse.text}
                  </p>

                  {/* Action Buttons */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleCopyVerse(currentChapter.number, verse.number, verse.text)}
                      title="Copy verse text"
                      className="p-1.5 rounded-lg bg-parchment-200 dark:bg-parchment-800 text-parchment-700 dark:text-parchment-300 hover:text-ethiopian-gold transition-colors"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => toggleBookmark(currentChapter.number, verse.number)}
                      title="Bookmark verse"
                      className={`p-1.5 rounded-lg transition-colors ${
                        isBookmarked 
                          ? 'bg-ethiopian-gold text-black' 
                          : 'bg-parchment-200 dark:bg-parchment-800 text-parchment-700 dark:text-parchment-300 hover:text-ethiopian-gold'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination */}
        <div className="flex items-center justify-between pt-6 border-t border-ethiopian-gold/30">
          <button
            onClick={() => setCurrentChapterIndex(prev => Math.max(0, prev - 1))}
            disabled={currentChapterIndex === 0}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-parchment-200 dark:bg-parchment-900/60 text-parchment-800 dark:text-parchment-200 hover:bg-ethiopian-gold hover:text-black disabled:opacity-40 disabled:hover:bg-parchment-200 disabled:hover:text-parchment-800 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Chapter
          </button>

          <span className="text-xs font-mono font-medium text-ethiopian-gold">
            Chapter {currentChapterIndex + 1} of {book.chapters.length}
          </span>

          <button
            onClick={() => setCurrentChapterIndex(prev => Math.min(book.chapters.length - 1, prev + 1))}
            disabled={currentChapterIndex === book.chapters.length - 1}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-ethiopian-gold text-black hover:bg-ethiopian-goldBright disabled:opacity-40 disabled:hover:bg-ethiopian-gold transition-all"
          >
            Next Chapter
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
