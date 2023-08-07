export const data = Object.freeze({
  characters: [
    {
      role: "Main Characters",
      key: "1",
      image: "/images/Tidus.jpg",
      image_height: 400,
      image_width: 363,
      name: "Tidus",
      description:
        "The optimistic crybaby who gives hope to a world gripped in the spiral of death. The son of Jecht, a blitzball legend, Tidus rebelled against his father from an early age.",
      link: "../characters/tidus",
    },
    {
      role: "Main Characters",
      key: "2",
      image: "/images/Yuna.jpg",
      image_height: 400,
      image_width: 363,
      name: "Yuna",
      description:
        "The summoner possessing endless kindness, willing to sacrifice herself to save the world. Daughter of High Summoner Braska.",
      link: "../characters/yuna",
    },
    {
      role: "Main Characters",
      key: "3",
      image: "/images/Auron.jpg",
      image_height: 400,
      image_width: 345,
      name: "Auron",
      description:
        "The legendary guardian who guides a young man to fulfill a promise to a friend. A man tasked with watching over Tidus in Dream Zanarkand who created the opportunity for Tidus to venture to Spira.",
      link: "../characters/auron",
    },
    {
      role: "Main Characters",
      key: "4",
      image: "/images/Kimahri.jpg",
      image_height: 400,
      image_width: 408,
      name: "Kimahri",
      description:
        "The hornless Ronso youth dedicating his life to Yuna. A Ronso who serves as Yuna's first guardian.",
      link: "../characters/kimahri",
    },
    {
      role: "Main Characters",
      key: "5",
      image: "/images/Wakka.jpg",
      image_height: 400,
      image_width: 290,
      name: "Wakka",
      description:
        "A good-natured older-brother type who has dedicated his youth to blitzball. The young coach and most valuable player of Besaid Village's blitzball team, the Besaid Aurochs.",
      link: "../characters/wakka",
    },
    {
      role: "Main Characters",
      key: "6",
      image: "/images/Lulu.jpg",
      image_height: 400,
      image_width: 313,
      name: "Lulu",
      description:
        "The severe yet sweet Black Mage who aids her comrades with a wealth of knowledge. A female Black Mage acting as Yuna's guardian who watches over her like a big sister.",
      link: "../characters/lulu",
    },
    {
      role: "Main Characters",
      key: "7",
      image: "/images/Rikku.jpg",
      image_height: 400,
      image_width: 265,
      name: "Rikku",
      description:
        "A hearty and hard-working Al Bhed lass, constantly thinking about what she can accomplish. Daughter to the chief of the Al Bhed, a tribe of people persecuted for opposing the teachings of Yevon, Rikku is also Yuna's cousin on her mother's side.",
      link: "../characters/rikku",
    },
    {
      role: "Supporting Characters",
      key: "1",
      image: "/images/Seymour.webp",
      image_height: 400,
      image_width: 400,
      name: "Seymour",
      description:
        "Seymour is the son of Jyscal, who became leader of theGuado, and a human woman.",
    },
  ],
});

export const get_name_by_character = (role) => {
  return data.characters
    .filter((character) => character.role === role)
    .sort((a, b) => a.key - b.key);
};

export const get_character_by_role = (role) => {
  return data.characters.filter((character) => character.role === role).at(0);
};