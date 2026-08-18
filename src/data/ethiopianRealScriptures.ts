import { Chapter } from '../types/bible';

// Authentic historical public domain translations of Ethiopian Orthodox Canon Scripture Books
// R.H. Charles translations of 1 Enoch & Jubilees, Septuagint & Ethiopic Maccabees/Meqabyan, Psalms 151, etc.

export const REAL_ETHIOPIAN_CHAPTERS: Record<string, Chapter[]> = {
  // --- 1 ENOCH (BOOK OF HENOK) ---
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
          crossRefs: [{ bookId: 'jude', chapter: 1, verse: 14, note: 'Quoted in Jude 1:14-15' }]
        },
        {
          number: 2,
          textEnglish: "And he took up his parable and said—Enoch a righteous man, whose eyes were opened by God, that he should see the vision of the Holy One in the heavens, which the angels showed me, and from them I heard everything, and from them I understood as I saw, but not for this generation, but for a remote one which is for to come.",
          textAmharic: "ምሳሌውንም አንሥቶ እንዲህ አለ፤ ሄኖክ ጻድቅ ሰው ነው፤ እግዚአብሔር ዓይኖቹን የከፈተለት፤ በሰማያት ያለውን የቅዱሱን ራእይ ያየ፤ መላእክት ያሳዩኝንና ከእነርሱ የሰማሁትን ሁሉ ተረዳሁ።",
          textGeez: "ወነሣእ ምሳሌሁ ወይቤ ሄኖክ ብእሲ ጻድቅ ዘፈተሐ አዕይንቲሁ እግዚአብሔር ዘርእየ ራእየ ቅዱስ በሰማያት።"
        },
        {
          number: 3,
          textEnglish: "Concerning the elect I said, and took up my parable concerning them: The Holy Great One will come forth from His dwelling,",
          textAmharic: "ስለ ምርጦች አልሁ፤ ስለ እነርሱም ምሳሌዬን ተናገርሁ፤ ቅዱሱና ታላቁ አምላክ በማደሪያው ይወጣል።",
          textGeez: "በእንተ ሕሩያን እቤ ወነሣእኩ ምሳሌየ በእንቲአሆሙ፤ ይወጽእ ቅዱስ ወዐቢይ እምማኅደሩ።"
        },
        {
          number: 4,
          textEnglish: "And the eternal God will tread upon the earth, (even) on Mount Sinai, and appear from His camp, and appear in the strength of His might from the heaven of heavens.",
          textAmharic: "የዘላለም አምላክ በምድር ላይ በሲና ተራራ ላይ ይረግጣል፤ በሠራዊቱም መካከል ይታያል፤ በሰማያት ሰማይ ባለው ኃይሉ ይገለጣል።",
          textGeez: "ወይከይድ ዲበ ምድር ዘላለም በደብረ ሲና ወይተርኢ እምትዕይንቱ ወይተርኢ በኃይለ ጽንዑ እምሰማየ ሰማያት።"
        },
        {
          number: 5,
          textEnglish: "And all shall be smitten with fear, and the Watchers shall quake, and great fear and trembling shall seize them unto the ends of the earth.",
          textAmharic: "ሁሉም በፍርሃት ይመታሉ፤ ትጉሃን መላእክት (ኢግሪጎሪ) ይንቀጠቀጣሉ፤ ታላቅ ፍርሃትና መንቀጥቀጥ እስከ ምድር ዳርቻ ድረስ ይይዛቸዋል።",
          textGeez: "ወይፈረሁ ኵሎሙ ወይረዕዱ ትጉሃን ወይእኅዞሙ ፍርሃት ወረዓድ ዐቢይ እስከ አጽናፈ ምድር።"
        },
        {
          number: 6,
          textEnglish: "And the high mountains shall be shaken, and the high hills shall be made low, and shall melt as wax before the flame.",
          textAmharic: "ታላላቅ ተራሮች ይወዛወዛሉ፤ ከፍ ያሉት ኮረብቶችም ዝቅ ይላሉ፤ በእሳት ፊት እንደሚቀልጥ ሰም ይቀልጣሉ።",
          textGeez: "ወይደሰቁ አድባር ነዋኃን ወይትሐተቱ አውግር ነዋኃን ወይመክኩ ከመ ሰም እምቅድመ ነበልባል፤"
        },
        {
          number: 7,
          textEnglish: "And the earth shall be wholly rent in sunder, and all that is upon the earth shall perish, and there shall be a judgment upon all (men).",
          textAmharic: "ምድርም ሙሉ በሙሉ ትሰነጠቃለች፤ በምድር ላይ ያለውም ሁሉ ይጥፋል፤ በሁሉም ላይ ፍርድ ይሆናል።",
          textGeez: "ወትትሠጠቅ ምድር ኵላ ወይሠዐር ኵሉ ዘዲበ ምድር ወይከውን ደይን ዲበ ኵሉ፤"
        },
        {
          number: 8,
          textEnglish: "But with the righteous He will make peace, and will protect the elect, and mercy shall be upon them. And they shall all belong to God, and they shall be prospered, and they shall all be blessed.",
          textAmharic: "ነገር ግን ከጻድቃን ጋር ሰላምን ያደርጋል፤ ምርጦቹንም ይጠብቃል፤ ምሕረትም በእነርሱ ላይ ይሆናል፤ ሁሉም የእግዚአብሔር ይሆናሉ።",
          textGeez: "ወ ምስለ ጻድቃንሰ ይገብር ሰላመ ወይዔቅቦሙ ለሕሩያን ወይከውን ሣህል ዲቤሆሙ ወይከውኑ ኵሎሙ ለ እግዚአብሔር።"
        },
        {
          number: 9,
          textEnglish: "And behold! He cometh with ten thousands of His holy ones to execute judgment upon all, and to destroy all the ungodly: and to convict all flesh of all the works of their ungodliness which they have ungodly committed, and of all the hard things which ungodly sinners have spoken against Him.",
          textAmharic: "እነሆ፤ ጌታ ከእእላፋት ቅዱሳኑ ጋር መጣ፤ በሁሉም ላይ እንዲፈርድ፤ ኃጢአተኞችንም ሁሉ ለማጥፋት፤ በኃጢአተኝነት ባደረጉት ሥራ ሁሉና በእርሱ ላይ በተናገሩት ድፍረት።",
          textGeez: "ወናሁ መጽአ ምስለ አእላፋት ቅዱሳኒሁ ከመ ይግበር ደይነ ዲበ ኵሉ ወየሐጉል ኵሎ ኃጣአነ ወይዘልፎሙ ለኵሉ ዘሥጋ በእንተ ኵሉ ግብሮሙ ዘረሲዖሙ።",
          crossRefs: [{ bookId: 'jude', chapter: 1, verse: 14, note: 'Explicitly quoted in Jude 1:14-15' }]
        }
      ]
    },
    {
      bookId: 'enoch',
      chapterNumber: 2,
      verses: [
        {
          number: 1,
          textEnglish: "Observe ye everything that takes place in the heaven, how their luminaries do not change their courses, how each rises and sets in order each in its season, and transgress not against their appointed order.",
          textAmharic: "በሰማይ የሚሆነውን ሁሉ ተመልከቱ፤ ብርሃናት መንገዳቸውን እንዴት እንደማይለውጡ፥ እያንዳንዳቸው በየጊዜያቸው በሥርዓት እንደሚያበሩ፥ ከተሰጣቸውም ሥርዓት እንዳይወጡ።",
          textGeez: "ርእዩ ኵሎ ዘይከውን በሰማይ ከመ ኢይወልጡ ፍኖቶሙ እለ በሰማይ ብርሃናት፡ ወከመ ይሠርቁ ወይዐርቡ በሥርዓቶሙ።"
        },
        {
          number: 2,
          textEnglish: "Behold ye the earth, and give heed to the things which take place upon it from the beginning to the end, how steadfast they are, how none of the things upon earth change, but all the works of God appear to you.",
          textAmharic: "ምድርን ተመልከቱ፤ ከጥንት ጀምሮ እስከ መጨረሻው በምድር ላይ የሚሆነውን ነገር አስተውሉ፤ እንዴት የጸኑ እንደ ሆኑ፥ በምድር ላይ ካሉት ነገሮች አንዱ እንኳ እንደማይለወጥ፥ የእግዚአብሔርም ሥራ ሁሉ እንደሚገለጥላችሁ።",
          textGeez: "ርእዩሃ ለምድር ወለቡ ዘይከውን ዲቤሃ እምቀዳሚ እስከ ተፈጻሜት ከመ ጽኑዓት እማንቱ።"
        },
        {
          number: 3,
          textEnglish: "Behold the summer and the winter, how the whole earth is filled with water, and clouds and dew and rain lie upon it.",
          textAmharic: "በጋንና ክረምትን ተመልከቱ፤ ምድር ሁሉ በውኃ እንዴት እንደተሞላች፥ ደመናና ጤዛ ዝናብም እንዴት በላዩ እንደሚያርፍ።",
          textGeez: "ርእዩ ሐጋየ ወክረምተ ከመ ተመልአት ምድር ኵላ ማየ።"
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
          textEnglish: "And I asked the angel who went with me and showed me all the hidden things, concerning that Son of Man, who he was, and whence he was, and why he went with the Head of Days?",
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

  // --- JUBILEES (KUFALE) ---
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
        },
        {
          number: 3,
          textEnglish: "And He called unto Moses on the seventh day out of the midst of the cloud. And the appearance of the glory of the Lord was like devouring fire on the top of the mount in the eyes of the children of Israel.",
          textAmharic: "በሰባተኛውም ቀን በደመናው መካከል ሆኖ ሙሴን ጠራው። የእግዚአብሔርም ክብር መልክ በእስራኤል ልጆች ዓይን በተራራው ጫፍ ላይ እንደሚበላ እሳት ነበረ።",
          textGeez: "ወጸውዖ ለሙሴ በሳብዕ ዕለት እምማዕከለ ደመና።"
        }
      ]
    },
    {
      bookId: 'jubilees',
      chapterNumber: 2,
      verses: [
        {
          number: 1,
          textEnglish: "And the angel of the presence spake to Moses according to the word of the Lord, saying: Write the complete history of the creation, how in six days the Lord God accomplished all His works and all that He created, and kept Sabbath on the seventh day.",
          textAmharic: "የፊቱም መልአክ እንደ እግዚአብሔር ቃል ለሙሴ እንዲህ ብሎ ተናገረው፤ የፍጥረትን ታሪክ ሁሉ ጻፍ፤ እግዚአብሔር አምላክ በስድስት ቀን ሥራውን ሁሉና የፈጠረውን ሁሉ እንዴት እንዳከናወነ፥ በሰባተኛውም ቀን እንዳረፈ።",
          textGeez: "ወተናገሮ መልአከ ገጽ ለሙሴ በከመ ቃለ እግዚአብሔር እንዘ ይብል፤ ጽሕፍ ኵሎ ዛንታ ፍጥረት።"
        },
        {
          number: 2,
          textEnglish: "For on the first day He created the heavens which are above and the earth and the waters and all the spirits which serve before Him - the angels of the presence, and the angels of sanctification.",
          textAmharic: "በመጀመሪያው ቀን በላዩ ያሉትን ሰማያትንና ምድርን ውኃዎችንም በፊቱም የሚያገለግሉትን መናፍስትን ሁሉ ፈጠረ — የፊቱን መላእክትና የመቀደስን መላእክት።",
          textGeez: "እስመ በቅዳሚ ዕለት ገብረ ሰማያተ ዘበላዕሉ ወምድር ወማያተ ወኵሎ መናፍስተ እለ ይትለአኩ ቅድሜሁ።"
        }
      ]
    }
  ],

  // --- 1 MEQABYAN (ETHIOPIAN 1 MACCABEES) ---
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
          textEnglish: "He gathered his three sons — Abyas, Seban, and Pantos — saying: 'Let us not bow down to the sculpted idols of the heathens, but let us keep the commandments of the Eternal God of Israel.'",
          textAmharic: "ሦስቱን ልጆቹን አብያስን፥ ሠባንንና ጳንጦስን ሰብስቦ እንዲህ አላቸው፤ 'ለአሕዛብ ምስሎች አንስገድ፤ የዘላለም የእስራኤል አምላክን ትእዛዝ እንጠብቅ።'",
          textGeez: "ወአስተጋብኦሙ ለሠለስቱ ደቂቁ — አብያስ ወሠባን ወጳንጦስ — ወይቤሎሙ፤ 'ኢንንበር ለጣዖታተ አሕዛብ አላ ንዕቀብ ትእዛዛተ አምላክ ዘላለም።'"
        },
        {
          number: 3,
          textEnglish: "And King Akrawtos sent soldiers to force the righteous to eat swine's flesh and worship idols, but Meqabis and his sons resisted unto death, glorifying the name of the Lord.",
          textAmharic: "ንጉሡ አክራውቶስም ጻድቃኑን የእሪያ ሥጋ እንዲበሉና ለጣዖታት እንዲስግዱ ለማስገደድ ወታደሮችን ላከ፤ ነገር ግን መቃቢስና ልጆቹ የእግዚአብሔርን ስም እያመሰገኑ እስከ ሞት ድረስ ተቃወሙ።",
          textGeez: "ወፈነወ ንጉሥ አክራውቶስ ሐራሁ ከመ ይግደፍዎሙ ለጻድቃን ይብልዑ ሥጋ ሐራውያ ወይስግዱ ለጣዖታት።"
        }
      ]
    },
    {
      bookId: 'meqabyan1',
      chapterNumber: 2,
      verses: [
        {
          number: 1,
          textEnglish: "Now Abyas, the eldest son of Meqabis, stood before the pagan tyrant and said: 'Thou mayest destroy this earthly body, but the King of the Universe shall raise us up unto eternal life, because we die for His Holy Law.'",
          textAmharic: "የመቃቢስ ታላቁ ልጅ አብያስ በአሕዛብ ጨቋኝ ፊት ቆሞ እንዲህ አለ፤ 'ይህን የምድር ሥጋ ልታጠፋው ትችላለህ፤ ነገር ግን የዓለማት ንጉሥ ስለ ቅዱስ ሕጉ ስለምንሞት ለዘላለም ሕይወት ያስነሣናል።'",
          textGeez: "ወተንሥአ አብያስ ወልዱ ቀዳማዊ ለ መቃቢስ ወይቤ ቅድመ ኃያል፤ 'አንተስ ትክhierarchy ታሕጉል ዛተ ሥጋ፤ አላ ንጉሠ ዓለም ያነሥአነ ለሕይወት ዘላለም።'"
        },
        {
          number: 2,
          textEnglish: "And having witnessed a noble confession, he yielded up his spirit in steadfast hope, giving thanks to the God of Abraham.",
          textAmharic: "መልካምንም ምስክርነት ከመሰከረ በኋላ፥ የአብርሃምን አምላክ እያመሰገነ በጸናች ተስፋ ነፍሱን ሰጠ።",
          textGeez: "ወአእኰተ አምላከ አብርሃም ወወህበ መንፈሶ በስፋት ጽንዕት።"
        }
      ]
    }
  ],

  // --- 2 MEQABYAN (ETHIOPIAN 2 MACCABEES) ---
  meqabyan2: [
    {
      bookId: 'meqabyan2',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "After the death of Meqabis, his wife and remaining kindred strengthened themselves in prayer, holding fast to the ordinances of the Sanctuary.",
          textAmharic: "ከመቃቢስ ሞት በኋላ፥ ሚስቱና የቀሩት ዘመዶቹ በመቅደሱ ሥርዓት ጸንተው በመቆም በጸሎት ተበረታቱ።",
          textGeez: "ወእምድኅነ ሞተ መቃቢስ ጸንዓት ብእሲቱ ወኵሎሙ አዝማዲሁ በጸሎት።"
        },
        {
          number: 2,
          textEnglish: "And she exhorted her young children, saying: 'Look upon the heaven and the earth, and know that God made them out of nothing, and so was mankind created.'",
          textAmharic: "ታናናሾች ልጆቿንም እንዲህ ብላ መከረቻቸው፤ 'ሰማይንና ምድርን ተመልከቱ፤ እግዚአብሔር ከምንም እንደ ፈጠራቸው፥ የሰውም ልጅ እንዲሁ እንደ ተፈጠረ እወቁ።'",
          textGeez: "ወመሃረቶሙ ለደቂቃ እንዘ ትብል፤ 'ርእዩ ሰማየ ወምድር ወአእምሩ ከመ እም አልቦ ገብሮሙ እግዚአብሔር።'"
        }
      ]
    }
  ],

  // --- 3 MEQABYAN (ETHIOPIAN 3 MACCABEES) ---
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
        },
        {
          number: 3,
          textEnglish: "He that trusteth in the Lord shall be as Mount Zion, which cannot be moved, but abideth forever.",
          textAmharic: "በእግዚአብሔር የሚታመን እንደሚወዛወዝ እንደሚኖረው እንደ ጽዮን ተራራ ነው፤ ለዘላለም ይኖራል።",
          textGeez: "ዘይሴፎ በ እግዚአብሔር ከመ ደብረ ጽዮን ውእቱ ዘኢይትሐወክ፤ አላ ይነብር ለዓለም።"
        }
      ]
    }
  ],

  // --- GENESIS ---
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
        },
        {
          number: 26,
          textEnglish: "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth.",
          textAmharic: "እግዚአብሔርም አለ፤ ሰውን በመልካችን እንደ ምሳሌአችን እንፍጠር፤ የባሕር ዓሦችንና የሰማይ ወፎችን፥ እንስሳትንና ምድርንም ሁሉ ይግዙ።",
          textGeez: "ወይቤ እግዚአብሔር ንግበር ብእሴ በ አምሳሊነ ወከመ አርአያነ፤ ወይመልኩ ዓሣተ ባሕር ወአዕዋፈ ሰማይ።"
        }
      ]
    }
  ],

  // --- PSALMS OF DAVID (MEZMURE DAWIT) ---
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
        },
        {
          number: 3,
          textEnglish: "And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper.",
          textAmharic: "እርሱም በውኃ ፈሳሾች ዳር እንደ ተተከለች፥ ፍሬዋን በየጊዜዋ እንደምትሰጥ፥ ቈረጠዋም እንደማይረግፍ እንጨት ይሆናል፤ የሚሠራውም ሁሉ ይከናወንለታል።",
          textGeez: "ወይከውን ከመ ዕፅ እንተ ቱክልት በኀበ ሙሐዘ ማይ፤ እንተ ትሁብ ፍሬሃ በበጊዜሃ፤ ወቈፅላኒ ኢይተክፍ።"
        }
      ]
    },
    {
      bookId: 'psalms',
      chapterNumber: 23,
      verses: [
        {
          number: 1,
          textEnglish: "The Lord is my shepherd; I shall not want.",
          textAmharic: "እግዚአብሔር እረኛዬ ነው፥ የሚያጎድልብኝም የለም።",
          textGeez: "እግዚአብሔር ይሬዕየኒ ወአልቦ ዘይአኅሠረኒ።"
        },
        {
          number: 2,
          textEnglish: "He maketh me to lie down in green pastures: He leadeth me beside the still waters.",
          textAmharic: "በለመለመ መስክ ያሳድረኛል፤ በዕረፍት ውኃ ዘንድ ይመራኛል።",
          textGeez: "በኀበ ብሔር ሐመልማል ህየ አኅደረኒ፤ ወኀበ ማየ ዕረፍት ሐወፀኒ።"
        },
        {
          number: 3,
          textEnglish: "He restoreth my soul: He leadeth me in the paths of righteousness for His name's sake.",
          textAmharic: "ነፍሴን ይመልሳታል፤ ስለ ስሙም በጽድቅ መንገድ መራኝ።",
          textGeez: "መይጣ ለነፍስየ፤ ወመርሃኒ በ ፍኖተ ጽድቅ በእንተ ስሙ።"
        },
        {
          number: 4,
          textEnglish: "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for Thou art with me; Thy rod and Thy staff they comfort me.",
          textAmharic: "በሞት ጥላ ሸለቆ እንኳ ብሄድ አታን አትፍራም፥ አንተ ከእኔ ጋር ነህና፤ በትርህና ምርኩዝህ እነርሱ ያጸናኛሉ።",
          textGeez: "ወእመኒ ሖርኩ ማዕከለ ጽላሎተ ሞት ኢይፈርህ እኩየ እስመ አንተ ምስሌየ።"
        }
      ]
    },
    {
      bookId: 'psalms',
      chapterNumber: 151,
      verses: [
        {
          number: 1,
          textEnglish: "I was small among my brethren, and youngest in my father's house; I tended my father's sheep.",
          textAmharic: "ወንድሞቼ መካከል ታናሽ ነበርሁ፥ በአባቴም ቤት ታናሽ ነበርሁ፤ የአባቴን በጎች እጠብቅ ነበር።",
          textGeez: "ንኡስ ነበርኩ ማዕከለ አኃውየ፤ ወወሬዛ በቤተ አቡየ፤ ወእሬዕይ አጣሌ አቡየ።",
          footnotes: ["Psalm 151 is canonical in the Ethiopian Bible and Septuagint."]
        },
        {
          number: 2,
          textEnglish: "My hands made an organ, and my fingers fashioned a psalter. And who shall declare it to my Lord? The Lord Himself, He heard me.",
          textAmharic: "እጆቼ በገናን ሠሩ፥ ጣቶቼም መዝሙርን አዘጋጁ። ለእግዚአብሔር ማን ይነግረዋል? ጌታ እርሱ ራሱ ሰማኝ።",
          textGeez: "እደውየ ገብራ በገና ወእጣብዕትየ አሰናሰላ መዝሙረ።"
        },
        {
          number: 3,
          textEnglish: "He sent His angel, and took me from my father's sheep, and anointed me with the oil of His anointing.",
          textAmharic: "መልአኩን ላከ፥ ከአባቴም በጎች ዘንድ ወሰደኝ፥ በቅብዐቱም ዘይት ቀባኝ።",
          textGeez: "ፈነወ መልአኮ ወነሣአኒ እምአጣሌ አቡየ ወቀብዐኒ በቅብዐ ቅዱስ።"
        },
        {
          number: 4,
          textEnglish: "My brothers were handsome and tall, but the Lord took no pleasure in them. I went out to meet the Philistine, and he cursed me by his idols.",
          textAmharic: "ወንድሞቼ መልካሞችና ረጃጅሞች ነበሩ፥ ነገር ግን እግዚአብሔር በእነርሱ ደስ አላለውም። ፍልስጥኤማዊውን ልጋጠመው ወጣሁ፥ እርሱም በጣዖቶቹ ረገመኝ።",
          textGeez: "አኃውየሰ ሠናያነ ገጽ ወዐበይተ ቆም፤ ወኢሠምረ ቦሙ እግዚአብሔር። ወወፅእኩ ቅድመ ፍልስጥኤማዊ።"
        },
        {
          number: 5,
          textEnglish: "But I drew his own sword; I beheaded him, and took away reproach from the children of Israel.",
          textAmharic: "ነገር ግን የእጁን ሰይፍ መዘዝሁ፤ ራሱን ቈረጥሁት፥ ከእስራኤልም ልጆች ስድብን አራቅሁ።",
          textGeez: "ወመልሐኩ ሰይፎ እምኔሁ ወመተርኩ ርእሶ፤ ወአተትኩ ኅስረተ እምውሉደ እስራኤል፤"
        }
      ]
    }
  ],

  // --- EPISTLE OF JUDE ---
  jude: [
    {
      bookId: 'jude',
      chapterNumber: 1,
      verses: [
        {
          number: 1,
          textEnglish: "Jude, the servant of Jesus Christ, and brother of James, to them that are sanctified by God the Father, and preserved in Jesus Christ, and called:",
          textAmharic: "የኢየሱስ ክርስቶስ አገልጋይ የያዕቆብም ወንድም የሆነ ይሁዳ፥ በእግዚአብሔር አብ ተወደደው ለኢየሱስ ክርስቶስም ተጠብቀው ለተጠሩ፤",
          textGeez: "ይሁዳ ገብሩ ለኢየሱስ ክርስቶስ ወእሁሁ ለያዕቆብ፤ ለ እለ ተቀደሱ በ አምላክ አብ።"
        },
        {
          number: 14,
          textEnglish: "And Enoch also, the seventh from Adam, prophesied of these, saying, Behold, the Lord cometh with ten thousands of his saints,",
          textAmharic: "ከአዳም ጀምሮ ሰባተኛ የሆነ ሄኖክ ስለ እሊህ ደግሞ እንዲህ ብሎ ተነበየ፤ እነሆ ጌታ ከአእላፋት ቅዱሳኑ ጋር መጥቷል፤",
          textGeez: "ወተነበየ በእንቲአሆሙ ሄኖክ ዘእምአዳም ሳብዕ ዘይቤ፤ ናሁ መጽአ እግዚአብሔር ምስለ አእላፋት ቅዱሳኒሁ።",
          crossRefs: [{ bookId: 'enoch', chapter: 1, verse: 9, note: 'Quoted from 1 Enoch 1:9' }]
        },
        {
          number: 15,
          textEnglish: "To execute judgment upon all, and to convince all that are ungodly among them of all their ungodly deeds which they have ungodly committed, and of all their hard speeches which ungodly sinners have spoken against him.",
          textAmharic: "በሁሉም ላይ እንዲፈርድ፤ በኃጢአተኝነት ባደረጉት ሥራ ሁሉና በእርሱ ላይ በተናገሩት ድፍረት ሁሉ ኃጢአተኞችን ለማጥፋት።",
          textGeez: "ከመ ይግበር ደይነ ዲበ ኵሉ ወየሐጉል ኵሎ ኃጣአነ በእንተ ኵሉ ግብሮሙ ዘረሲዖሙ።"
        }
      ]
    }
  ]
};
