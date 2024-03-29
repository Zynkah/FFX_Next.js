export const data = Object.freeze({
  temples: [
    {
      role: "Temple",
      name: "Besaid Temple",
      key: "1",
      image: "/images/Besaid_Island.jpg",
      image_height: 300,
      image_width: 477,
      description:
        "This temple is in the Besaid Village. It has a Cloister of Trials you will have to complete. It houses the Aeon Valefor, which is the first Aeon Yuna obtains",
      link: "../aeons/valefor",
      aeon: "Valefor",
      glyph_name: "Besaid Glyph",
      glyph_image: "/images/Glyph_Besaid.jpg",
      glyph_image_height: 250,
      glyph_image_width: 252,
    },
    {
      role: "Temple",
      name: "Kilika Temple",
      key: "2",
      image: "/images/Kilika_Temple.jpg",
      image_height: 300,
      image_width: 381,
      description:
        "This temple is just right outside of the Kilika Village. It has a Cloister of Trials you will have to complete. This temple houses the Aeon Ifrit.",
      link: "../aeons/ifrit",
      aeon: "Ifrit",
      glyph_name: "Kilika Glyph",
      glyph_image: "/images/Glyph_Kilika.webp",
      glyph_image_height: 250,
      glyph_image_width: 249,
    },
    {
      role: "Temple",
      name: "Djose Temple",
      key: "3",
      image: "/images/Djose.jpg",
      image_height: 300,
      image_width: 529,
      description:
        "This temple is found in the Thunder Plains. It has a Cloister of Trials you will have to complete. This temple houses the Aeon Ixion.",
      link: "../aeons/ixion",
      aeon: "Ixion",
      glyph_name: "Djose Glyph",
      glyph_image: "/images/Glyph_Djose.webp",
      glyph_image_height: 300,
      glyph_image_width: 284,
    },
    {
      role: "Temple",
      name: "Macalania Temple",
      key: "4",
      image: "/images/Macalania_Temple.jpg",
      image_height: 300,
      image_width: 328,
      description:
        "After passing through the Macalania Woods you will reach the temple. You will need to complete a Cloister of Trials first. This is where the Aeon Shiva is housed.",
      link: "../aeons/shiva",
      aeon: "Shiva",
      glyph_name: "Macalania Glyph",
      glyph_image: "/images/Glyph_Macalania.webp",
      glyph_image_height: 300,
      glyph_image_width: 272,
    },
    {
      role: "Temple",
      name: "Bevelle Temple",
      key: "5",
      image: "/images/Bevelle_Temple.png",
      image_height: 300,
      image_width: 425,
      description:
        "Inside the city of Bevelle you will find this temple. This temple has a Cloister of Trials you will have to complete. This temple houses the Aeon Bahamut.",
      link: "../aeons/bahamut",
      aeon: "Bahamut",
      glyph_name: "Bevelle Glyph",
      glyph_image: "/images/Glyph_Bevelle.webp",
      glyph_image_height: 250,
      glyph_image_width: 303,
    },
    {
      role: "Temple",
      name: "Cavern of the Stolen Fayth",
      key: "6",
      image: "/images/Cavern_of_Stolen_Fayth.webp",
      image_height: 300,
      image_width: 412,
      description:
        "You will find this cave in the Calm lands before you enter the path to Mt. Gagezet. You will have to clear your way through the cave and reach the end where the teleportation pads are located. Yojimbo is the first optional aeon. To obtain Yojimbo you have to pay him.",
      link: "../aeons/yojimbo",
      aeon: "Yojimbo",
      glyph_name: "Cavern of Stolen Fayth Glyph",
      glyph_image: "/images/Glyph_Cavern_of_the_Stolen_Fayth.webp",
      glyph_image_height: 250,
      glyph_image_width: 265,
    },
    {
      role: "Temple",
      name: "Baaj Temple",
      key: "7",
      image: "/images/Yevon-Baaj.jpg",
      image_height: 300,
      image_width: 409,
      description:
        "Baaj Temple is a hidden location that can be found by using the search command while looking at the world map on the Airship. Anima can be obtained by traveling to Baaj Temple, one of the optional areas that you can explore once you reach the end of the game. You need to travel to Baaj Temple and unlock the Chamber of the Fayth at the back of the temple in order to obtain Anima. In order to break the seal at the front of this room you will need to activate the six statues located in this room. Anima is the second of three option Aeons that you can obtain within Final Fantasy X.",
      link: "../aeons/anima",
      aeon: "Anima",
      glyph_name: "Yevon-Baaj Glyph",
      glyph_image: "/images/Glyph_Baaj.webp",
      glyph_image_height: 250,
      glyph_image_width: 360,
    },
    {
      role: "Temple",
      name: "Zanarkand Dome",
      key: "8",
      image: "/images/Zanarkand_Dome.webp",
      image_height: 300,
      image_width: 253,
      description: "Aeon: Lord Zaon (Power lost)",
      link: "/temples",
      aeon: "Zaon",
      glyph_name: "Zanarkand Dome Glyph",
      glyph_image: "/images/Glyph_Zanarkand_Dome.webp",
      glyph_image_height: 300,
      glyph_image_width: 297,
    },
    {
      role: "Temple",
      name: "Remiem Temple",
      key: "9",
      image: "/images/Remiem_Temple.png",
      image_height: 300,
      image_width: 533,
      description: "This temple is found in the Calm Lands.",
      link: "../aeons/magus_sisters",
      aeon: "Magus Sisters",
      glyph_name: "Remiem Glyph",
      glyph_image: "/images/Glyph_Remiem_1.webp",
      glyph_image_height: 250,
      glyph_image_width: 333,
    },
  ],
});

export const get_temple_by_name = (role) => {
  return data.temples
    .filter((name) => name.role == role)
    .sort((a, b) => a.key - b.key);
};

export const get_temple_by_role = (role) => {
  return data.temples.filter((name) => name.role == role).at(0);
};
