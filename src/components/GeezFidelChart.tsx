import React, { useState } from 'react';
import { GEEZ_FIDEL_SERIES, GEEZ_VOWEL_ORDERS, GEEZ_SAMPLE_CHARACTERS } from '../data/geezSyllabary';
import { Volume2, Info, Star } from 'lucide-react';

export const GeezFidelChart: React.FC = () => {
  const [selectedFamily, setSelectedFamily] = useState<string | null>('Hoya');
  const [selectedChar, setSelectedChar] = useState<string | null>(null);

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'am-ET';
      utt.rate = 0.7;
      window.speechSynthesis.speak(utt);
    }
  };

  const familyChars = selectedFamily
    ? GEEZ_SAMPLE_CHARACTERS.filter(c => c.family === selectedFamily)
    : GEEZ_SAMPLE_CHARACTERS;

  const selectedCharData = selectedChar
    ? GEEZ_SAMPLE_CHARACTERS.find(c => c.geez === selectedChar)
    : null;

  return (
    <div className="space-y-8 pb-12">

      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-ethiopian-indigo via-parchment-900 to-ethiopian-obsidian p-6 sm:p-10 border border-ethiopian-gold/40 shadow-2xl text-parchment-100">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ethiopian-gold/20 border border-ethiopian-gold/50 text-ethiopian-gold text-xs font-semibold">
            <span className="font-geez text-base font-bold">ሀ</span>
            The Ancient Ge'ez Fidel Alphabet (ፊደለ ግዕዝ)
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold font-manuscript text-transparent bg-clip-text bg-gradient-to-r from-ethiopian-goldBright to-parchment-200">
            Ge'ez Fidel Explorer — The Sacred Script of Ethiopia
          </h2>

          <p className="text-sm text-parchment-300 leading-relaxed">
            The Ge'ez (Ethiopic) script is one of the oldest alphabets still in daily use. Each character family (ቤተሰብ) has <strong className="text-ethiopian-gold">7 vowel orders</strong> yielding 231+ unique syllabic characters. It is used to write the canonical Ge'ez Bible, liturgical chants (Zema ዜማ), and Amharic today.
          </p>

          <div className="flex flex-wrap gap-4 text-xs pt-2">
            {GEEZ_VOWEL_ORDERS.map(v => (
              <div key={v.order} className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-ethiopian-gold/30">
                <span className="font-bold text-ethiopian-gold">{v.order}.</span>
                <span className="text-parchment-200">{v.name}</span>
                <span className="text-parchment-400 italic">({v.sound})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Character Family Selector */}
      <div>
        <h3 className="text-sm font-bold text-ethiopian-gold mb-3 uppercase tracking-widest font-manuscript">
          Select Character Family (ቤተሰብ)
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedFamily(null)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              !selectedFamily ? 'bg-ethiopian-gold text-black border-ethiopian-gold' : 'bg-parchment-50/80 dark:bg-ethiopian-obsidianCard/80 border-ethiopian-gold/30 text-parchment-700 dark:text-parchment-300'
            }`}
          >
            All Characters
          </button>

          {GEEZ_FIDEL_SERIES.map(fam => (
            <button
              key={fam.family}
              onClick={() => setSelectedFamily(fam.family)}
              className={`px-3 py-2 rounded-xl text-sm font-bold font-geez border transition-all ${
                selectedFamily === fam.family
                  ? 'bg-ethiopian-gold text-black border-ethiopian-gold shadow-md scale-110'
                  : 'bg-parchment-50/80 dark:bg-ethiopian-obsidianCard/80 border-ethiopian-gold/30 text-ethiopian-gold hover:border-ethiopian-gold hover:scale-105'
              }`}
              title={`${fam.nameEnglish} — "${fam.meaning}"`}
            >
              {fam.base}
            </button>
          ))}
        </div>
      </div>

      {/* Main Character Display Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {familyChars.map(char => (
          <button
            key={char.geez}
            onClick={() => setSelectedChar(char.geez === selectedChar ? null : char.geez)}
            className={`group relative p-4 rounded-2xl border-2 flex flex-col items-center gap-1 transition-all duration-200 ${
              selectedChar === char.geez
                ? 'bg-ethiopian-gold text-black border-ethiopian-gold shadow-lg scale-105'
                : 'bg-parchment-50/90 dark:bg-ethiopian-obsidianCard/90 border-ethiopian-gold/30 hover:border-ethiopian-gold hover:scale-105'
            }`}
          >
            {/* Order badge */}
            <span className={`absolute top-1.5 right-1.5 text-[9px] font-mono font-bold ${selectedChar === char.geez ? 'text-black/60' : 'text-ethiopian-gold/60'}`}>
              {char.vowelOrder}ᵗʰ
            </span>

            {/* The Ge'ez character */}
            <span className={`font-geez text-3xl font-bold ${selectedChar === char.geez ? 'text-black' : 'text-parchment-900 dark:text-parchment-50 group-hover:text-ethiopian-gold'} transition-colors`}>
              {char.geez}
            </span>

            {/* Transliteration */}
            <span className={`text-xs font-mono font-semibold ${selectedChar === char.geez ? 'text-black/70' : 'text-ethiopian-gold'}`}>
              {char.transliteration}
            </span>

            {/* Audio Button on hover */}
            <button
              onClick={(e) => { e.stopPropagation(); handleSpeak(char.geez); }}
              className={`opacity-0 group-hover:opacity-100 p-1 rounded-full transition-all ${selectedChar === char.geez ? 'bg-black/20 text-black' : 'bg-ethiopian-gold/20 text-ethiopian-gold'}`}
              title={`Pronounce ${char.name}`}
            >
              <Volume2 className="w-3 h-3" />
            </button>
          </button>
        ))}
      </div>

      {/* Selected Character Deep-Dive Panel */}
      {selectedCharData && (
        <div className="bg-gradient-to-br from-parchment-900 to-ethiopian-indigo border-2 border-ethiopian-gold rounded-2xl p-6 sm:p-8 text-parchment-100 shadow-xl space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <span className="font-geez text-7xl sm:text-9xl font-bold text-ethiopian-gold leading-none">
                {selectedCharData.geez}
              </span>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-manuscript">{selectedCharData.name}</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-ethiopian-gold font-semibold">Family:</span> {selectedCharData.family}</p>
                  <p><span className="text-ethiopian-gold font-semibold">Transliteration:</span> <span className="font-mono">{selectedCharData.transliteration}</span></p>
                  <p><span className="text-ethiopian-gold font-semibold">Phonetics:</span> {selectedCharData.phonetics}</p>
                  <p><span className="text-ethiopian-gold font-semibold">Vowel Order:</span> {selectedCharData.vowelOrder} ({GEEZ_VOWEL_ORDERS[selectedCharData.vowelOrder - 1]?.name})</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSpeak(selectedCharData.geez)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ethiopian-gold text-black font-bold text-sm hover:bg-ethiopian-goldBright transition-colors"
            >
              <Volume2 className="w-4 h-4" />
              Pronounce
            </button>
          </div>

          {/* Example Biblical Word */}
          <div className="bg-black/30 rounded-xl p-4 space-y-2 border border-ethiopian-gold/30">
            <h4 className="text-xs uppercase tracking-widest font-bold text-ethiopian-gold flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-ethiopian-gold" />
              Biblical Word Example
            </h4>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleSpeak(selectedCharData.exampleWordGeez)}
                className="font-geez text-3xl font-bold text-ethiopian-gold hover:text-ethiopian-goldBright transition-colors"
                title="Click to hear pronunciation"
              >
                {selectedCharData.exampleWordGeez.split(' ')[0]}
              </button>
              <div>
                <p className="text-parchment-200 text-sm">{selectedCharData.exampleWordGeez}</p>
                <p className="text-parchment-400 text-xs">{selectedCharData.exampleWordEnglish}</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-parchment-400 flex items-center gap-1">
            <Info className="w-3.5 h-3.5" />
            Click any character to explore it. Click the speaker icon to hear the pronunciation.
          </p>
        </div>
      )}

      {/* Vowel Orders Reference Table */}
      <div>
        <h3 className="text-sm font-bold text-ethiopian-gold mb-4 uppercase tracking-widest font-manuscript">
          The Seven Vowel Orders (ሰባቱ ትርአስ)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-ethiopian-gold/20 border-b border-ethiopian-gold/40">
                <th className="text-left p-3 font-bold font-manuscript text-ethiopian-gold">Order</th>
                <th className="text-left p-3 font-bold font-manuscript text-ethiopian-gold">Ge'ez Name</th>
                <th className="text-left p-3 font-bold font-manuscript text-ethiopian-gold">Vowel</th>
                <th className="text-left p-3 font-bold font-manuscript text-ethiopian-gold">Pronunciation Guide</th>
              </tr>
            </thead>
            <tbody>
              {GEEZ_VOWEL_ORDERS.map((v, i) => (
                <tr key={v.order} className={`border-b border-ethiopian-gold/20 ${i % 2 === 0 ? 'bg-parchment-50/30 dark:bg-black/10' : ''}`}>
                  <td className="p-3 font-bold text-ethiopian-gold">{v.order}</td>
                  <td className="p-3 font-geez font-bold text-parchment-800 dark:text-parchment-200">{v.name}</td>
                  <td className="p-3 font-mono font-bold text-ethiopian-gold">{v.vowel}</td>
                  <td className="p-3 text-parchment-600 dark:text-parchment-400 italic">{v.sound}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
