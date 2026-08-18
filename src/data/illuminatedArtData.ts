import { IlluminatedArt } from '../types/bible';

export const ILLUMINATED_ARTWORKS: IlluminatedArt[] = [
  {
    id: 'garima-gospels-matthew',
    title: 'Saint Matthew Evangelist — Abba Garima Codex',
    geezTitle: 'ቅዱስ ማቴዎስ ወንጌላዊ',
    century: '4th - 6th Century AD (c. 390 - 650 AD)',
    origin: 'Garima Monastery, Tigray, Ethiopia',
    description: 'The world\'s earliest surviving illuminated Christian manuscript codex. Features vibrant mineral pigments, arch frames, and gold leaf accents.',
    imageUrl: '/images/garima_matthew.png',
    category: 'evangelist'
  },
  {
    id: 'enoch-heavenly-ascent',
    title: 'The Heavenly Ascent of Henok & The Son of Man',
    geezTitle: 'ዕርገተ ሄኖክ ወራእየ ወልደ እጓለ እመሕያው',
    century: '14th Century AD',
    origin: 'Debre Damo Monastery, Tigray',
    description: 'Vivid Ethiopian Orthodox manuscript illumination portraying Enoch carried by angels before the Head of Days and the Son of Man.',
    imageUrl: '/images/enoch_ascent.png',
    category: 'manuscript_page'
  },
  {
    id: 'ethiopian-processional-cross',
    title: 'Royal Aksumite Gold Processional Cross',
    geezTitle: 'መስቀል ዘአክሱም ወለሊበላ',
    century: '12th Century AD',
    origin: 'Lalibela Rock-Hewn Churches',
    description: 'Intricate brass and gold filigree processional cross with Ge\'ez prayer inscriptions and symbolic Ethiopian knotwork lattice.',
    imageUrl: '/images/ethiopian_cross.png',
    category: 'cross'
  },
  {
    id: 'revelation-heavenly-throne',
    title: 'The 24 Heavenly Elders & Four Living Creatures',
    geezTitle: '፳ወ፬ ካህናተ ሰማይ ወ፬ እንስሳ',
    century: '17th Century AD (Gondarine Era)',
    origin: 'Debre Birhan Selassie, Gondar',
    description: 'Famous Gondarine style wall illumination depicting the heavenly liturgy of Revelation with large expressive eyes and vibrant red and gold robes.',
    imageUrl: '/images/revelation_gondar.png',
    category: 'revelation'
  }
];
