export const data = Object.freeze({
  scripts: [
    {
      role: "Spiran Scripts",
      name: "Spiran Script",
      image: "/images/Sphere-Broadcast-Billboard.webp",
      image_name: "sphere broadcast billboard",
      image_height: 200,
      image_width: 231,
      description:
        "A curvy script used all across Spira. Characters exist for each uppercase and lowercase letter. This language can be found in many locations. On signs, Blitzball team logos, all over the Luca Stadium, and more.",
      script_image: "/images/Spiran_Script.webp",
      script_image_name: "Spiran Script",
      script_image_height: 400,
      script_image_width: 515,
    },
    {
      role: "Al Bhed Scripts",
      name: "Al Bhed Script",
      image: "/images/Al-Bhed-Primer-Artwork.webp",
      image_name: "Al Bhed Primer Artwork",
      image_height: 200,
      image_width: 296,
      description:
        "The script used by the Al Bhed, distinctive for its combination of two to four fragments to make each character. Uppercase and lowercase variations are very similar across the characters.",
      script_image: "/images/Al_Bhed_Script.webp",
      scritp_image_name: "Al Bhed Script",
      script_image_height: 400,
      script_image_width: 597,
    },
    {
      role: "Yevon Scripts",
      name: "Yevon Script",
      image: "/images/Kilika-temple-artwork-ffx.webp",
      image_name: "Kilika temple artwork",
      image_height: 200,
      image_width: 251,
      description:
        "Characters resembling Sanskrit that are used predominantly in Yevon institutions. Some characters have their own individual meanings, such as 'fire' or 'Yevon'.",
      script_image: "/images/Yevon_Script.webp",
      script_image_name: "Yevon Script",
      script_image_height: 400,
      script_image_width: 515,
    },
  ],
});

export const get_script_by_name = (role) => {
  return data.scripts
    .filter((name) => name.role == role)
    .sort((a, b) => a.key - b.key);
};

export const get_script_by_role = (role) => {
  return data.scripts.filter((name) => name.role == role).at(0);
};
