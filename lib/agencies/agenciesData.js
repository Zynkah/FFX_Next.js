export const data = Object.freeze({
  agencies: [
    {
      role: "Agency",
      key: "1",
      name: "Mi'ihen Highroad Branch",
      image: "/images/Miihen_Agency.webp",
      image_height: 400,
      image_width: 710,
    },
    {
      role: "Agency",
      key: "2",
      name: "Thunder Plains Branch",
      image: "/images/Thunder_Plains_Agency.webp",
      image_height: 400,
      image_width: 710,
    },
    {
      role: "Agency",
      key: "3",
      name: "Lake Macalania Branch",
      image: "/images/Lake_Macalania.webp",
      image_height: 400,
      image_width: 533,
    },
    {
      role: "Agency",
      key: "4",
      name: "Calm Lands Branch",
      image: "/images/Calm_Lands_Agency.webp",
      image_height: 400,
      image_width: 710,
    },
  ],
});

export const get_agency_by_name = (role) => {
  return data.agencies
    .filter((name) => name.role == role)
    .sort((a, b) => a.key - b.key);
};

export const get_agency_by_role = (role) => {
  return data.agencies.filter((name) => name.role == role).at(0);
};
