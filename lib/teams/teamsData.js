export const data = Object.freeze({
  teams: [
    {
      role: "Team",
      key: "1",
      image: "/images/Besaid_Aurochs.jpg",
      image_height: 400,
      image_width: 402,
      name: "Besaid Aurochs",
      description:
        "The Aurochs hail from the seaside village of Besaid, and at the beginning of Final Fantasy X, are under Wakka's captaincy. They are the only team in Spira to have never passed the first round of the Luca blitz tournament. When Tidus joins in exchange for passage, their success rate soars. The player has control over the Besaid Aurochs following the events in Luca.",
      link: "../blitzball/besaid_aurochs/",
    },
    {
      role: "Team",
      key: "2",
      image: "/images/Luca_Goers.jpg",
      image_height: 400,
      image_width: 645,
      name: "Luca Goers",
      description:
        "At the opening of Final Fantasy X, the Luca Goers reign as the Spira champions. They are captained by the confident and brash forward, Bickson. As they represent the city with the only blitz stadium, they are regarded as the most beloved team in Spira. The team members can be found in and around Luca stadium, if the player wishes to add them to their team.",
      link: "../blitzball/goers/",
    },
    {
      role: "Team",
      key: "3",
      image: "/images/Kilika_Beasts.jpg",
      image_height: 400,
      image_width: 504,
      name: "Kilika Beasts",
      description:
        "The Kilika Beasts hail from the small seaside town of Kilika. High Summoner Ohalland used to play for the team before he became a summoner. The Kilika Beasts' team members are found throughout Kilika from the port to the temple.",
      link: "../blitzball/beasts/",
    },
    {
      role: "Team",
      key: "4",
      image: "/images/Al_Bhed_Psyches.jpg",
      image_height: 400,
      image_width: 675,
      name: "Al Bhed Psyches",
      description:
        "The Al Bhed Psyches represent the Al Bhed race. During the Luca tournament of Final Fantasy X, they attempt to rig their opening match against the Besaid Aurochs by kidnapping Yuna. Their goalie, Nimrook, is the best goalie in the game. The Al Bhed Psyches are later found on the Fahrenheit, and are available when the player has access to the airship, which is right before entering Bevelle, and permanently after the player has finished the events in Zanarkand.",
      link: "../blitzball/psyches/",
    },
    {
      role: "Team",
      key: "5",
      image: "/images/Ronso_Fangs.jpg",
      image_height: 400,
      image_width: 805,
      name: "Ronso Fangs",
      description:
        "The Ronso Fangs represent the Ronso race. Due to their physicality, they rely on power and endurance while lacking in speed. The Ronso Fangs members are found at the Luca Docks.",
      link: "../blitzball/fangs/",
    },
    {
      role: "Team",
      key: "6",
      image: "/images/Guado_Glories.jpg",
      image_height: 400,
      image_width: 446,
      name: "Guado Glories",
      description:
        "The Guado Glories represent the Guado race, and hail from Guadosalam. Their players contrast the Ronso Fangs with high speed at the expense of HP, Attack, and Endurance. The Guado Glories team can be found in Guadosalam.",
      link: "../blitzball/glories/",
    },
    {
      role: "Team",
      key: "7",
      image: "/images/Zanarkand_Duggles.jpg",
      image_height: 400,
      image_width: 851,
      name: "Zanarkand Duggles",
      description:
        'The Zanarkand Duggles are another team competing in the Jecht Memorial Cup, featuring black and red outfits. Little is known about the team other than that they "play dirty".',
      link: "../blitzball",
    },
    {
      role: "Team",
      key: "8",
      image: "/images/Zanarkand_Abes.jpg",
      image_height: 400,
      image_width: 423,
      name: "Zanarkand Abes",
      description:
        "The Zanarkand Abes are Tidus's team in Dream Zanarkand, where he is the star player. They have yellow and black outfits. His father, Jecht, also played for the Abes, a shadow Tidus struggles to step out of. They are only available to play against in Final Fantasy X-2.",
      link: "../blitzball",
    },
    {
      role: "Team",
      key: "9",
      image: "/images/Yocun_Nomads.jpg",
      image_height: 400,
      image_width: 396,
      name: "Yocun Nomads",
      description: null,
      link: "../blitzball",
    },
    {
      role: "Team",
      key: "10",
      image: "/images/Bevelle_Bells.jpg",
      image_height: 400,
      image_width: 344,
      name: "Bevelle Bells",
      description: null,
      link: "../blitzball",
    },
    {
      role: "Team",
      key: "11",
      image: "/images/Blitzball_Logo.jpg",
      image_height: 400,
      image_width: 438,
      name: "Free Agents",
      description:
        "There are many players scattered throughout Spira who you can scout and add to your team. Brother, Wedge, Kiryuri, Kyuo, Zalitz, Shaami, Shuu, Jumal, Svanda, Zev Ronso, Tatts, Durren, Nedus, Naida, Biggs, Vilucha, Mifurey, Miyu, Mep, Yuma Guada, Linna, Rin, Ropp, Wakka.",
      link: "../blitzball",
    },
  ],
});

export const get_team_by_name = (role) => {
  return data.teams
    .filter((name) => name.role === role)
    .sort((a, b) => a.key - b.key);
};

export const get_team_by_role = (role) => {
  return data.teams.filter((name) => name.role === role).at(0);
};
