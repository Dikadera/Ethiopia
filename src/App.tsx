import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CanonExplorer } from './components/CanonExplorer';
import { ScriptureReader } from './components/ScriptureReader';
import { CrossReferenceExplorer } from './components/CrossReferenceExplorer';
import { ManuscriptGallery } from './components/ManuscriptGallery';
import { GeezFidelChart } from './components/GeezFidelChart';
import { StudyNotes } from './components/StudyNotes';
import { Book, Bookmark } from './types/bible';
import { ETHIOPIAN_BOOKS } from './data/ethiopianCanonData';

type Tab = 'canon' | 'reader' | 'crossref' | 'gallery' | 'fidel' | 'notes';
type Theme = 'parchment' | 'obsidian' | 'royal';
type LangMode = 'english' | 'amharic' | 'dual';

const THEME_CLASSES: Record<Theme, string> = {
  parchment: 'bg-parchment-100 text-parchment-900',
  obsidian: 'bg-ethiopian-obsidian text-parchment-100 dark',
  royal: 'bg-[#140A1F] text-[#F3EAFE] dark',
};

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('canon');
  const [theme, setTheme] = useState<Theme>('obsidian');
  const [languageMode, setLanguageMode] = useState<LangMode>('dual');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book>(ETHIOPIAN_BOOKS[0]);
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    try {
      const stored = localStorage.getItem('eth_bible_bookmarks');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('eth_bible_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Apply theme class to body
  useEffect(() => {
    document.body.className = `min-h-screen antialiased font-sans transition-colors duration-500 ${THEME_CLASSES[theme]}`;
    if (theme !== 'parchment') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
    setActiveTab('reader');
  };

  const handleAddBookmark = (bm: Bookmark) => {
    setBookmarks(prev => {
      const idx = prev.findIndex(b => b.id === bm.id);
      if (idx >= 0) return prev; // already bookmarked
      return [bm, ...prev];
    });
  };

  const handleRemoveBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  };

  const handleSelectBookmark = (bm: Bookmark) => {
    const book = ETHIOPIAN_BOOKS.find(b => b.id === bm.bookId);
    if (book) {
      setSelectedBook(book);
      setActiveTab('reader');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${THEME_CLASSES[theme]}`}>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        setTheme={setTheme}
        languageMode={languageMode}
        setLanguageMode={setLanguageMode}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'canon' && (
          <CanonExplorer
            onSelectBook={handleSelectBook}
            searchQuery={searchQuery}
          />
        )}

        {activeTab === 'reader' && (
          <ScriptureReader
            selectedBook={selectedBook}
            onSelectBook={handleSelectBook}
            languageMode={languageMode}
            onAddBookmark={handleAddBookmark}
            bookmarks={bookmarks}
          />
        )}

        {activeTab === 'crossref' && (
          <CrossReferenceExplorer />
        )}

        {activeTab === 'gallery' && (
          <ManuscriptGallery />
        )}

        {activeTab === 'fidel' && (
          <GeezFidelChart />
        )}

        {activeTab === 'notes' && (
          <StudyNotes
            bookmarks={bookmarks}
            onRemoveBookmark={handleRemoveBookmark}
            onSelectBookmark={handleSelectBookmark}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-ethiopian-gold/20 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-ethiopian-gold/40"></div>
            <span className="text-2xl text-ethiopian-gold">☩</span>
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-ethiopian-gold/40"></div>
          </div>

          <p className="font-geez text-ethiopian-gold font-bold text-lg">
            ውዳሴ ለእግዚአብሔር ዘለዓለም — Praise be to God Forever
          </p>

          <p className="text-xs text-parchment-500 dark:text-parchment-500 max-w-2xl mx-auto">
            The Ethiopian Bible Web App — Exploring the 81-book canon of the Ethiopian Orthodox Tewahedo Church. Scripture texts are public domain translations and Ge'ez manuscripts. Built with reverence for the oldest complete Christian biblical tradition.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-parchment-500">
            <span>🇪🇹 Ethiopian Orthodox Tewahedo Church</span>
            <span className="text-ethiopian-gold">•</span>
            <span>📜 Garima Gospels (c. 390–650 AD)</span>
            <span className="text-ethiopian-gold">•</span>
            <span>🕍 Lalibela, Aksum, Gondar</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
