import giftboxCardImage from "../../reference/images/giftbox/giftboxcard.jpg";
import vinylImageImport from "../../reference/images/giftbox/vinyl.jpg";
import teraMeraPyarMusic from "../../reference/song/Ahmed_Jahanzeb_-_Tera_Mera_Hai_Pyar_From_Ishq_Murshid_(mp3.pm).mp3";

// ======================================
// EDITABLE PERSONAL CONTENT
// ======================================

export const siteContent = {
  intro: {
    titleTop: "HAPPY",
    titleMiddle: "BOYFRIEND'S",
    titleBottom: "♥ DAY ♥",
    buttonText: "CONTINUE",
  },
  
  acceptance: {
    title: "PLEASE ACCEPT THE GIFT",
    yesText: "YES",
    noText: "NO",
    sadTitle: "WHY DID YOU CLICK NO!",
    retryText: "TRY AGAIN",
    characterCute: "/images/characters/acceptgift.jpg",
    characterCrying: "/images/characters/whyno.jpg",
  },
  
  gifts: {
    title: "Choose Your Gifts",
    envelopeImg: "/images/gifts/letter.jpg",
    bouquetImg: "/images/gifts/bouquetout.jpg",
    giftBoxImg: "/images/gifts/gitbox.jpg",
  },
  
  letter: {
    body: `Myon Zuv,

Happy Boyfriend’s Day, my love. ❤️

I don’t think I say it enough, but I’m so, so grateful to have you. You take care of me in so many little ways, and even when we have silly misunderstandings, I never want you to doubt how much I love and value you.

You’ve become such a special part of my life, and honestly, I just love having you and your presence, your hugs, your stupid jokes, and all the little moments we share.

Thank you for loving me, taking care of me, and simply being my person. I’m so proud of you, and I hope you always know how deeply you are loved.

I love you more than I can put into words. ❤️

Happy Boyfriend’s Day, Zuv.

Always yours,
Fari`,
    photos: {
      topLeft: "/images/letter/photo1.jpeg",
      topRight: "/images/letter/photo2.jpeg",
      bottomLeft: "/images/letter/photo3.jpeg",
      bottomRight: "/images/letter/photo4.jpeg",
    },
  },

  bouquet: {
    heading: "i have the most\nhandsome bf <3",
    image: "/images/bouquet/bouquetin.jpg",
  },

  final: {
    vinylText: "",
    title: "I LOVE YOU",
    subtitle: "Soooooo.....!\nMUCH ♥",
    vinylImage: vinylImageImport,
    finalCardImage: giftboxCardImage,
  },

  music: {
    title: "Tera Mera Hai Pyar",
    artist: "Ahmed Jahanzeb",
    src: teraMeraPyarMusic,
  },
};
