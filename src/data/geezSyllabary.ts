import { GeezCharacter } from '../types/bible';

export const GEEZ_FIDEL_SERIES = [
  { family: 'Hoya', base: 'ሀ', nameEnglish: 'Hoya', meaning: 'God / Life' },
  { family: 'Lawi', base: 'ለ', nameEnglish: 'Lawi', meaning: 'Praise / Night' },
  { family: 'Hawt', base: 'ሐ', nameEnglish: 'Hawt', meaning: 'Life / Holy' },
  { family: 'May', base: 'መ', nameEnglish: 'May', meaning: 'Water / Mary' },
  { family: 'Sawt', base: 'ሠ', nameEnglish: 'Sawt', meaning: 'Trinity / Glory' },
  { family: 'Re\'es', base: 'ረ', nameEnglish: 'Re\'es', meaning: 'Head / Shephard' },
  { family: 'Sat', base: 'ሰ', nameEnglish: 'Sat', meaning: 'Peace / Heaven' },
  { family: 'Qaf', base: 'ቀ', nameEnglish: 'Qaf', meaning: 'Holy / Covenant' },
  { family: 'Bet', base: 'በ', nameEnglish: 'Bet', meaning: 'House / Temple' },
  { family: 'Taw', base: 'ተ', nameEnglish: 'Taw', meaning: 'Cross / Law' },
  { family: 'Hharm', base: 'ኀ', nameEnglish: 'Hharm', meaning: 'Strength' },
  { family: 'Nahas', base: 'ነ', nameEnglish: 'Nahas', meaning: 'Prophet / Spirit' },
  { family: 'Alf', base: 'አ', nameEnglish: 'Alf', meaning: 'God / Father' },
  { family: 'Kaf', base: 'ከ', nameEnglish: 'Kaf', meaning: 'King / Crown' },
  { family: 'Waw', base: 'ወ', nameEnglish: 'Waw', meaning: 'Gospel / Light' },
  { family: 'Ayin', base: 'ዐ', nameEnglish: 'Ayin', meaning: 'Eye / Mystery' },
  { family: 'Yaman', base: 'የ', nameEnglish: 'Yaman', meaning: 'Right Hand / Salvation' },
  { family: 'Dant', base: 'ደ', nameEnglish: 'Dant', meaning: 'David / Judge' },
  { family: 'Geml', base: 'ገ', nameEnglish: 'Geml', meaning: 'Grace / Garden' },
  { family: 'Tait', base: 'ጠ', nameEnglish: 'Tait', meaning: 'Wisdom / Purity' },
  { family: 'Pait', base: 'ጰ', nameEnglish: 'Pait', meaning: 'Bishop / Sacred' },
  { family: 'Sade', base: 'ጸ', nameEnglish: 'Sade', meaning: 'Righteousness (Tsedeq)' },
  { family: 'Sappa', base: 'ፀ', nameEnglish: 'Sappa', meaning: 'Sun / Glory' },
  { family: 'Af', base: 'ፈ', nameEnglish: 'Af', meaning: 'Fruit / Gospel' },
  { family: 'Psa', base: 'ፐ', nameEnglish: 'Psa', meaning: 'Psalms / Praise' }
];

export const GEEZ_VOWEL_ORDERS = [
  { order: 1, name: 'Ge\'ez (ግዕዝ)', vowel: 'ä', sound: 'ha as in father (short)' },
  { order: 2, name: 'Ka\'eb (ካዕብ)', vowel: 'u', sound: 'hoo as in boot' },
  { order: 3, name: 'Sales (ሣልስ)', vowel: 'i', sound: 'hee as in see' },
  { order: 4, name: 'Rabe\'e (ራብዕ)', vowel: 'a', sound: 'haa as in father (long)' },
  { order: 5, name: 'Hames (ኃምስ)', vowel: 'e', sound: 'hay as in day' },
  { order: 6, name: 'Sades (ሳድስ)', vowel: 'ə', sound: 'h\' as in rhythm' },
  { order: 7, name: 'Sabe\'e (ሳብዕ)', vowel: 'o', sound: 'ho as in boat' }
];

export const GEEZ_SAMPLE_CHARACTERS: GeezCharacter[] = [
  // Hoya family
  { geez: 'ሀ', name: 'Hoya 1st', transliteration: 'Ha', phonetics: 'h-a', vowelOrder: 1, family: 'Hoya', exampleWordGeez: 'ሀገረ (Hagere)', exampleWordEnglish: 'City / Land' },
  { geez: 'ሁ', name: 'Hoya 2nd', transliteration: 'Hu', phonetics: 'h-oo', vowelOrder: 2, family: 'Hoya', exampleWordGeez: 'ሁሉ (Hulu)', exampleWordEnglish: 'All / Everything' },
  { geez: 'ሂ', name: 'Hoya 3rd', transliteration: 'Hi', phonetics: 'h-ee', vowelOrder: 3, family: 'Hoya', exampleWordGeez: 'ሂሩት (Hirut)', exampleWordEnglish: 'Virtue / Goodness' },
  { geez: 'ሃ', name: 'Hoya 4th', transliteration: 'Haa', phonetics: 'h-aaa', vowelOrder: 4, family: 'Hoya', exampleWordGeez: 'ሃይማኖት (Haymanot)', exampleWordEnglish: 'Faith / Religion' },
  { geez: 'ሄ', name: 'Hoya 5th', transliteration: 'He', phonetics: 'h-ay', vowelOrder: 5, family: 'Hoya', exampleWordGeez: 'ሄኖክ (Henok)', exampleWordEnglish: 'Enoch (Dedicated)' },
  { geez: 'ህ', name: 'Hoya 6th', transliteration: 'Hə', phonetics: 'h-ih', vowelOrder: 6, family: 'Hoya', exampleWordGeez: 'ህልውና (Hilwina)', exampleWordEnglish: 'Existence / Being' },
  { geez: 'ሆ', name: 'Hoya 7th', transliteration: 'Ho', phonetics: 'h-oh', vowelOrder: 7, family: 'Hoya', exampleWordGeez: 'ሆሣዕና (Hosanna)', exampleWordEnglish: 'Save us Lord' },

  // Bet family
  { geez: 'በ', name: 'Bet 1st', transliteration: 'Ba', phonetics: 'b-a', vowelOrder: 1, family: 'Bet', exampleWordGeez: 'በረከት (Bereket)', exampleWordEnglish: 'Blessing' },
  { geez: 'ቡ', name: 'Bet 2nd', transliteration: 'Bu', phonetics: 'b-oo', vowelOrder: 2, family: 'Bet', exampleWordGeez: 'ቡሩክ (Buruk)', exampleWordEnglish: 'Blessed' },
  { geez: 'ቢ', name: 'Bet 3rd', transliteration: 'Bi', phonetics: 'b-ee', vowelOrder: 3, family: 'Bet', exampleWordGeez: 'ቢታንያ (Betania)', exampleWordEnglish: 'Bethany' },
  { geez: 'ባ', name: 'Bet 4th', transliteration: 'Baa', phonetics: 'b-aaa', vowelOrder: 4, family: 'Bet', exampleWordGeez: 'ባሕር (Bahir)', exampleWordEnglish: 'Sea / Ocean' },
  { geez: 'ቤ', name: 'Bet 5th', transliteration: 'Be', phonetics: 'b-ay', vowelOrder: 5, family: 'Bet', exampleWordGeez: 'ቤተክርስቲያን (Bete-Kristiyan)', exampleWordEnglish: 'Church / House of Christ' },
  { geez: 'ብ', name: 'Bet 6th', transliteration: 'Bə', phonetics: 'b-ih', vowelOrder: 6, family: 'Bet', exampleWordGeez: 'ብሩህ (Biruh)', exampleWordEnglish: 'Bright / Luminous' },
  { geez: 'ቦ', name: 'Bet 7th', transliteration: 'Bo', phonetics: 'b-oh', vowelOrder: 7, family: 'Bet', exampleWordGeez: 'ቦአ (Boa)', exampleWordEnglish: 'He entered' },

  // Sade (Righteousness)
  { geez: 'ጸ', name: 'Sade 1st', transliteration: 'Tse', phonetics: 'ts-a', vowelOrder: 1, family: 'Sade', exampleWordGeez: 'ጸሎት (Tselot)', exampleWordEnglish: 'Prayer' },
  { geez: 'ጹ', name: 'Sade 2nd', transliteration: 'Tsu', phonetics: 'ts-oo', vowelOrder: 2, family: 'Sade', exampleWordGeez: 'ጹም (Tsum)', exampleWordEnglish: 'Fasting' },
  { geez: 'ጺ', name: 'Sade 3rd', transliteration: 'Tsi', phonetics: 'ts-ee', vowelOrder: 3, family: 'Sade', exampleWordGeez: 'ጽዮን (Tsiyon)', exampleWordEnglish: 'Zion' },
  { geez: 'ጻ', name: 'Sade 4th', transliteration: 'Tsaa', phonetics: 'ts-aaa', vowelOrder: 4, family: 'Sade', exampleWordGeez: 'ጻድቅ (Tsadik)', exampleWordEnglish: 'Righteous' },
  { geez: 'ጼ', name: 'Sade 5th', transliteration: 'Tse', phonetics: 'ts-ay', vowelOrder: 5, family: 'Sade', exampleWordGeez: 'ጼዴንያ (Tsedeniya)', exampleWordEnglish: 'Tsedeniya Monastery' },
  { geez: 'ጽ', name: 'Sade 6th', transliteration: 'Tsə', phonetics: 'ts-ih', vowelOrder: 6, family: 'Sade', exampleWordGeez: 'ጽድቅ (Tsidq)', exampleWordEnglish: 'Righteousness' },
  { geez: 'ጾ', name: 'Sade 7th', transliteration: 'Tso', phonetics: 'ts-oh', vowelOrder: 7, family: 'Sade', exampleWordGeez: 'ጾም (Tsom)', exampleWordEnglish: 'Holy Fast' },
];
