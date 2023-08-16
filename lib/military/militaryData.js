export const data = Object.freeze({
  military: [
    {
      role: "Crusaders",
      name: "Crusaders",
      description:
        "The Crusaders were formed as the Crimson Blades 800 years ago by Lord Mi'ihen. As the first volunteer-based organization dedicated to defending the people of Spira from Sin, the Crimson Blades grew quickly in number. The Maesters of Yevon began to fear their numbers and accused the Crimson Blades of rebellion. Lord Mi'ihen traveled to Bevelle to fight the claims, and won the Maesters' trust. He renamed the Crimson Blades the Crusaders, and the organization began to operate as members of the clergy of Yevon. The road Lord Mi'ihen traveled to Bevelle was renamed the Mi'ihen Highroad in reflection of his actions.",
      image: "/images/WenKinoc.png",
      image_height: 400,
      image_width: 190,
    },
    {
      role: "Guardians",
      name: "Guardians",
      description:
        "Guardians are the only individuals allowed to accompany a summoner into a Chamber of the Fayth. If anyone else does so, the summoner may face sanctions as strong as excommunication from Yevon, even if they did so without the summoner's knowledge or consent.",
      image: "/images/Zaon.webp",
      image_height: 400,
      image_width: 219,
    },
    {
      role: "Warrior Monks",
      name: "Warrior Monks",
      description:
        "The history of the Warrior Monks date back at least 1,000 years prior to the events of Final Fantasy X. In the Machina War, the Warrior Monks were under the control of Bevelle and were used to fight Zanarkand. Many monks died during Sin's destruction of Zanarkand, and many Fallen Monks still dwell there as unsent.",
      image: "/images/Warrior_Monk.webp",
      image_height: 400,
      image_width: 177,
    },
    {
      role: "Crimson Squad",
      name: "Crimson Squad",
      description:
        "Maester Wen Kinoc assembled the Crimson Squad under the guise of fulfilling the society's demand for a stronger army, but the true reason was to privatize the Crusaders by inserting his hand-reared Crimson Squad members.",
      image: "/images/Crimson_Squad.webp",
      image_height: 400,
      image_width: 451,
    },
    {
      role: "Chocobo Knights",
      name: "Chocobo Knights",
      description:
        "The Chocobo Knights of Spira are an elite group of mounted soldiers, consisting of the serious but kind Captain Lucil, cheerful Elma, and the uncomfortable and slightly incompetent Clasko. It is mentioned by an NPC that normally one must be a skilled chocobo rider or achieve combat merit to become a chocobo knight, and that Clasko was likely knighted because he is good at earning chocobos' trust. It is never stated directly that the knights are part of the Crusaders, but they do take part in Operation Mi'ihen and both Lucil and Elma are shown giving orders to Luzzu and Gatta.",
      image: "/images/Chocobo_Knights.webp",
      image_height: 400,
      image_width: 451,
    },
  ],
});

export const get_military_by_name = (role) => {
  return data.military
    .filter((name) => name.role == role)
    .sort((a, b) => a.key - b.key);
};

export const get_military_by_role = (role) => {
  return data.military.filter((name) => name.role == role).at(0);
};
