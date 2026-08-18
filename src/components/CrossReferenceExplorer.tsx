import React, { useState } from 'react';
import { CROSS_REFERENCE_CONNECTIONS } from '../data/crossReferences';
import { CrossReferenceConnection } from '../types/bible';
import { GitMerge, Star, ChevronDown, ChevronUp, ArrowRight, BookOpen } from 'lucide-react';

export const CrossReferenceExplorer: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>('enoch-jude-1');
  const [filter, setFilter] = useState<string>('all');

  const typeLabels: Record<string, string> = {
    direct_quote: 'Direct NT Quotation',
    messianic_prophecy: 'Messianic Prophecy',
    doctrinal_parallel: 'Doctrinal Parallel',
    historical_continuation: 'Historical Continuation',
  };

  const typeColors: Record<string, string> = {
    direct_quote: 'bg-ethiopian-gold/20 text-ethiopian-gold border-ethiopian-gold/50',
    messianic_prophecy: 'bg-red-700/20 text-red-400 border-red-600/50',
    doctrinal_parallel: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50',
    historical_continuation: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50',
  };

  const filtered = filter === 'all'
    ? CROSS_REFERENCE_CONNECTIONS
    : CROSS_REFERENCE_CONNECTIONS.filter(c => c.type === filter);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ethiopian-obsidian via-ethiopian-indigo to-ethiopian-obsidianCard p-6 sm:p-10 border border-ethiopian-gold/40 shadow-2xl">
        <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full border-4 border-ethiopian-gold/10 opacity-30"></div>
        <div className="absolute right-12 top-12 w-24 h-24 rounded-full border-2 border-ethiopian-gold/10 opacity-20"></div>

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ethiopian-gold/20 border border-ethiopian-gold/50 text-ethiopian-gold text-xs font-semibold">
            <GitMerge className="w-3.5 h-3.5" />
            Ethiopian Canon Cross-Reference Explorer
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-manuscript text-transparent bg-clip-text bg-gradient-to-r from-ethiopian-goldBright to-parchment-200">
            1 Enoch, Jubilees & the New Testament
          </h2>

          <p className="text-sm text-parchment-300 max-w-2xl leading-relaxed">
            Discover how the books unique to the Ethiopian Canon are <strong className="text-ethiopian-gold">quoted, echoed, and fulfilled</strong> throughout the Old and New Testaments. The Epistle of Jude quotes 1 Enoch directly. Jesus's title "Son of Man" echoes 1 Enoch's heavenly Messiah. Jubilees' Eden is the original Holy of Holies.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {['all', 'direct_quote', 'messianic_prophecy', 'doctrinal_parallel', 'historical_continuation'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              filter === type
                ? 'bg-ethiopian-gold text-black border-ethiopian-gold scale-105'
                : 'bg-parchment-50/80 dark:bg-ethiopian-obsidianCard/90 border-ethiopian-gold/30 text-parchment-700 dark:text-parchment-300 hover:border-ethiopian-gold/60'
            }`}
          >
            {type === 'all' ? '✦ All Connections' : typeLabels[type]}
          </button>
        ))}
      </div>

      {/* Connection Cards */}
      <div className="space-y-4">
        {filtered.map(conn => {
          const isOpen = expanded === conn.id;
          return (
            <div
              key={conn.id}
              className="illuminated-card rounded-2xl border border-ethiopian-gold/30 overflow-hidden bg-parchment-50/90 dark:bg-ethiopian-obsidianCard/90 shadow-md transition-all"
            >
              {/* Card Header */}
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-ethiopian-gold/5 transition-colors"
                onClick={() => setExpanded(isOpen ? null : conn.id)}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-ethiopian-gold/15 border border-ethiopian-gold/40 text-ethiopian-gold flex items-center justify-center shrink-0">
                    <GitMerge className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold font-manuscript text-parchment-900 dark:text-parchment-50 truncate">
                      {conn.relationTitle}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap mt-1">
                      <span className="text-xs text-parchment-600 dark:text-parchment-400 font-semibold">
                        {conn.sourceBook} {conn.sourceChapter}:{conn.sourceVerse}
                      </span>
                      <ArrowRight className="w-3 h-3 text-ethiopian-gold" />
                      <span className="text-xs text-parchment-600 dark:text-parchment-400 font-semibold">
                        {conn.targetBook} {conn.targetChapter}:{conn.targetVerse}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wide ${typeColors[conn.type]}`}>
                        {typeLabels[conn.type]}
                      </span>
                    </div>
                  </div>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-ethiopian-gold shrink-0" /> : <ChevronDown className="w-5 h-5 text-ethiopian-gold shrink-0" />}
              </button>

              {/* Expanded Detail */}
              {isOpen && (
                <div className="px-5 pb-6 space-y-5 border-t border-ethiopian-gold/20 pt-4">
                  
                  {/* Side by Side Scripture Texts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Source */}
                    <div className="bg-ethiopian-gold/10 border border-ethiopian-gold/30 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-ethiopian-gold fill-ethiopian-gold" />
                        <span className="text-xs font-bold text-ethiopian-gold uppercase tracking-wide">
                          {conn.sourceBook} {conn.sourceChapter}:{conn.sourceVerse}
                        </span>
                      </div>
                      <blockquote className="text-sm text-parchment-800 dark:text-parchment-200 italic leading-relaxed border-l-2 border-ethiopian-gold pl-3">
                        "{conn.sourceText}"
                      </blockquote>
                    </div>

                    {/* Target */}
                    <div className="bg-parchment-200/50 dark:bg-black/20 border border-ethiopian-gold/20 rounded-xl p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-parchment-500 dark:text-parchment-400" />
                        <span className="text-xs font-bold text-parchment-700 dark:text-parchment-300 uppercase tracking-wide">
                          {conn.targetBook} {conn.targetChapter}:{conn.targetVerse}
                        </span>
                      </div>
                      <blockquote className="text-sm text-parchment-800 dark:text-parchment-200 italic leading-relaxed border-l-2 border-parchment-400 dark:border-parchment-600 pl-3">
                        "{conn.targetText}"
                      </blockquote>
                    </div>
                  </div>

                  {/* Theological Explanation */}
                  <div className="bg-indigo-500/5 dark:bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-4 space-y-2">
                    <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-300 font-manuscript">
                      Theological Significance
                    </h4>
                    <p className="text-sm text-parchment-800 dark:text-parchment-200 leading-relaxed">
                      {conn.explanation}
                    </p>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
