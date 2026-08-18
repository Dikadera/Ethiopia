import React, { useState } from 'react';
import { Bookmark } from '../types/bible';
import { BookmarkIcon, Star, Trash2, Download, Filter } from 'lucide-react';

interface StudyNotesProps {
  bookmarks: Bookmark[];
  onRemoveBookmark: (id: string) => void;
  onSelectBookmark: (b: Bookmark) => void;
}

export const StudyNotes: React.FC<StudyNotesProps> = ({ bookmarks, onRemoveBookmark, onSelectBookmark }) => {
  const [filterColor, setFilterColor] = useState<string>('all');
  const [exportMsg, setExportMsg] = useState(false);

  const filtered = filterColor === 'all' ? bookmarks : bookmarks.filter(b => b.color === filterColor);

  const colorBg: Record<string, string> = {
    gold: 'bg-yellow-500/15 border-yellow-500/50 text-yellow-700 dark:text-yellow-300',
    crimson: 'bg-red-600/15 border-red-600/50 text-red-700 dark:text-red-300',
    indigo: 'bg-indigo-500/15 border-indigo-500/50 text-indigo-700 dark:text-indigo-300',
    emerald: 'bg-emerald-500/15 border-emerald-500/50 text-emerald-700 dark:text-emerald-300',
  };

  const colorDot: Record<string, string> = {
    gold: 'bg-yellow-400',
    crimson: 'bg-red-600',
    indigo: 'bg-indigo-500',
    emerald: 'bg-emerald-500',
  };

  const handleExport = () => {
    const exportData = JSON.stringify(bookmarks, null, 2);
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ethiopian_bible_study_notes.json';
    a.click();
    URL.revokeObjectURL(url);
    setExportMsg(true);
    setTimeout(() => setExportMsg(false), 2000);
  };

  return (
    <div className="space-y-8 pb-12">

      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-parchment-900 via-ethiopian-obsidian to-ethiopian-indigo p-6 sm:p-10 border border-ethiopian-gold/40 shadow-2xl text-parchment-100">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ethiopian-gold/20 border border-ethiopian-gold/50 text-ethiopian-gold text-xs font-semibold">
            <BookmarkIcon className="w-3.5 h-3.5" />
            Personal Scripture Study Journal
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-manuscript text-transparent bg-clip-text bg-gradient-to-r from-ethiopian-goldBright to-parchment-200">
            Bookmarks & Study Notes
          </h2>
          <p className="text-sm text-parchment-300 max-w-2xl">
            Your personally bookmarked verses from the Ethiopian 81-book canon. Bookmark verses while reading, add notes, and export for offline study.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Color Filter Chips */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-ethiopian-gold" />
          <div className="flex gap-2">
            <button
              onClick={() => setFilterColor('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${filterColor === 'all' ? 'bg-ethiopian-gold text-black border-ethiopian-gold' : 'border-ethiopian-gold/30 text-parchment-700 dark:text-parchment-300'}`}
            >
              All ({bookmarks.length})
            </button>
            {['gold', 'crimson', 'indigo', 'emerald'].map(color => (
              <button
                key={color}
                onClick={() => setFilterColor(color)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                  filterColor === color ? 'border-current' : 'border-transparent'
                } ${colorBg[color]}`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${colorDot[color]}`}></span>
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleExport}
          disabled={bookmarks.length === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-ethiopian-gold/20 border border-ethiopian-gold/50 text-ethiopian-gold text-xs font-semibold hover:bg-ethiopian-gold hover:text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          <Download className="w-4 h-4" />
          {exportMsg ? '✓ Exported!' : 'Export Notes'}
        </button>
      </div>

      {/* Bookmarks List or Empty State */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 space-y-5">
          <div className="w-20 h-20 rounded-full bg-ethiopian-gold/15 text-ethiopian-gold border border-ethiopian-gold/40 mx-auto flex items-center justify-center">
            <BookmarkIcon className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-manuscript text-parchment-900 dark:text-parchment-100">
              {filterColor === 'all' ? 'No Bookmarks Yet' : `No ${filterColor} highlights`}
            </h3>
            <p className="text-sm text-parchment-600 dark:text-parchment-400 max-w-md mx-auto">
              {filterColor === 'all'
                ? 'Head to the Scripture Reader and bookmark verses as you study the 81 books.'
                : `You have no ${filterColor}-highlighted verses. Use the highlighter in the reader.`}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(bm => (
            <div
              key={bm.id}
              className={`group relative rounded-2xl p-5 border-2 transition-all ${colorBg[bm.color]} shadow-sm hover:shadow-md`}
            >
              {/* Actions */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => onSelectBookmark(bm)}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-white/80 dark:bg-black/50 hover:bg-ethiopian-gold hover:text-black transition-all"
                >
                  Read
                </button>
                <button
                  onClick={() => onRemoveBookmark(bm.id)}
                  className="p-1.5 rounded-lg bg-white/80 dark:bg-black/50 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                  title="Remove Bookmark"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Reference Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-3 h-3 rounded-full ${colorDot[bm.color]}`}></span>
                <span className="text-xs font-bold font-mono opacity-80">
                  {bm.bookId.replace(/_/g, ' ')} {bm.chapter}:{bm.verse}
                </span>
                <span className="text-[10px] opacity-60">{bm.createdAt}</span>
              </div>

              {/* English Text */}
              <p className="text-sm leading-relaxed font-medium pr-20">
                "{bm.textEnglish}"
              </p>

              {/* Amharic Text */}
              {bm.textAmharic && (
                <p className="font-geez text-xs mt-2 opacity-80">
                  {bm.textAmharic}
                </p>
              )}

              {/* Notes */}
              {bm.note && (
                <div className="mt-3 border-t border-current/20 pt-2">
                  <p className="text-xs italic opacity-70">📝 {bm.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
