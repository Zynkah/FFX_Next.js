export const data = Object.freeze({
  aeons: [
    {
      role: "Aeon",
      key: "1",
      image: "/images/Valefor.jpeg",
      image_height: 400,
      image_width: 513,
      name: "Valefor",
      description:
        "An arieal aeon with great wings whose fayth statue is located in Besaid Temple.",
      location: "Besaid Temple",
    },
    {
      role: "Aeon",
      key: "2",
      image: "/images/Ifrit.jpg",
      image_height: 400,
      image_width: 413,
      name: "Ifrit",
      description:
        "A demon that holds dominion over fire, with a fayth statue situated in Kilika Temple.",
      location: "Kilika Temple",
    },
    {
      role: "Aeon",
      key: "3",
      image: "/images/Ixion.jpg",
      image_height: 400,
      image_width: 482,
      name: "Ixion",
      description:
        "A horned beast covered by lightning whose fayth statue stands in Djose Temple.",
      location: "Djose Temple",
    },
    {
      role: "Aeon",
      key: "4",
      image: "/images/Shiva.jpg",
      image_height: 400,
      image_width: 378,
      name: "Shiva",
      description:
        "The frozen queen of ice whose fayth statue is situated inside Macalania Temple.",
      location: "Macalania Temple",
    },
    {
      role: "Aeon",
      key: "5",
      image: "/images/Bahamut.jpg",
      image_height: 400,
      image_width: 380,
      name: "Bahamut",
      description:
        "A four-winged sacred dragon beast with a fayth statue located in Bevelle.",
      location: "Bevelle Temple",
    },
    {
      role: "Aeon",
      key: "6",
      image: "/images/Yojimbo.jpeg",
      image_height: 400,
      image_width: 457,
      name: "Yojimbo",
      description:
        "A master swordsman whose fayth statue is situated in the Cavern of the Stolen Fayth.",
      location: "Cavern of the Stolen Fayth",
    },
    {
      role: "Aeon",
      key: "7",
      image: "/images/Anima.jpeg",
      image_height: 400,
      image_width: 358,
      name: "Anima",
      description:
        "An aeon bound in heavy chains whose fayth statue can be found in the temple of Yevon-Baaj.",
      location: "Temple of Yevon-Baaj",
    },
    {
      role: "Aeon",
      key: "8",
      image: "/images/Magus_Sisters.jpeg",
      image_height: 400,
      image_width: 419,
      name: "Magus Sisters",
      description:
        "Three sister aeons whose fayth statue is situated in Remiem Temple.",
      location: "Remiem Temple",
    },
  ],
});

export const get_aeons_by_name = (role) => {
  return data.aeons
    .filter((name) => name.role == role)
    .sort((a, b) => a.key - b.key);
};

export const get_aeons_by_role = (role) => {
  return data.aeons.filter((name) => name.role == role.at(0));
};
