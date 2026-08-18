import { CrossReferenceConnection } from '../types/bible';

export const CROSS_REFERENCE_CONNECTIONS: CrossReferenceConnection[] = [
  {
    id: 'enoch-jude-1',
    sourceBook: '1 Enoch',
    sourceChapter: 1,
    sourceVerse: '9',
    sourceText: 'And behold! He cometh with ten thousands of His holy ones to execute judgment upon all, and to destroy all the ungodly...',
    targetBook: 'Epistle of Jude',
    targetChapter: 1,
    targetVerse: '14-15',
    targetText: 'And Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints...',
    relationTitle: 'Direct Apostolical Quotation of 1 Enoch in Jude',
    explanation: 'Saint Jude quotes 1 Enoch 1:9 word-for-word as inspired prophecy. This demonstrates that the early Apostolic Church regarded the Book of Enoch with immense spiritual authority.',
    type: 'direct_quote'
  },
  {
    id: 'enoch-gospels-sonofman',
    sourceBook: '1 Enoch (Book of Parables)',
    sourceChapter: 46,
    sourceVerse: '1-3',
    sourceText: 'There I saw One who had a Head of Days... and with Him was another whose face was like a man... This is the Son of Man who hath righteousness...',
    targetBook: 'Gospel of Matthew',
    targetChapter: 16,
    targetVerse: '13, 27',
    targetText: 'When Jesus came into the coasts of Caesarea Philippi, he asked his disciples, saying, Whom do men say that I the Son of Man am?',
    relationTitle: 'The Pre-Existent "Son of Man" (ወልደ እጓለ እመሕያው)',
    explanation: 'Jesus\'s self-designation as "the Son of Man" (used over 80 times in the Gospels) echoes the heavenly cosmic Messiah revealed in 1 Enoch 46–71.',
    type: 'messianic_prophecy'
  },
  {
    id: 'jubilees-genesis-eden',
    sourceBook: 'Book of Jubilees',
    sourceChapter: 3,
    sourceVerse: '12',
    sourceText: 'And Adam and his wife were seven years in the Garden of Eden placing incense before the Lord...',
    targetBook: 'Genesis',
    targetChapter: 2,
    targetVerse: '15',
    targetText: 'And the LORD God took the man, and put him into the garden of Eden to dress it and to keep it.',
    relationTitle: 'Eden as the Holy of Holies',
    explanation: 'Jubilees clarifies that the Garden of Eden was consecrated as the original Sanctuary and Holy of Holies where Adam offered incense unto God.',
    type: 'doctrinal_parallel'
  },
  {
    id: 'meqabyan-hebrews-martyrs',
    sourceBook: '1 Meqabyan',
    sourceChapter: 1,
    sourceVerse: '1-5',
    sourceText: 'Meqabis and his sons refused to bow down to idols or break the law of God under trial by King Akrawtos...',
    targetBook: 'Hebrews',
    targetChapter: 11,
    targetVerse: '35-37',
    targetText: 'Others were tortured, not accepting deliverance; that they might obtain a better resurrection...',
    relationTitle: 'Heroes of Faith in Persecution',
    explanation: 'The heroic steadfastness of Meqabis mirrors the epistle to the Hebrews\' hall of faith heroes who endured affliction for eternal rewards.',
    type: 'historical_continuation'
  }
];
