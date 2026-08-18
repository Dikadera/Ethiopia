import React, { useState, useEffect } from 'react';
import { Header, PrimaryPage, BibleTab } from './components/Header';
import { LibraryHome } from './components/LibraryHome';
import { CanonExplorer } from './components/CanonExplorer';
import { ScriptureReader } from './components/ScriptureReader';
import { CrossReferenceExplorer } from './components/CrossReferenceExplorer';
import { ManuscriptGallery } from './components/ManuscriptGallery';
import { GeezFidelChart } from './components/GeezFidelChart';
import { StudyNotes } from './components/StudyNotes';
import { ApocryphaReader } from './components/ApocryphaReader';

import { Book, Bookmark } from './types/bible';
import { ETHIOPIAN_BOOKS } from './data/ethiopianCanonData';
import { INFANCY_GOSPEL_OF_THOMAS } from './data/infancyGospelThomas';
import { PROTOEVANGELIUM_OF_JAMES } from './data/protoevangeliumJames';
import { GOSPEL_OF_MARY_MAGDALENE } from './data/gospelMaryMagdalene';

type Theme = 'parchment' | 'obsidian' | 'royal';
type LangMode = 'english' | 'amharic' | 'dual';

const THEME_CLASSES: Record<Theme, string> = {
  parchment: 'bg-parchment-100 text-parchment-900',
  obsidian: 'bg-ethiopian-obsidian text-parchment-100 dark',
  royal: 'bg-[#140A1F] text-[#F3EAFE] dark',
};

function App() {
  const [primaryPage, setPrimaryPage] = useState<PrimaryPage>('library');
  const [activeTab, setActiveTab] = useState<BibleTab>('canon');
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
    setPrimaryPage('ethiopian-bible');
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
      setPrimaryPage('ethiopian-bible');
      setActiveTab('reader');
    }
  };

  const handleSelectLibraryPage = (pageId: 'ethiopian-bible' | 'infancy-thomas' | 'proto-james' | 'gospel-mary') => {
    setPrimaryPage(pageId);
    if (pageId === 'ethiopian-bible') {
      setActiveTab('canon');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${THEME_CLASSES[theme]}`}>
      <Header
        primaryPage={primaryPage}
        setPrimaryPage={setPrimaryPage}
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
        {/* 1. Library Home Portal */}
        {primaryPage === 'library' && (
          <LibraryHome onSelectPage={handleSelectLibraryPage} />
        )}

        {/* 2. Ethiopian Bible Main Page */}
        {primaryPage === 'ethiopian-bible' && (
          <>
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
          </>
        )}

        {/* 3. Infancy Gospel of Thomas Page */}
        {primaryPage === 'infancy-thomas' && (
          <ApocryphaReader
            book={INFANCY_GOSPEL_OF_THOMAS}
            onBackToLibrary={() => setPrimaryPage('library')}
          />
        )}

        {/* 4. Protoevangelium of James Page */}
        {primaryPage === 'proto-james' && (
          <ApocryphaReader
            book={PROTOEVANGELIUM_OF_JAMES}
            onBackToLibrary={() => setPrimaryPage('library')}
          />
        )}

        {/* 5. Gospel of Mary Magdalene Page */}
        {primaryPage === 'gospel-mary' && (
          <ApocryphaReader
            book={GOSPEL_OF_MARY_MAGDALENE}
            onBackToLibrary={() => setPrimaryPage('library')}
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

          <p className="text-xs text-parchment-500 dark:text-parchment-500 max-w-3xl mx-auto">
            The Ethiopian Bible & Sacred Texts Library — 100% Free & Open Access to All. Exploring the 81-book canon of the Ethiopian Orthodox Tewahedo Church, the Infancy Gospel of Thomas, Protoevangelium of James, and Gospel of Mary Magdalene.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-parchment-500">
            <span>🇪🇹 Ethiopian Orthodox Tewahedo Church</span>
            <span className="text-ethiopian-gold">•</span>
            <span>📜 Garima Gospels & Apocrypha Manuscripts</span>
            <span className="text-ethiopian-gold">•</span>
            <span>🔓 Free & Open Access</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
