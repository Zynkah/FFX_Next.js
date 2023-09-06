export const data = Object.freeze({
  maesters: [
    {
      role: "Maester",
      name: "Mika",
      key: 1,
      image: "/images/Mika.webp",
      image_height: 350,
      image_width: 350,
      description:
        "An old man who unified the citizens of Spira as the grand maester of Yevon. Despite spreading a doctrine that repudiates the unsent, he is an unsent himself. He looks like a kindly soul, but his codl and cunning nature leads him to condemn Yuna as a traitor as soon as she learns the contradictions in Yevon's teachings.",
    },
    {
      role: "Maester",
      name: "Wen Kinoc",
      key: 2,
      image: "/images/WenKinoc.png",
      image_height: 400,
      image_width: 190,
      description:
        "A maester of Yevon and the commander of the Warrior Monks. An old friend of Auron's, he climbed the ranks by accepting the marriage of the former Warrior Monk turned down. Obsessed with gaining power, he is assassinated by Seymour, who hates such worldly minded individuals.",
    },
    {
      role: "Maester",
      name: "Kelk Ronso",
      key: 3,
      image: "/images/Kelk.webp",
      image_height: 400,
      image_width: 241,
      description:
        "Chief of the Ronso people and a maester of Yevon. His stern personality leads him to resign his post of maester in disgust after he hears of Seymour's misdeeds. He later confronts Seymour in an attempt to protect Yuna but falls in battle.",
    },
    {
      role: "Maester",
      name: "Jyscal",
      key: 4,
      image: "/images/Jyscal.webp",
      image_height: 400,
      image_width: 250,
    },
    {
      role: "Maester",
      name: "Seymour",
      key: 5,
      image: "/images/Seymour.jpg",
      image_height: 400,
      image_width: 322,
    },
  ],
});

export const get_maester_by_name = (role) => {
  return data.maesters
    .filter((name) => name.role == role)
    .sort((a, b) => a.key - b.key);
};

export const get_maester_by_role = (role) => {
  return data.maesters.filter((name) => name.role == role).at(0);
};
