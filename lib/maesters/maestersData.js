export const data = Object.freeze({
  maesters: [
    {
      role: "Maester",
      name: "Mika",
      key: 1,
      image: "/images/Mika.webp",
      image_height: 350,
      image_width: 350,
    },
    {
      role: "Maester",
      name: "Wen Kinoc",
      key: 2,
      image: "/images/WenKinoc.png",
      image_height: 400,
      image_width: 190,
    },
    {
      role: "Maester",
      name: "Kelk Ronso",
      key: 3,
      image: "/images/Kelk.webp",
      image_height: 400,
      image_width: 241,
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
