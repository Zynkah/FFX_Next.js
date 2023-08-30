export const data = Object.freeze({
  equipment: [
    {
      role: "Tidus Equipment",
      name: "Tidus",
      description:
        "Tidus wields a sword with a shield as his weapon and armor.",
      weapon_image: "/images/TidusSwords.webp",
      weapon_name: "Tidus Swords",
      weapon_image_height: 400,
      weapon_image_width: 324,
      armor_name: "Tidus Shields",
      armor_image: "/images/TidusShields.webp",
      armor_image_height: 400,
      armor_image_width: 302,
    },
    {
      role: "Yuna Equipment",
      name: "Yuna",
      description: "Yuna heals with a rod and is embued by a ring.",
      weapon_name: "Yuna Rods",
      weapon_image: "/images/YunasRods.webp",
      weapon_image_height: 400,
      weapon_image_width: 218,
      armor_name: "Yuna Rings",
      armor_image: "/images/YunasRings.webp",
      armor_image_height: 400,
      armor_image_width: 563,
    },
    {
      role: "Wakka Equipment",
      name: "Wakka",
      description: "Wakka beats down his enemies using a Blitzball.",
      weapon_name: "Wakkas Blitzballs",
      weapon_image: "/images/WakkasBalls.webp",
      weapon_image_height: 400,
      weapon_image_width: 479,
      armor_name: "Wakkas Armguards",
      armor_image: "/images/WakkaArmguard.webp",
      armor_image_height: 400,
      armor_image_width: 333,
    },
    {
      role: "Lulu Equipment",
      name: "Lulu",
      description:
        "Lulu uses her magic through her dolls as weapons with a bangle as her armor.",
      weapon_name: "Lulu Dolls",
      weapon_image: "/images/Lulu_Weapons.png",
      weapon_image_height: 400,
      weapon_image_width: 627, //check later
      armor_name: "Lulus Bangles",
      armor_image_height: 400,
      armor_image_width: 703,
      armor_image: "/images/LulusBangles.webp",
    },

    {
      role: "Kimahri Equipment",
      name: "Kimahri",
      description:
        "Kimarhi slashes enemies with his lance and has armlets as armor.",
      weapon_name: "Kimahri Lances",
      weapon_image: "/images/KimahrisLances.webp",
      weapon_image_height: 400,
      weapon_image_width: 210,
      armor_name: "Kimahri Armlets",
      armor_image_height: 400,
      armor_image_width: 227,
      armor_image: "/images/KimahrisArmlets.webp",
    },

    {
      role: "Auron Equipment",
      name: "Auron",
      description:
        "Auron pierces through his enemies with a katana and protects himeself with bracers.",
      weapon_name: "Auron Katanas",
      weapon_image: "/images/AuronsKatanas.webp",
      weapon_image_height: 400,
      weapon_image_width: 642,
      armor_name: "Auron Bracers",
      armor_image_height: 400,
      armor_image_width: 273,
      armor_image: "/images/AuronsBracers.webp",
    },

    {
      role: "Rikku Equipment",
      name: "Rikku",
      description:
        "Rikku mugs her enemies with her claws and guards with targes.",
      weapon_name: "Rikku Claws",
      weapon_image: "/images/RikkusClaws.webp",
      weapon_image_height: 400,
      weapon_image_width: 463,
      armor_name: "Rikku Targes",
      armor_image_height: 400,
      armor_image_width: 408,
      armor_image: "/images/RikkuTarges.webp",
    },
  ],
});

export const get_equipment_by_name = (role) => {
  return data.equipment
    .filter((name) => name.role == role)
    .sort((a, b) => a.key - b.key);
};

export const get_equipment_by_role = (role) => {
  return data.equipment.filter((name) => name.role == role).at(0);
};
