import { Book, Chapter } from '../types/bible';

export const ETHIOPIAN_BOOKS: Book[] = [
  // --- OLD TESTAMENT & ETHIOPIC UNIQUE OT (1 - 46) ---
  {
    id: 'enoch',
    order: 1,
    titleEnglish: '1 Enoch (Book of Henok)',
    titleAmharic: 'መጽሐፈ ሄኖክ',
    titleGeez: 'መጽሐፈ ሄኖክ ነቢይ',
    transliteration: 'Mezzhafe Henok',
    category: 'ethiopian_unique',
    testament: 'ethiopian_extra',
    totalChapters: 108,
    summary: 'The ancient apocalyptic revelation of Enoch, seventh from Adam. Preserved only in full in Ge\'ez (Ethiopic). Contains the Book of Watchers, Astronomical Book, Book of Parables (introducing the Son of Man), Book of Dream Visions, and Epistle of Enoch.',
    significance: 'Quoted directly by Jude 1:14-15 and heavily referenced by early Christian Church Fathers and Apostles. Essential for understanding Christian messianic theology.',
    author: 'Patriarch Enoch (Henok)',
    historicalContext: 'Written circa 300 BC – 100 BC. Preserved continuously in the Ethiopian Orthodox Church scriptoria at Debre Damo and Lalibela.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['The Messiah / Son of Man', 'Angelic Watchers (Igrigori)', 'Heavenly Luminaries & Calendar', 'Final Judgment & Eternal Peace']
  },
  {
    id: 'jubilees',
    order: 2,
    titleEnglish: 'Jubilees (Kufale - Book of Division)',
    titleAmharic: 'መጽሐፈ ኩፋሌ',
    titleGeez: 'መጽሐፈ ኩፋሌ ዘክፍለ መዋዕል',
    transliteration: 'Mezzhafe Kufale',
    category: 'ethiopian_unique',
    testament: 'ethiopian_extra',
    totalChapters: 50,
    summary: 'Revealed to Moses on Mount Sinai by the Angel of the Presence. Recounts the history of Genesis from Creation to Mount Sinai, organized into 49-year Jubilee cycles and solar calendars.',
    significance: 'Fills vital detail gaps in Genesis, explaining angelic creation, Eden as the Holy of Holies, the origins of Hebrew script, and the patriarchs\' lives.',
    author: 'Dictated by the Angel of the Presence to Moses',
    historicalContext: 'Preserved fully in Ge\'ez. Dead Sea Scroll fragments confirmed the Ethiopic text\'s remarkable fidelity.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Jubilee Solar Calendar (364 days)', 'Angelic Hierarchies', 'Patriarchal Testaments', 'Sanctity of the Sabbath']
  },
  {
    id: 'meqabyan1',
    order: 3,
    titleEnglish: '1 Meqabyan (Ethiopian 1 Maccabees)',
    titleAmharic: '፩ መቃብያን',
    titleGeez: 'መጽሐፈ መቃብያን ቀዳማዊ',
    transliteration: 'Mezzhafe Meqabyan Qadamawi',
    category: 'ethiopian_unique',
    testament: 'ethiopian_extra',
    totalChapters: 36,
    summary: 'Unique to the Ethiopic canon (distinct from Septuagint Maccabees). Narrates the story of a Benjamite hero named Meqabis who fought against pagan king Akrawtos of Moab to defend true worship.',
    significance: 'Stands as an inspiring testament to steadfast martyrdom, dietary purity, and resistance to idolatry.',
    author: 'Ethiopic Anonymous Scribe',
    historicalContext: 'Ancient Ethiopic narrative preserved exclusively in Ge\'ez manuscripts.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Martyrdom for God\'s Law', 'Victory over Idolatry', 'Divine Deliverance']
  },
  {
    id: 'meqabyan2',
    order: 4,
    titleEnglish: '2 Meqabyan (Ethiopian 2 Maccabees)',
    titleAmharic: '፪ መቃብያን',
    titleGeez: 'መጽሐፈ መቃብያን ካልእ',
    transliteration: 'Mezzhafe Meqabyan Kal\'i',
    category: 'ethiopian_unique',
    testament: 'ethiopian_extra',
    totalChapters: 21,
    summary: 'Focuses on the king of Moab, Meqabis\'s theological discussions, and the eternal reward of those who keep the covenant of the God of Israel.',
    significance: 'Offers unique Ethiopic wisdom on resurrection and righteous judgment.',
    author: 'Ethiopic Anonymous Scribe',
    historicalContext: 'Canonical in Ethiopic Orthodox Tewahedo Church since Aksumite era.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Resurrection', 'Covenant Faithfulness', 'Wisdom of the Elders']
  },
  {
    id: 'meqabyan3',
    order: 5,
    titleEnglish: '3 Meqabyan (Ethiopian 3 Maccabees)',
    titleAmharic: '፫ መቃብያን',
    titleGeez: 'መጽሐፈ መቃብያን ሣልስ',
    transliteration: 'Mezzhafe Meqabyan Salis',
    category: 'ethiopian_unique',
    testament: 'ethiopian_extra',
    totalChapters: 10,
    summary: 'A short devotional text on repentance, salvation, and how God preserves his chosen ones through affliction.',
    significance: 'Short liturgical text used in Ethiopic monastic devotions.',
    author: 'Ethiopic Scribe',
    historicalContext: 'Preserved in Ge\'ez codices alongside 1 & 2 Meqabyan.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Repentance', 'Divine Mercy', 'Monastic Reflection']
  },
  {
    id: 'genesis',
    order: 6,
    titleEnglish: 'Genesis (Orit Zefitret)',
    titleAmharic: 'ኦሪት ዘፍጥረት',
    titleGeez: 'ኦሪት ዘፍጥረት',
    transliteration: 'Orit Zefitret',
    category: 'law',
    testament: 'ot',
    totalChapters: 50,
    summary: 'The Book of Beginnings: Creation of heaven and earth, Adam and Eve, the Great Flood, Noah, Abraham, Isaac, Jacob, and Joseph in Egypt.',
    significance: 'First book of the Octateuch (Orit) in the Ethiopian Canon.',
    author: 'Moses (ሙሴ)',
    historicalContext: 'Translated into Ge\'ez during the 4th-5th century AD from the Septuagint by the Nine Saints.',
    isUniqueToEthiopicCanon: false,
    keyThemes: ['Creation', 'Covenant', 'Faith of Abraham', 'Providence']
  },
  {
    id: 'exodus',
    order: 7,
    titleEnglish: 'Exodus (Orit Zetseat)',
    titleAmharic: 'ኦሪት ዘጸአት',
    titleGeez: 'ኦሪት ዘጸአት',
    transliteration: 'Orit Zetseat',
    category: 'law',
    testament: 'ot',
    totalChapters: 40,
    summary: 'The departure from Egypt, the parting of the Red Sea, the Ten Commandments on Mount Sinai, and the building of the Tabernacle.',
    significance: 'Central redemptive event establishing Israel as a priestly nation.',
    author: 'Moses (ሙሴ)',
    historicalContext: 'Ge\'ez translation preserved in ancient parchment manuscripts.',
    isUniqueToEthiopicCanon: false,
    keyThemes: ['Liberation', 'The Ten Words (Law)', 'Tabernacle of God']
  },
  {
    id: 'psalms',
    order: 8,
    titleEnglish: 'Psalms of David (Mezmure Dawit)',
    titleAmharic: 'መዝሙረ ዳዊት',
    titleGeez: 'መዝሙረ ዳዊት',
    transliteration: 'Mezmure Dawit',
    category: 'wisdom',
    testament: 'ot',
    totalChapters: 151,
    summary: 'The 151 Psalms (including Psalm 151 on David\'s victory over Goliath), forming the daily heart of Ethiopian Orthodox prayer (Wudase Mariam & Mezmure Dawit).',
    significance: 'Includes Psalm 151, canonical in Orthodox Tewahedo tradition. Divided into 15 Mazmur sections for weekly recitation.',
    author: 'King David, Asaph, Sons of Korah',
    historicalContext: 'Recited daily by priests, monks, and lay believers across Ethiopia.',
    isUniqueToEthiopicCanon: false,
    keyThemes: ['Praise', 'Messianic Prophecy', 'Repentance', 'Spiritual Warfare']
  },
  {
    id: 'ezra_sutuel',
    order: 9,
    titleEnglish: 'Ezra Sutuel (4 Ezra / 2 Esdras)',
    titleAmharic: 'ዕዝራ ሱቱኤል',
    titleGeez: 'መጽሐፈ ዕዝራ ሱቱኤል',
    transliteration: 'Mezzhafe Ezra Sutuel',
    category: 'ethiopian_unique',
    testament: 'ethiopian_extra',
    totalChapters: 16,
    summary: 'Apocalyptic visions of Ezra (Sutuel) concerning the destruction of Jerusalem, the problem of evil, the eagle vision, and the restoration of sacred scriptures.',
    significance: 'Canonical OT book in the Ethiopic Church containing profound eschatological wisdom.',
    author: 'Ezra the Scribe (Sutuel)',
    historicalContext: 'Preserved fully in Ge\'ez text.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Divine Justice', 'Restoration of Scriptures', 'Visions of the End Times']
  },
  {
    id: 'tegsats',
    order: 10,
    titleEnglish: 'Tegsats (Book of Reproof / Advice)',
    titleAmharic: 'መጽሐፈ ተግሣጽ',
    titleGeez: 'መጽሐፈ ተግሣጽ',
    transliteration: 'Mezzhafe Tegsats',
    category: 'wisdom',
    testament: 'ethiopian_extra',
    totalChapters: 30,
    summary: 'A book of wisdom ethics appended to Proverbs in the Ethiopian Canon, offering moral reproof and practical instruction for righteous living.',
    significance: 'Canonical wisdom literature unique to the Ethiopian Bible.',
    author: 'Solomon / Wise Scribes',
    historicalContext: 'Ethiopic textual tradition.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Moral Discipline', 'Righteous Conduct', 'Reverence of God']
  },

  // --- NEW TESTAMENT & ETHIOPIC UNIQUE NT (47 - 81) ---
  {
    id: 'matthew',
    order: 47,
    titleEnglish: 'Gospel of Matthew (Wangel Ze-Matewos)',
    titleAmharic: 'ወንጌል ዘማቴዎስ',
    titleGeez: 'ቅዱስ ወንጌል ዘማቴዎስ',
    transliteration: 'Wangel Ze-Matewos',
    category: 'gospels',
    testament: 'nt',
    totalChapters: 28,
    summary: 'The Gospel of Jesus Christ according to Saint Matthew, emphasizing Jesus as the King of Kings, Son of David, and fulfillment of the Law and Prophets.',
    significance: 'First of the Holy Four Gospels (Arba\'etu Wangel) in Ethiopian tradition.',
    author: 'Saint Matthew the Apostle (ማቴዎስ)',
    historicalContext: 'Illustrated with gold illuminations in the ancient Garima Gospels (circa 390–650 AD), the world\'s earliest surviving illustrated Christian codex.',
    isUniqueToEthiopicCanon: false,
    keyThemes: ['Kingdom of Heaven', 'Sermon on the Mount', 'Fulfillment of Prophecy', 'Great Commission']
  },
  {
    id: 'jude',
    order: 72,
    titleEnglish: 'Epistle of Jude (Melikte Yihuda)',
    titleAmharic: 'መልእክተ ይሁዳ',
    titleGeez: 'መልእክተ ይሁዳ ሐዋርያ',
    transliteration: 'Melikte Yihuda',
    category: 'epistles',
    testament: 'nt',
    totalChapters: 1,
    summary: 'Exhortation to contend earnestly for the faith once delivered to the saints. Contains the explicit quotation of 1 Enoch 1:9 regarding the Lord coming with ten thousands of His holy ones.',
    significance: 'Direct textual link between the New Testament and the Ethiopic Book of Enoch.',
    author: 'Jude, brother of James & Jesus',
    historicalContext: 'Early Catholic Epistle canonical throughout Christianity.',
    isUniqueToEthiopicCanon: false,
    keyThemes: ['Contending for the Faith', 'Quotation of 1 Enoch', 'Doxology of Divine Guarding']
  },
  {
    id: 'revelation',
    order: 73,
    titleEnglish: 'Revelation of John (Ra\'eye Yohannes)',
    titleAmharic: 'ራእየ ዮሐንስ',
    titleGeez: 'ራእየ ዮሐንስ አፖካሊፕሲስ',
    transliteration: 'Ra\'eye Yohannes',
    category: 'epistles',
    testament: 'nt',
    totalChapters: 22,
    summary: 'The Apocalypse of Saint John the Theologian on the Isle of Patmos. Visions of the Heavenly Throne, the Seven Seals, New Jerusalem, and Christ\'s ultimate triumph.',
    significance: 'Crown of New Testament prophecy.',
    author: 'Saint John the Beloved Apostle',
    historicalContext: 'Translated into Ge\'ez in early Aksumite period.',
    isUniqueToEthiopicCanon: false,
    keyThemes: ['Heavenly Worship', 'The Lamb of God', 'New Jerusalem', 'Victory over Evil']
  },
  {
    id: 'kidan1',
    order: 74,
    titleEnglish: 'Book of the Covenant 1 (Mazzhafa Kidan 1)',
    titleAmharic: 'መጽሐፈ ኪዳን ፩',
    titleGeez: 'መጽሐፈ ኪዳን ቀዳማዊ',
    transliteration: 'Mezzhafe Kidan Qadamawi',
    category: 'church_order',
    testament: 'ethiopian_extra',
    totalChapters: 60,
    summary: 'Instructions given by the Risen Christ to His Apostles during the 40 days between His Resurrection and Ascension concerning liturgy, baptism, and church order.',
    significance: 'Canonical NT book in the Broader Canon of the Ethiopian Orthodox Tewahedo Church.',
    author: 'The Apostles of Christ',
    historicalContext: 'Preserved in Ge\'ez ecclesiastical manuscripts.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Resurrection Teachings', 'Holy Liturgy', 'Apostolic Authority']
  },
  {
    id: 'qalementos',
    order: 77,
    titleEnglish: 'Ethiopic Clement (Qalementos)',
    titleAmharic: 'መጽሐፈ ቀሌመንጦስ',
    titleGeez: 'መጽሐፈ ቀሌመንጦስ',
    transliteration: 'Mezzhafe Qalementos',
    category: 'church_order',
    testament: 'ethiopian_extra',
    totalChapters: 8,
    summary: 'Secret revelations given by Saint Peter to his disciple Clement of Rome concerning creation, angelic orders, mysteries of Christ, and end times.',
    significance: 'Unique Ethiopic Apostolic text rich in early Christian symbolism.',
    author: 'Saint Peter to Clement of Rome',
    historicalContext: 'Found exclusively in Ethiopic manuscript archives.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Cosmic Mysteries', 'Angelic Orders', 'Apostolic Tradition']
  },
  {
    id: 'didascalia',
    order: 78,
    titleEnglish: 'Ethiopic Didascalia (Didsqilya)',
    titleAmharic: 'ዲድስቅልያ',
    titleGeez: 'መጽሐፈ ዲድስቅልያ',
    transliteration: 'Mezzhafe Didsqilya',
    category: 'church_order',
    testament: 'ethiopian_extra',
    totalChapters: 43,
    summary: 'Comprehensive Apostolic treatise on Christian ethics, church administration, care for widows and orphans, fasting, Holy Communion, and holy living.',
    significance: 'Foundational text for Ethiopian Orthodox Christian community governance.',
    author: 'Holy Apostles',
    historicalContext: 'Translated into Ge\'ez from Arabic/Coptic early manuscript sources.',
    isUniqueToEthiopicCanon: true,
    keyThemes: ['Christian Ethics', 'Liturgy & Sacraments', 'Charity & Mercy']
  }
];

// Chapter Data for Ethiopian Books
export const CHAPTER_DATA: Record<string, Chapter[]> = {
  enoch: [
    {
      bookId: 'enoch',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "The words of the blessing of Enoch, wherewith he blessed the elect and righteous, who will be living in the day of tribulation, when all the wicked and godless are to be removed.",
          textAmharic: "የምርጦችና የጻድቃን በረከት ቃል፤ መከራ በራቀበት ቀን የሚኖሩትን ዓመፀኞችንና ኃጢአተኞችን ሁሉ ለማስወገድ የሚባርክበት የሄኖክ ቃል ይህ ነው።",
          textGeez: "ቃለ በረከት ዘሄኖክ ዘከመ ባረኮሙ ለሕሩያን ወለጻድቃን እለ ሀለው ይሕዩ በዕለተ ምንዳቤ አመ ይትአተት ኵሉ እኩያን ወረሲዓን።",
          footnotes: ["Preserved in complete Ge'ez manuscripts at Aksum and Lalibela."],
          crossRefs: [{ bookId: 'jude', chapter: 1, verse: 14, note: 'Direct parallel to Jude 1:14-15' }]
        },
        {
          number: 2,
          textEnglish: "And he took up his parable and said—Enoch a righteous man, whose eyes were opened by God, that he should see the vision of the Holy One in the heavens, which the angels showed me, and from them I heard everything, and from them I understood as I saw, but not for this generation, but for a remote one which is for to come.",
          textAmharic: "ምሳሌውንም አንሥቶ እንዲህ አለ፤ ሄኖክ ጻድቅ ሰው ነው፤ እግዚአብሔር ዓይኖቹን የከፈተለት፤ በሰማያት ያለውን የቅዱሱን ራእይ ያየ፤ መላእክት ያሳዩኝንና ከእነርሱ የሰማሁትን ሁሉ ተረዳሁ።",
          textGeez: "ወነሣእ ምሳሌሁ ወይቤ ሄኖክ ብእሲ ጻድቅ ዘፈተሐ አዕይንቲሁ እግዚአብሔር ዘርእየ ራእየ ቅዱስ በሰማያት።",
          crossRefs: [{ bookId: 'revelation', chapter: 1, verse: 1, note: 'Apocalyptic vision introduction' }]
        },
        {
          number: 3,
          textEnglish: "Concerning the elect I said, and took up my parable concerning them: The Holy Great One will come forth from His dwelling,",
          textAmharic: "ስለ ምርጦች አልሁ፤ ስለ እነርሱም ምሳሌዬን ተናገርሁ፤ ቅዱሱና ታላቁ አምላክ በማደሪያው ይወጣል።",
          textGeez: "በእንተ ሕሩያን እቤ ወነሣእኩ ምሳሌየ በእንቲአሆሙ፤ ይወጽእ ቅዱስ ወዐቢይ እምማኅደሩ።"
        },
        {
          number: 4,
          textEnglish: "And the eternal God will tread upon the earth, (even) on Mount Sinai, And appear from His camp And appear in the strength of His might from the heaven of heavens.",
          textAmharic: "የዘላለም አምላክ በምድር ላይ በሲና ተራራ ላይ ይረግጣል፤ በሠራዊቱም መካከል ይታያል፤ በሰማያት ሰማይ ባለው ኃይሉ ይገለጣል።",
          textGeez: "ወይከይድ ዲበ ምድር ዘላለም በደብረ ሲና ወይተርኢ እምትዕይንቱ ወይተርኢ በኃይለ ጽንዑ እምሰማየ ሰማያት።"
        },
        {
          number: 5,
          textEnglish: "And all shall be smitten with fear, And the Watchers shall quake, And great fear and trembling shall seize them unto the ends of the earth.",
          textAmharic: "ሁሉም በፍርሃት ይመታሉ፤ ትጉሃን መላእክት (ኢግሪጎሪ) ይንቀጠቀጣሉ፤ ታላቅ ፍርሃትና መንቀጥቀጥ እስከ ምድር ዳርቻ ድረስ ይይዛቸዋል።",
          textGeez: "ወይፈረሁ ኵሎሙ ወይረዕዱ ትጉሃን ወይእኅዞሙ ፍርሃት ወረዓድ ዐቢይ እስከ አጽናፈ ምድር።"
        },
        {
          number: 6,
          textEnglish: "And the high mountains shall be shaken, And the high hills shall be made low, And shall melt as wax before the flame.",
          textAmharic: "ታላላቅ ተራሮች ይወዛወዛሉ፤ ከፍ ያሉት ኮረብቶችም ዝቅ ይላሉ፤ በእሳት ፊት እንደሚቀልጥ ሰም ይቀልጣሉ።",
          textGeez: "ወይደሰቁ አድባር ነዋኃን ወይትሐተቱ አውግር ነዋኃን ወይመክኩ ከመ ሰም እምቅድመ ነበልባል፤"
        },
        {
          number: 7,
          textEnglish: "And the earth shall be wholly rent in sunder, And all that is upon the earth shall perish, And there shall be a judgment upon all (men).",
          textAmharic: "ምድርም ሙሉ በሙሉ ትሰነጠቃለች፤ በምድር ላይ ያለውም ሁሉ ይጥፋል፤ በሁሉም ላይ ፍርድ ይሆናል።",
          textGeez: "ወትትሠጠቅ ምድር ኵላ ወይሠዐር ኵሉ ዘዲበ ምድር ወይከውን ደይን ዲበ ኵሉ፤"
        },
        {
          number: 8,
          textEnglish: "But with the righteous He will make peace. And will protect the elect, And mercy shall be upon them. And they shall all belong to God, And they shall be prospered, And they shall all be blessed.",
          textAmharic: "ነገር ግን ከጻድቃን ጋር ሰላምን ያደርጋል፤ ምርጦቹንም ይጠብቃል፤ ምሕረትም በእነርሱ ላይ ይሆናል፤ ሁሉም የእግዚአብሔር ይሆናሉ።",
          textGeez: "ወ ምስለ ጻድቃንሰ ይገብር ሰላመ ወይዔቅቦሙ ለሕሩያን ወይከውን ሣህል ዲቤሆሙ ወይከውኑ ኵሎሙ ለ እግዚአብሔር።"
        },
        {
          number: 9,
          textEnglish: "And behold! He cometh with ten thousands of His holy ones to execute judgment upon all, and to destroy all the ungodly: and to convict all flesh of all the works of their ungodliness which they have ungodly committed, and of all the hard things which ungodly sinners have spoken against Him.",
          textAmharic: "እነሆ፤ ጌታ ከእእላፋት ቅዱሳኑ ጋር መጣ፤ በሁሉም ላይ እንዲፈርድ፤ ኃጢአተኞችንም ሁሉ ለማጥፋት፤ በኃጢአተኝነት ባደረጉት ሥራ ሁሉና በእርሱ ላይ በተናገሩት ድፍረት።",
          textGeez: "ወናሁ መጽአ ምስለ አእላፋት ቅዱሳኒሁ ከመ ይግበር ደይነ ዲበ ኵሉ ወየሐጉል ኵሎ ኃጣአነ ወይዘልፎሙ ለኵሉ ዘሥጋ በእንተ ኵሉ ግብሮሙ ዘረሲዖሙ።",
          footnotes: ["Explicitly quoted in Jude 1:14-15!"],
          crossRefs: [{ bookId: 'jude', chapter: 1, verse: 14, note: 'Quoted verbatim in NT Epistle of Jude' }]
        }
      ]
    },
    {
      bookId: 'enoch',
      chapterNumber: 46,
      verses: [
        {
          number: 1,
          textEnglish: "And there I saw One who had a Head of Days, and His head was white like wool, and with Him was another being whose countenance had the appearance of a man, and his face was full of graciousness, like one of the holy angels.",
          textAmharic: "በዚያም የዘመን ራስ ያለውን አየሁ፤ ራሱም እንደ ሱፍ ነጭ ነበረ፤ ከእርሱም ጋር የመልክ መልክ የሰው መልክ የሚመስል ሌላ ነበረ፤ ፊቱም እንደ ቅዱሳን መላእክት አንዱ በጸጋ የተሞላ ነበረ።",
          textGeez: "ወበህየ ርኢኩ ዘሎቱ ርእሰ መዋዕል ወርእሱ ጸዕዳ ከመ ፀምር ወምስሌሁ ካልእ ዘገጹ ከመ ርእየ ብእሲ።"
        },
        {
          number: 2,
          textEnglish: "And I asked the angel who went with me and showed me all the hidden things, concerning that Son of Man, who he was, and whence he was, (and) why he went with the Head of Days?",
          textAmharic: "ከእኔ ጋር ይሄድ የነበረውንና የተሰወሩትን ነገሮች ሁሉ ያሳየኝን መልአክ ጠየቅሁት፤ ስለዚያ የሰው ልጅ (ወልደ እጓለ እመሕያው) ማን እንደ ሆነና ከወዴት እንደ ሆነ ተናገርሁ።",
          textGeez: "ወተስእልኩ ዘምስሌየ መልአክ ዘያርእየኒ ኵሎ ኅቡአተ በእንተ ውእቱ ወልደ እጓለ እመሕያው መኑ ውእቱ።"
        },
        {
          number: 3,
          textEnglish: "And he answered and said unto me: This is the Son of Man who hath righteousness, with whom dwelleth righteousness, and who revealeth all the treasures of that which is hidden, because the Lord of Spirits hath chosen him.",
          textAmharic: "እርሱም መልሶ እንዲህ አለኝ፤ ይህ ጽድቅ ያለው፤ ጽድቅም የሚያድርበት፤ የተሰወሩትን መዛግብት ሁሉ የሚገልጥ የሰው ልጅ (ወልደ እጓለ እመሕያው) ነው፤ የመናፍስት ጌታ መርጦታልና።",
          textGeez: "ወአውሠአኒ ወይቤለኒ ዝ ውእቱ ወልደ እጓለ እመሕያው ዘሎቱ ጽድቅ ወዘምስሌሁ ያድር ጽድቅ ወዘያከሥት ኵሎ መዛግብተ ኅቡአት።"
        }
      ]
    }
  ],
  jubilees: [
    {
      bookId: 'jubilees',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "And it came to pass in the first year of the exodus of the children of Israel out of Egypt, in the third month, on the sixteenth day of the month, that God spake to Moses, saying: Come up to Me to the Mount, and I will give thee two tables of stone of the law and of the commandment, which I have written, that thou mayst teach them.",
          textAmharic: "የእስራኤል ልጆች ከግብፅ በወጡ በጀመሪያው ዓመት በሦስተኛው ወር ከአሥራ ስድስተኛው ቀን፤ እግዚአብሔር ሙሴን እንዲህ ብሎ ተናገረው፤ ወደ ተራራው ወደ እኔ ውጣ፤ ታስተምራቸው ዘንድ የጻፍሁትን ሕግና ትእዛዝ ያላቸዉን የድንጋይ ጽላቶች እሰጥሃለሁ።",
          textGeez: "ወኮነ በበቀዳሚት ዐመት ዘወፅኡ ውሉደ እስራኤል እምግብፅ በሣልስ ወርሕ በ፲ወ፮ ለወርሕ ተናገሮ እግዚአብሔር ለሙሴ።"
        },
        {
          number: 2,
          textEnglish: "And Moses went up into the mount of God, and the glory of the Lord abode on Mount Sinai, and a cloud covered it six days.",
          textAmharic: "ሙሴም ወደ እግዚአብሔር ተራራ ወጣ፤ የእግዚአብሔርም ክብር በሲና ተራራ ላይ አደረ፤ ደመናውም ስድስት ቀንሸፈነው።",
          textGeez: "ወዐርገ ሙሴ ውስተ ደብረ እግዚአብሔር ወኀደረ ስብሐተ እግዚአብሔር ዲበ ደብረ ሲና።"
        }
      ]
    }
  ],
  meqabyan1: [
    {
      bookId: 'meqabyan1',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "In the days of Akrawtos, king of Moab, who rebelled against the law of the God of Heaven, there arose Meqabis from the tribe of Benjamin, a man of steadfast prayer and zeal for the Holy Law.",
          textAmharic: "በሰማይ አምላክ ሕግ ላይ በዐመፀው በሞአብ ንጉሥ በአክራውቶስ ዘመን፤ በብንያም ነገድ ዘንድ በሕጉ የሚቀና በጸሎትም የጸና መቃቢስ የሚባል ሰው ተነሣ።",
          textGeez: "በመዋዕለ አክራውቶስ ንጉሠ ሞአብ ዘዐመፀ ዲበ ሕገ አምላከ ሰማይ፤ ተንሥአ መቃቢስ እምነገደ ብንያም ብእሲ ጻድቅ ወቀናኢ።"
        },
        {
          number: 2,
          textEnglish: "He gathered his sons and brethren, saying: Let us not bow down to the sculpted idols of the heathens, but let us keep the commandments of the Eternal God.",
          textAmharic: "ልጆቹንና ወንድሞቹን ሰብስቦ እንዲህ አላቸው፤ ለአሕዛብ ምስሎች አንስገድ፤ የዘላለምን አምላክ ትእዛዝ እንጠብቅ።",
          textGeez: "ወአስተጋብኦሙ ለደቂቁ ወለአኃዊሁ ወይቤሎሙ፤ ኢንንበር ለጣዖታተ አሕዛብ አላ ንዕቀብ ትእዛዛተ አምላክ ዘላለም።"
        }
      ]
    }
  ],
  meqabyan2: [
    {
      bookId: 'meqabyan2',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "And Meqabis answered and said before the assembly: 'He who loses his life for the Law of the Most High shall find it in the resurrection of the just.'",
          textAmharic: "መቃቢስም በማኅበሩ ፊት መልሶ እንዲህ አለ፤ ‘ስለ ልዑል ሕግ ነፍሱን የሚያጣ በጻድቃን ትንሣኤ ያገኛታል።’",
          textGeez: "ወአውሠአ መቃቢስ ወይቤ ቅድመ ማኅበር፤ ዘአኅጐላ ለነፍሱ በእንተ ሕገ ልዑል ይረክባ በትንሣኤ ጻድቃን።"
        },
        {
          number: 2,
          textEnglish: "And all the brethren strengthened their hearts in the Lord God of Israel.",
          textAmharic: "ወንድሞችም ሁሉ በእስራኤል አምላክ በእግዚአብሔር ልባቸውን አጸኑ።",
          textGeez: "ወአጽንዑ ልቦሙ ኵሎሙ አኃው በ እግዚአብሔር አምላከ እስራኤል፤"
        }
      ]
    }
  ],
  meqabyan3: [
    {
      bookId: 'meqabyan3',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "Blessed is the man who walks in the fear of the Almighty and flees from the counsels of the wicked; for God shall preserve his soul in times of affliction.",
          textAmharic: "ሁሉን በሚችል አምላክ ፍርሃት የሚመላለስ፥ ከክፉዎችም ምክር የሚሸሽ ሰው ቡሩክ ነው፤ እግዚአብሔር በመከራ ጊዜ ነፍሱን ይጠብቃታልና።",
          textGeez: "ቡሩክ ብእሲ ዘየሐውር በፈራህያ አምላክ ኵሉ ዘይክል።"
        },
        {
          number: 2,
          textEnglish: "For the Lord hears the cry of the humble and will not despise the prayer of the contrite in heart.",
          textAmharic: "እግዚአብሔር የትሑታንን ጩኸት ይሰማል፤ የተሰበረ ልብ ያላቸውንም ጸሎት አይንቅምና።",
          textGeez: "እስመ ይሠምዕ እግዚአብሔር ዐራሐ ትሑታን።"
        }
      ]
    }
  ],
  genesis: [
    {
      bookId: 'genesis',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "In the beginning God created the heaven and the earth.",
          textAmharic: "በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።",
          textGeez: "በቀዳሚ ገብረ እግዚአብሔር ሰማየ ወምድር።"
        },
        {
          number: 2,
          textEnglish: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.",
          textAmharic: "ምድርም ባዶ ነበረች፥ ምንም አልነበረባትም፤ ጨለማም በጥልቁ ላይ ነበረ፤ የእግዚአብሔርም መንፈስ በውኃ ላይ ይንቀሳቀስ ነበረ።",
          textGeez: "ወምድርሰ ኢታስተርኢ ወኢኮነት ድልወተ፤ ወጽልመት ዲበ ቀላይ ወመንፈሰ እግዚአብሔር ይሠፍር ዲበ ማይ።"
        },
        {
          number: 3,
          textEnglish: "And God said, Let there be light: and there was light.",
          textAmharic: "እግዚአብሔርም፤ ብርሃን ይሁን አለ፤ ብርሃንም ሆነ።",
          textGeez: "ወይቤ እግዚአብሔር ይኩን ብርሃን፤ ወኮነ ብርሃን።"
        }
      ]
    }
  ],
  psalms: [
    {
      bookId: 'psalms',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful.",
          textAmharic: "ምስጉን ነው በበደለኞች ምክር ያልሄደ፥ በኃጢአተኞችም መንገድ ያልቆመ፥ በዋዘኞችም ወንበር ያልተቀመጠ።",
          textGeez: "ብፁዕ ብእሲ ዘኢሖረ በምክረ ረሲዓን፤ ወዘኢቆመ በ ፍኖተ ኃጣአን፤ ወዘኢነበረ በ መንበረ መስተሃዝልያን።"
        },
        {
          number: 2,
          textEnglish: "But his delight is in the law of the Lord; and in his law doth he meditate day and night.",
          textAmharic: "ነገር ግን በእግዚአብሔር ሕግ ደስ ይለዋል፥ ሕጉንም በቀንና በሌሊት ያስባል።",
          textGeez: "አላ በሕገ እግዚአብሔር ሠምረ፤ ወበሕጉ ያነብብ መዓልተ ወሌሊተ።"
        }
      ]
    }
  ],
  matthew: [
    {
      bookId: 'matthew',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "The book of the generation of Jesus Christ, the son of David, the son of Abraham.",
          textAmharic: "የዳዊት ልጅ የአብርሃም ልጅ የኢየሱስ ክርስቶስ የትውልዱ መጽሐፍ።",
          textGeez: "መጽሐፈ ልደቱ ለኢየሱስ ክርስቶስ ወልደ ዳዊት ወልደ አብርሃም፤"
        },
        {
          number: 17,
          textEnglish: "So all the generations from Abraham to David are fourteen generations; and from David until the carrying away into Babylon are fourteen generations; and from the carrying away into Babylon unto Christ are fourteen generations.",
          textAmharic: "እንግዲህ ትውልድ ሁሉ ከአብርሃም እስከ ዳዊት አሥራ አራት ትውልድ፤ ከዳዊትም እስከ ባቢሎን ምርኮ አሥራ አራት ትውልድ፤ ከባቢሎንም ምርኮ እስከ ክርስቶስ አሥራ አራት ትውልድ ነው።",
          textGeez: "ኵሉ እንከ ትውልድ እምአብርሃም እስከ ዳዊት ፲ወ፬ ትውልድ፤ ወእምዳዊት እስከ ፍልሰተ ባቢሎን ፲ወ፬ ትውልድ፤"
        }
      ]
    }
  ],
  jude: [
    {
      bookId: 'jude',
      chapterNumber: 1,
      verses: [
        {
          number: 14,
          textEnglish: "And Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints,",
          textAmharic: "ከአዳም ጀምሮ ሰባተኛ የሆነ ሄኖክ ስለ እሊህ ደግሞ እንዲህ ብሎ ተነበየ፤ እነሆ ጌታ ከአእላፋት ቅዱሳኑ ጋር መጥቷል፤",
          textGeez: "ወተነበየ በእንቲአሆሙ ሄኖክ ዘእምአዳም ሳብዕ ዘይቤ፤ ናሁ መጽአ እግዚአብሔር ምስለ አእላፋት ቅዱሳኒሁ።",
          crossRefs: [{ bookId: 'enoch', chapter: 1, verse: 9, note: 'Direct quotation of 1 Enoch 1:9' }]
        },
        {
          number: 15,
          textEnglish: "To execute judgment upon all, and to convince all that are ungodly among them of all their ungodly deeds which they have ungodly committed, and of all their hard speeches which ungodly sinners have spoken against him.",
          textAmharic: "በሁሉም ላይ እንዲፈርድ፤ በኃጢአተኝነት ባደረጉት ሥራ ሁሉና በእርሱ ላይ በተናገሩት ድፍረት ሁሉ ኃጢአተኞችን ለማጥፋት።",
          textGeez: "ከመ ይግበር ደይነ ደይነ ዲበ ኵሉ ወየሐጉል ኵሎ ኃጣአነ በእንተ ኵሉ ግብሮሙ ዘረሲዖሙ።"
        }
      ]
    }
  ]
};
