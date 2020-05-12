/* SPDX-License-Identifier: MPL-2.0 */

/* Copyright © 2020 Jamie Nguyen
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/*
 * ESV
 *  Scripture quotations are from the ESV® Bible (The Holy Bible, English
 *  Standard Version®), copyright © 2001 by Crossway, a publishing ministry
 *  of Good News Publishers. Used by permission. All rights reserved.
 *
 * NIV
 *  Scripture quotations taken from The Holy Bible, New International Version®
 *  NIV® Copyright© 1973 1978 1984 2011 by Biblica, Inc.™ Used by permission.
 *  All rights reserved worldwide.
 *
 * KJV
 *  Scripture quotations from The Authorized (King James) Version. Rights in
 *  the Authorized Version in the United Kingdom are vested in the Crown.
 *  Reproduced by permission of the Crown’s patentee, Cambridge University
 *  Press. Rights in the Authorized outside of the United Kingdom are in the
 *  public domain.
 */

export type VerseDataType = {
  id: string;
  book: string;
  chapter: number;
  startVerse: number;
  numVerses: number;
  text: {
    esv: string;
    kjv: string;
    niv: string;
  };
};

const VerseData: VerseDataType[] = [
  {
    id: 'genesis-1:1',
    book: 'Genesis',
    chapter: 1,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv: 'In the beginning, God created the heavens and the earth.',
      kjv: 'In the beginning God created the heaven and the earth.',
      niv: 'In the beginning God created the heavens and the earth.',
    },
  },
  {
    id: 'genesis-1:2',
    book: 'Genesis',
    chapter: 1,
    startVerse: 2,
    numVerses: 1,
    text: {
      esv:
        'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
      kjv:
        'And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.',
      niv:
        'Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.',
    },
  },
  {
    id: 'genesis-1:28',
    book: 'Genesis',
    chapter: 1,
    startVerse: 28,
    numVerses: 1,
    text: {
      esv:
        'And God blessed them. And God said to them, “Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth.”',
      kjv:
        'And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.',
      niv:
        'God blessed them and said to them, “Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground.”',
    },
  },
  {
    id: 'genesis-2:2-3',
    book: 'Genesis',
    chapter: 2,
    startVerse: 2,
    numVerses: 2,
    text: {
      esv:
        'And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation.',
      kjv:
        'And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made. And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made.',
      niv:
        'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy, because on it he rested from all the work of creating that he had done.',
    },
  },
  {
    id: 'genesis-9:15-16',
    book: 'Genesis',
    chapter: 9,
    startVerse: 15,
    numVerses: 2,
    text: {
      esv:
        'I will remember my covenant that is between me and you and every living creature of all flesh. And the waters shall never again become a flood to destroy all flesh. When the bow is in the clouds, I will see it and remember the everlasting covenant between God and every living creature of all flesh that is on the earth.',
      kjv:
        'And I will remember my covenant, which is between me and you and every living creature of all flesh; and the waters shall no more become a flood to destroy all flesh. And the bow shall be in the cloud; and I will look upon it, that I may remember the everlasting covenant between God and every living creature of all flesh that is upon the earth.',
      niv:
        'I will remember my covenant between me and you and all living creatures of every kind. Never again will the waters become a flood to destroy all life. Whenever the rainbow appears in the clouds, I will see it and remember the everlasting covenant between God and all living creatures of every kind on the earth.',
    },
  },
  {
    id: 'genesis-12:2-3',
    book: 'Genesis',
    chapter: 12,
    startVerse: 2,
    numVerses: 2,
    text: {
      esv:
        'And I will make of you a great nation, and I will bless you and make your name great, so that you will be a blessing. I will bless those who bless you, and him who dishonors you I will curse, and in you all the families of the earth shall be blessed.',
      kjv:
        'And I will make of thee a great nation, and I will bless thee, and make thy name great; and thou shalt be a blessing: And I will bless them that bless thee, and curse him that curseth thee: and in thee shall all families of the earth be blessed.',
      niv:
        'I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing. I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you.',
    },
  },
  {
    id: 'exodus-19:5-6',
    book: 'Exodus',
    chapter: 19,
    startVerse: 5,
    numVerses: 2,
    text: {
      esv:
        'Now therefore, if you will indeed obey my voice and keep my covenant, you shall be my treasured possession among all peoples, for all the earth is mine; and you shall be to me a kingdom of priests and a holy nation. These are the words that you shall speak to the people of Israel.',
      kjv:
        'Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine: And ye shall be unto me a kingdom of priests, and an holy nation. These are the words which thou shalt speak unto the children of Israel.',
      niv:
        'Now if you obey me fully and keep my covenant, then out of all nations you will be my treasured possession. Although the whole earth is mine, you will be for me a kingdom of priests and a holy nation. These are the words you are to speak to the Israelites.',
    },
  },
  {
    id: 'leviticus-19:18',
    book: 'Leviticus',
    chapter: 19,
    startVerse: 18,
    numVerses: 1,
    text: {
      esv:
        '“You shall not take vengeance or bear a grudge against the sons of your own people, but you shall love your neighbor as yourself: I am the LORD.”',
      kjv:
        '“Thou shalt not avenge, nor bear any grudge against the children of thy people, but thou shalt love thy neighbour as thyself: I am the LORD.”',
      niv:
        '“Do not seek revenge or bear a grudge against anyone among your people, but love your neighbor as yourself. I am the LORD.”',
    },
  },
  {
    id: 'numbers-6:24-26',
    book: 'Numbers',
    chapter: 6,
    startVerse: 24,
    numVerses: 3,
    text: {
      esv:
        '“The LORD bless you and keep you; the LORD make his face to shine upon you and be gracious to you; the LORD lift up his countenance upon you and give you peace.”',
      kjv:
        '“The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.”',
      niv:
        '“The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace.”',
    },
  },
  {
    id: 'numbers-23:19',
    book: 'Numbers',
    chapter: 23,
    startVerse: 19,
    numVerses: 1,
    text: {
      esv:
        'God is not man, that he should lie, or a son of man, that he should change his mind. Has he said, and will he not do it? Or has he spoken, and will he not fulfill it?',
      kjv:
        'God is not a man, that he should lie; neither the son of man, that he should repent: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good?',
      niv:
        'God is not human, that he should lie, not a human being, that he should change his mind. Does he speak and then not act? Does he promise and not fulfill?',
    },
  },
  {
    id: 'deuteronomy-4:2',
    book: 'Deuteronomy',
    chapter: 4,
    startVerse: 2,
    numVerses: 1,
    text: {
      esv:
        'You shall not add to the word that I command you, nor take from it, that you may keep the commandments of the LORD your God that I command you.',
      kjv:
        'Ye shall not add unto the word which I command you, neither shall ye diminish ought from it, that ye may keep the commandments of the LORD your God which I command you.',
      niv:
        'Do not add to what I command you and do not subtract from it, but keep the commands of the LORD your God that I give you.',
    },
  },
  {
    id: 'deuteronomy-6:5-7',
    book: 'Deuteronomy',
    chapter: 6,
    startVerse: 5,
    numVerses: 3,
    text: {
      esv:
        'You shall love the LORD your God with all your heart and with all your soul and with all your might. And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.',
      kjv:
        'And thou shalt love the LORD thy God with all thine heart, and with all thy soul, and with all thy might. And these words, which I command thee this day, shall be in thine heart: And thou shalt teach them diligently unto thy children, and shalt talk of them when thou sittest in thine house, and when thou walkest by the way, and when thou liest down, and when thou risest up.',
      niv:
        'Love the LORD your God with all your heart and with all your soul and with all your strength. These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up.',
    },
  },
  {
    id: 'deuteronomy-31:6',
    book: 'Deuteronomy',
    chapter: 31,
    startVerse: 6,
    numVerses: 1,
    text: {
      esv:
        'Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you.',
      kjv:
        'Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.',
      niv:
        'Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.',
    },
  },
  {
    id: 'deuteronomy-31:8',
    book: 'Deuteronomy',
    chapter: 31,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        '“It is the LORD who goes before you. He will be with you; he will not leave you or forsake you. Do not fear or be dismayed.”',
      kjv:
        '“And the LORD, he it is that doth go before thee; he will be with thee, he will not fail thee, neither forsake thee: fear not, neither be dismayed.”',
      niv:
        '“The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.”',
    },
  },
  {
    id: 'deuteronomy-32:3-4',
    book: 'Deuteronomy',
    chapter: 32,
    startVerse: 3,
    numVerses: 2,
    text: {
      esv:
        'For I will proclaim the name of the LORD; ascribe greatness to our God! The Rock, his work is perfect, for all his ways are justice. A God of faithfulness and without iniquity, just and upright is he.',
      kjv:
        'Because I will publish the name of the LORD: ascribe ye greatness unto our God. He is the Rock, his work is perfect: for all his ways are judgment: a God of truth and without iniquity, just and right is he.',
      niv:
        'I will proclaim the name of the LORD. Oh, praise the greatness of our God! He is the Rock, his works are perfect, and all his ways are just. A faithful God who does no wrong, upright and just is he.',
    },
  },
  {
    id: 'joshua-1:5',
    book: 'Joshua',
    chapter: 1,
    startVerse: 5,
    numVerses: 1,
    text: {
      esv:
        '“No man shall be able to stand before you all the days of your life. Just as I was with Moses, so I will be with you. I will not leave you or forsake you.”',
      kjv:
        '“There shall not any man be able to stand before thee all the days of thy life: as I was with Moses, so I will be with thee: I will not fail thee, nor forsake thee.”',
      niv:
        '“No one will be able to stand against you all the days of your life. As I was with Moses, so I will be with you; I will never leave you nor forsake you.”',
    },
  },
  {
    id: 'joshua-1:8',
    book: 'Joshua',
    chapter: 1,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'This Book of the Law shall not depart from your mouth, but you shall meditate on it day and night, so that you may be careful to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success.',
      kjv:
        'This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.',
      niv:
        'Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.',
    },
  },
  {
    id: 'joshua-1:9',
    book: 'Joshua',
    chapter: 1,
    startVerse: 9,
    numVerses: 1,
    text: {
      esv:
        'Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go.',
      kjv:
        'Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.',
      niv:
        'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.',
    },
  },
  {
    id: 'joshua-24:15',
    book: 'Joshua',
    chapter: 24,
    startVerse: 15,
    numVerses: 1,
    text: {
      esv:
        'And if it is evil in your eyes to serve the LORD, choose this day whom you will serve, whether the gods your fathers served in the region beyond the River, or the gods of the Amorites in whose land you dwell. But as for me and my house, we will serve the LORD.',
      kjv:
        'And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the LORD.',
      niv:
        'But if serving the LORD seems undesirable to you, then choose for yourselves this day whom you will serve, whether the gods your ancestors served beyond the Euphrates, or the gods of the Amorites, in whose land you are living. But as for me and my household, we will serve the LORD.',
    },
  },
  {
    id: '1samuel-2:2',
    book: '1 Samuel',
    chapter: 2,
    startVerse: 2,
    numVerses: 1,
    text: {
      esv:
        'There is none holy like the LORD: for there is none besides you; there is no rock like our God.',
      kjv:
        'There is none holy as the LORD: for there is none beside thee: neither is there any rock like our God.',
      niv:
        'There is no one holy like the LORD; there is no one besides you; there is no Rock like our God.',
    },
  },
  {
    id: '1samuel-2:3',
    book: '1 Samuel',
    chapter: 2,
    startVerse: 3,
    numVerses: 1,
    text: {
      esv:
        'Talk no more so very proudly, let not arrogance come from your mouth; for the LORD is a God of knowledge, and by him actions are weighed.',
      kjv:
        'Talk no more so exceeding proudly; let not arrogancy come out of your mouth: for the LORD is a God of knowledge, and by him actions are weighed.',
      niv:
        'Do not keep talking so proudly or let your mouth speak such arrogance, for the LORD is a God who knows, and by him deeds are weighed.',
    },
  },
  {
    id: '2samuel-7:22',
    book: '2 Samuel',
    chapter: 7,
    startVerse: 22,
    numVerses: 1,
    text: {
      esv:
        'Therefore you are great, O LORD God. For there is none like you, and there is no God besides you, according to all that we have heard with our ears.',
      kjv:
        'Wherefore thou art great, O LORD God: for there is none like thee, neither is there any God beside thee, according to all that we have heard with our ears.',
      niv:
        'How great you are, Sovereign LORD! There is no one like you, and there is no God but you, as we have heard with our own ears.',
    },
  },
  {
    id: '2samuel-22:2-3',
    book: '2 Samuel',
    chapter: 22,
    startVerse: 2,
    numVerses: 2,
    text: {
      esv:
        'The LORD is my rock and my fortress and my deliverer, my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold and my refuge, my savior; you save me from violence.',
      kjv:
        'And he said, The LORD is my rock, and my fortress, and my deliverer; The God of my rock; in him will I trust: he is my shield, and the horn of my salvation, my high tower, and my refuge, my saviour; thou savest me from violence.',
      niv:
        'The LORD is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation. He is my stronghold, my refuge and my savior— from violent people you save me.',
    },
  },
  {
    id: '1kings-2:3',
    book: '1 Kings',
    chapter: 2,
    startVerse: 3,
    numVerses: 1,
    text: {
      esv:
        'And keep the charge of the LORD your God, walking in his ways and keeping his statutes, his commandments, his rules, and his testimonies, as it is written in the Law of Moses, that you may prosper in all that you do and wherever you turn.',
      kjv:
        'And keep the charge of the LORD thy God, to walk in his ways, to keep his statutes, and his commandments, and his judgments, and his testimonies, as it is written in the law of Moses, that thou mayest prosper in all that thou doest, and whithersoever thou turnest thyself.',
      niv:
        'And observe what the LORD your God requires: Walk in obedience to him, and keep his decrees and commands, his laws and regulations, as written in the Law of Moses. Do this so that you may prosper in all you do and wherever you go.',
    },
  },
  {
    id: '1chronicles-16:11',
    book: '1 Chronicles',
    chapter: 16,
    startVerse: 11,
    numVerses: 1,
    text: {
      esv: 'Seek the LORD and his strength; seek his presence continually!',
      kjv: 'Seek the LORD and his strength, seek his face continually.',
      niv: 'Look to the LORD and his strength; seek his face always.',
    },
  },
  {
    id: '1chronicles-16:34',
    book: '1 Chronicles',
    chapter: 16,
    startVerse: 34,
    numVerses: 1,
    text: {
      esv:
        'Oh give thanks to the LORD, for he is good; for his steadfast love endures forever!',
      kjv:
        'O give thanks unto the LORD; for he is good; for his mercy endureth for ever.',
      niv: 'Give thanks to the LORD, for he is good; his love endures forever.',
    },
  },
  {
    id: '1chronicles-29:14',
    book: '1 Chronicles',
    chapter: 29,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'But who am I, and what is my people, that we should be able thus to offer willingly? For all things come from you, and of your own have we given you.',
      kjv:
        'But who am I, and what is my people, that we should be able to offer so willingly after this sort? for all things come of thee, and of thine own have we given thee.',
      niv:
        'But who am I, and who are my people, that we should be able to give as generously as this? Everything comes from you, and we have given you only what comes from your hand.',
    },
  },
  {
    id: '2chronicles-7:14',
    book: '2 Chronicles',
    chapter: 7,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'If my people who are called by my name humble themselves, and pray and seek my face and turn from their wicked ways, then I will hear from heaven and will forgive their sin and heal their land.',
      kjv:
        'If my people, which are called by my name, shall humble themselves, and pray, and seek my face, and turn from their wicked ways; then will I hear from heaven, and will forgive their sin, and will heal their land.',
      niv:
        'If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land.',
    },
  },
  {
    id: 'ezra-8:23',
    book: 'Ezra',
    chapter: 8,
    startVerse: 23,
    numVerses: 1,
    text: {
      esv:
        'So we fasted and implored our God for this, and he listened to our entreaty.',
      kjv:
        'So we fasted and besought our God for this: and he was intreated of us.',
      niv:
        'So we fasted and petitioned our God about this, and he answered our prayer.',
    },
  },
  {
    id: 'nehemiah-1:5',
    book: 'Nehemiah',
    chapter: 1,
    startVerse: 5,
    numVerses: 1,
    text: {
      esv:
        'O LORD God of heaven, the great and awesome God who keeps covenant and steadfast love with those who love him and keep his commandments.',
      kjv:
        'O LORD God of heaven, the great and terrible God, that keepeth covenant and mercy for them that love him and observe his commandments.',
      niv:
        'LORD, the God of heaven, the great and awesome God, who keeps his covenant of love with those who love him and keep his commandments.',
    },
  },
  {
    id: 'job-1:21',
    book: 'Job',
    chapter: 1,
    startVerse: 21,
    numVerses: 1,
    text: {
      esv:
        'Naked I came from my mother’s womb, and naked shall I return. The LORD gave, and the LORD has taken away; blessed be the name of the LORD.',
      kjv:
        'Naked came I out of my mother’s womb, and naked shall I return thither: the LORD gave, and the LORD hath taken away; blessed be the name of the LORD.',
      niv:
        'Naked I came from my mother’s womb, and naked I will depart. The LORD gave and the LORD has taken away; may the name of the LORD be praised.',
    },
  },
  {
    id: 'job-19:25',
    book: 'Job',
    chapter: 19,
    startVerse: 25,
    numVerses: 1,
    text: {
      esv:
        'For I know that my Redeemer lives, and at the last he will stand upon the earth.',
      kjv:
        'For I know that my redeemer liveth, and that he shall stand at the latter day upon the earth.',
      niv:
        'I know that my redeemer lives, and that in the end he will stand on the earth.',
    },
  },
  {
    id: 'job-28:28',
    book: 'Job',
    chapter: 28,
    startVerse: 28,
    numVerses: 1,
    text: {
      esv:
        'And he said to man, “Behold, the fear of the Lord, that is wisdom, and to turn away from evil is understanding.”',
      kjv:
        'And unto man he said, Behold, the fear of the LORD, that is wisdom; and to depart from evil is understanding.',
      niv:
        'And he said to the human race, “The fear of the Lord—that is wisdom, and to shun evil is understanding.”',
    },
  },
  {
    id: 'psalm-1:1-2',
    book: 'Psalm',
    chapter: 1,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'Blessed is the man who walks not in the counsel of the wicked, nor stands in the way of sinners, nor sits in the seat of scoffers; but his delight is in the law of the LORD, and on his law he meditates day and night.',
      kjv:
        'Blessed is the man that walketh not in the counsel of the ungodly, nor standeth in the way of sinners, nor sitteth in the seat of the scornful. But his delight is in the law of the LORD; and in his law doth he meditate day and night.',
      niv:
        'Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, but whose delight is in the law of the LORD, and who meditates on his law day and night.',
    },
  },
  {
    id: 'psalm-4:3',
    book: 'Psalm',
    chapter: 4,
    startVerse: 3,
    numVerses: 1,
    text: {
      esv:
        'But know that the LORD has set apart the godly for himself; the LORD hears when I call to him.',
      kjv:
        'But know that the LORD hath set apart him that is godly for himself: the LORD will hear when I call unto him.',
      niv:
        'Know that the LORD has set apart his faithful servant for himself; the LORD hears when I call to him.',
    },
  },
  {
    id: 'psalm-5:3',
    book: 'Psalm',
    chapter: 5,
    startVerse: 3,
    numVerses: 1,
    text: {
      esv:
        'O LORD, in the morning you hear my voice; in the morning I prepare a sacrifice for you and watch.',
      kjv:
        'My voice shalt thou hear in the morning, O LORD; in the morning will I direct my prayer unto thee, and will look up.',
      niv:
        'In the morning, LORD, you hear my voice; in the morning I lay my requests before you and wait expectantly.',
    },
  },
  {
    id: 'psalm-8:3-4',
    book: 'Psalm',
    chapter: 8,
    startVerse: 3,
    numVerses: 2,
    text: {
      esv:
        'When I look at your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is man that you are mindful of him, and the son of man that you care for him?',
      kjv:
        'When I consider thy heavens, the work of thy fingers, the moon and the stars, which thou hast ordained; What is man, that thou art mindful of him? and the son of man, that thou visitest him?',
      niv:
        'When I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place, what is mankind that you are mindful of them, human beings that you care for them?',
    },
  },
  {
    id: 'psalm-9:9-10',
    book: 'Psalm',
    chapter: 9,
    startVerse: 9,
    numVerses: 2,
    text: {
      esv:
        'The LORD is a stronghold for the oppressed, a stronghold in times of trouble. And those who know your name put their trust in you, for you, O LORD, have not forsaken those who seek you.',
      kjv:
        'The LORD also will be a refuge for the oppressed, a refuge in times of trouble. And they that know thy name will put their trust in thee: for thou, LORD, hast not forsaken them that seek thee.',
      niv:
        'The LORD is a refuge for the oppressed, a stronghold in times of trouble. Those who know your name trust in you, for you, LORD, have never forsaken those who seek you.',
    },
  },
  {
    id: 'psalm-10:12',
    book: 'Psalm',
    chapter: 10,
    startVerse: 12,
    numVerses: 1,
    text: {
      esv: 'Arise, O LORD; O God, lift up your hand; forget not the afflicted.',
      kjv: 'Arise, O LORD; O God, lift up thine hand: forget not the humble.',
      niv: 'Arise, LORD! Lift up your hand, O God. Do not forget the helpless.',
    },
  },
  {
    id: 'psalm-19:7',
    book: 'Psalm',
    chapter: 19,
    startVerse: 7,
    numVerses: 1,
    text: {
      esv:
        'The law of the LORD is perfect, reviving the soul; the testimony of the LORD is sure, making wise the simple',
      kjv:
        'The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple.',
      niv:
        'The law of the LORD is perfect, refreshing the soul. The statutes of the LORD are trustworthy, making wise the simple.',
    },
  },
  {
    id: 'psalm-19:8',
    book: 'Psalm',
    chapter: 19,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'The precepts of the LORD are right, rejoicing the heart; the commandment of the LORD is pure, enlightening the eyes.',
      kjv:
        'The statutes of the LORD are right, rejoicing the heart: the commandment of the LORD is pure, enlightening the eyes.',
      niv:
        'The precepts of the LORD are right, giving joy to the heart. The commands of the LORD are radiant, giving light to the eyes.',
    },
  },
  {
    id: 'psalm-19:9',
    book: 'Psalm',
    chapter: 19,
    startVerse: 9,
    numVerses: 1,
    text: {
      esv:
        'The fear of the LORD is clean, enduring forever; the rules of the LORD are true, and righteous altogether.',
      kjv:
        'The fear of the LORD is clean, enduring for ever: the judgments of the LORD are true and righteous altogether.',
      niv:
        'The fear of the LORD is pure, enduring forever. The decrees of the LORD are firm, and all of them are righteous.',
    },
  },
  {
    id: 'psalm-19:14',
    book: 'Psalm',
    chapter: 19,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'Let the words of my mouth and the meditation of my heart be acceptable in your sight, O LORD, my rock and my redeemer.',
      kjv:
        'Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer.',
      niv:
        'May these words of my mouth and this meditation of my heart be pleasing in your sight, LORD, my Rock and my Redeemer.',
    },
  },
  {
    id: 'psalm-23:1-3',
    book: 'Psalm',
    chapter: 23,
    startVerse: 1,
    numVerses: 3,
    text: {
      esv:
        'The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name’s sake.',
      kjv:
        'The LORD is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name’s sake.',
      niv:
        'The LORD is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name’s sake.',
    },
  },
  {
    id: 'psalm-23:4',
    book: 'Psalm',
    chapter: 23,
    startVerse: 4,
    numVerses: 1,
    text: {
      esv:
        'Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
      kjv:
        'Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.',
      niv:
        'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.',
    },
  },
  {
    id: 'psalm-23:5-6',
    book: 'Psalm',
    chapter: 23,
    startVerse: 5,
    numVerses: 2,
    text: {
      esv:
        'You prepare a table before me in the presence of my enemies; you anoint my head with oil; my cup overflows. Surely goodness and mercy shall follow me all the days of my life, and I shall dwell in the house of the LORD forever.',
      kjv:
        'Thou preparest a table before me in the presence of mine enemies: thou anointest my head with oil; my cup runneth over. Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever.',
      niv:
        'You prepare a table before me in the presence of my enemies. You anoint my head with oil; my cup overflows. Surely your goodness and love will follow me all the days of my life, and I will dwell in the house of the LORD forever.',
    },
  },
  {
    id: 'psalm-24:1-2',
    book: 'Psalm',
    chapter: 24,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'The earth is the LORD’s and the fullness thereof, the world and those who dwell therein, for he has founded it upon the seas and established it upon the rivers.',
      kjv:
        'The earth is the LORD’s, and the fulness thereof; the world, and they that dwell therein. For he hath founded it upon the seas, and established it upon the floods.',
      niv:
        'The earth is the LORD’s, and everything in it, the world, and all who live in it; for he founded it on the seas and established it on the waters.',
    },
  },
  {
    id: 'psalm-27:1',
    book: 'Psalm',
    chapter: 27,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?',
      kjv:
        'The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?',
      niv:
        'The LORD is my light and my salvation— whom shall I fear? The LORD is the stronghold of my life— of whom shall I be afraid?',
    },
  },
  {
    id: 'psalm-28:7-8',
    book: 'Psalm',
    chapter: 28,
    startVerse: 7,
    numVerses: 2,
    text: {
      esv:
        'The LORD is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him. The LORD is the strength of his people; he is the saving refuge of his anointed.',
      kjv:
        'The LORD is my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him. The LORD is their strength, and he is the saving strength of his anointed.',
      niv:
        'The LORD is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him. The LORD is the strength of his people, a fortress of salvation for his anointed one.',
    },
  },
  {
    id: 'psalm-32:8',
    book: 'Psalm',
    chapter: 32,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'I will instruct you and teach you in the way you should go; I will counsel you with my eye upon you.',
      kjv:
        'I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye.',
      niv:
        'I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.',
    },
  },
  {
    id: 'psalm-33:4-5',
    book: 'Psalm',
    chapter: 33,
    startVerse: 4,
    numVerses: 2,
    text: {
      esv:
        'For the word of the LORD is upright, and all his work is done in faithfulness. He loves righteousness and justice; the earth is full of the steadfast love of the LORD.',
      kjv:
        'For the word of the LORD is right; and all his works are done in truth. He loveth righteousness and judgment: the earth is full of the goodness of the LORD.',
      niv:
        'For the word of the LORD is right and true; he is faithful in all he does. The LORD loves righteousness and justice; the earth is full of his unfailing love.',
    },
  },
  {
    id: 'psalm-34:4',
    book: 'Psalm',
    chapter: 34,
    startVerse: 4,
    numVerses: 1,
    text: {
      esv:
        'I sought the LORD, and he answered me and delivered me from all my fears.',
      kjv:
        'I sought the LORD, and he heard me, and delivered me from all my fears.',
      niv:
        'I sought the LORD, and he answered me; he delivered me from all my fears.',
    },
  },
  {
    id: 'psalm-34:8',
    book: 'Psalm',
    chapter: 34,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'Oh, taste and see that the LORD is good! Blessed is the man who takes refuge in him!',
      kjv:
        'O taste and see that the LORD is good: blessed is the man that trusteth in him.',
      niv:
        'Taste and see that the LORD is good; blessed is the one who takes refuge in him.',
    },
  },
  {
    id: 'psalm-40:11-13',
    book: 'Psalm',
    chapter: 40,
    startVerse: 11,
    numVerses: 3,
    text: {
      esv:
        'As for you, O LORD, you will not restrain your mercy from me; your steadfast love and your faithfulness will ever preserve me! For evils have encompassed me beyond number; my iniquities have overtaken me, and I cannot see; they are more than the hairs of my head; my heart fails me. Be pleased, O LORD, to deliver me! O LORD, make haste to help me!',
      kjv:
        'Withhold not thou thy tender mercies from me, O LORD: let thy lovingkindness and thy truth continually preserve me. For innumerable evils have compassed me about: mine iniquities have taken hold upon me, so that I am not able to look up; they are more than the hairs of mine head: therefore my heart faileth me. Be pleased, O LORD, to deliver me: O LORD, make haste to help me.',
      niv:
        'Do not withhold your mercy from me, LORD; may your love and faithfulness always protect me. For troubles without number surround me; my sins have overtaken me, and I cannot see. They are more than the hairs of my head, and my heart fails within me. Be pleased to save me, LORD; come quickly, LORD, to help me.',
    },
  },
  {
    id: 'psalm-42:11',
    book: 'Psalm',
    chapter: 42,
    startVerse: 11,
    numVerses: 1,
    text: {
      esv:
        'Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God.',
      kjv:
        'Why art thou cast down, O my soul? and why art thou disquieted within me? hope thou in God: for I shall yet praise him, who is the health of my countenance, and my God.',
      niv:
        'Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.',
    },
  },
  {
    id: 'psalm-46:1',
    book: 'Psalm',
    chapter: 46,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv: 'God is our refuge and strength, a very present help in trouble.',
      kjv: 'God is our refuge and strength, a very present help in trouble.',
      niv: 'God is our refuge and strength, an ever-present help in trouble.',
    },
  },
  {
    id: 'psalm-46:10',
    book: 'Psalm',
    chapter: 46,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        '“Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!”',
      kjv:
        '“Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.”',
      niv:
        'He says, “Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.”',
    },
  },
  {
    id: 'psalm-51:10',
    book: 'Psalm',
    chapter: 51,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        'Create in me a clean heart, O God, and renew a right spirit within me.',
      kjv:
        'Create in me a clean heart, O God; and renew a right spirit within me.',
      niv:
        'Create in me a pure heart, O God, and renew a steadfast spirit within me.',
    },
  },
  {
    id: 'psalm-71:8',
    book: 'Psalm',
    chapter: 71,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'My mouth is filled with your praise, and with your glory all the day.',
      kjv:
        'Let my mouth be filled with thy praise and with thy honour all the da',
      niv:
        'My mouth is filled with your praise, declaring your splendor all day long.',
    },
  },
  {
    id: 'psalm-73:26',
    book: 'Psalm',
    chapter: 73,
    startVerse: 26,
    numVerses: 1,
    text: {
      esv:
        'My flesh and my heart may fail, but God is the strength of my heart and my portion forever.',
      kjv:
        'My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever.',
      niv:
        'My flesh and my heart may fail, but God is the strength of my heart and my portion forever.',
    },
  },
  {
    id: 'psalm-86:15',
    book: 'Psalm',
    chapter: 86,
    startVerse: 15,
    numVerses: 1,
    text: {
      esv:
        'But you, O Lord, are a God merciful and gracious, slow to anger and abounding in steadfast love and faithfulness.',
      kjv:
        'But thou, O Lord, art a God full of compassion, and gracious, long suffering, and plenteous in mercy and truth.',
      niv:
        'But you, Lord, are a compassionate and gracious God, slow to anger, abounding in love and faithfulness.',
    },
  },
  {
    id: 'psalm-90:2',
    book: 'Psalm',
    chapter: 90,
    startVerse: 2,
    numVerses: 1,
    text: {
      esv:
        'Before the mountains were brought forth, or ever you had formed the earth and the world, from everlasting to everlasting you are God.',
      kjv:
        'Before the mountains were brought forth, or ever thou hadst formed the earth and the world, even from everlasting to everlasting, thou art God.',
      niv:
        'Before the mountains were born or you brought forth the whole world, from everlasting to everlasting you are God.',
    },
  },
  {
    id: 'psalm-90:17',
    book: 'Psalm',
    chapter: 90,
    startVerse: 17,
    numVerses: 1,
    text: {
      esv:
        'Let the favor of the Lord our God be upon us, and establish the work of our hands upon us; yes, establish the work of our hands!',
      kjv:
        'And let the beauty of the LORD our God be upon us: and establish thou the work of our hands upon us; yea, the work of our hands establish thou it.',
      niv:
        'May the favor of the Lord our God rest on us; establish the work of our hands for us— yes, establish the work of our hands.',
    },
  },
  {
    id: 'psalm-91:11-13',
    book: 'Psalm',
    chapter: 91,
    startVerse: 11,
    numVerses: 3,
    text: {
      esv:
        'For he will command his angels concerning you to guard you in all your ways. On their hands they will bear you up, lest you strike your foot against a stone. You will tread on the lion and the adder; the young lion and the serpent you will trample underfoot.',
      kjv:
        'For he shall give his angels charge over thee, to keep thee in all thy ways. They shall bear thee up in their hands, lest thou dash thy foot against a stone. Thou shalt tread upon the lion and adder: the young lion and the dragon shalt thou trample under feet.',
      niv:
        'For he will command his angels concerning you to guard you in all your ways; they will lift you up in their hands, so that you will not strike your foot against a stone. You will tread on the lion and the cobra; you will trample the great lion and the serpent.',
    },
  },
  {
    id: 'psalm-103:1',
    book: 'Psalm',
    chapter: 103,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'Bless the LORD, O my soul, and all that is within me, bless his holy name!',
      kjv:
        'Bless the LORD, O my soul: and all that is within me, bless his holy name.',
      niv:
        'Praise the LORD, my soul; all my inmost being, praise his holy name.',
    },
  },
  {
    id: 'psalm-116:1-2',
    book: 'Psalm',
    chapter: 116,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'I love the LORD, because he has heard my voice and my pleas for mercy. Because he inclined his ear to me, therefore I will call on him as long as I live.',
      kjv:
        'I love the LORD, because he hath heard my voice and my supplications. Because he hath inclined his ear unto me, therefore will I call upon him as long as I live.',
      niv:
        'I love the LORD, for he heard my voice; he heard my cry for mercy. Because he turned his ear to me, I will call on him as long as I live.',
    },
  },
  {
    id: 'psalm-119:105',
    book: 'Psalm',
    chapter: 119,
    startVerse: 105,
    numVerses: 1,
    text: {
      esv: 'Your word is a lamp to my feet and a light to my path.',
      kjv: 'Thy word is a lamp unto my feet, and a light unto my path.',
      niv: 'Your word is a lamp for my feet, a light on my path.',
    },
  },
  {
    id: 'psalm-121:1-2',
    book: 'Psalm',
    chapter: 121,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'I lift up my eyes to the hills. From where does my help come? My help comes from the LORD, who made heaven and earth.',
      kjv:
        'I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.',
      niv:
        'I lift up my eyes to the mountains — where does my help come from? My help comes from the LORD, the Maker of heaven and earth.',
    },
  },
  {
    id: 'psalm-121:7-8',
    book: 'Psalm',
    chapter: 121,
    startVerse: 7,
    numVerses: 2,
    text: {
      esv:
        'The LORD will keep you from all evil; he will keep your life. The LORD will keep your going out and your coming in from this time forth and forevermore.',
      kjv:
        'The LORD shall preserve thee from all evil: he shall preserve thy soul. The LORD shall preserve thy going out and thy coming in from this time forth, and even for evermore.',
      niv:
        'The LORD will keep you from all harm— he will watch over your life; the LORD will watch over your coming and going both now and forevermore.',
    },
  },
  {
    id: 'psalm-139:13-14',
    book: 'Psalm',
    chapter: 139,
    startVerse: 13,
    numVerses: 2,
    text: {
      esv:
        'For you formed my inward parts; you knitted me together in my mother’s womb. I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.',
      kjv:
        'For thou hast possessed my reins: thou hast covered me in my mother’s womb. I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.',
      niv:
        'For you created my inmost being; you knit me together in my mother’s womb. I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.',
    },
  },
  {
    id: 'psalm-141:2',
    book: 'Psalm',
    chapter: 141,
    startVerse: 2,
    numVerses: 1,
    text: {
      esv:
        'Let my prayer be counted as incense before you, and the lifting up of my hands as the evening sacrifice!',
      kjv:
        'Let my prayer be set forth before thee as incense; and the lifting up of my hands as the evening sacrifice.',
      niv:
        'May my prayer be set before you like incense; may the lifting up of my hands be like the evening sacrifice.',
    },
  },
  {
    id: 'psalm-143:8',
    book: 'Psalm',
    chapter: 143,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'Let me hear in the morning of your steadfast love, for in you I trust. Make me know the way I should go, for to you I lift up my soul.',
      kjv:
        'Cause me to hear thy lovingkindness in the morning; for in thee do I trust: cause me to know the way wherein I should walk; for I lift up my soul unto thee.',
      niv:
        'Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life.',
    },
  },
  {
    id: 'psalm-150:6',
    book: 'Psalm',
    chapter: 150,
    startVerse: 6,
    numVerses: 1,
    text: {
      esv: 'Let everything that has breath praise the LORD! Praise the LORD!',
      kjv:
        'Let every thing that hath breath praise the LORD. Praise ye the LORD.',
      niv: 'Let everything that has breath praise the LORD. Praise the LORD.',
    },
  },
  {
    id: 'proverbs-2:6',
    book: 'Proverbs',
    chapter: 2,
    startVerse: 6,
    numVerses: 1,
    text: {
      esv:
        'For the LORD gives wisdom; from his mouth come knowledge and understanding.',
      kjv:
        'For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding.',
      niv:
        'For the LORD gives wisdom; from his mouth come knowledge and understanding.',
    },
  },
  {
    id: 'proverbs-3:3-4',
    book: 'Proverbs',
    chapter: 3,
    startVerse: 3,
    numVerses: 2,
    text: {
      esv:
        'Let not steadfast love and faithfulness forsake you; bind them around your neck; write them on the tablet of your heart. So you will find favor and good success in the sight of God and man.',
      kjv:
        'Let not mercy and truth forsake thee: bind them about thy neck; write them upon the table of thine heart: So shalt thou find favour and good understanding in the sight of God and man.',
      niv:
        'Let love and faithfulness never leave you; bind them around your neck, write them on the tablet of your heart. Then you will win favor and a good name in the sight of God and man.',
    },
  },
  {
    id: 'proverbs-3:5-6',
    book: 'Proverbs',
    chapter: 3,
    startVerse: 5,
    numVerses: 2,
    text: {
      esv:
        'Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.',
      kjv:
        'Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
      niv:
        'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.',
    },
  },
  {
    id: 'proverbs-4:23',
    book: 'Proverbs',
    chapter: 4,
    startVerse: 23,
    numVerses: 1,
    text: {
      esv:
        'Keep your heart with all vigilance, for from it flow the springs of life.',
      kjv:
        'Keep thy heart with all diligence; for out of it are the issues of life.',
      niv:
        'Above all else, guard your heart, for everything you do flows from it.',
    },
  },
  {
    id: 'proverbs-11:25',
    book: 'Proverbs',
    chapter: 11,
    startVerse: 25,
    numVerses: 1,
    text: {
      esv:
        'Whoever brings blessing will be enriched, and one who waters will himself be watered.',
      kjv:
        'The liberal soul shall be made fat: and he that watereth shall be watered also himself.',
      niv:
        'A generous person will prosper; whoever refreshes others will be refreshed.',
    },
  },
  {
    id: 'proverbs-15:32-33',
    book: 'Proverbs',
    chapter: 15,
    startVerse: 32,
    numVerses: 2,
    text: {
      esv:
        'Whoever ignores instruction despises himself, but he who listens to reproof gains intelligence. The fear of the LORD is instruction in wisdom, and humility comes before honor.',
      kjv:
        'He that refuseth instruction despiseth his own soul: but he that heareth reproof getteth understanding. The fear of the LORD is the instruction of wisdom; and before honour is humility.',
      niv:
        'Those who disregard discipline despise themselves, but the one who heeds correction gains understanding. Wisdom’s instruction is to fear the LORD, and humility comes before honor.',
    },
  },
  {
    id: 'proverbs-16:3',
    book: 'Proverbs',
    chapter: 16,
    startVerse: 3,
    numVerses: 1,
    text: {
      esv: 'Commit your work to the LORD, and your plans will be established.',
      kjv:
        'Commit thy works unto the LORD, and thy thoughts shall be established.',
      niv:
        'Commit to the LORD whatever you do, and he will establish your plans.',
    },
  },
  {
    id: 'proverbs-28:13',
    book: 'Proverbs',
    chapter: 28,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy.',
      kjv:
        'He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy.',
      niv:
        'Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy.',
    },
  },
  {
    id: 'proverbs-30:5',
    book: 'Proverbs',
    chapter: 30,
    startVerse: 5,
    numVerses: 1,
    text: {
      esv:
        'Every word of God proves true; he is a shield to those who take refuge in him.',
      kjv:
        'Every word of God is pure: he is a shield unto them that put their trust in him.',
      niv:
        'Every word of God is flawless; he is a shield to those who take refuge in him.',
    },
  },
  {
    id: 'proverbs-31:8-9',
    book: 'Proverbs',
    chapter: 31,
    startVerse: 8,
    numVerses: 2,
    text: {
      esv:
        'Open your mouth for the mute, for the rights of all who are destitute. Open your mouth, judge righteously, defend the rights of the poor and needy.',
      kjv:
        'Open thy mouth for the dumb in the cause of all such as are appointed to destruction. Open thy mouth, judge righteously, and plead the cause of the poor and needy.',
      niv:
        'Speak up for those who cannot speak for themselves, for the rights of all who are destitute. Speak up and judge fairly; defend the rights of the poor and needy.',
    },
  },
  {
    id: 'ecclesiastes-4:9-10',
    book: 'Ecclesiastes',
    chapter: 4,
    startVerse: 9,
    numVerses: 2,
    text: {
      esv:
        'Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has not another to lift him up!',
      kjv:
        'Two are better than one; because they have a good reward for their labour. For if they fall, the one will lift up his fellow: but woe to him that is alone when he falleth; for he hath not another to help him up.',
      niv:
        'Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up.',
    },
  },
  {
    id: 'ecclesiastes-4:12',
    book: 'Ecclesiastes',
    chapter: 4,
    startVerse: 12,
    numVerses: 1,
    text: {
      esv:
        'And though a man might prevail against one who is alone, two will withstand him—a threefold cord is not quickly broken.',
      kjv:
        'And if one prevail against him, two shall withstand him; and a threefold cord is not quickly broken.',
      niv:
        'Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken.',
    },
  },
  {
    id: 'ecclesiastes-7:25',
    book: 'Ecclesiastes',
    chapter: 7,
    startVerse: 25,
    numVerses: 1,
    text: {
      esv:
        'I turned my heart to know and to search out and to seek wisdom and the scheme of things, and to know the wickedness of folly and the foolishness that is madness.',
      kjv:
        'I applied mine heart to know, and to search, and to seek out wisdom, and the reason of things, and to know the wickedness of folly, even of foolishness and madness.',
      niv:
        'So I turned my mind to understand, to investigate and to search out wisdom and the scheme of things and to understand the stupidity of wickedness and the madness of folly.',
    },
  },
  {
    id: 'ecclesiastes-12:13-14',
    book: 'Ecclesiastes',
    chapter: 12,
    startVerse: 13,
    numVerses: 2,
    text: {
      esv:
        'The end of the matter; all has been heard. Fear God and keep his commandments, for this is the whole duty of man. For God will bring every deed into judgment, with every secret thing, whether good or evil.',
      kjv:
        'Let us hear the conclusion of the whole matter: Fear God, and keep his commandments: for this is the whole duty of man. For God shall bring every work into judgment, with every secret thing, whether it be good, or whether it be evil.',
      niv:
        'Now all has been heard; here is the conclusion of the matter: Fear God and keep his commandments, for this is the duty of all mankind. For God will bring every deed into judgment, including every hidden thing, whether it is good or evil.',
    },
  },
  {
    id: 'songofsongs-8:6',
    book: 'Song of Songs',
    chapter: 8,
    startVerse: 6,
    numVerses: 1,
    text: {
      esv:
        'Set me as a seal upon your heart, as a seal upon your arm, for love is strong as death, jealousy is fierce as the grave. Its flashes are flashes of fire, the very flame of the LORD.',
      kjv:
        'Set me as a seal upon thine heart, as a seal upon thine arm: for love is strong as death; jealousy is cruel as the grave: the coals thereof are coals of fire, which hath a most vehement flame.',
      niv:
        'Place me like a seal over your heart, like a seal on your arm; for love is as strong as death, its jealousy unyielding as the grave. It burns like blazing fire, like a mighty flame.',
    },
  },
  {
    id: 'isaiah-2:17',
    book: 'Isaiah',
    chapter: 2,
    startVerse: 17,
    numVerses: 1,
    text: {
      esv:
        'And the haughtiness of man shall be humbled, and the lofty pride of men shall be brought low, and the LORD alone will be exalted in that day. And the idols shall utterly pass away.',
      kjv:
        'And the loftiness of man shall be bowed down, and the haughtiness of men shall be made low: and the LORD alone shall be exalted in that day. And the idols he shall utterly abolish.',
      niv:
        'The arrogance of man will be brought low and human pride humbled; the LORD alone will be exalted in that day, and the idols will totally disappear.',
    },
  },
  {
    id: 'isaiah-9:6',
    book: 'Isaiah',
    chapter: 9,
    startVerse: 6,
    numVerses: 1,
    text: {
      esv:
        'For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.',
      kjv:
        'For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.',
      niv:
        'For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.',
    },
  },
  {
    id: 'isaiah-11:10',
    book: 'Isaiah',
    chapter: 11,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        'In that day the root of Jesse, who shall stand as a signal for the peoples—of him shall the nations inquire, and his resting place shall be glorious.',
      kjv:
        'And in that day there shall be a root of Jesse, which shall stand for an ensign of the people; to it shall the Gentiles seek: and his rest shall be glorious.',
      niv:
        'In that day the Root of Jesse will stand as a banner for the peoples; the nations will rally to him, and his resting place will be glorious.',
    },
  },
  {
    id: 'isaiah-25:1',
    book: 'Isaiah',
    chapter: 25,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'O LORD, you are my God; I will exalt you; I will praise your name, for you have done wonderful things, plans formed of old, faithful and sure.',
      kjv:
        'O LORD, thou art my God; I will exalt thee, I will praise thy name; for thou hast done wonderful things; thy counsels of old are faithfulness and truth.',
      niv:
        'LORD, you are my God; I will exalt you and praise your name, for in perfect faithfulness you have done wonderful things, things planned long ago.',
    },
  },
  {
    id: 'isaiah-30:18',
    book: 'Isaiah',
    chapter: 30,
    startVerse: 18,
    numVerses: 1,
    text: {
      esv:
        'Therefore the LORD waits to be gracious to you, and therefore he exalts himself to show mercy to you. For the LORD is a God of justice; blessed are all those who wait for him.',
      kjv:
        'And therefore will the LORD wait, that he may be gracious unto you, and therefore will he be exalted, that he may have mercy upon you: for the LORD is a God of judgment: blessed are all they that wait for him.',
      niv:
        'Yet the LORD longs to be gracious to you; therefore he will rise up to show you compassion. For the LORD is a God of justice. Blessed are all who wait for him!',
    },
  },
  {
    id: 'isaiah-33:22',
    book: 'Isaiah',
    chapter: 33,
    startVerse: 22,
    numVerses: 1,
    text: {
      esv:
        'For the LORD is our judge; the LORD is our lawgiver; the LORD is our king; he will save us.',
      kjv:
        'For the LORD is our judge, the LORD is our lawgiver, the LORD is our king; he will save us.',
      niv:
        'For the LORD is our judge, the LORD is our lawgiver, the LORD is our king; it is he who will save us.',
    },
  },
  {
    id: 'isaiah-35:8',
    book: 'Isaiah',
    chapter: 35,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'And a highway shall be there, and it shall be called the Way of Holiness; the unclean shall not pass over it. It shall belong to those who walk on the way; even if they are fools, they shall not go astray.',
      kjv:
        'And an highway shall be there, and a way, and it shall be called The way of holiness; the unclean shall not pass over it; but it shall be for those: the wayfaring men, though fools, shall not err therein.',
      niv:
        'And a highway will be there; it will be called the Way of Holiness; it will be for those who walk on that Way. The unclean will not journey on it; wicked fools will not go about on it.',
    },
  },
  {
    id: 'isaiah-40:28',
    book: 'Isaiah',
    chapter: 40,
    startVerse: 28,
    numVerses: 1,
    text: {
      esv:
        'Have you not known? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He does not faint or grow weary; his understanding is unsearchable.',
      kjv:
        'Hast thou not known? hast thou not heard, that the everlasting God, the LORD, the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding.',
      niv:
        'Do you not know? Have you not heard? The LORD is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom.',
    },
  },
  {
    id: 'isaiah-40:29',
    book: 'Isaiah',
    chapter: 40,
    startVerse: 29,
    numVerses: 1,
    text: {
      esv:
        'He gives power to the faint, and to him who has no might he increases strength.',
      kjv:
        'He giveth power to the faint; and to them that have no might he increaseth strength.',
      niv:
        'He gives strength to the weary and increases the power of the weak.',
    },
  },
  {
    id: 'isaiah-40:30-31',
    book: 'Isaiah',
    chapter: 40,
    startVerse: 30,
    numVerses: 2,
    text: {
      esv:
        'Even youths shall faint and be weary, and young men shall fall exhausted; but they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.',
      kjv:
        'Even the youths shall faint and be weary, and the young men shall utterly fall: But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
      niv:
        'Even youths grow tired and weary, and young men stumble and fall; but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    },
  },
  {
    id: 'isaiah-41:10',
    book: 'Isaiah',
    chapter: 41,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.',
      kjv:
        'Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.',
      niv:
        'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
    },
  },
  {
    id: 'isaiah-41:13',
    book: 'Isaiah',
    chapter: 41,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'For I, the LORD your God, hold your right hand; it is I who say to you, “Fear not, I am the one who helps you.”',
      kjv:
        'For I the LORD thy God will hold thy right hand, saying unto thee, Fear not; I will help thee.',
      niv:
        'For I am the LORD your God who takes hold of your right hand and says to you, Do not fear; I will help you.',
    },
  },
  {
    id: 'isaiah-43:2',
    book: 'Isaiah',
    chapter: 43,
    startVerse: 2,
    numVerses: 1,
    text: {
      esv:
        'When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you; when you walk through fire you shall not be burned, and the flame shall not consume you.',
      kjv:
        'When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.',
      niv:
        'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.',
    },
  },
  {
    id: 'isaiah-49:15-16',
    book: 'Isaiah',
    chapter: 49,
    startVerse: 15,
    numVerses: 2,
    text: {
      esv:
        'Can a woman forget her nursing child, that she should have no compassion on the son of her womb? Even these may forget, yet I will not forget you. Behold, I have engraved you on the palms of my hands; your walls are continually before me.',
      kjv:
        'Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, they may forget, yet will I not forget thee. Behold, I have graven thee upon the palms of my hands; thy walls are continually before me.',
      niv:
        'Can a mother forget the baby at her breast and have no compassion on the child she has borne? Though she may forget, I will not forget you! See, I have engraved you on the palms of my hands; your walls are ever before me.',
    },
  },
  {
    id: 'isaiah-53:5',
    book: 'Isaiah',
    chapter: 53,
    startVerse: 5,
    numVerses: 1,
    text: {
      esv:
        'But he was pierced for our transgressions; he was crushed for our iniquities; upon him was the chastisement that brought us peace, and with his wounds we are healed.',
      kjv:
        'But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.',
      niv:
        'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.',
    },
  },
  {
    id: 'jeremiah-20:13',
    book: 'Jeremiah',
    chapter: 20,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'Sing to the LORD; praise the LORD! For he has delivered the life of the needy from the hand of evildoers.',
      kjv:
        'Sing unto the LORD, praise ye the LORD: for he hath delivered the soul of the poor from the hand of evildoers.',
      niv:
        'Sing to the LORD! Give praise to the LORD! He rescues the life of the needy from the hands of the wicked.',
    },
  },
  {
    id: 'jeremiah-29:11-12',
    book: 'Jeremiah',
    chapter: 29,
    startVerse: 11,
    numVerses: 2,
    text: {
      esv:
        'For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope. Then you will call upon me and come and pray to me, and I will hear you.',
      kjv:
        'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end. Then shall ye call upon me, and ye shall go and pray unto me, and I will hearken unto you.',
      niv:
        '“For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future. Then you will call on me and come and pray to me, and I will listen to you.”',
    },
  },
  {
    id: 'jeremiah-33:2-3',
    book: 'Jeremiah',
    chapter: 33,
    startVerse: 2,
    numVerses: 2,
    text: {
      esv:
        'Thus says the LORD who made the earth, the LORD who formed it to establish it—the LORD is his name: Call to me and I will answer you, and will tell you great and hidden things that you have not known.',
      kjv:
        'Thus saith the LORD the maker thereof, the LORD that formed it, to establish it; the LORD is his name; Call unto me, and I will answer thee, and show thee great and mighty things, which thou knowest not.',
      niv:
        'This is what the LORD says, he who made the earth, the LORD who formed it and established it—the LORD is his name: ‘Call to me and I will answer you and tell you great and unsearchable things you do not know.’',
    },
  },
  {
    id: 'jeremiah-33:3',
    book: 'Jeremiah',
    chapter: 33,
    startVerse: 3,
    numVerses: 1,
    text: {
      esv:
        'Call to me and I will answer you, and will tell you great and hidden things that you have not known.',
      kjv:
        'Call unto me, and I will answer thee, and show thee great and mighty things, which thou knowest not.',
      niv:
        'Call to me and I will answer you and tell you great and unsearchable things you do not know.',
    },
  },
  {
    id: 'lamentations-3:22-23',
    book: 'Lamentations',
    chapter: 3,
    startVerse: 22,
    numVerses: 2,
    text: {
      esv:
        'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
      kjv:
        'It is of the LORD’s mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.',
      niv:
        'Because of the LORD’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.',
    },
  },
  {
    id: 'lamentations-5:19',
    book: 'Lamentations',
    chapter: 5,
    startVerse: 19,
    numVerses: 1,
    text: {
      esv:
        'But you, O LORD, reign forever; your throne endures to all generations.',
      kjv:
        'Thou, O LORD, remainest for ever; thy throne from generation to generation.',
      niv:
        'You, LORD, reign forever; your throne endures from generation to generation.',
    },
  },
  {
    id: 'ezekiel-36:26',
    book: 'Ezekiel',
    chapter: 36,
    startVerse: 26,
    numVerses: 1,
    text: {
      esv:
        'And I will give you a new heart, and a new spirit I will put within you. And I will remove the heart of stone from your flesh and give you a heart of flesh.',
      kjv:
        'A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh, and I will give you an heart of flesh.',
      niv:
        'I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.',
    },
  },
  {
    id: 'daniel-6:23',
    book: 'Daniel',
    chapter: 6,
    startVerse: 23,
    numVerses: 1,
    text: {
      esv:
        'Then the king was exceedingly glad, and commanded that Daniel be taken up out of the den. So Daniel was taken up out of the den, and no kind of harm was found on him, because he had trusted in his God.',
      kjv:
        'Then was the king exceedingly glad for him, and commanded that they should take Daniel up out of the den. So Daniel was taken up out of the den, and no manner of hurt was found upon him, because he believed in his God.',
      niv:
        'The king was overjoyed and gave orders to lift Daniel out of the den. And when Daniel was lifted from the den, no wound was found on him, because he had trusted in his God.',
    },
  },
  {
    id: 'daniel-9:18',
    book: 'Daniel',
    chapter: 9,
    startVerse: 18,
    numVerses: 1,
    text: {
      esv:
        'O my God, incline your ear and hear. Open your eyes and see our desolations, and the city that is called by your name. For we do not present our pleas before you because of our righteousness, but because of your great mercy.',
      kjv:
        'O my God, incline thine ear, and hear; open thine eyes, and behold our desolations, and the city which is called by thy name: for we do not present our supplications before thee for our righteousnesses, but for thy great mercies.',
      niv:
        'Give ear, our God, and hear; open your eyes and see the desolation of the city that bears your Name. We do not make requests of you because we are righteous, but because of your great mercy.',
    },
  },
  {
    id: 'joel-2:12',
    book: 'Joel',
    chapter: 2,
    startVerse: 12,
    numVerses: 1,
    text: {
      esv:
        '“Yet even now,” declares the LORD, “return to me with all your heart, with fasting, with weeping, and with mourning.”',
      kjv:
        'Therefore also now, saith the LORD, turn ye even to me with all your heart, and with fasting, and with weeping, and with mourning.',
      niv:
        '“Even now,” declares the LORD, “return to me with all your heart, with fasting and weeping and mourning.”',
    },
  },
  {
    id: 'joel-2:13',
    book: 'Joel',
    chapter: 2,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'And rend your hearts and not your garments. Return to the LORD your God, for he is gracious and merciful, slow to anger, and abounding in steadfast love; and he relents over disaster.',
      kjv:
        'And rend your heart, and not your garments, and turn unto the LORD your God: for he is gracious and merciful, slow to anger, and of great kindness, and repenteth him of the evil.',
      niv:
        'Rend your heart and not your garments. Return to the LORD your God, for he is gracious and compassionate, slow to anger and abounding in love, and he relents from sending calamity.',
    },
  },
  {
    id: 'jonah-2:1-2',
    book: 'Jonah',
    chapter: 2,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'Then Jonah prayed to the LORD his God from the belly of the fish, saying, “I called out to the LORD, out of my distress, and he answered me; out of the belly of Sheol I cried, and you heard my voice.”',
      kjv:
        'Then Jonah prayed unto the LORD his God out of the fish’s belly, And said, I cried by reason of mine affliction unto the LORD, and he heard me; out of the belly of hell cried I, and thou heardest my voice.',
      niv:
        'From inside the fish Jonah prayed to the LORD his God. He said: “In my distress I called to the LORD, and he answered me. From deep in the realm of the dead I called for help, and you listened to my cry.”',
    },
  },
  {
    id: 'micah-4:1',
    book: 'Micah',
    chapter: 4,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'It shall come to pass in the latter days that the mountain of the house of the LORD shall be established as the highest of the mountains, and it shall be lifted up above the hills; and peoples shall flow to it.',
      kjv:
        'But in the last days it shall come to pass, that the mountain of the house of the LORD shall be established in the top of the mountains, and it shall be exalted above the hills; and people shall flow unto it.',
      niv:
        'In the last days the mountain of the LORD’s temple will be established as the highest of the mountains; it will be exalted above the hills, and peoples will stream to it.',
    },
  },
  {
    id: 'micah-6:8',
    book: 'Micah',
    chapter: 6,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'He has told you, O man, what is good; and what does the LORD require of you but to do justice, and to love kindness, and to walk humbly with your God?',
      kjv:
        'He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?',
      niv:
        'He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.',
    },
  },
  {
    id: 'micah-7:8',
    book: 'Micah',
    chapter: 7,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'Rejoice not over me, O my enemy; when I fall, I shall rise; when I sit in darkness, the LORD will be a light to me.',
      kjv:
        'Rejoice not against me, O mine enemy: when I fall, I shall arise; when I sit in darkness, the LORD shall be a light unto me.',
      niv:
        'Do not gloat over me, my enemy! Though I have fallen, I will rise. Though I sit in darkness, the LORD will be my light.',
    },
  },
  {
    id: 'nahum-1:3',
    book: 'Nahum',
    chapter: 1,
    startVerse: 3,
    numVerses: 1,
    text: {
      esv:
        'The LORD is slow to anger and great in power, and the LORD will by no means clear the guilty. His way is in whirlwind and storm, and the clouds are the dust of his feet.',
      kjv:
        'The LORD is slow to anger, and great in power, and will not at all acquit the wicked: the LORD hath his way in the whirlwind and in the storm, and the clouds are the dust of his feet.',
      niv:
        'The LORD is slow to anger but great in power; the LORD will not leave the guilty unpunished. His way is in the whirlwind and the storm, and clouds are the dust of his feet.',
    },
  },
  {
    id: 'nahum-1:7',
    book: 'Nahum',
    chapter: 1,
    startVerse: 7,
    numVerses: 1,
    text: {
      esv:
        'The LORD is good, a stronghold in the day of trouble; he knows those who take refuge in him.',
      kjv:
        'The LORD is good, a strong hold in the day of trouble; and he knoweth them that trust in him.',
      niv:
        'The LORD is good, a refuge in times of trouble. He cares for those who trust in him.',
    },
  },
  {
    id: 'zephaniah-3:14-15',
    book: 'Zephaniah',
    chapter: 3,
    startVerse: 14,
    numVerses: 2,
    text: {
      esv:
        'Sing aloud, O daughter of Zion; shout, O Israel! Rejoice and exult with all your heart, O daughter of Jerusalem! The LORD has taken away the judgments against you; he has cleared away your enemies. The King of Israel, the LORD, is in your midst; you shall never again fear evil.',
      kjv:
        'Sing, O daughter of Zion; shout, O Israel; be glad and rejoice with all the heart, O daughter of Jerusalem. The LORD hath taken away thy judgments, he hath cast out thine enemy: the king of Israel, even the LORD, is in the midst of thee: thou shalt not see evil any more.',
      niv:
        'Sing, Daughter Zion; shout aloud, Israel! Be glad and rejoice with all your heart, Daughter Jerusalem! The LORD has taken away your punishment, he has turned back your enemy. The LORD, the King of Israel, is with you; never again will you fear any harm.',
    },
  },
  {
    id: 'zephaniah-3:17',
    book: 'Zephaniah',
    chapter: 3,
    startVerse: 17,
    numVerses: 1,
    text: {
      esv:
        'The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.',
      kjv:
        'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.',
      niv:
        'The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.',
    },
  },
  {
    id: 'matthew-3:11',
    book: 'Matthew',
    chapter: 3,
    startVerse: 11,
    numVerses: 1,
    text: {
      esv:
        'I baptize you with water for repentance, but he who is coming after me is mightier than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire.',
      kjv:
        'I indeed baptize you with water unto repentance. but he that cometh after me is mightier than I, whose shoes I am not worthy to bear: he shall baptize you with the Holy Ghost, and with fire.',
      niv:
        'I baptize you with water for repentance. But after me comes one who is more powerful than I, whose sandals I am not worthy to carry. He will baptize you with the Holy Spirit and fire.',
    },
  },
  {
    id: 'matthew-5:6',
    book: 'Matthew',
    chapter: 5,
    startVerse: 6,
    numVerses: 1,
    text: {
      esv:
        '“Blessed are those who hunger and thirst for righteousness, for they shall be satisfied.”',
      kjv:
        '“Blessed are they which do hunger and thirst after righteousness: for they shall be filled.”',
      niv:
        '“ Blessed are those who hunger and thirst for righteousness, for they will be filled.”',
    },
  },
  {
    id: 'matthew-5:7',
    book: 'Matthew',
    chapter: 5,
    startVerse: 7,
    numVerses: 1,
    text: {
      esv: '“Blessed are the merciful, for they shall receive mercy.”',
      kjv: '“Blessed are the merciful: for they shall obtain mercy.”',
      niv: '“Blessed are the merciful, for they will be shown mercy.”',
    },
  },
  {
    id: 'matthew-5:10',
    book: 'Matthew',
    chapter: 5,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        '“Blessed are those who are persecuted for righteousness’ sake, for theirs is the kingdom of heaven.”',
      kjv:
        '“Blessed are they which are persecuted for righteousness’ sake: for theirs is the kingdom of heaven.”',
      niv:
        '“Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.”',
    },
  },
  {
    id: 'matthew-5:11-12',
    book: 'Matthew',
    chapter: 5,
    startVerse: 11,
    numVerses: 2,
    text: {
      esv:
        '“Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you.”',
      kjv:
        '“Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake. Rejoice, and be exceeding glad: for great is your reward in heaven: for so persecuted they the prophets which were before you.”',
      niv:
        '“Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me. Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you.”',
    },
  },
  {
    id: 'matthew-5:13',
    book: 'Matthew',
    chapter: 5,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        '“You are the salt of the earth, but if salt has lost its taste, how shall its saltiness be restored? It is no longer good for anything except to be thrown out and trampled under people’s feet.”',
      kjv:
        '“Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men.”',
      niv:
        '“You are the salt of the earth. But if the salt loses its saltiness, how can it be made salty again? It is no longer good for anything, except to be thrown out and trampled underfoot.”',
    },
  },
  {
    id: 'matthew-5:14-16',
    book: 'Matthew',
    chapter: 5,
    startVerse: 14,
    numVerses: 3,
    text: {
      esv:
        '“You are the light of the world. A city set on a hill cannot be hidden. Nor do people light a lamp and put it under a basket, but on a stand, and it gives light to all in the house. In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.”',
      kjv:
        '“Ye are the light of the world. A city that is set on an hill cannot be hid. Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house. Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.”',
      niv:
        '“You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house. In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.”',
    },
  },
  {
    id: 'matthew-5:43-45',
    book: 'Matthew',
    chapter: 5,
    startVerse: 43,
    numVerses: 3,
    text: {
      esv:
        '“You have heard that it was said, ‘You shall love your neighbor and hate your enemy.’ But I say to you, Love your enemies and pray for those who persecute you, so that you may be sons of your Father who is in heaven.”',
      kjv:
        '“Ye have heard that it hath been said, Thou shalt love thy neighbour, and hate thine enemy. But I say unto you, Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you; That ye may be the children of your Father which is in heaven.”',
      niv:
        '“You have heard that it was said, ‘Love your neighbor and hate your enemy.’ But I tell you, love your enemies and pray for those who persecute you, that you may be children of your Father in heaven.”',
    },
  },
  {
    id: 'matthew-6:14',
    book: 'Matthew',
    chapter: 6,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'For if you forgive others their trespasses, your heavenly Father will also forgive you.',
      kjv:
        'For if ye forgive men their trespasses, your heavenly Father will also forgive you.',
      niv:
        'For if you forgive other people when they sin against you, your heavenly Father will also forgive you.',
    },
  },
  {
    id: 'matthew-6:19-21',
    book: 'Matthew',
    chapter: 6,
    startVerse: 19,
    numVerses: 3,
    text: {
      esv:
        '“Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven, where neither moth nor rust destroys and where thieves do not break in and steal. For where your treasure is, there your heart will be also.”',
      kjv:
        '“Lay not up for yourselves treasures upon earth, where moth and rust doth corrupt, and where thieves break through and steal: But lay up for yourselves treasures in heaven, where neither moth nor rust doth corrupt, and where thieves do not break through nor steal: For where your treasure is, there will your heart be also.”',
      niv:
        '“Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. For where your treasure is, there your heart will be also.”',
    },
  },
  {
    id: 'matthew-6:24',
    book: 'Matthew',
    chapter: 6,
    startVerse: 24,
    numVerses: 1,
    text: {
      esv:
        '“No one can serve two masters, for either he will hate the one and love the other, or he will be devoted to the one and despise the other. You cannot serve God and money.”',
      kjv:
        '“No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.”',
      niv:
        '“No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money.”',
    },
  },
  {
    id: 'matthew-6:25',
    book: 'Matthew',
    chapter: 6,
    startVerse: 25,
    numVerses: 1,
    text: {
      esv:
        '“Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing?”',
      kjv:
        '“Therefore I say unto you, Take no thought for your life, what ye shall eat, or what ye shall drink; nor yet for your body, what ye shall put on. Is not the life more than meat, and the body than raiment?”',
      niv:
        '“Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes?”',
    },
  },
  {
    id: 'matthew-6:31-33',
    book: 'Matthew',
    chapter: 6,
    startVerse: 31,
    numVerses: 3,
    text: {
      esv:
        '“Therefore do not be anxious, saying, ‘What shall we eat?’ or ‘What shall we drink?’ or ‘What shall we wear?’ For the Gentiles seek after all these things, and your heavenly Father knows that you need them all. But seek first the kingdom of God and his righteousness, and all these things will be added to you.”',
      kjv:
        '“Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed? (For after all these things do the Gentiles seek:) for your heavenly Father knoweth that ye have need of all these things. But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.”',
      niv:
        '“So do not worry, saying, ‘What shall we eat?’ or ‘What shall we drink?’ or ‘What shall we wear?’ For the pagans run after all these things, and your heavenly Father knows that you need them. But seek first his kingdom and his righteousness, and all these things will be given to you as well.”',
    },
  },
  {
    id: 'matthew-7:7-8',
    book: 'Matthew',
    chapter: 7,
    startVerse: 7,
    numVerses: 2,
    text: {
      esv:
        '“Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened.”',
      kjv:
        '“Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you: For every one that asketh receiveth; and he that seeketh findeth; and to him that knocketh it shall be opened.”',
      niv:
        '“Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.”',
    },
  },
  {
    id: 'matthew-7:12',
    book: 'Matthew',
    chapter: 7,
    startVerse: 12,
    numVerses: 1,
    text: {
      esv:
        '“So whatever you wish that others would do to you, do also to them, for this is the Law and the Prophets.”',
      kjv:
        '“Therefore all things whatsoever ye would that men should do to you, do ye even so to them: for this is the law and the prophets.”',
      niv:
        '“So in everything, do to others what you would have them do to you, for this sums up the Law and the Prophets.”',
    },
  },
  {
    id: 'matthew-7:13-14',
    book: 'Matthew',
    chapter: 7,
    startVerse: 13,
    numVerses: 2,
    text: {
      esv:
        '“Enter by the narrow gate. For the gate is wide and the way is easy that leads to destruction, and those who enter by it are many. For the gate is narrow and the way is hard that leads to life, and those who find it are few.”',
      kjv:
        '“Enter ye in at the strait gate: for wide is the gate, and broad is the way, that leadeth to destruction, and many there be which go in thereat: Because strait is the gate, and narrow is the way, which leadeth unto life, and few there be that find it.”',
      niv:
        '“Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it.”',
    },
  },
  {
    id: 'matthew-7:15',
    book: 'Matthew',
    chapter: 7,
    startVerse: 15,
    numVerses: 1,
    text: {
      esv:
        '“Beware of false prophets, who come to you in sheep’s clothing but inwardly are ravenous wolves. You will recognize them by their fruits. Are grapes gathered from thornbushes, or figs from thistles?”',
      kjv:
        '“Beware of false prophets, which come to you in sheep’s clothing, but inwardly they are ravening wolves. Ye shall know them by their fruits. Do men gather grapes of thorns, or figs of thistles?”',
      niv:
        '“Watch out for false prophets. They come to you in sheep’s clothing, but inwardly they are ferocious wolves. By their fruit you will recognize them. Do people pick grapes from thornbushes, or figs from thistles?”',
    },
  },
  {
    id: 'matthew-7:21',
    book: 'Matthew',
    chapter: 7,
    startVerse: 21,
    numVerses: 1,
    text: {
      esv:
        '“Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of heaven, but the one who does the will of my Father who is in heaven.”',
      kjv:
        '“Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven.”',
      niv:
        '“Not everyone who says to me, ‘Lord, Lord,’ will enter the kingdom of heaven, but only the one who does the will of my Father who is in heaven.”',
    },
  },
  {
    id: 'matthew-7:24-25',
    book: 'Matthew',
    chapter: 7,
    startVerse: 24,
    numVerses: 2,
    text: {
      esv:
        '“Everyone then who hears these words of mine and does them will be like a wise man who built his house on the rock. And the rain fell, and the floods came, and the winds blew and beat on that house, but it did not fall, because it had been founded on the rock.”',
      kjv:
        '“Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock: And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a rock.”',
      niv:
        '“Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock.”',
    },
  },
  {
    id: 'matthew-11:28-30',
    book: 'Matthew',
    chapter: 11,
    startVerse: 28,
    numVerses: 3,
    text: {
      esv:
        '“Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light.”',
      kjv:
        '“Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.”',
      niv:
        '“Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light.”',
    },
  },
  {
    id: 'matthew-12:30',
    book: 'Matthew',
    chapter: 12,
    startVerse: 30,
    numVerses: 1,
    text: {
      esv:
        '“Whoever is not with me is against me, and whoever does not gather with me scatters.”',
      kjv:
        '“He that is not with me is against me; and he that gathereth not with me scattereth abroad.”',
      niv:
        '“Whoever is not with me is against me, and whoever does not gather with me scatters.”',
    },
  },
  {
    id: 'matthew-18:19-20',
    book: 'Matthew',
    chapter: 18,
    startVerse: 19,
    numVerses: 2,
    text: {
      esv:
        '“Again I say to you, if two of you agree on earth about anything they ask, it will be done for them by my Father in heaven. For where two or three are gathered in my name, there am I among them.”',
      kjv:
        '“Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven. For where two or three are gathered together in my name, there am I in the midst of them.”',
      niv:
        '“Again, truly I tell you that if two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven. For where two or three gather in my name, there am I with them.”',
    },
  },
  {
    id: 'matthew-18:21-22',
    book: 'Matthew',
    chapter: 18,
    startVerse: 21,
    numVerses: 2,
    text: {
      esv:
        'Then Peter came up and said to him, “Lord, how often will my brother sin against me, and I forgive him? As many as seven times?” Jesus said to him, “I do not say to you seven times, but seventy-seven times.”',
      kjv:
        'Then came Peter to him, and said, Lord, how oft shall my brother sin against me, and I forgive him? till seven times? Jesus saith unto him, I say not unto thee, Until seven times: but, Until seventy times seven.',
      niv:
        'Then Peter came to Jesus and asked, “Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?” Jesus answered, “I tell you, not seven times, but seventy-seven times.”',
    },
  },
  {
    id: 'matthew-19:14',
    book: 'Matthew',
    chapter: 19,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'But Jesus said, “Let the little children come to me and do not hinder them, for to such belongs the kingdom of heaven.”',
      kjv:
        'But Jesus said, Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven.',
      niv:
        'Jesus said, “Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.”',
    },
  },
  {
    id: 'matthew-22:37-40',
    book: 'Matthew',
    chapter: 22,
    startVerse: 37,
    numVerses: 4,
    text: {
      esv:
        'And he said to him, “You shall love the Lord your God with all your heart and with all your soul and with all your mind. This is the great and first commandment. And a second is like it: You shall love your neighbor as yourself. On these two commandments depend all the Law and the Prophets.”',
      kjv:
        'Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets.',
      niv:
        'Jesus replied: “‘Love the Lord your God with all your heart and with all your soul and with all your mind.’ This is the first and greatest commandment. And the second is like it: ‘Love your neighbor as yourself.’ All the Law and the Prophets hang on these two commandments.”',
    },
  },
  {
    id: 'matthew-24:42-44',
    book: 'Matthew',
    chapter: 24,
    startVerse: 42,
    numVerses: 3,
    text: {
      esv:
        '“Therefore, stay awake, for you do not know on what day your Lord is coming. But know this, that if the master of the house had known in what part of the night the thief was coming, he would have stayed awake and would not have let his house be broken into. Therefore you also must be ready, for the Son of Man is coming at an hour you do not expect.”',
      kjv:
        '“Watch therefore: for ye know not what hour your Lord doth come. But know this, that if the goodman of the house had known in what watch the thief would come, he would have watched, and would not have suffered his house to be broken up. Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh.”',
      niv:
        '“Therefore keep watch, because you do not know on what day your Lord will come. But understand this: If the owner of the house had known at what time of night the thief was coming, he would have kept watch and would not have let his house be broken into. So you also must be ready, because the Son of Man will come at an hour when you do not expect him.”',
    },
  },
  {
    id: 'matthew-26:26-28',
    book: 'Matthew',
    chapter: 26,
    startVerse: 26,
    numVerses: 3,
    text: {
      esv:
        'Now as they were eating, Jesus took bread, and after blessing it broke it and gave it to the disciples, and said, “Take, eat; this is my body.” And he took a cup, and when he had given thanks he gave it to them, saying, “Drink of it, all of you, for this is my blood of the covenant, which is poured out for many for the forgiveness of sins.”',
      kjv:
        'And as they were eating, Jesus took bread, and blessed it, and brake it, and gave it to the disciples, and said, Take, eat; this is my body. And he took the cup, and gave thanks, and gave it to them, saying, Drink ye all of it; For this is my blood of the new testament, which is shed for many for the remission of sins.”',
      niv:
        'While they were eating, Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, “Take and eat; this is my body.” Then he took a cup, and when he had given thanks, he gave it to them, saying, “Drink from it, all of you. This is my blood of the covenant, which is poured out for many for the forgiveness of sins.',
    },
  },
  {
    id: 'matthew-28:18-20',
    book: 'Matthew',
    chapter: 28,
    startVerse: 18,
    numVerses: 3,
    text: {
      esv:
        'And Jesus came and said to them, “All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you. And behold, I am with you always, to the end of the age.”',
      kjv:
        'And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world. Amen.',
      niv:
        'Then Jesus came to them and said, “All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.”',
    },
  },
  {
    id: 'mark-1:35',
    book: 'Mark',
    chapter: 1,
    startVerse: 35,
    numVerses: 1,
    text: {
      esv:
        'And rising very early in the morning, while it was still dark, he departed and went out to a desolate place, and there he prayed.',
      kjv:
        'And in the morning, rising up a great while before day, he went out, and departed into a solitary place, and there prayed.',
      niv:
        'Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed.',
    },
  },
  {
    id: 'mark-10:45',
    book: 'Mark',
    chapter: 10,
    startVerse: 45,
    numVerses: 1,
    text: {
      esv:
        '“For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.”',
      kjv:
        '“For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.”',
      niv:
        '“For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.”',
    },
  },
  {
    id: 'mark-11:23-26',
    book: 'Mark',
    chapter: 11,
    startVerse: 23,
    numVerses: 4,
    text: {
      esv:
        '“Truly, I say to you, whoever says to this mountain, ‘Be taken up and thrown into the sea,’ and does not doubt in his heart, but believes that what he says will come to pass, it will be done for him. Therefore I tell you, whatever you ask in prayer, believe that you have received it, and it will be yours.”',
      kjv:
        '“For verily I say unto you, That whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart, but shall believe that those things which he saith shall come to pass; he shall have whatsoever he saith. Therefore I say unto you, What things soever ye desire, when ye pray, believe that ye receive them, and ye shall have them.”',
      niv:
        '“Truly I tell you, if anyone says to this mountain, ‘Go, throw yourself into the sea,’ and does not doubt in their heart but believes that what they say will happen, it will be done for them. Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.”',
    },
  },
  {
    id: 'mark-12:30',
    book: 'Mark',
    chapter: 12,
    startVerse: 30,
    numVerses: 1,
    text: {
      esv:
        '“And you shall love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.”',
      kjv:
        '“And thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind, and with all thy strength: this is the first commandment.”',
      niv:
        '“Love the Lord your God with all your heart and with all your soul and with all your mind and with all your strength.”',
    },
  },
  {
    id: 'mark-16:15',
    book: 'Mark',
    chapter: 16,
    startVerse: 15,
    numVerses: 1,
    text: {
      esv:
        'And he said to them, “Go into all the world and proclaim the gospel to the whole creation.”',
      kjv:
        'And he said unto them, Go ye into all the world, and preach the gospel to every creature.',
      niv:
        'He said to them, “Go into all the world and preach the gospel to all creation.”',
    },
  },
  {
    id: 'luke-3:21-22',
    book: 'Luke',
    chapter: 3,
    startVerse: 21,
    numVerses: 2,
    text: {
      esv:
        'Now when all the people were baptized, and when Jesus also had been baptized and was praying, the heavens were opened, and the Holy Spirit descended on him in bodily form, like a dove; and a voice came from heaven, “You are my beloved Son; with you I am well pleased.”',
      kjv:
        'Now when all the people were baptized, it came to pass, that Jesus also being baptized, and praying, the heaven was opened, And the Holy Ghost descended in a bodily shape like a dove upon him, and a voice came from heaven, which said, Thou art my beloved Son; in thee I am well pleased.',
      niv:
        'When all the people were being baptized, Jesus was baptized too. And as he was praying, heaven was opened and the Holy Spirit descended on him in bodily form like a dove. And a voice came from heaven: “You are my Son, whom I love; with you I am well pleased.”',
    },
  },
  {
    id: 'luke-6:27',
    book: 'Luke',
    chapter: 6,
    startVerse: 27,
    numVerses: 1,
    text: {
      esv:
        '“But I say to you who hear, Love your enemies, do good to those who hate you, bless those who curse you, pray for those who abuse you.”',
      kjv:
        '“But I say unto you which hear, Love your enemies, do good to them which hate you, Bless them that curse you, and pray for them which despitefully use you.”',
      niv:
        '“But to you who are listening I say: Love your enemies, do good to those who hate you, bless those who curse you, pray for those who mistreat you.”',
    },
  },
  {
    id: 'luke-9:23',
    book: 'Luke',
    chapter: 9,
    startVerse: 23,
    numVerses: 1,
    text: {
      esv:
        'And he said to all, “If anyone would come after me, let him deny himself and take up his cross daily and follow me.”',
      kjv:
        'And he said to them all, If any man will come after me, let him deny himself, and take up his cross daily, and follow me.',
      niv:
        'Then he said to them all: “Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me.”',
    },
  },
  {
    id: 'luke-11:19',
    book: 'Luke',
    chapter: 11,
    startVerse: 19,
    numVerses: 1,
    text: {
      esv:
        '“And I tell you, ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.”',
      kjv:
        '“And I say unto you, Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you.”',
      niv:
        '“So I say to you: Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.”',
    },
  },
  {
    id: 'luke-19:10',
    book: 'Luke',
    chapter: 19,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv: '“For the Son of Man came to seek and to save the lost.”',
      kjv:
        '“For the Son of man is come to seek and to save that which was lost.”',
      niv: '“For the Son of Man came to seek and to save the lost.”',
    },
  },
  {
    id: 'john-1:1-5',
    book: 'John',
    chapter: 1,
    startVerse: 1,
    numVerses: 4,
    text: {
      esv:
        'In the beginning was the Word, and the Word was with God, and the Word was God. He was in the beginning with God. All things were made through him, and without him was not any thing made that was made. In him was life, and the life was the light of men. The light shines in the darkness, and the darkness has not overcome it.',
      kjv:
        'In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made. In him was life; and the life was the light of men. And the light shineth in darkness; and the darkness comprehended it not.',
      niv:
        'In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning. Through him all things were made; without him nothing was made that has been made. In him was life, and that life was the light of all mankind. The light shines in the darkness, and the darkness has not overcome it.',
    },
  },
  {
    id: 'john-1:12-13',
    book: 'John',
    chapter: 1,
    startVerse: 12,
    numVerses: 2,
    text: {
      esv:
        'But to all who did receive him, who believed in his name, he gave the right to become children of God, who were born, not of blood nor of the will of the flesh nor of the will of man, but of God.',
      kjv:
        'But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name: Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God.',
      niv:
        'Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God— children born not of natural descent, nor of human decision or a husband’s will, but born of God.',
    },
  },
  {
    id: 'john-1:14',
    book: 'John',
    chapter: 1,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.',
      kjv:
        'And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth.',
      niv:
        'The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.',
    },
  },
  {
    id: 'john-1:17',
    book: 'John',
    chapter: 1,
    startVerse: 17,
    numVerses: 1,
    text: {
      esv:
        'For the law was given through Moses; grace and truth came through Jesus Christ.',
      kjv:
        'For the law was given by Moses, but grace and truth came by Jesus Christ.',
      niv:
        'For the law was given through Moses; grace and truth came through Jesus Christ.',
    },
  },
  {
    id: 'john-3:16-17',
    book: 'John',
    chapter: 3,
    startVerse: 16,
    numVerses: 2,
    text: {
      esv:
        'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.',
      kjv:
        'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. For God sent not his Son into the world to condemn the world; but that the world through him might be saved.',
      niv:
        'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him.',
    },
  },
  {
    id: 'john-4:23-24',
    book: 'John',
    chapter: 4,
    startVerse: 23,
    numVerses: 2,
    text: {
      esv:
        '“But the hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth, for the Father is seeking such people to worship him. God is spirit, and those who worship him must worship in spirit and truth.”',
      kjv:
        '“But the hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth: for the Father seeketh such to worship him. God is a Spirit: and they that worship him must worship him in spirit and in truth.”',
      niv:
        '“Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth, for they are the kind of worshipers the Father seeks. God is spirit, and his worshipers must worship in the Spirit and in truth.”',
    },
  },
  {
    id: 'john-6:35',
    book: 'John',
    chapter: 6,
    startVerse: 35,
    numVerses: 1,
    text: {
      esv:
        'Jesus said to them, “I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst.”',
      kjv:
        'And Jesus said unto them, I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst.',
      niv:
        'Then Jesus declared, “I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.”',
    },
  },
  {
    id: 'john-6:37',
    book: 'John',
    chapter: 6,
    startVerse: 37,
    numVerses: 1,
    text: {
      esv:
        '“All that the Father gives me will come to me, and whoever comes to me I will never cast out.”',
      kjv:
        '“All that the Father giveth me shall come to me; and him that cometh to me I will in no wise cast out.”',
      niv:
        '“All those the Father gives me will come to me, and whoever comes to me I will never drive away.”',
    },
  },
  {
    id: 'john-8:32',
    book: 'John',
    chapter: 8,
    startVerse: 32,
    numVerses: 1,
    text: {
      esv: '“And you will know the truth, and the truth will set you free.”',
      kjv: '“And ye shall know the truth, and the truth shall make you free.”',
      niv: '“Then you will know the truth, and the truth will set you free.”',
    },
  },
  {
    id: 'john-10:9-10',
    book: 'John',
    chapter: 10,
    startVerse: 9,
    numVerses: 2,
    text: {
      esv:
        '“I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture. The thief cometh not, but for to steal, and to kill, and to destroy: I am come that they might have life, and that they might have it more abundantly.”',
      kjv:
        '“I am the gate; whoever enters through me will be saved. They will come in and go out, and find pasture. The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.”',
      niv:
        '“I am the door. If anyone enters by me, he will be saved and will go in and out and find pasture. The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly.”',
    },
  },
  {
    id: 'john-10:11',
    book: 'John',
    chapter: 10,
    startVerse: 11,
    numVerses: 1,
    text: {
      esv:
        '“I am the good shepherd. The good shepherd lays down his life for the sheep.”',
      kjv:
        '“I am the good shepherd: the good shepherd giveth his life for the sheep.”',
      niv:
        '“I am the good shepherd. The good shepherd lays down his life for the sheep.”',
    },
  },
  {
    id: 'john-10:27-29',
    book: 'John',
    chapter: 10,
    startVerse: 27,
    numVerses: 3,
    text: {
      esv:
        '“My sheep hear my voice, and I know them, and they follow me. I give them eternal life, and they will never perish, and no one will snatch them out of my hand. My Father, who has given them to me, is greater than all, and no one is able to snatch them out of the Father’s hand.”',
      kjv:
        '“My sheep hear my voice, and I know them, and they follow me: And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand. My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father’s hand.”',
      niv:
        '“My sheep listen to my voice; I know them, and they follow me. I give them eternal life, and they shall never perish; no one will snatch them out of my hand. My Father, who has given them to me, is greater than all; no one can snatch them out of my Father’s hand.”',
    },
  },
  {
    id: 'john-11:25-26',
    book: 'John',
    chapter: 11,
    startVerse: 25,
    numVerses: 2,
    text: {
      esv:
        'Jesus said to her, “I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die. Do you believe this?”',
      kjv:
        'Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live: And whosoever liveth and believeth in me shall never die. Believest thou this?',
      niv:
        'Jesus said to her, “I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?”',
    },
  },
  {
    id: 'john-13:34-35',
    book: 'John',
    chapter: 13,
    startVerse: 34,
    numVerses: 2,
    text: {
      esv:
        '“A new commandment I give to you, that you love one another: just as I have loved you, you also are to love one another. By this all people will know that you are my disciples, if you have love for one another.”',
      kjv:
        '“A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another. By this shall all men know that ye are my disciples, if ye have love one to another.”',
      niv:
        '“A new command I give you: Love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.”',
    },
  },
  {
    id: 'john-14:27',
    book: 'John',
    chapter: 14,
    startVerse: 27,
    numVerses: 1,
    text: {
      esv:
        'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.',
      kjv:
        'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.',
      niv:
        'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.',
    },
  },
  {
    id: 'john-15:1-2',
    book: 'John',
    chapter: 15,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        '“I am the true vine, and my Father is the vinedresser. Every branch in me that does not bear fruit he takes away, and every branch that does bear fruit he prunes, that it may bear more fruit.”',
      kjv:
        '“I am the true vine, and my Father is the husbandman. Every branch in me that beareth not fruit he taketh away: and every branch that beareth fruit, he purgeth it, that it may bring forth more fruit.”',
      niv:
        '“I am the true vine, and my Father is the gardener. He cuts off every branch in me that bears no fruit, while every branch that does bear fruit he prunes so that it will be even more fruitful.”',
    },
  },
  {
    id: 'john-15:5',
    book: 'John',
    chapter: 15,
    startVerse: 5,
    numVerses: 1,
    text: {
      esv:
        '“I am the vine; you are the branches. Whoever abides in me and I in him, he it is that bears much fruit, for apart from me you can do nothing.”',
      kjv:
        '“I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.”',
      niv:
        '“I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.”',
    },
  },
  {
    id: 'john-15:9-11',
    book: 'John',
    chapter: 15,
    startVerse: 9,
    numVerses: 3,
    text: {
      esv:
        '“As the Father has loved me, so have I loved you. Abide in my love. If you keep my commandments, you will abide in my love, just as I have kept my Father’s commandments and abide in his love. These things I have spoken to you, that my joy may be in you, and that your joy may be full.”',
      kjv:
        '“As the Father hath loved me, so have I loved you: continue ye in my love. If ye keep my commandments, ye shall abide in my love; even as I have kept my Father’s commandments, and abide in his love. These things have I spoken unto you, that my joy might remain in you, and that your joy might be full.”',
      niv:
        '“As the Father has loved me, so have I loved you. Now remain in my love. If you keep my commands, you will remain in my love, just as I have kept my Father’s commands and remain in his love. I have told you this so that my joy may be in you and that your joy may be complete.”',
    },
  },
  {
    id: 'acts-1:8',
    book: 'Acts',
    chapter: 1,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        '“But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.”',
      kjv:
        '“But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth.”',
      niv:
        '“But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.”',
    },
  },
  {
    id: 'acts-2:38',
    book: 'Acts',
    chapter: 2,
    startVerse: 38,
    numVerses: 1,
    text: {
      esv:
        'And Peter said to them, “Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.”',
      kjv:
        'Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.',
      niv:
        'Peter replied, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.”',
    },
  },
  {
    id: 'acts-2:42',
    book: 'Acts',
    chapter: 2,
    startVerse: 42,
    numVerses: 1,
    text: {
      esv:
        'And they devoted themselves to the apostles’ teaching and the fellowship, to the breaking of bread and the prayers.',
      kjv:
        'And they continued stedfastly in the apostles’ doctrine and fellowship, and in breaking of bread, and in prayers.',
      niv:
        'They devoted themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer.',
    },
  },
  {
    id: 'acts-4:12',
    book: 'Acts',
    chapter: 4,
    startVerse: 12,
    numVerses: 1,
    text: {
      esv:
        'And there is salvation in no one else, for there is no other name under heaven given among men by which we must be saved.',
      kjv:
        'Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved.',
      niv:
        'Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.',
    },
  },
  {
    id: 'acts-4:31',
    book: 'Acts',
    chapter: 4,
    startVerse: 31,
    numVerses: 1,
    text: {
      esv:
        'And when they had prayed, the place in which they were gathered together was shaken, and they were all filled with the Holy Spirit and continued to speak the word of God with boldness.',
      kjv:
        'And when they had prayed, the place was shaken where they were assembled together; and they were all filled with the Holy Ghost, and they spake the word of God with boldness.',
      niv:
        'After they prayed, the place where they were meeting was shaken. And they were all filled with the Holy Spirit and spoke the word of God boldly.',
    },
  },
  {
    id: 'acts-4:32',
    book: 'Acts',
    chapter: 4,
    startVerse: 32,
    numVerses: 1,
    text: {
      esv:
        'Now the full number of those who believed were of one heart and soul, and no one said that any of the things that belonged to him was his own, but they had everything in common.',
      kjv:
        'And the multitude of them that believed were of one heart and of one soul: neither said any of them that ought of the things which he possessed was his own; but they had all things common.',
      niv:
        'All the believers were one in heart and mind. No one claimed that any of their possessions was their own, but they shared everything they had.',
    },
  },
  {
    id: 'romans-1:16-17',
    book: 'Romans',
    chapter: 1,
    startVerse: 16,
    numVerses: 2,
    text: {
      esv:
        'For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes, to the Jew first and also to the Greek. For in it the righteousness of God is revealed from faith for faith, as it is written, “The righteous shall live by faith.”',
      kjv:
        'For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek. For therein is the righteousness of God revealed from faith to faith: as it is written, The just shall live by faith.',
      niv:
        'For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile. For in the gospel the righteousness of God is revealed—a righteousness that is by faith from first to last, just as it is written: “The righteous will live by faith.”',
    },
  },
  {
    id: 'romans-3:23-24',
    book: 'Romans',
    chapter: 3,
    startVerse: 23,
    numVerses: 2,
    text: {
      esv:
        'For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus',
      kjv:
        'For all have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus.',
      niv:
        'For all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.',
    },
  },
  {
    id: 'romans-5:1-2',
    book: 'Romans',
    chapter: 5,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ. Through him we have also obtained access by faith into this grace in which we stand, and we rejoice in hope of the glory of God.',
      kjv:
        'Therefore being justified by faith, we have peace with God through our Lord Jesus Christ: By whom also we have access by faith into this grace wherein we stand, and rejoice in hope of the glory of God.',
      niv:
        'Therefore, since we have been justified through faith, we have peace with God through our Lord Jesus Christ, through whom we have gained access by faith into this grace in which we now stand. And we boast in the hope of the glory of God.',
    },
  },
  {
    id: 'romans-5:7-8',
    book: 'Romans',
    chapter: 5,
    startVerse: 7,
    numVerses: 2,
    text: {
      esv:
        'For one will scarcely die for a righteous person—though perhaps for a good person one would dare even to die— but God shows his love for us in that while we were still sinners, Christ died for us.',
      kjv:
        'For scarcely for a righteous man will one die: yet peradventure for a good man some would even dare to die. But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.',
      niv:
        'Very rarely will anyone die for a righteous person, though for a good person someone might possibly dare to die. But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.',
    },
  },
  {
    id: 'romans-6:23',
    book: 'Romans',
    chapter: 6,
    startVerse: 23,
    numVerses: 1,
    text: {
      esv:
        'For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.',
      kjv:
        'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
      niv:
        'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.',
    },
  },
  {
    id: 'romans-8:1-2',
    book: 'Romans',
    chapter: 8,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'There is therefore now no condemnation for those who are in Christ Jesus. For the law of the Spirit of life has set you free in Christ Jesus from the law of sin and death.',
      kjv:
        'There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit. For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death.',
      niv:
        'Therefore, there is now no condemnation for those who are in Christ Jesus, because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death.',
    },
  },
  {
    id: 'romans-8:14',
    book: 'Romans',
    chapter: 8,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv: 'For all who are led by the Spirit of God are sons of God.',
      kjv:
        'For as many as are led by the Spirit of God, they are the sons of God.',
      niv:
        'For those who are led by the Spirit of God are the children of God.',
    },
  },
  {
    id: 'romans-8:26',
    book: 'Romans',
    chapter: 8,
    startVerse: 26,
    numVerses: 1,
    text: {
      esv:
        'Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words.',
      kjv:
        'Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.',
      niv:
        'In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.',
    },
  },
  {
    id: 'romans-8:28',
    book: 'Romans',
    chapter: 8,
    startVerse: 28,
    numVerses: 1,
    text: {
      esv:
        'And we know that for those who love God all things work together for good, for those who are called according to his purpose.',
      kjv:
        'And we know that all things work together for good to them that love God, to them who are the called according to his purpose.',
      niv:
        'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.',
    },
  },
  {
    id: 'romans-8:38-39',
    book: 'Romans',
    chapter: 8,
    startVerse: 38,
    numVerses: 2,
    text: {
      esv:
        'For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord.',
      kjv:
        'For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord.',
      niv:
        'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.',
    },
  },
  {
    id: 'romans-10:9-10',
    book: 'Romans',
    chapter: 10,
    startVerse: 9,
    numVerses: 2,
    text: {
      esv:
        'If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved. For with the heart one believes and is justified, and with the mouth one confesses and is saved.',
      kjv:
        'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.',
      niv:
        'If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.',
    },
  },
  {
    id: 'romans-10:17',
    book: 'Romans',
    chapter: 10,
    startVerse: 17,
    numVerses: 1,
    text: {
      esv:
        'So faith comes from hearing, and hearing through the word of Christ.',
      kjv: 'So then faith cometh by hearing, and hearing by the word of God.',
      niv:
        'Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.',
    },
  },
  {
    id: 'romans-11:33',
    book: 'Romans',
    chapter: 11,
    startVerse: 33,
    numVerses: 1,
    text: {
      esv:
        'Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways!',
      kjv:
        'O the depth of the riches both of the wisdom and knowledge of God! how unsearchable are his judgments, and his ways past finding out!',
      niv:
        'Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgments, and his paths beyond tracing out!',
    },
  },
  {
    id: 'romans-11:34-35',
    book: 'Romans',
    chapter: 11,
    startVerse: 34,
    numVerses: 2,
    text: {
      esv:
        'For who has known the mind of the Lord, or who has been his counselor? Or who has given a gift to him that he might be repaid?',
      kjv:
        'For who hath known the mind of the Lord? or who hath been his counsellor? Or who hath first given to him, and it shall be recompensed unto him again?',
      niv:
        'Who has known the mind of the Lord? Or who has been his counselor? Who has ever given to God, that God should repay them?',
    },
  },
  {
    id: 'romans-11:36',
    book: 'Romans',
    chapter: 11,
    startVerse: 36,
    numVerses: 1,
    text: {
      esv:
        'For from him and through him and to him are all things. To him be glory forever. Amen.',
      kjv:
        'For of him, and through him, and to him, are all things: to whom be glory for ever. Amen.',
      niv:
        'For from him and through him and for him are all things. To him be the glory forever! Amen.',
    },
  },
  {
    id: 'romans-12:1-2',
    book: 'Romans',
    chapter: 12,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship. Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.',
      kjv:
        'I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service. And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.',
      niv:
        'Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship. Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.',
    },
  },
  {
    id: 'romans-12:4-5',
    book: 'Romans',
    chapter: 12,
    startVerse: 4,
    numVerses: 1,
    text: {
      esv:
        'For as in one body we have many members, and the members do not all have the same function, so we, though many, are one body in Christ, and individually members one of another.',
      kjv:
        'For as we have many members in one body, and all members have not the same office: So we, being many, are one body in Christ, and every one members one of another.',
      niv:
        'For just as each of us has one body with many members, and these members do not all have the same function, so in Christ we, though many, form one body, and each member belongs to all the others.',
    },
  },
  {
    id: 'romans-12:12',
    book: 'Romans',
    chapter: 12,
    startVerse: 12,
    numVerses: 1,
    text: {
      esv: 'Rejoice in hope, be patient in tribulation, be constant in prayer.',
      kjv:
        'Rejoicing in hope; patient in tribulation; continuing instant in prayer.',
      niv: 'Be joyful in hope, patient in affliction, faithful in prayer.',
    },
  },
  {
    id: 'romans-15:13',
    book: 'Romans',
    chapter: 15,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope.',
      kjv:
        'Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.',
      niv:
        'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
    },
  },
  {
    id: '1corinthians-1:10',
    book: '1 Corinthians',
    chapter: 1,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        'I appeal to you, brothers, by the name of our Lord Jesus Christ, that all of you agree, and that there be no divisions among you, but that you be united in the same mind and the same judgment.',
      kjv:
        'Now I beseech you, brethren, by the name of our Lord Jesus Christ, that ye all speak the same thing, and that there be no divisions among you; but that ye be perfectly joined together in the same mind and in the same judgment.',
      niv:
        'I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ, that all of you agree with one another in what you say and that there be no divisions among you, but that you be perfectly united in mind and thought.',
    },
  },
  {
    id: '1corinthians-6:19-20',
    book: '1 Corinthians',
    chapter: 6,
    startVerse: 19,
    numVerses: 2,
    text: {
      esv:
        'Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.',
      kjv:
        'What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God’s.',
      niv:
        'Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies.',
    },
  },
  {
    id: '1corinthians-10:13',
    book: '1 Corinthians',
    chapter: 10,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it.',
      kjv:
        'There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.',
      niv:
        'No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.',
    },
  },
  {
    id: '1corinthians-10:31',
    book: '1 Corinthians',
    chapter: 10,
    startVerse: 31,
    numVerses: 1,
    text: {
      esv:
        'So, whether you eat or drink, or whatever you do, do all to the glory of God.',
      kjv:
        'Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.',
      niv:
        'So whether you eat or drink or whatever you do, do it all for the glory of God.',
    },
  },
  {
    id: '1corinthians-12:13',
    book: '1 Corinthians',
    chapter: 12,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'For in one Spirit we were all baptized into one body—Jews or Greeks, slaves or free—and all were made to drink of one Spirit.',
      kjv:
        'For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit.',
      niv:
        'For we were all baptized by one Spirit so as to form one body—whether Jews or Gentiles, slave or free—and we were all given the one Spirit to drink.',
    },
  },
  {
    id: '1corinthians-13:1-2',
    book: '1 Corinthians',
    chapter: 13,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal. And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but have not love, I am nothing.',
      kjv:
        'Though I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal. And though I have the gift of prophecy, and understand all mysteries, and all knowledge; and though I have all faith, so that I could remove mountains, and have not charity, I am nothing.',
      niv:
        'If I speak in the tongues of men or of angels, but do not have love, I am only a resounding gong or a clanging cymbal. If I have the gift of prophecy and can fathom all mysteries and all knowledge, and if I have a faith that can move mountains, but do not have love, I am nothing.',
    },
  },
  {
    id: '1corinthians-13:4-6',
    book: '1 Corinthians',
    chapter: 13,
    startVerse: 4,
    numVerses: 3,
    text: {
      esv:
        'Love is patient and kind; love does not envy or boast; it is not arrogant or rude. It does not insist on its own way; it is not irritable or resentful; it does not rejoice at wrongdoing, but rejoices with the truth.',
      kjv:
        'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, Doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; Rejoiceth not in iniquity, but rejoiceth in the truth.',
      niv:
        'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth.',
    },
  },
  {
    id: '1corinthians-13:13',
    book: '1 Corinthians',
    chapter: 13,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'So now faith, hope, and love abide, these three; but the greatest of these is love.',
      kjv:
        'And now abideth faith, hope, charity, these three; but the greatest of these is charity.',
      niv:
        'And now these three remain: faith, hope and love. But the greatest of these is love.',
    },
  },
  {
    id: '1corinthians-14:26',
    book: '1 Corinthians',
    chapter: 14,
    startVerse: 26,
    numVerses: 1,
    text: {
      esv:
        'What then, brothers? When you come together, each one has a hymn, a lesson, a revelation, a tongue, or an interpretation. Let all things be done for building up.',
      kjv:
        'How is it then, brethren? when ye come together, every one of you hath a psalm, hath a doctrine, hath a tongue, hath a revelation, hath an interpretation. Let all things be done unto edifying.',
      niv:
        'What then shall we say, brothers and sisters? When you come together, each of you has a hymn, or a word of instruction, a revelation, a tongue or an interpretation. Everything must be done so that the church may be built up.',
    },
  },
  {
    id: '1corinthians-15:58',
    book: '1 Corinthians',
    chapter: 15,
    startVerse: 58,
    numVerses: 1,
    text: {
      esv:
        'Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that in the Lord your labor is not in vain.',
      kjv:
        'Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.',
      niv:
        'Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.',
    },
  },
  {
    id: '2corinthians-1:3-4',
    book: '2 Corinthians',
    chapter: 1,
    startVerse: 3,
    numVerses: 2,
    text: {
      esv:
        'Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.',
      kjv:
        'Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort; Who comforteth us in all our tribulation, that we may be able to comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God.',
      niv:
        'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.',
    },
  },
  {
    id: '2corinthians-9:6-7',
    book: '2 Corinthians',
    chapter: 9,
    startVerse: 6,
    numVerses: 2,
    text: {
      esv:
        'The point is this: whoever sows sparingly will also reap sparingly, and whoever sows bountifully will also reap bountifully. Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.',
      kjv:
        'But this I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully. Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.',
      niv:
        'Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.',
    },
  },
  {
    id: '2corinthians-9:8',
    book: '2 Corinthians',
    chapter: 9,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'And God is able to make all grace abound to you, so that having all sufficiency in all things at all times, you may abound in every good work.',
      kjv:
        'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work.',
      niv:
        'And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.',
    },
  },
  {
    id: '2corinthians-13:14',
    book: '2 Corinthians',
    chapter: 13,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.',
      kjv:
        'The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all. Amen.',
      niv:
        'May the grace of the Lord Jesus Christ, and the love of God, and the fellowship of the Holy Spirit be with you all.',
    },
  },
  {
    id: 'galatians-2:20',
    book: 'Galatians',
    chapter: 2,
    startVerse: 20,
    numVerses: 1,
    text: {
      esv:
        'I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.',
      kjv:
        'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.',
      niv:
        'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.',
    },
  },
  {
    id: 'galatians-3:26-27',
    book: 'Galatians',
    chapter: 3,
    startVerse: 26,
    numVerses: 2,
    text: {
      esv:
        'For in Christ Jesus you are all sons of God, through faith. For as many of you as were baptized into Christ have put on Christ.',
      kjv:
        'For ye are all the children of God by faith in Christ Jesus. For as many of you as have been baptized into Christ have put on Christ.',
      niv:
        'So in Christ Jesus you are all children of God through faith, for all of you who were baptized into Christ have clothed yourselves with Christ.',
    },
  },
  {
    id: 'galatians-3:28',
    book: 'Galatians',
    chapter: 3,
    startVerse: 28,
    numVerses: 1,
    text: {
      esv:
        'There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.',
      kjv:
        'There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.',
      niv:
        'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.',
    },
  },
  {
    id: 'galatians-5:1',
    book: 'Galatians',
    chapter: 5,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'For freedom Christ has set us free; stand firm therefore, and do not submit again to a yoke of slavery.',
      kjv:
        'Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.',
      niv:
        'It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.',
    },
  },
  {
    id: 'galatians-5:13-14',
    book: 'Galatians',
    chapter: 5,
    startVerse: 13,
    numVerses: 2,
    text: {
      esv:
        'For you were called to freedom, brothers. Only do not use your freedom as an opportunity for the flesh, but through love serve one another. For the whole law is fulfilled in one word: “You shall love your neighbor as yourself.”',
      kjv:
        'For, brethren, ye have been called unto liberty; only use not liberty for an occasion to the flesh, but by love serve one another. For all the law is fulfilled in one word, even in this; Thou shalt love thy neighbour as thyself.',
      niv:
        'You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love. For the entire law is fulfilled in keeping this one command: “Love your neighbor as yourself.”',
    },
  },
  {
    id: 'galatians-5:22-23',
    book: 'Galatians',
    chapter: 5,
    startVerse: 22,
    numVerses: 2,
    text: {
      esv:
        'But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.',
      kjv:
        'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.',
      niv:
        'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.',
    },
  },
  {
    id: 'galatians-15:16-18',
    book: 'Galatians',
    chapter: 15,
    startVerse: 16,
    numVerses: 3,
    text: {
      esv:
        'But I say, walk by the Spirit, and you will not gratify the desires of the flesh. For the desires of the flesh are against the Spirit, and the desires of the Spirit are against the flesh, for these are opposed to each other, to keep you from doing the things you want to do. But if you are led by the Spirit, you are not under the law.',
      kjv:
        'This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh. For the flesh lusteth against the Spirit, and the Spirit against the flesh: and these are contrary the one to the other: so that ye cannot do the things that ye would. But if ye be led of the Spirit, ye are not under the law.',
      niv:
        'So I say, walk by the Spirit, and you will not gratify the desires of the flesh. For the flesh desires what is contrary to the Spirit, and the Spirit what is contrary to the flesh. They are in conflict with each other, so that you are not to do whatever you want. But if you are led by the Spirit, you are not under the law.',
    },
  },
  {
    id: 'ephesians-1:3',
    book: 'Ephesians',
    chapter: 1,
    startVerse: 3,
    numVerses: 1,
    text: {
      esv:
        'Blessed be the God and Father of our Lord Jesus Christ, who has blessed us in Christ with every spiritual blessing in the heavenly places.',
      kjv:
        'Blessed be the God and Father of our Lord Jesus Christ, who hath blessed us with all spiritual blessings in heavenly places in Christ.',
      niv:
        'Praise be to the God and Father of our Lord Jesus Christ, who has blessed us in the heavenly realms with every spiritual blessing in Christ.',
    },
  },
  {
    id: 'ephesians-1:13-14',
    book: 'Ephesians',
    chapter: 1,
    startVerse: 13,
    numVerses: 2,
    text: {
      esv:
        'In him you also, when you heard the word of truth, the gospel of your salvation, and believed in him, were sealed with the promised Holy Spirit, who is the guarantee of our inheritance until we acquire possession of it, to the praise of his glory.',
      kjv:
        'In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that holy Spirit of promise, Which is the earnest of our inheritance until the redemption of the purchased possession, unto the praise of his glory.',
      niv:
        'And you also were included in Christ when you heard the message of truth, the gospel of your salvation. When you believed, you were marked in him with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance until the redemption of those who are God’s possession—to the praise of his glory.',
    },
  },
  {
    id: 'ephesians-2:4-5',
    book: 'Ephesians',
    chapter: 2,
    startVerse: 4,
    numVerses: 2,
    text: {
      esv:
        'But God, being rich in mercy, because of the great love with which he loved us, even when we were dead in our trespasses, made us alive together with Christ—by grace you have been saved.',
      kjv:
        'But God, who is rich in mercy, for his great love wherewith he loved us, Even when we were dead in sins, hath quickened us together with Christ, (by grace ye are saved).',
      niv:
        'But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.',
    },
  },
  {
    id: 'ephesians-2:8-9',
    book: 'Ephesians',
    chapter: 2,
    startVerse: 8,
    numVerses: 2,
    text: {
      esv:
        'For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast.',
      kjv:
        'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.',
      niv:
        'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.',
    },
  },
  {
    id: 'ephesians-2:10',
    book: 'Ephesians',
    chapter: 2,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        'For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them.',
      kjv:
        'For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them.',
      niv:
        'For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.',
    },
  },
  {
    id: 'ephesians-3:20-21',
    book: 'Ephesians',
    chapter: 3,
    startVerse: 20,
    numVerses: 2,
    text: {
      esv:
        'Now to him who is able to do far more abundantly than all that we ask or think, according to the power at work within us, to him be glory in the church and in Christ Jesus throughout all generations, forever and ever. Amen.',
      kjv:
        'Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the power that worketh in us, Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen.',
      niv:
        'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us, to him be glory in the church and in Christ Jesus throughout all generations, for ever and ever! Amen.',
    },
  },
  {
    id: 'ephesians-4:1-3',
    book: 'Ephesians',
    chapter: 4,
    startVerse: 1,
    numVerses: 3,
    text: {
      esv:
        'I therefore, a prisoner for the Lord, urge you to walk in a manner worthy of the calling to which you have been called, with all humility and gentleness, with patience, bearing with one another in love, eager to maintain the unity of the Spirit in the bond of peace.',
      kjv:
        'I therefore, the prisoner of the Lord, beseech you that ye walk worthy of the vocation wherewith ye are called, With all lowliness and meekness, with longsuffering, forbearing one another in love; Endeavouring to keep the unity of the Spirit in the bond of peace.',
      niv:
        'As a prisoner for the Lord, then, I urge you to live a life worthy of the calling you have received. Be completely humble and gentle; be patient, bearing with one another in love. Make every effort to keep the unity of the Spirit through the bond of peace.',
    },
  },
  {
    id: 'ephesians-4:11-13',
    book: 'Ephesians',
    chapter: 4,
    startVerse: 11,
    numVerses: 3,
    text: {
      esv:
        'And he gave the apostles, the prophets, the evangelists, the shepherds and teachers, to equip the saints for the work of ministry, for building up the body of Christ, until we all attain to the unity of the faith and of the knowledge of the Son of God, to mature manhood, to the measure of the stature of the fullness of Christ.',
      kjv:
        'And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ: Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ.',
      niv:
        'So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up until we all reach unity in the faith and in the knowledge of the Son of God and become mature, attaining to the whole measure of the fullness of Christ.',
    },
  },
  {
    id: 'ephesians-4:15-16',
    book: 'Ephesians',
    chapter: 4,
    startVerse: 15,
    numVerses: 2,
    text: {
      niv:
        'Instead, speaking the truth in love, we will grow to become in every respect the mature body of him who is the head, that is, Christ. From him the whole body, joined and held together by every supporting ligament, grows and builds itself up in love, as each part does its work.',
      esv:
        'Rather, speaking the truth in love, we are to grow up in every way into him who is the head, into Christ, from whom the whole body, joined and held together by every joint with which it is equipped, when each part is working properly, makes the body grow so that it builds itself up in love.',
      kjv:
        'But speaking the truth in love, may grow up into him in all things, which is the head, even Christ: From whom the whole body fitly joined together and compacted by that which every joint supplieth, according to the effectual working in the measure of every part, maketh increase of the body unto the edifying of itself in love.',
    },
  },
  {
    id: 'ephesians-4:31-32',
    book: 'Ephesians',
    chapter: 4,
    startVerse: 31,
    numVerses: 2,
    text: {
      esv:
        'Let all bitterness and wrath and anger and clamor and slander be put away from you, along with all malice. Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.',
      kjv:
        'Let all bitterness, and wrath, and anger, and clamour, and evil speaking, be put away from you, with all malice: And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ’s sake hath forgiven you.',
      niv:
        'Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice. Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.',
    },
  },
  {
    id: 'ephesians-5:1-2',
    book: 'Ephesians',
    chapter: 5,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'Therefore be imitators of God, as beloved children. And walk in love, as Christ loved us and gave himself up for us, a fragrant offering and sacrifice to God.',
      kjv:
        'Be ye therefore followers of God, as dear children; And walk in love, as Christ also hath loved us, and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour.',
      niv:
        'Follow God’s example, therefore, as dearly loved children and walk in the way of love, just as Christ loved us and gave himself up for us as a fragrant offering and sacrifice to God.',
    },
  },
  {
    id: 'ephesians-5:15-17',
    book: 'Ephesians',
    chapter: 5,
    startVerse: 15,
    numVerses: 3,
    text: {
      esv:
        'Look carefully then how you walk, not as unwise but as wise, making the best use of the time, because the days are evil. Therefore do not be foolish, but understand what the will of the Lord is.',
      kjv:
        'See then that ye walk circumspectly, not as fools, but as wise, Redeeming the time, because the days are evil. Wherefore be ye not unwise, but understanding what the will of the Lord is.',
      niv:
        'Be very careful, then, how you live—not as unwise but as wise, making the most of every opportunity, because the days are evil. Therefore do not be foolish, but understand what the Lord’s will is.',
    },
  },
  {
    id: 'ephesians-5:18-20',
    book: 'Ephesians',
    chapter: 5,
    startVerse: 18,
    numVerses: 3,
    text: {
      esv:
        'And do not get drunk with wine, for that is debauchery, but be filled with the Spirit, addressing one another in psalms and hymns and spiritual songs, singing and making melody to the Lord with your heart, giving thanks always and for everything to God the Father in the name of our Lord Jesus Christ.',
      kjv:
        'And be not drunk with wine, wherein is excess; but be filled with the Spirit; Speaking to yourselves in psalms and hymns and spiritual songs, singing and making melody in your heart to the Lord; Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ.',
      niv:
        'Do not get drunk on wine, which leads to debauchery. Instead, be filled with the Spirit, speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord, always giving thanks to God the Father for everything, in the name of our Lord Jesus Christ.',
    },
  },
  {
    id: 'ephesians-6:11-12',
    book: 'Ephesians',
    chapter: 6,
    startVerse: 11,
    numVerses: 2,
    text: {
      esv:
        'Put on the whole armor of God, that you may be able to stand against the schemes of the devil. For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness, against the spiritual forces of evil in the heavenly places.',
      kjv:
        'Put on the whole armour of God, that ye may be able to stand against the wiles of the devil. For we wrestle not against flesh and blood, but against principalities, against powers, against the rulers of the darkness of this world, against spiritual wickedness in high places.',
      niv:
        'Put on the full armor of God, so that you can take your stand against the devil’s schemes. For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.',
    },
  },
  {
    id: 'ephesians-6:16-17',
    book: 'Ephesians',
    chapter: 6,
    startVerse: 16,
    numVerses: 2,
    text: {
      esv:
        'In all circumstances take up the shield of faith, with which you can extinguish all the flaming darts of the evil one; and take the helmet of salvation, and the sword of the Spirit, which is the word of God.',
      kjv:
        'Above all, taking the shield of faith, wherewith ye shall be able to quench all the fiery darts of the wicked.',
      niv:
        'In addition to all this, take up the shield of faith, with which you can extinguish all the flaming arrows of the evil one. Take the helmet of salvation and the sword of the Spirit, which is the word of God.',
    },
  },
  {
    id: 'ephesians-6:18',
    book: 'Ephesians',
    chapter: 6,
    startVerse: 18,
    numVerses: 1,
    text: {
      esv:
        'Praying at all times in the Spirit, with all prayer and supplication. To that end, keep alert with all perseverance, making supplication for all the saints.',
      kjv:
        'Praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance and supplication for all saints.',
      niv:
        'And pray in the Spirit on all occasions with all kinds of prayers and requests. With this in mind, be alert and always keep on praying for all the Lord’s people.',
    },
  },
  {
    id: 'philippians-2:3-4',
    book: 'Philippians',
    chapter: 2,
    startVerse: 3,
    numVerses: 2,
    text: {
      esv:
        'Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others.',
      kjv:
        'Let nothing be done through strife or vainglory; but in lowliness of mind let each esteem other better than themselves. Look not every man on his own things, but every man also on the things of others.',
      niv:
        'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.',
    },
  },
  {
    id: 'philippians-2:9-11',
    book: 'Philippians',
    chapter: 2,
    startVerse: 9,
    numVerses: 3,
    text: {
      esv:
        'Therefore God has highly exalted him and bestowed on him the name that is above every name, so that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.',
      kjv:
        'Wherefore God also hath highly exalted him, and given him a name which is above every name: That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth; And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.',
      niv:
        'Therefore God exalted him to the highest place and gave him the name that is above every name, that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue acknowledge that Jesus Christ is Lord, to the glory of God the Father.',
    },
  },
  {
    id: 'philippians-4:6-7',
    book: 'Philippians',
    chapter: 4,
    startVerse: 6,
    numVerses: 2,
    text: {
      esv:
        'Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.',
      kjv:
        'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
      niv:
        'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
    },
  },
  {
    id: 'philippians-4:8',
    book: 'Philippians',
    chapter: 4,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things.',
      kjv:
        'Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.',
      niv:
        'Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.',
    },
  },
  {
    id: 'philippians-4:12-13',
    book: 'Philippians',
    chapter: 4,
    startVerse: 12,
    numVerses: 2,
    text: {
      esv:
        'I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need. I can do all things through him who strengthens me.',
      kjv:
        'I know both how to be abased, and I know how to abound: every where and in all things I am instructed both to be full and to be hungry, both to abound and to suffer need. I can do all things through Christ which strengtheneth me.',
      niv:
        'I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want. I can do all this through him who gives me strength.',
    },
  },
  {
    id: 'philippians-4:13',
    book: 'Philippians',
    chapter: 4,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv: 'I can do all things through him who strengthens me.',
      kjv: 'I can do all things through Christ which strengtheneth me.',
      niv: 'I can do all this through him who gives me strength.',
    },
  },
  {
    id: 'philippians-4:19',
    book: 'Philippians',
    chapter: 4,
    startVerse: 19,
    numVerses: 1,
    text: {
      esv:
        'And my God will supply every need of yours according to his riches in glory in Christ Jesus.',
      kjv:
        'But my God shall supply all your need according to his riches in glory by Christ Jesus.',
      niv:
        'And my God will meet all your needs according to the riches of his glory in Christ Jesus.',
    },
  },
  {
    id: 'colossians-1:15-17',
    book: 'Colossians',
    chapter: 1,
    startVerse: 15,
    numVerses: 3,
    text: {
      esv:
        'He is the image of the invisible God, the firstborn of all creation. For by him all things were created, in heaven and on earth, visible and invisible, whether thrones or dominions or rulers or authorities—all things were created through him and for him. And he is before all things, and in him all things hold together.',
      kjv:
        'Who is the image of the invisible God, the firstborn of every creature: For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him: And he is before all things, and by him all things consist.',
      niv:
        'The Son is the image of the invisible God, the firstborn over all creation. For in him all things were created: things in heaven and on earth, visible and invisible, whether thrones or powers or rulers or authorities; all things have been created through him and for him. He is before all things, and in him all things hold together.',
    },
  },
  {
    id: 'colossians-3:12-13',
    book: 'Colossians',
    chapter: 3,
    startVerse: 12,
    numVerses: 2,
    text: {
      esv:
        'Put on then, as God’s chosen ones, holy and beloved, compassionate hearts, kindness, humility, meekness, and patience, bearing with one another and, if one has a complaint against another, forgiving each other; as the Lord has forgiven you, so you also must forgive.',
      kjv:
        'Put on therefore, as the elect of God, holy and beloved, bowels of mercies, kindness, humbleness of mind, meekness, longsuffering; Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye.',
      niv:
        'Therefore, as God’s chosen people, holy and dearly loved, clothe yourselves with compassion, kindness, humility, gentleness and patience. Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.',
    },
  },
  {
    id: 'colossians-3:16',
    book: 'Colossians',
    chapter: 3,
    startVerse: 16,
    numVerses: 1,
    text: {
      esv:
        'Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.',
      kjv:
        'Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.',
      niv:
        'Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.',
    },
  },
  {
    id: 'colossians-3:23-24',
    book: 'Colossians',
    chapter: 3,
    startVerse: 23,
    numVerses: 2,
    text: {
      esv:
        'Whatever you do, work heartily, as for the Lord and not for men, knowing that from the Lord you will receive the inheritance as your reward. You are serving the Lord Christ.',
      kjv:
        'And whatsoever ye do, do it heartily, as to the Lord, and not unto men; Knowing that of the Lord ye shall receive the reward of the inheritance: for ye serve the Lord Christ.',
      niv:
        'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward. It is the Lord Christ you are serving.',
    },
  },
  {
    id: 'colossians-4:2',
    book: 'Colossians',
    chapter: 4,
    startVerse: 2,
    numVerses: 1,
    text: {
      esv:
        'Continue steadfastly in prayer, being watchful in it with thanksgiving.',
      kjv: 'Continue in prayer, and watch in the same with thanksgiving.',
      niv: 'Devote yourselves to prayer, being watchful and thankful.',
    },
  },
  {
    id: '1thessalonians-5:11',
    book: '1 Thessalonians',
    chapter: 5,
    startVerse: 11,
    numVerses: 1,
    text: {
      esv:
        'Therefore encourage one another and build one another up, just as you are doing.',
      kjv:
        'Wherefore comfort yourselves together, and edify one another, even as also ye do.',
      niv:
        'Therefore encourage one another and build each other up, just as in fact you are doing.',
    },
  },
  {
    id: '1thessalonians-5:16-18',
    book: '1 Thessalonians',
    chapter: 5,
    startVerse: 16,
    numVerses: 3,
    text: {
      esv:
        'Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you.',
      kjv:
        'Rejoice evermore. Pray without ceasing. In every thing give thanks: for this is the will of God in Christ Jesus concerning you.',
      niv:
        'Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.',
    },
  },
  {
    id: '1timothy-2:1-2',
    book: '1 Timothy',
    chapter: 2,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions, that we may lead a peaceful and quiet life, godly and dignified in every way.',
      kjv:
        'exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men; For kings, and for all that are in authority; that we may lead a quiet and peaceable life in all godliness and honesty.',
      niv:
        'I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people— for kings and all those in authority, that we may live peaceful and quiet lives in all godliness and holiness.',
    },
  },
  {
    id: '2timothy-1:7',
    book: '2 Timothy',
    chapter: 1,
    startVerse: 7,
    numVerses: 1,
    text: {
      esv:
        'For God gave us a spirit not of fear but of power and love and self-control.',
      kjv:
        'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.',
      niv:
        'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.',
    },
  },
  {
    id: '2timothy-3:16-17',
    book: '2 Timothy',
    chapter: 3,
    startVerse: 16,
    numVerses: 2,
    text: {
      esv:
        'All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.',
      kjv:
        'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, thoroughly furnished unto all good works.',
      niv:
        'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.',
    },
  },
  {
    id: '2timothy-4:2',
    book: '2 Timothy',
    chapter: 4,
    startVerse: 2,
    numVerses: 1,
    text: {
      esv:
        'Preach the word; be ready in season and out of season; reprove, rebuke, and exhort, with complete patience and teaching.',
      kjv:
        'Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all long suffering and doctrine.',
      niv:
        'Preach the word; be prepared in season and out of season; correct, rebuke and encourage—with great patience and careful instruction.',
    },
  },
  {
    id: 'titus-3:5-7',
    book: 'Titus',
    chapter: 3,
    startVerse: 5,
    numVerses: 3,
    text: {
      esv:
        'He saved us, not because of works done by us in righteousness, but according to his own mercy, by the washing of regeneration and renewal of the Holy Spirit, whom he poured out on us richly through Jesus Christ our Savior, so that being justified by his grace we might become heirs according to the hope of eternal life.',
      kjv:
        'Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost; Which he shed on us abundantly through Jesus Christ our Saviour; That being justified by his grace, we should be made heirs according to the hope of eternal life.',
      niv:
        'He saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit, whom he poured out on us generously through Jesus Christ our Savior, so that, having been justified by his grace, we might become heirs having the hope of eternal life.',
    },
  },
  {
    id: 'hebrews-4:12',
    book: 'Hebrews',
    chapter: 4,
    startVerse: 12,
    numVerses: 1,
    text: {
      esv:
        'For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and intentions of the heart.',
      kjv:
        'For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.',
      niv:
        'For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.',
    },
  },
  {
    id: 'hebrews-4:15',
    book: 'Hebrews',
    chapter: 4,
    startVerse: 15,
    numVerses: 1,
    text: {
      esv:
        'For we do not have a high priest who is unable to sympathize with our weaknesses, but one who in every respect has been tempted as we are, yet without sin.',
      kjv:
        'For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin.',
      niv:
        'For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are—yet he did not sin.',
    },
  },
  {
    id: 'hebrews-4:16',
    book: 'Hebrews',
    chapter: 4,
    startVerse: 16,
    numVerses: 1,
    text: {
      esv:
        'Let us then with confidence draw near to the throne of grace, that we may receive mercy and find grace to help in time of need.',
      kjv:
        'Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.',
      niv:
        'Let us then approach God’s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.',
    },
  },
  {
    id: 'hebrews-10:24-25',
    book: 'Hebrews',
    chapter: 10,
    startVerse: 24,
    numVerses: 2,
    text: {
      esv:
        'And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.',
      kjv:
        'And let us consider one another to provoke unto love and to good works: Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.',
      niv:
        'And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another—and all the more as you see the Day approaching.',
    },
  },
  {
    id: 'hebrews-11:1',
    book: 'Hebrews',
    chapter: 11,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'Now faith is the assurance of things hoped for, the conviction of things not seen.',
      kjv:
        'Now faith is the substance of things hoped for, the evidence of things not seen.',
      niv:
        'Now faith is confidence in what we hope for and assurance about what we do not see.',
    },
  },
  {
    id: 'hebrews-11:6',
    book: 'Hebrews',
    chapter: 11,
    startVerse: 6,
    numVerses: 1,
    text: {
      esv:
        'And without faith it is impossible to please him, for whoever would draw near to God must believe that he exists and that he rewards those who seek him.',
      kjv:
        'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.',
      niv:
        'And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
    },
  },
  {
    id: 'hebrews-12:1',
    book: 'Hebrews',
    chapter: 12,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us.',
      kjv:
        'Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us.',
      niv:
        'Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us.',
    },
  },
  {
    id: 'hebrews-12:14',
    book: 'Hebrews',
    chapter: 12,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'Strive for peace with everyone, and for the holiness without which no one will see the Lord.',
      kjv:
        'Follow peace with all men, and holiness, without which no man shall see the Lord.',
      niv:
        'Make every effort to live in peace with everyone and to be holy; without holiness no one will see the Lord.',
    },
  },
  {
    id: 'hebrews-13:1-2',
    book: 'Hebrews',
    chapter: 13,
    startVerse: 1,
    numVerses: 2,
    text: {
      esv:
        'Let brotherly love continue. Do not neglect to show hospitality to strangers, for thereby some have entertained angels unawares.',
      kjv:
        'Let brotherly love continue. Be not forgetful to entertain strangers: for thereby some have entertained angels unawares.',
      niv:
        'Keep on loving one another as brothers and sisters. Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it.',
    },
  },
  {
    id: 'hebrews-13:5',
    book: 'Hebrews',
    chapter: 13,
    startVerse: 5,
    numVerses: 1,
    text: {
      esv:
        'Keep your life free from love of money, and be content with what you have, for he has said, “I will never leave you nor forsake you.”',
      kjv:
        'Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee.',
      niv:
        'Keep your lives free from the love of money and be content with what you have, because God has said, “Never will I leave you; never will I forsake you.”',
    },
  },
  {
    id: 'hebrews-13:8',
    book: 'Hebrews',
    chapter: 13,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv: 'Jesus Christ is the same yesterday and today and forever.',
      kjv: 'Jesus Christ the same yesterday, and to day, and for ever.',
      niv: 'Jesus Christ is the same yesterday and today and forever.',
    },
  },
  {
    id: 'james-1:2-3',
    book: 'James',
    chapter: 1,
    startVerse: 2,
    numVerses: 2,
    text: {
      esv:
        'Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness.',
      kjv:
        'My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.',
      niv:
        'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.',
    },
  },
  {
    id: 'james-1:5',
    book: 'James',
    chapter: 1,
    startVerse: 5,
    numVerses: 1,
    text: {
      esv:
        'If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him.',
      kjv:
        'If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.',
      niv:
        'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.',
    },
  },
  {
    id: 'james-1:17',
    book: 'James',
    chapter: 1,
    startVerse: 17,
    numVerses: 1,
    text: {
      esv:
        'Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change.',
      kjv:
        'Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.',
      niv:
        'Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.',
    },
  },
  {
    id: 'james-1:19-20',
    book: 'James',
    chapter: 1,
    startVerse: 19,
    numVerses: 2,
    text: {
      esv:
        'Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God.',
      kjv:
        'Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath: For the wrath of man worketh not the righteousness of God.',
      niv:
        'My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.',
    },
  },
  {
    id: 'james-2:14',
    book: 'James',
    chapter: 2,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'What good is it, my brothers, if someone says he has faith but does not have works? Can that faith save him?',
      kjv:
        'What doth it profit, my brethren, though a man say he hath faith, and have not works? can faith save him?',
      niv:
        'What good is it, my brothers and sisters, if someone claims to have faith but has no deeds? Can such faith save them?',
    },
  },
  {
    id: 'james-4:7',
    book: 'James',
    chapter: 4,
    startVerse: 7,
    numVerses: 1,
    text: {
      esv:
        'Submit yourselves therefore to God. Resist the devil, and he will flee from you.',
      kjv:
        'Submit yourselves therefore to God. Resist the devil, and he will flee from you.',
      niv:
        'Submit yourselves, then, to God. Resist the devil, and he will flee from you.',
    },
  },
  {
    id: 'james-5:13',
    book: 'James',
    chapter: 5,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him sing praise.',
      kjv:
        'Is any among you afflicted? let him pray. Is any merry? let him sing psalms.',
      niv:
        'Is anyone among you in trouble? Let them pray. Is anyone happy? Let them sing songs of praise.',
    },
  },
  {
    id: 'james-5:13-14',
    book: 'James',
    chapter: 5,
    startVerse: 13,
    numVerses: 2,
    text: {
      esv:
        'Is anyone among you suffering? Let him pray. Is anyone cheerful? Let him sing praise. Is anyone among you sick? Let him call for the elders of the church, and let them pray over him, anointing him with oil in the name of the Lord.',
      kjv:
        'Is any among you afflicted? let him pray. Is any merry? let him sing psalms. Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord.',
      niv:
        'Is anyone among you in trouble? Let them pray. Is anyone happy? Let them sing songs of praise. Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord.',
    },
  },
  {
    id: '1peter-1:13',
    book: '1 Peter',
    chapter: 1,
    startVerse: 13,
    numVerses: 1,
    text: {
      esv:
        'Therefore, preparing your minds for action, and being sober-minded, set your hope fully on the grace that will be brought to you at the revelation of Jesus Christ.',
      kjv:
        'Wherefore gird up the loins of your mind, be sober, and hope to the end for the grace that is to be brought unto you at the revelation of Jesus Christ.',
      niv:
        'Therefore, with minds that are alert and fully sober, set your hope on the grace to be brought to you when Jesus Christ is revealed at his coming.',
    },
  },
  {
    id: '1peter-1:14-16',
    book: '1 Peter',
    chapter: 1,
    startVerse: 14,
    numVerses: 3,
    text: {
      esv:
        'As obedient children, do not be conformed to the passions of your former ignorance, but as he who called you is holy, you also be holy in all your conduct, since it is written, “You shall be holy, for I am holy.”',
      kjv:
        'As obedient children, not fashioning yourselves according to the former lusts in your ignorance: But as he which hath called you is holy, so be ye holy in all manner of conversation; Because it is written, Be ye holy; for I am holy.',
      niv:
        'As obedient children, do not conform to the evil desires you had when you lived in ignorance. But just as he who called you is holy, so be holy in all you do; for it is written: “Be holy, because I am holy.”',
    },
  },
  {
    id: '1peter-1:18-19',
    book: '1 Peter',
    chapter: 1,
    startVerse: 18,
    numVerses: 2,
    text: {
      esv:
        'Knowing that you were ransomed from the futile ways inherited from your forefathers, not with perishable things such as silver or gold, but with the precious blood of Christ, like that of a lamb without blemish or spot.',
      kjv:
        'Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold, from your vain conversation received by tradition from your fathers; But with the precious blood of Christ, as of a lamb without blemish and without spot.',
      niv:
        'For you know that it was not with perishable things such as silver or gold that you were redeemed from the empty way of life handed down to you from your ancestors, but with the precious blood of Christ, a lamb without blemish or defect.',
    },
  },
  {
    id: '1peter-2:1-3',
    book: '1 Peter',
    chapter: 2,
    startVerse: 1,
    numVerses: 3,
    text: {
      esv:
        'So put away all malice and all deceit and hypocrisy and envy and all slander. Like newborn infants, long for the pure spiritual milk, that by it you may grow up into salvation— if indeed you have tasted that the Lord is good.',
      kjv:
        'Wherefore laying aside all malice, and all guile, and hypocrisies, and envies, and all evil speakings, As newborn babes, desire the sincere milk of the word, that ye may grow thereby: If so be ye have tasted that the Lord is gracious.',
      niv:
        'Therefore, rid yourselves of all malice and all deceit, hypocrisy, envy, and slander of every kind. Like newborn babies, crave pure spiritual milk, so that by it you may grow up in your salvation, now that you have tasted that the Lord is good.',
    },
  },
  {
    id: '1peter-2:9',
    book: '1 Peter',
    chapter: 2,
    startVerse: 9,
    numVerses: 1,
    text: {
      esv:
        'But you are a chosen race, a royal priesthood, a holy nation, a people for his own possession, that you may proclaim the excellencies of him who called you out of darkness into his marvelous light.',
      kjv:
        'But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.',
      niv:
        'But you are a chosen people, a royal priesthood, a holy nation, God’s special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.',
    },
  },
  {
    id: '1peter-3:15-16',
    book: '1 Peter',
    chapter: 3,
    startVerse: 15,
    numVerses: 2,
    text: {
      esv:
        'But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect, having a good conscience, so that, when you are slandered, those who revile your good behavior in Christ may be put to shame.',
      kjv:
        'But sanctify the Lord God in your hearts: and be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear: Having a good conscience; that, whereas they speak evil of you, as of evildoers, they may be ashamed that falsely accuse your good conversation in Christ.',
      niv:
        'But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect, keeping a clear conscience, so that those who speak maliciously against your good behavior in Christ may be ashamed of their slander.',
    },
  },
  {
    id: '1peter-4:10',
    book: '1 Peter',
    chapter: 4,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        'As each has received a gift, use it to serve one another, as good stewards of God’s varied grace.',
      kjv:
        'As every man hath received the gift, even so minister the same one to another, as good stewards of the manifold grace of God.',
      niv:
        'Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms.',
    },
  },
  {
    id: '1peter-5:6-7',
    book: '1 Peter',
    chapter: 5,
    startVerse: 6,
    numVerses: 2,
    text: {
      esv:
        'Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxieties on him, because he cares for you.',
      kjv:
        'Humble yourselves therefore under the mighty hand of God, that he may exalt you in due time: Casting all your care upon him; for he careth for you.',
      niv:
        'Humble yourselves, therefore, under God’s mighty hand, that he may lift you up in due time. Cast all your anxiety on him because he cares for you.',
    },
  },
  {
    id: '1peter-5:8',
    book: '1 Peter',
    chapter: 5,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        'Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour.',
      kjv:
        'Be sober, be vigilant; because your adversary the devil, as a roaring lion, walketh about, seeking whom he may devour.',
      niv:
        'Be alert and of sober mind. Your enemy the devil prowls around like a roaring lion looking for someone to devour.',
    },
  },
  {
    id: '1john-1:8-9',
    book: '1 John',
    chapter: 1,
    startVerse: 8,
    numVerses: 2,
    text: {
      esv:
        'If we say we have no sin, we deceive ourselves, and the truth is not in us. If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.',
      kjv:
        'If we say that we have no sin, we deceive ourselves, and the truth is not in us. If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.',
      niv:
        'If we claim to be without sin, we deceive ourselves and the truth is not in us. If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
    },
  },
  {
    id: '1john-3:1',
    book: '1 John',
    chapter: 3,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'See what kind of love the Father has given to us, that we should be called children of God; and so we are. The reason why the world does not know us is that it did not know him.',
      kjv:
        'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not, because it knew him not.',
      niv:
        'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are! The reason the world does not know us is that it did not know him.',
    },
  },
  {
    id: '1john-4:1',
    book: '1 John',
    chapter: 4,
    startVerse: 1,
    numVerses: 1,
    text: {
      esv:
        'Beloved, do not believe every spirit, but test the spirits to see whether they are from God, for many false prophets have gone out into the world.',
      kjv:
        'Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world.',
      niv:
        'Dear friends, do not believe every spirit, but test the spirits to see whether they are from God, because many false prophets have gone out into the world.',
    },
  },
  {
    id: '1john-4:8',
    book: '1 John',
    chapter: 4,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv: 'Anyone who does not love does not know God, because God is love.',
      kjv: 'He that loveth not knoweth not God; for God is love.',
      niv: 'Whoever does not love does not know God, because God is love.',
    },
  },
  {
    id: '1john-4:10',
    book: '1 John',
    chapter: 4,
    startVerse: 10,
    numVerses: 1,
    text: {
      esv:
        'In this is love, not that we have loved God but that he loved us and sent his Son to be the propitiation for our sins.',
      kjv:
        'Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.',
      niv:
        'This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins.',
    },
  },
  {
    id: '1john-4:16',
    book: '1 John',
    chapter: 4,
    startVerse: 16,
    numVerses: 1,
    text: {
      esv:
        'So we have come to know and to believe the love that God has for us. God is love, and whoever abides in love abides in God, and God abides in him.',
      kjv:
        'And we have known and believed the love that God hath to us. God is love; and he that dwelleth in love dwelleth in God, and God in him.',
      niv:
        'And so we know and rely on the love God has for us. God is love. Whoever lives in love lives in God, and God in them.',
    },
  },
  {
    id: '1john-5:14',
    book: '1 John',
    chapter: 5,
    startVerse: 14,
    numVerses: 1,
    text: {
      esv:
        'And this is the confidence that we have toward him, that if we ask anything according to his will he hears us.',
      kjv:
        'And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us.',
      niv:
        'This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.',
    },
  },
  {
    id: 'jude-1:24-25',
    book: 'Jude',
    chapter: 1,
    startVerse: 24,
    numVerses: 2,
    text: {
      esv:
        'Now to him who is able to keep you from stumbling and to present you blameless before the presence of his glory with great joy, to the only God, our Savior, through Jesus Christ our Lord, be glory, majesty, dominion, and authority, before all time and now and forever. Amen.',
      kjv:
        'Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy, To the only wise God our Saviour, be glory and majesty, dominion and power, both now and ever. Amen.',
      niv:
        'To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy— to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen.',
    },
  },
  {
    id: 'revelation-1:8',
    book: 'Revelation',
    chapter: 1,
    startVerse: 8,
    numVerses: 1,
    text: {
      esv:
        '“I am the Alpha and the Omega,” says the Lord God, “who is and who was and who is to come, the Almighty.”',
      kjv:
        'I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.',
      niv:
        '“I am the Alpha and the Omega,” says the Lord God, “who is, and who was, and who is to come, the Almighty.”',
    },
  },
  {
    id: 'revelation-3:20',
    book: 'Revelation',
    chapter: 3,
    startVerse: 20,
    numVerses: 1,
    text: {
      esv:
        'Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.',
      kjv:
        'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.',
      niv:
        'Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.',
    },
  },
  {
    id: 'revelation-4:11',
    book: 'Revelation',
    chapter: 4,
    startVerse: 11,
    numVerses: 1,
    text: {
      esv:
        'Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.',
      kjv:
        'Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.',
      niv:
        'You are worthy, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they were created and have their being.',
    },
  },
  {
    id: 'revelation-21:4',
    book: 'Revelation',
    chapter: 21,
    startVerse: 4,
    numVerses: 1,
    text: {
      esv:
        'He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.',
      kjv:
        'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.',
      niv:
        'He will wipe every tear from their eyes. There will be no more death’ or mourning or crying or pain, for the old order of things has passed away.',
    },
  },
  {
    id: 'revelation-22:20-21',
    book: 'Revelation',
    chapter: 22,
    startVerse: 20,
    numVerses: 2,
    text: {
      esv:
        'He who testifies to these things says, “Surely I am coming soon.” Amen. Come, Lord Jesus! The grace of the Lord Jesus be with all. Amen.',
      kjv:
        'He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus. The grace of our Lord Jesus Christ be with you all. Amen.',
      niv:
        'He who testifies to these things says, “Yes, I am coming soon.” Amen. Come, Lord Jesus. The grace of the Lord Jesus be with God’s people. Amen.',
    },
  },
];

export default VerseData;
