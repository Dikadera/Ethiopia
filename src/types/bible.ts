export type BookCategory = 
  | 'law'               // Torah / Orit
  | 'history'           // History / Taarikh
  | 'wisdom'            // Wisdom & Poetry / Tbeb
  | 'prophets'          // Major & Minor Prophets / Nabiyat
  | 'ethiopian_unique'   // Ethiopic Broader Canon (Enoch, Jubilees, Meqabyan, etc.)
  | 'gospels'           // Holy Gospels / Wangel
  | 'epistles'          // Epistles / Melikt
  | 'church_order';     // Sinodos, Didascalia, Book of Covenant

export type CanonTestament = 'ot' | 'nt' | 'ethiopian_extra';

export interface CrossRef {
  bookId: string;
  chapter: number;
  verse: number;
  note: string;
}

export interface Verse {
  number: number;
  textEnglish: string;
  textAmharic: string;
  textGeez: string;
  footnotes?: string[];
  crossRefs?: CrossRef[];
}

export interface Chapter {
  bookId: string;
  chapterNumber: number;
  verses: Verse[];
}

export interface Book {
  id: string;
  order: number;
  titleEnglish: string;
  titleAmharic: string;
  titleGeez: string;
  transliteration: string;
  category: BookCategory;
  testament: CanonTestament;
  totalChapters: number;
  summary: string;
  significance: string;
  author: string;
  historicalContext: string;
  isUniqueToEthiopicCanon: boolean;
  keyThemes: string[];
}

export interface Bookmark {
  id: string;
  bookId: string;
  chapter: number;
  verse: number;
  textEnglish: string;
  textAmharic?: string;
  note?: string;
  color: 'gold' | 'crimson' | 'indigo' | 'emerald';
  createdAt: string;
}

export interface GeezCharacter {
  geez: string;
  name: string;
  transliteration: string;
  phonetics: string;
  vowelOrder: number; // 1 to 7 (Ge'ez, Ka'eb, Sales, Rabe'e, Hames, Sades, Sabe'e)
  family: string; // Base character family e.g. "Hoya" (ሀ)
  exampleWordGeez: string;
  exampleWordEnglish: string;
}

export interface CrossReferenceConnection {
  id: string;
  sourceBook: string;
  sourceChapter: number;
  sourceVerse: string;
  sourceText: string;
  targetBook: string;
  targetChapter: number;
  targetVerse: string;
  targetText: string;
  relationTitle: string;
  explanation: string;
  type: 'direct_quote' | 'messianic_prophecy' | 'doctrinal_parallel' | 'historical_continuation';
}

export interface IlluminatedArt {
  id: string;
  title: string;
  geezTitle: string;
  century: string;
  origin: string;
  description: string;
  imageUrl: string;
  category: 'evangelist' | 'manuscript_page' | 'cross' | 'revelation' | 'old_testament';
}
