import React, { useState } from 'react';
import { ILLUMINATED_ARTWORKS } from '../data/illuminatedArtData';
import { IlluminatedArt } from '../types/bible';
import { X, MapPin, Calendar, Image as ImageIcon } from 'lucide-react';

export const ManuscriptGallery: React.FC = () => {
  const [selected, setSelected] = useState<IlluminatedArt | null>(null);

  const categoryColors: Record<string, string> = {
    evangelist: 'bg-ethiopian-gold/20 text-ethiopian-gold border-ethiopian-gold/50',
    manuscript_page: 'bg-crimson-gradient text-red-200 border-red-700/50',
    cross: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/50',
    revelation: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50',
    old_testament: 'bg-amber-600/20 text-amber-300 border-amber-500/50',
  };

  const categoryLabels: Record<string, string> = {
    evangelist: 'Evangelist Icon',
    manuscript_page: 'Manuscript Page',
    cross: 'Sacred Cross',
    revelation: 'Apocalyptic Vision',
    old_testament: 'Old Testament',
  };

  return (
    <div className="space-y-8 pb-12">

      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-parchment-900 via-ethiopian-obsidian to-ethiopian-indigo p-6 sm:p-10 border border-ethiopian-gold/40 shadow-2xl text-parchment-100">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ethiopian-gold/20 border border-ethiopian-gold/50 text-ethiopian-gold text-xs font-semibold">
            <ImageIcon className="w-3.5 h-3.5" />
            Ethiopian Orthodox Illuminated Manuscripts
          </div>
          <h2 className="text-3xl font-extrabold font-manuscript text-transparent bg-clip-text bg-gradient-to-r from-ethiopian-goldBright to-parchment-200">
            Illuminated Manuscript Gallery
          </h2>
          <p className="text-sm text-parchment-300 max-w-2xl leading-relaxed">
            Explore iconic artwork from Ethiopian Orthodox monasteries — from the <strong className="text-ethiopian-gold">Garima Gospels (world's oldest illustrated Christian codex)</strong> to the vibrant Gondarine frescoes. These sacred paintings unite Ge'ez scripture with ancient visual devotion.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {ILLUMINATED_ARTWORKS.map((art) => (
          <div
            key={art.id}
            onClick={() => setSelected(art)}
            className="group cursor-pointer illuminated-card rounded-2xl overflow-hidden border border-ethiopian-gold/30 hover:border-ethiopian-gold shadow-md hover:shadow-2xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-64 sm:h-80 overflow-hidden bg-ethiopian-obsidianCard">
              <img
                src={art.imageUrl}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'><rect fill='%23121214' width='400' height='300'/><text x='50%' y='45%' fill='%23D4AF37' font-size='48' text-anchor='middle' dominant-baseline='middle'>☩</text><text x='50%' y='65%' fill='%23C2A769' font-size='14' text-anchor='middle' dominant-baseline='middle'>${art.title}</text></svg>`;
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-parchment-200 font-geez font-bold">{art.geezTitle}</p>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wide ${categoryColors[art.category] || ''}`}>
                  {categoryLabels[art.category]}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 space-y-2 bg-parchment-50 dark:bg-ethiopian-obsidianCard">
              <h3 className="text-base font-bold font-manuscript text-parchment-900 dark:text-parchment-50 group-hover:text-ethiopian-gold transition-colors">
                {art.title}
              </h3>

              <div className="flex items-center gap-4 text-xs text-parchment-500 dark:text-parchment-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-ethiopian-gold" />
                  {art.origin}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-ethiopian-gold" />
                  {art.century}
                </span>
              </div>

              <p className="text-xs text-parchment-600 dark:text-parchment-400 line-clamp-2">
                {art.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-parchment-100 dark:bg-ethiopian-obsidianCard border-2 border-ethiopian-gold rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selected.imageUrl}
                alt={selected.title}
                className="w-full max-h-[60vh] object-contain bg-ethiopian-obsidian"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect fill='%23121214' width='800' height='500'/><text x='50%' y='50%' fill='%23D4AF37' font-size='80' text-anchor='middle' dominant-baseline='middle'>☩</text></svg>`;
                }}
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-ethiopian-gold hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-3">
              <div>
                <h3 className="text-xl font-bold font-manuscript text-parchment-900 dark:text-parchment-50">{selected.title}</h3>
                <p className="text-sm font-geez font-bold text-ethiopian-gold">{selected.geezTitle}</p>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-parchment-500 dark:text-parchment-400">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-ethiopian-gold" />{selected.origin}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-ethiopian-gold" />{selected.century}</span>
              </div>

              <p className="text-sm text-parchment-700 dark:text-parchment-300 leading-relaxed">{selected.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
