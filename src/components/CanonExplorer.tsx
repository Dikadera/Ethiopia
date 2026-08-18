import React, { useState } from 'react';
import { ETHIOPIAN_BOOKS } from '../data/ethiopianCanonData';
import { Book, BookCategory } from '../types/bible';
import { BookOpen, Star, Filter, Info, ChevronRight, Layers, Sparkles } from 'lucide-react';

interface CanonExplorerProps {
  onSelectBook: (book: Book) => void;
  searchQuery: string;
}

export const CanonExplorer: React.FC<CanonExplorerProps> = ({ onSelectBook, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBookForInfo, setSelectedBookForInfo] = useState<Book | null>(null);

  // Filter books by category and search query
  const filteredBooks = ETHIOPIAN_BOOKS.filter(book => {
    const matchesSearch = 
      book.titleEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.titleAmharic.includes(searchQuery) ||
      book.titleGeez.includes(searchQuery) ||
      book.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.transliteration.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'unique') return book.isUniqueToEthiopicCanon;
    if (selectedCategory === 'ot') return book.testament === 'ot' || (book.testament === 'ethiopian_extra' && book.category !== 'church_order');
    if (selectedCategory === 'nt') return book.testament === 'nt' || book.category === 'church_order';
    return book.category === selectedCategory;
  });

  const categories = [
    { id: 'all', label: 'All 81 Books (፹፩)', icon: Layers },
    { id: 'unique', label: 'Ethiopic Unique Canon (፩ ሄኖክ, ኩፋሌ...)', icon: Star },
    { id: 'law', label: 'Law & History (ኦሪት)', icon: BookOpen },
    { id: 'wisdom', label: 'Wisdom & Psalms (ጥበብ)', icon: Sparkles },
    { id: 'gospels', label: 'Holy Gospels (ወንጌል)', icon: BookOpen },
    { id: 'epistles', label: 'Epistles (መልእክት)', icon: ChevronRight },
    { id: 'church_order', label: 'Church Order (ሲኖዶስ & ኪዳን)', icon: Filter },
  ];

  const uniqueBooksCount = ETHIOPIAN_BOOKS.filter(b => b.isUniqueToEthiopicCanon).length;

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Header Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-ethiopian-obsidianCard via-parchment-900 to-ethiopian-indigo p-6 sm:p-10 border border-ethiopian-gold/40 shadow-2xl text-parchment-100">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none bg-geez-pattern-bg"></div>
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ethiopian-gold/20 border border-ethiopian-gold/50 text-ethiopian-gold text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-ethiopian-gold text-ethiopian-gold" />
            The Broad Ethiopian Orthodox Tewahedo Canon
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-manuscript text-transparent bg-clip-text bg-gradient-to-r from-ethiopian-goldBright via-parchment-100 to-ethiopian-gold">
            81 Sacred Books of Wisdom & Light
          </h2>

          <p className="text-sm sm:text-base text-parchment-200/90 leading-relaxed">
            The Ethiopian Orthodox Bible holds the oldest and most complete biblical canon in Christianity. Preserved in Ge'ez for millennia, it includes books absent from Western canons—such as <strong className="text-ethiopian-gold">1 Enoch (መጽሐፈ ሄኖክ)</strong>, <strong className="text-ethiopian-gold">Jubilees (መጽሐፈ ኩፋሌ)</strong>, and <strong className="text-ethiopian-gold">1-3 Meqabyan (መቃብያን)</strong>—providing unmatched apocalyptic depth, calendar wisdom, and early Christian insights.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-ethiopian-gold/30">
              <span className="font-bold text-ethiopian-gold text-base">81</span>
              <span className="text-parchment-300">Total Canonical Books</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-ethiopian-gold/30">
              <span className="font-bold text-ethiopian-gold text-base">46</span>
              <span className="text-parchment-300">Old Testament Books</span>
            </div>
            <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-ethiopian-gold/30">
              <span className="font-bold text-ethiopian-gold text-base">35</span>
              <span className="text-parchment-300">New Testament & Ecclesiastical</span>
            </div>
            <div className="flex items-center gap-2 bg-ethiopian-gold/15 px-3 py-1.5 rounded-lg border border-ethiopian-gold/50 text-ethiopian-gold">
              <span className="font-bold text-base">{uniqueBooksCount}+</span>
              <span>Ethiopic Preservation Books</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap border ${
                isActive
                  ? 'bg-ethiopian-gold text-black border-ethiopian-gold shadow-md font-semibold scale-[1.02]'
                  : 'bg-parchment-50/80 dark:bg-ethiopian-obsidianCard/90 border-ethiopian-gold/30 text-parchment-800 dark:text-parchment-200 hover:border-ethiopian-gold/60'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-ethiopian-gold'}`} />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book, idx) => (
          <div
            key={book.id}
            className="group relative illuminated-card rounded-2xl p-5 flex flex-col justify-between border border-ethiopian-gold/30 bg-parchment-50/90 dark:bg-ethiopian-obsidianCard/90 hover:border-ethiopian-gold transition-all duration-300 shadow-md hover:shadow-xl"
          >
            {/* Top Badge Ribbon */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-ethiopian-gold/15 border border-ethiopian-gold/40 text-ethiopian-gold font-mono font-bold text-sm flex items-center justify-center">
                {idx + 1}
              </span>

              {book.isUniqueToEthiopicCanon && (
                <span className="inline-flex items-center gap-1 bg-ethiopian-gold/20 text-ethiopian-gold dark:text-ethiopian-goldBright border border-ethiopian-gold/50 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-ethiopian-gold" />
                  Ethiopic Canon
                </span>
              )}
            </div>

            {/* Book Titles */}
            <div className="space-y-1.5 mb-4">
              <h3 className="text-lg font-bold font-manuscript text-parchment-900 dark:text-parchment-50 group-hover:text-ethiopian-gold transition-colors">
                {book.titleEnglish}
              </h3>
              
              <div className="flex items-center justify-between text-xs">
                <span className="font-geez font-bold text-ethiopian-crimson dark:text-ethiopian-gold text-base">
                  {book.titleAmharic}
                </span>
                <span className="text-parchment-500 italic">
                  {book.transliteration}
                </span>
              </div>
            </div>

            {/* Book Description Snippet */}
            <p className="text-xs text-parchment-700 dark:text-parchment-300 line-clamp-3 mb-4 leading-relaxed">
              {book.summary}
            </p>

            {/* Footer Metrics & Actions */}
            <div className="pt-3 border-t border-ethiopian-gold/20 flex items-center justify-between">
              <span className="text-[11px] text-parchment-500 font-medium">
                {book.totalChapters} {book.totalChapters === 1 ? 'Chapter' : 'Chapters'}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedBookForInfo(book)}
                  className="p-1.5 rounded-lg text-parchment-500 hover:text-ethiopian-gold hover:bg-ethiopian-gold/10 transition-colors"
                  title="View Historical Background & Significance"
                >
                  <Info className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectBook(book)}
                  className="inline-flex items-center gap-1 bg-ethiopian-gold/20 hover:bg-ethiopian-gold hover:text-black border border-ethiopian-gold/50 text-ethiopian-gold text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                >
                  Read Book
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Book Detailed Info */}
      {selectedBookForInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-parchment-100 dark:bg-ethiopian-obsidianCard border-2 border-ethiopian-gold rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setSelectedBookForInfo(null)}
              className="absolute top-4 right-4 text-parchment-500 hover:text-ethiopian-gold text-xl font-bold"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 border-b border-ethiopian-gold/30 pb-3">
              <Star className="w-6 h-6 text-ethiopian-gold fill-ethiopian-gold" />
              <div>
                <h3 className="text-xl font-bold font-manuscript text-parchment-900 dark:text-parchment-50">
                  {selectedBookForInfo.titleEnglish}
                </h3>
                <p className="text-sm font-geez text-ethiopian-crimson dark:text-ethiopian-gold">
                  {selectedBookForInfo.titleAmharic} ({selectedBookForInfo.titleGeez})
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-parchment-800 dark:text-parchment-200 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <h4 className="font-semibold text-ethiopian-gold mb-1">Author & Historical Context:</h4>
                <p>{selectedBookForInfo.author} — {selectedBookForInfo.historicalContext}</p>
              </div>

              <div>
                <h4 className="font-semibold text-ethiopian-gold mb-1">Summary & Content Overview:</h4>
                <p className="leading-relaxed">{selectedBookForInfo.summary}</p>
              </div>

              <div>
                <h4 className="font-semibold text-ethiopian-gold mb-1">Theological & Canonical Significance:</h4>
                <p className="leading-relaxed">{selectedBookForInfo.significance}</p>
              </div>

              {selectedBookForInfo.keyThemes && (
                <div>
                  <h4 className="font-semibold text-ethiopian-gold mb-1">Key Themes:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedBookForInfo.keyThemes.map((theme, i) => (
                      <span key={i} className="bg-ethiopian-gold/15 text-ethiopian-gold border border-ethiopian-gold/30 text-xs px-2 py-0.5 rounded-full">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-ethiopian-gold/30 flex justify-end gap-3">
              <button
                onClick={() => setSelectedBookForInfo(null)}
                className="px-4 py-1.5 text-xs font-medium rounded-lg text-parchment-600 dark:text-parchment-400 hover:bg-black/10"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onSelectBook(selectedBookForInfo);
                  setSelectedBookForInfo(null);
                }}
                className="px-4 py-1.5 text-xs font-semibold rounded-lg bg-ethiopian-gold text-black hover:bg-ethiopian-goldBright transition-colors"
              >
                Open Scripture Reader
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
