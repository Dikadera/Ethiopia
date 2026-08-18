import React, { useState, useEffect } from 'react';
import { Book, Chapter, Verse, Bookmark } from '../types/bible';
import { ETHIOPIAN_BOOKS, CHAPTER_DATA } from '../data/ethiopianCanonData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Bookmark as BookmarkIcon, 
  Highlighter, 
  Copy, 
  Volume2, 
  Check, 
  Plus, 
  GitMerge,
  Star,
  Type,
  Maximize2
} from 'lucide-react';

interface ScriptureReaderProps {
  selectedBook: Book;
  onSelectBook: (book: Book) => void;
  languageMode: 'english' | 'amharic' | 'dual';
  onAddBookmark: (bookmark: Bookmark) => void;
  bookmarks: Bookmark[];
}

export const ScriptureReader: React.FC<ScriptureReaderProps> = ({
  selectedBook,
  onSelectBook,
  languageMode,
  onAddBookmark,
  bookmarks
}) => {
  const [currentChapterNum, setCurrentChapterNum] = useState<number>(1);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [fontFamily, setFontFamily] = useState<'serif' | 'geez' | 'sans'>('serif');
  const [copiedVerseNum, setCopiedVerseNum] = useState<number | null>(null);
  const [activeVerseNoteModal, setActiveVerseNoteModal] = useState<Verse | null>(null);
  const [noteInputText, setNoteInputText] = useState('');
  const [highlightedVerses, setHighlightedVerses] = useState<Record<number, string>>({});
  const [readingAudioVerseNum, setReadingAudioVerseNum] = useState<number | null>(null);

  // Retrieve current chapter data
  const chapters = CHAPTER_DATA[selectedBook.id] || [];
  const currentChapter: Chapter | undefined = chapters.find(c => c.chapterNumber === currentChapterNum);

  useEffect(() => {
    setCurrentChapterNum(1);
  }, [selectedBook.id]);

  const handleCopyVerse = (verse: Verse) => {
    const textToCopy = `${selectedBook.titleEnglish} ${currentChapterNum}:${verse.number}\n"${verse.textEnglish}"\n${verse.textAmharic}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedVerseNum(verse.number);
    setTimeout(() => setCopiedVerseNum(null), 2000);
  };

  const handleSpeakVerse = (verse: Verse) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setReadingAudioVerseNum(verse.number);
      const utterance = new SpeechSynthesisUtterance(verse.textEnglish);
      utterance.rate = 0.95;
      utterance.onend = () => setReadingAudioVerseNum(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleToggleBookmark = (verse: Verse, color: 'gold' | 'crimson' | 'indigo' | 'emerald' = 'gold') => {
    const existingIndex = bookmarks.findIndex(
      b => b.bookId === selectedBook.id && b.chapter === currentChapterNum && b.verse === verse.number
    );

    if (existingIndex >= 0) {
      // Remove bookmark logic handled in parent or here
    } else {
      const newBookmark: Bookmark = {
        id: `${selectedBook.id}-${currentChapterNum}-${verse.number}`,
        bookId: selectedBook.id,
        chapter: currentChapterNum,
        verse: verse.number,
        textEnglish: verse.textEnglish,
        textAmharic: verse.textAmharic,
        color,
        createdAt: new Date().toLocaleDateString()
      };
      onAddBookmark(newBookmark);
    }
  };

  const handleSetHighlight = (verseNum: number, color: string) => {
    setHighlightedVerses(prev => {
      if (prev[verseNum] === color) {
        const next = { ...prev };
        delete next[verseNum];
        return next;
      }
      return { ...prev, [verseNum]: color };
    });
  };

  const fontClasses = {
    sm: 'text-sm sm:text-base leading-relaxed',
    md: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-relaxed',
    xl: 'text-xl sm:text-2xl leading-relaxed',
  };

  const fontFamilies = {
    serif: 'font-serif',
    geez: 'font-geez',
    sans: 'font-sans',
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-16">
      
      {/* Top Toolbar: Book Selector, Chapter Selector, Text Controls */}
      <div className="sticky top-16 z-30 bg-parchment-100/95 dark:bg-ethiopian-obsidian/95 backdrop-blur-md p-4 rounded-2xl border border-ethiopian-gold/30 shadow-md flex flex-wrap items-center justify-between gap-4">
        
        {/* Book Selector */}
        <div className="flex items-center gap-3">
          <select
            value={selectedBook.id}
            onChange={(e) => {
              const b = ETHIOPIAN_BOOKS.find(book => book.id === e.target.value);
              if (b) onSelectBook(b);
            }}
            className="bg-parchment-50 dark:bg-ethiopian-obsidianCard border border-ethiopian-gold/40 rounded-xl px-3 py-2 text-sm font-semibold font-manuscript text-parchment-900 dark:text-parchment-100 focus:outline-none focus:border-ethiopian-gold shadow-sm"
          >
            {ETHIOPIAN_BOOKS.map(book => (
              <option key={book.id} value={book.id}>
                {book.titleEnglish} ({book.titleAmharic})
              </option>
            ))}
          </select>

          {/* Chapter Selector */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentChapterNum(prev => Math.max(1, prev - 1))}
              disabled={currentChapterNum <= 1}
              className="p-2 rounded-lg border border-ethiopian-gold/30 hover:bg-ethiopian-gold/20 disabled:opacity-30 disabled:cursor-not-allowed text-ethiopian-gold"
              title="Previous Chapter"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="px-3 py-1 text-sm font-bold font-mono text-ethiopian-gold">
              Cap. {currentChapterNum} / {selectedBook.totalChapters}
            </span>

            <button
              onClick={() => setCurrentChapterNum(prev => Math.min(selectedBook.totalChapters, prev + 1))}
              disabled={currentChapterNum >= selectedBook.totalChapters}
              className="p-2 rounded-lg border border-ethiopian-gold/30 hover:bg-ethiopian-gold/20 disabled:opacity-30 disabled:cursor-not-allowed text-ethiopian-gold"
              title="Next Chapter"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Text Appearance Controls */}
        <div className="flex items-center gap-3 text-xs">
          {/* Font Family Switcher */}
          <div className="flex bg-parchment-200 dark:bg-ethiopian-obsidianCard border border-ethiopian-gold/30 rounded-lg p-0.5">
            <button
              onClick={() => setFontFamily('serif')}
              className={`px-2.5 py-1 rounded-md font-serif ${fontFamily === 'serif' ? 'bg-ethiopian-gold text-black font-semibold' : 'text-parchment-700 dark:text-parchment-300'}`}
            >
              Manuscript
            </button>
            <button
              onClick={() => setFontFamily('geez')}
              className={`px-2.5 py-1 rounded-md font-geez ${fontFamily === 'geez' ? 'bg-ethiopian-gold text-black font-semibold' : 'text-parchment-700 dark:text-parchment-300'}`}
            >
              ግዕዝ
            </button>
          </div>

          {/* Font Size Switcher */}
          <div className="flex items-center bg-parchment-200 dark:bg-ethiopian-obsidianCard border border-ethiopian-gold/30 rounded-lg p-0.5">
            <Type className="w-3.5 h-3.5 ml-2 mr-1 text-ethiopian-gold" />
            {(['sm', 'md', 'lg', 'xl'] as const).map(size => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`px-2 py-1 uppercase rounded-md ${fontSize === size ? 'bg-ethiopian-gold text-black font-bold' : 'text-parchment-700 dark:text-parchment-300'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Main Manuscript Reader Sheet */}
      <div className="illuminated-card rounded-3xl p-6 sm:p-10 border-2 border-ethiopian-gold/40 bg-parchment-50/95 dark:bg-ethiopian-obsidianCard/95 shadow-2xl relative">
        
        {/* Header Title Banner */}
        <div className="text-center pb-6 mb-8 border-b border-ethiopian-gold/30 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-ethiopian-gold uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-ethiopian-gold" />
            {selectedBook.category.replace('_', ' ')} • {selectedBook.isUniqueToEthiopicCanon ? 'Ethiopian Orthodox Canon' : 'Holy Scripture'}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-manuscript text-parchment-900 dark:text-parchment-50">
            {selectedBook.titleEnglish}
          </h2>

          <p className="text-xl font-geez font-bold text-ethiopian-crimson dark:text-ethiopian-gold">
            {selectedBook.titleAmharic} ({selectedBook.titleGeez})
          </p>

          <div className="text-sm font-mono text-ethiopian-gold/80 pt-1">
            — Chapter {currentChapterNum} —
          </div>
        </div>

        {/* Verses Content */}
        {!currentChapter || currentChapter.verses.length === 0 ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-ethiopian-gold/15 text-ethiopian-gold border border-ethiopian-gold/40 mx-auto flex items-center justify-center">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-manuscript text-parchment-900 dark:text-parchment-100">
              Chapter {currentChapterNum} Structure Preserved
            </h3>
            <p className="text-sm text-parchment-600 dark:text-parchment-400 max-w-lg mx-auto">
              This chapter of <strong className="text-ethiopian-gold">{selectedBook.titleEnglish}</strong> is cataloged in the 81-book canonical index. Complete Ge'ez and English translation manuscripts for Chapter 1, Chapter 46, and flagship chapters are available in the reader.
            </p>
          </div>
        ) : (
          <div className={`space-y-8 ${fontClasses[fontSize]} ${fontFamilies[fontFamily]}`}>
            {currentChapter.verses.map((verse, idx) => {
              const isBookmarked = bookmarks.some(
                b => b.bookId === selectedBook.id && b.chapter === currentChapterNum && b.verse === verse.number
              );
              const highlightColor = highlightedVerses[verse.number];

              return (
                <div
                  key={verse.number}
                  className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-250 ${
                    highlightColor === 'gold' ? 'bg-yellow-500/15 border-yellow-500/50' :
                    highlightColor === 'crimson' ? 'bg-red-500/15 border-red-500/50' :
                    highlightColor === 'indigo' ? 'bg-indigo-500/15 border-indigo-500/50' :
                    highlightColor === 'emerald' ? 'bg-emerald-500/15 border-emerald-500/50' :
                    readingAudioVerseNum === verse.number ? 'bg-ethiopian-gold/20 border-ethiopian-gold' :
                    'bg-transparent border-transparent hover:bg-parchment-200/40 dark:hover:bg-black/30 hover:border-ethiopian-gold/30'
                  }`}
                >
                  {/* Verse Number & Action Floating Bar */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 font-mono font-bold text-xs px-2.5 py-0.5 rounded-full bg-ethiopian-gold/20 text-ethiopian-gold border border-ethiopian-gold/40">
                      Verse {verse.number}
                    </span>

                    {/* Quick Verse Actions */}
                    <div className="opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs">
                      {/* Highlight Colors */}
                      <div className="hidden sm:flex items-center gap-1 bg-black/20 rounded-full px-1.5 py-0.5 border border-ethiopian-gold/20">
                        <Highlighter className="w-3 h-3 text-ethiopian-gold mr-1" />
                        <button onClick={() => handleSetHighlight(verse.number, 'gold')} className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-125 transition-transform" />
                        <button onClick={() => handleSetHighlight(verse.number, 'crimson')} className="w-3 h-3 rounded-full bg-red-600 hover:scale-125 transition-transform" />
                        <button onClick={() => handleSetHighlight(verse.number, 'indigo')} className="w-3 h-3 rounded-full bg-indigo-500 hover:scale-125 transition-transform" />
                        <button onClick={() => handleSetHighlight(verse.number, 'emerald')} className="w-3 h-3 rounded-full bg-emerald-500 hover:scale-125 transition-transform" />
                      </div>

                      {/* Bookmark Button */}
                      <button
                        onClick={() => handleToggleBookmark(verse)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isBookmarked ? 'text-ethiopian-gold bg-ethiopian-gold/20' : 'text-parchment-500 hover:text-ethiopian-gold'
                        }`}
                        title={isBookmarked ? "Bookmarked" : "Add Bookmark"}
                      >
                        <BookmarkIcon className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-ethiopian-gold' : ''}`} />
                      </button>

                      {/* Audio Read Aloud */}
                      <button
                        onClick={() => handleSpeakVerse(verse)}
                        className={`p-1.5 rounded-lg transition-colors ${
                          readingAudioVerseNum === verse.number ? 'text-ethiopian-gold bg-ethiopian-gold/20 animate-bounce' : 'text-parchment-500 hover:text-ethiopian-gold'
                        }`}
                        title="Read Aloud Verse"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Copy Verse */}
                      <button
                        onClick={() => handleCopyVerse(verse)}
                        className="p-1.5 rounded-lg text-parchment-500 hover:text-ethiopian-gold transition-colors"
                        title="Copy Verse Text"
                      >
                        {copiedVerseNum === verse.number ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Multilingual Text Layout */}
                  {languageMode === 'dual' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                      {/* English Column */}
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-bold text-ethiopian-gold tracking-wider">English Standard Translation</span>
                        <p className={`text-parchment-900 dark:text-parchment-100 ${idx === 0 ? 'drop-cap' : ''}`}>
                          {verse.textEnglish}
                        </p>
                      </div>

                      {/* Amharic & Ge'ez Column */}
                      <div className="space-y-1 bg-ethiopian-gold/5 p-3 rounded-xl border border-ethiopian-gold/20">
                        <span className="text-[10px] font-geez font-bold text-ethiopian-crimson dark:text-ethiopian-gold tracking-wider">አማርኛ ወግዕዝ</span>
                        <p className="font-geez font-bold text-parchment-900 dark:text-parchment-50 leading-relaxed">
                          {verse.textAmharic}
                        </p>
                        <p className="font-geez text-xs text-ethiopian-gold/90 pt-1 border-t border-ethiopian-gold/20">
                          {verse.textGeez}
                        </p>
                      </div>
                    </div>
                  ) : languageMode === 'amharic' ? (
                    <div className="space-y-2 bg-ethiopian-gold/5 p-4 rounded-xl border border-ethiopian-gold/20">
                      <p className="font-geez font-bold text-lg text-parchment-900 dark:text-parchment-50 leading-relaxed">
                        {verse.textAmharic}
                      </p>
                      <p className="font-geez text-sm text-ethiopian-gold pt-2 border-t border-ethiopian-gold/20">
                        {verse.textGeez}
                      </p>
                    </div>
                  ) : (
                    <p className={`text-parchment-900 dark:text-parchment-100 ${idx === 0 ? 'drop-cap' : ''}`}>
                      {verse.textEnglish}
                    </p>
                  )}

                  {/* Footnotes & Cross-References Tags */}
                  {verse.crossRefs && verse.crossRefs.length > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                      <GitMerge className="w-3.5 h-3.5 text-ethiopian-gold" />
                      <span className="text-parchment-500 font-medium">Cross References:</span>
                      {verse.crossRefs.map((ref, i) => (
                        <span key={i} className="inline-flex items-center gap-1 bg-ethiopian-gold/20 text-ethiopian-gold font-semibold px-2 py-0.5 rounded-full border border-ethiopian-gold/40 cursor-pointer hover:bg-ethiopian-gold hover:text-black transition-all">
                          {ref.note}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Page Navigation */}
        <div className="mt-12 pt-6 border-t border-ethiopian-gold/30 flex items-center justify-between">
          <button
            onClick={() => setCurrentChapterNum(prev => Math.max(1, prev - 1))}
            disabled={currentChapterNum <= 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-parchment-200 dark:bg-ethiopian-obsidianCard border border-ethiopian-gold/30 text-xs font-semibold text-parchment-800 dark:text-parchment-200 disabled:opacity-30 disabled:cursor-not-allowed hover:border-ethiopian-gold"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Chapter
          </button>

          <span className="text-xs font-mono text-ethiopian-gold">
            {selectedBook.titleEnglish} — Cap. {currentChapterNum} of {selectedBook.totalChapters}
          </span>

          <button
            onClick={() => setCurrentChapterNum(prev => Math.min(selectedBook.totalChapters, prev + 1))}
            disabled={currentChapterNum >= selectedBook.totalChapters}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-ethiopian-gold text-black text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-ethiopian-goldBright transition-colors"
          >
            Next Chapter
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
