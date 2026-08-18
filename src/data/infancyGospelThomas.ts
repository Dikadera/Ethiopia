export interface ApocryphaVerse {
  number: number;
  text: string;
}

export interface ApocryphaChapter {
  number: number;
  title?: string;
  verses: ApocryphaVerse[];
}

export interface ApocryphaBook {
  id: string;
  title: string;
  subtitle: string;
  originalLanguage: string;
  datedTo: string;
  attribution: string;
  summary: string;
  significance: string;
  themes: string[];
  chapters: ApocryphaChapter[];
}

export const INFANCY_GOSPEL_OF_THOMAS: ApocryphaBook = {
  id: 'infancy-thomas',
  title: 'Infancy Gospel of Thomas',
  subtitle: 'The Childhood Deeds of Our Lord Jesus Christ',
  originalLanguage: 'Greek (original), Syriac, Latin, Ethiopic translations extant',
  datedTo: '2nd century AD (c. 140–170 CE)',
  attribution: 'Attributed to "Thomas the Israelite Philosopher"',
  summary:
    'The Infancy Gospel of Thomas is a biographical gospel narrative that recounts the miraculous childhood deeds of Jesus Christ from the ages of five to twelve. It covers the years of Jesus\'s life that the canonical gospels pass over in silence, narrating extraordinary miracles, divine wisdom, and episodes that reveal both the power and growing human development of the divine child. It was widely read in early Christianity and survives in Greek, Syriac, Latin, Slavonic, and Ethiopic manuscripts.',
  significance:
    'This text provides insight into early Christian fascination with the hidden years of Jesus\'s childhood. It influenced Quranic narratives of Jesus (Surah 3:49, 5:110) and shaped Marian devotion. The Ethiopic Church preserved it as part of its broader canon of sacred literature.',
  themes: [
    'Divine Child',
    'Hidden Years of Jesus',
    'Miracles and Power',
    'Wisdom and Learning',
    'Jewish Law and Sabbath',
    'Family and Childhood',
  ],
  chapters: [
    {
      number: 1,
      title: 'The Living Sparrows',
      verses: [
        {
          number: 1,
          text: 'I, Thomas the Israelite, tell and make known to you all, brethren of the Gentiles, all the works of the childhood of our Lord Jesus Christ and his mighty deeds, which he did when he was born in our land.',
        },
        {
          number: 2,
          text: 'The beginning is as follows.',
        },
        {
          number: 3,
          text: 'When this boy Jesus was five years old he was playing at the ford of a brook, and he gathered together the waters that flowed there into pools, and made them straightway clean, and commanded them by his word alone.',
        },
        {
          number: 4,
          text: 'He made soft clay and fashioned from it twelve sparrows. And it was the Sabbath when he did these things.',
        },
        {
          number: 5,
          text: 'And there were also many other little children playing with him.',
        },
        {
          number: 6,
          text: 'And a certain Jew, when he saw what Jesus did, playing upon the Sabbath day, departed straightway and told his father Joseph: "Look, your child is at the brook, and he has taken clay and fashioned twelve little birds and has profaned the Sabbath."',
        },
        {
          number: 7,
          text: 'And Joseph came to the place and saw; and cried out to him, saying: "Why do you that which is not lawful to do on the Sabbath?" But Jesus clapped his hands together and cried out to the sparrows and said to them: "Go!" And the sparrows took their flight and went away chirping.',
        },
        {
          number: 8,
          text: 'And when the Jews saw it they were amazed, and departed and told their chief men what they had seen Jesus do.',
        },
      ],
    },
    {
      number: 2,
      title: 'The Son of Annas the Scribe',
      verses: [
        {
          number: 1,
          text: 'But the son of Annas the scribe was standing there with Joseph; and he took a branch of a willow and dispersed the waters which Jesus had gathered together.',
        },
        {
          number: 2,
          text: 'And when Jesus saw what was done, he was wroth and said unto him: "O evil, ungodly, and foolish one, what hurt did the pools and the waters do to you? Behold, now also you shall wither like a tree, and shall not bear leaves, neither root, nor fruit."',
        },
        {
          number: 3,
          text: 'And straightway that lad withered up wholly, but Jesus departed and went unto Joseph\'s house. But the parents of him that was withered took him up, bewailing his youth, and brought him to Joseph, and accused him: "What a child you have, that does such things."',
        },
      ],
    },
    {
      number: 3,
      title: 'The Boy Who Ran Through the Village',
      verses: [
        {
          number: 1,
          text: 'After that again he went through the village, and a child ran and dashed against his shoulder. And Jesus was provoked and said unto him: "You shall not finish your course." And immediately he fell down and died.',
        },
        {
          number: 2,
          text: 'But certain when they saw what was done said: "Whence was this young child born, for that every word of his is an accomplished deed?" And the parents of the dead child came unto Joseph and blamed him and said: "Since you have such a child, it is not possible for you to dwell with us in the village: or else teach him to bless and not to curse: for he is bereaving us of our children."',
        },
      ],
    },
    {
      number: 4,
      title: 'Jesus Before Zacchaeus the Teacher',
      verses: [
        {
          number: 1,
          text: 'And Joseph called the young child apart and admonished him, saying: "Why do you such things, that these suffer and hate us and persecute us?" But Jesus said: "I know that these words are not yours: nevertheless for your sake I will hold my peace: but they shall bear their punishment." And straightway they that accused him were blinded.',
        },
        {
          number: 2,
          text: 'And they that saw it were sore afraid and perplexed, and said concerning him: "Every word that he speaks whether it be good or bad, is a deed, and a marvel." And when Joseph saw that Jesus had done such a thing, he arose and took him by the ear and wrung it sore.',
        },
        {
          number: 3,
          text: 'And Jesus was wroth and said unto him: "It is enough for you to seek and not to find, and verily you have done foolishly: Know you not that I am yours? Vex me not."',
        },
      ],
    },
    {
      number: 5,
      title: 'The Schoolmaster Zacchaeus',
      verses: [
        {
          number: 1,
          text: 'Now a certain teacher, Zacchaeus by name, who was standing in a certain place, heard Jesus speaking these things to his father, and marveled greatly that, being a young child, he spoke such things.',
        },
        {
          number: 2,
          text: 'And after a few days he came near to Joseph and said unto him: "You have a wise child, and he has understanding. Give him to me that he may learn letters, and I will teach him with the letters all knowledge, and to salute all the elders and to honor them as grandfathers and fathers, and to love them of his own age."',
        },
        {
          number: 3,
          text: 'And he told him all the letters from Alpha to Omega clearly, with much questioning. But Jesus looked upon Zacchaeus the teacher and said unto him: "You that know not the Alpha according to its nature, how can you teach others the Beta? You hypocrite, first, if you know it, teach the Alpha, and then we shall believe you concerning the Beta."',
        },
        {
          number: 4,
          text: 'Then he began to confound the mouth of the teacher concerning the first letter, and he could not answer him.',
        },
        {
          number: 5,
          text: 'And in the hearing of many the young child said to Zacchaeus: "Hear, O teacher, the ordinance of the first letter and pay heed to this, how that it has lines, and a middle mark which you see, that it has two strokes meeting in the middle, tapering to a point at the top, of three signs, the same in kind, subject and subordinate, of equal measure."',
        },
      ],
    },
    {
      number: 6,
      title: 'Zacchaeus Amazed at the Child',
      verses: [
        {
          number: 1,
          text: 'Now when Zacchaeus the teacher heard so many allegories of the first letter spoken by the young child, he was at a great loss concerning the answer, and concerning the teaching of so great a child.',
        },
        {
          number: 2,
          text: 'And he said to those that were present: "Woe is me, wretch that I am, for I am confounded, for I have brought shame upon myself by introducing this young child. Take him away therefore, I beseech you, my brother Joseph: I cannot endure the severity of his look; I cannot make out his speech at all."',
        },
        {
          number: 3,
          text: '"For this young child is not earthly-born; he is able to tame even fire. Peradventure he was born before the creation of the world. What manner of womb bore him, what manner of mother nurtured him? I know not. Woe is me, O my friend, he stupefies me, I cannot follow his understanding."',
        },
        {
          number: 4,
          text: '"I deceived myself, thrice wretched man that I am: I strove to get me a disciple and I have found myself having a teacher. O my shame, my friends. I am an old man and he has overcome me, young child as he is, and I cannot look him in the face."',
        },
      ],
    },
    {
      number: 7,
      title: 'The Raising of Zeno',
      verses: [
        {
          number: 1,
          text: 'And when all of them were marveling because of this, they said: "This is a wonder of wonders, what we have seen and heard." And Jesus, when he saw their amazement, departed and went into his house; and his parents followed him.',
        },
        {
          number: 2,
          text: 'Now a child named Zeno, a playmate of Jesus, was going along the upper story of a house when he suddenly fell down from it and died. When the other children who had been playing with him saw this, they all ran away. Jesus was left standing there by himself.',
        },
        {
          number: 3,
          text: 'The parents of the child who had died came and accused Jesus, claiming that he had thrown him down. Jesus denied it; and they were abusing him.',
        },
        {
          number: 4,
          text: 'Then Jesus leaped down from the porch and stood by the body of the child, and cried with a loud voice: "Zeno! Zeno! Arise and tell me: Did I throw you down?" And immediately he arose and said: "No, Lord, you did not throw me down, but raised me up."',
        },
        {
          number: 5,
          text: 'And when they saw, they were amazed; and the parents of the child glorified God for the sign that had come to pass, and worshipped Jesus.',
        },
      ],
    },
    {
      number: 8,
      title: 'The Healing of the Wood-cutter',
      verses: [
        {
          number: 1,
          text: 'After a few days a young man was cleaving wood in the neighborhood, and the axe fell and cut the sole of his foot; and when he was losing much blood he was at the point of death.',
        },
        {
          number: 2,
          text: 'And when there was a tumult and concourse of people, the young child Jesus also ran thither; and he forced his way through the crowd and touched the foot of the young man that was smitten.',
        },
        {
          number: 3,
          text: 'And straightway it was healed. And he said to the young man: "Arise now, cleave the wood and remember me." And when the crowd saw what was done, they worshipped the young child, saying: "Verily the spirit of God dwells in this young child."',
        },
      ],
    },
    {
      number: 9,
      title: 'Water Carried in a Cloak',
      verses: [
        {
          number: 1,
          text: 'Now when he was six years old, his mother sent him to draw water and bring it home, and she gave him a pitcher.',
        },
        {
          number: 2,
          text: 'But in the multitude he stumbled and the pitcher was broken. But Jesus spread out the garment he was wearing and filled it with water and brought it to his mother.',
        },
        {
          number: 3,
          text: 'And when his mother saw the miracle, she kissed him; and she kept within herself the mysteries which she had seen him do.',
        },
      ],
    },
    {
      number: 10,
      title: 'The Sowing of Wheat',
      verses: [
        {
          number: 1,
          text: 'Again, in the time of sowing, the young child went out with his father to sow wheat in their land; and as his father sowed, the young child Jesus sowed likewise one corn of wheat.',
        },
        {
          number: 2,
          text: 'And when he had reaped it and threshed it, he brought in a hundred measures; and he called all the poor of the village to the threshing floor and gave them the corn, and Joseph took the residue of the corn. He was eight years old when he worked this miracle.',
        },
      ],
    },
    {
      number: 11,
      title: 'The Lengthening of the Beam',
      verses: [
        {
          number: 1,
          text: 'Now his father was a carpenter and made at that time ploughs and yokes. And there was required of him a bed by a certain rich man, that he should make it for him.',
        },
        {
          number: 2,
          text: 'But one beam being shorter than the other, Joseph was at a loss what to do. But the young child Jesus said to his father Joseph: "Lay down the two pieces of wood and make them even from the middle to one end."',
        },
        {
          number: 3,
          text: 'And Joseph did as the young child said to him. And Jesus stood at the other end and took hold of the shorter piece of wood, and stretched it and made it equal with the other.',
        },
        {
          number: 4,
          text: 'And his father Joseph saw it and marveled: and he embraced the young child and kissed him, saying: "Happy am I for that God has given me this young child."',
        },
      ],
    },
    {
      number: 12,
      title: 'The Second Master',
      verses: [
        {
          number: 1,
          text: 'And Joseph, seeing the understanding of the child, and his age, that it was coming to the full, thought again to bring him to learn letters. And he brought him to another teacher.',
        },
        {
          number: 2,
          text: 'And the teacher said to Joseph: "First of all I will teach him Greek, and then Hebrew." For the teacher knew the ability of the child, and was afraid of him. Nevertheless he wrote the alphabet and practiced him upon it for a long time; but he gave no answer.',
        },
        {
          number: 3,
          text: 'And Jesus said to him: "If you are indeed a teacher, and if you know the letters well, tell me the power of the Alpha and I will tell you the power of the Beta." And the teacher was angered at this and struck him on the head.',
        },
        {
          number: 4,
          text: 'And the child was hurt and cursed him; and straightway he swooned away and fell on his face on the ground. And the child returned to Joseph\'s house: and Joseph was grieved and commanded his mother: "Let him not go outside the door, for they die that provoke him to wrath."',
        },
      ],
    },
    {
      number: 13,
      title: 'The Third Master and Healing',
      verses: [
        {
          number: 1,
          text: 'And after some time, another master again, a true friend of Joseph, said to him: "Bring the child to me to the school; peradventure I with caressing shall be able to teach him his letters." And Joseph said: "If you have courage, brother, take him with you." And he took him with fear and much trouble, but the child went with him gladly.',
        },
        {
          number: 2,
          text: 'And going boldly into the school he found a book lying on the reading desk, and taking it he read not the letters therein but opened his mouth and spoke by the Holy Spirit and taught the law to them that stood by.',
        },
        {
          number: 3,
          text: 'And a great multitude assembled together and stood hearing him, and marveled at the beauty of his teaching and the readiness of his words, that he a young child spoke such things.',
        },
        {
          number: 4,
          text: 'But when Joseph heard it, he was afraid and ran to the school, wondering whether this master was also without skill. But the master said to Joseph: "Know, brother, that I received the child to teach him, and he is full of grace and wisdom; and now I beg you, brother, take him home."',
        },
        {
          number: 5,
          text: 'When the child heard that, he laughed at him and said: "Since you have spoken rightly and have witnessed rightly, for your sake he also that was smitten shall be healed." And straightway the other master was healed. And Joseph took the young child and went away home.',
        },
      ],
    },
    {
      number: 14,
      title: 'The Raising of James',
      verses: [
        {
          number: 1,
          text: 'And Joseph sent his son James to bind wood and carry it home, and the young child Jesus also followed him. And as James was gathering faggots, a viper bit his hand.',
        },
        {
          number: 2,
          text: 'And as he was dying, Jesus came near and breathed upon the bite; and straightway the pain ceased, and the beast burst, and forthwith James continued whole.',
        },
      ],
    },
    {
      number: 15,
      title: 'The Raising of a Dead Child',
      verses: [
        {
          number: 1,
          text: 'And after this, a little child, a neighbor of Joseph, died, and his mother lamented him sore. And Jesus heard that there was great mourning and trouble, and he ran quickly and found the child dead, and touched his breast and said: "I say unto you, do not die but live, and be with your mother."',
        },
        {
          number: 2,
          text: 'And immediately the child looked up and laughed. And he said to the woman: "Take him and give him milk, and remember me."',
        },
        {
          number: 3,
          text: 'And the multitude that stood by saw and marveled, and said: "Truly this young child is either a god or an angel of God, for every word of his is an accomplished deed." And Jesus departed thence and played with the other children.',
        },
      ],
    },
    {
      number: 16,
      title: 'Jesus Heals a Builder',
      verses: [
        {
          number: 1,
          text: 'And after some time, there was a building being erected, and a great disturbance arose. And Jesus arose and went thither. And when he saw a man lying dead, he took him by the hand and said: "Man, I say unto you, arise and do your work." And immediately he rose up and worshipped him.',
        },
        {
          number: 2,
          text: 'And the multitude saw and marveled, and said: "This young child is from heaven, for he has saved many souls from death, and he has power to save them all his life long."',
        },
      ],
    },
    {
      number: 17,
      title: 'Jesus in the Temple at Twelve',
      verses: [
        {
          number: 1,
          text: 'And when he was twelve years old, his parents went according to the custom to Jerusalem to the feast of the passover with their company; and after the passover they returned home.',
        },
        {
          number: 2,
          text: 'And as they were returning, the child Jesus went back up to Jerusalem; but his parents supposed that he was in the company. And when they had gone a day\'s journey, they sought him among the kinsfolk; and when they found him not, they returned to Jerusalem to seek him.',
        },
        {
          number: 3,
          text: 'And after the third day they found him in the Temple sitting in the midst of the doctors and hearing them and asking them questions. And they were all astonished and marveled at him.',
        },
        {
          number: 4,
          text: 'And his mother Mary came near and said unto him: "Why have you done this to us, my child? Behold, your father and I seek you sorrowing." And Jesus said unto them: "Why do you seek me? Do you not know that I must be occupied in my Father\'s house?"',
        },
        {
          number: 5,
          text: 'And the scribes and the Pharisees said: "Are you the mother of this child?" And she said: "I am." And they said to her: "Blessed are you among women, because the Lord has blessed the fruit of your womb. For such glory and such virtue and wisdom we have never seen nor heard at any time."',
        },
        {
          number: 6,
          text: 'Jesus arose and followed his mother, and was subject to his parents, and his mother kept all these things that had come to pass. And Jesus increased in wisdom and stature and grace. To whom be the glory for ever and ever. Amen.',
        },
      ],
    },
  ],
};
