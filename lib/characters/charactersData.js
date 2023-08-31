const CharacterRole = {
  MainCharacter: "Main Characters",
  SupportingCharacters: "Supporting Characters" //, following types of roles
}
const CharacterFaction = {
  AlBhed: "AL bhed", 
  Crusader: "Crusader", 
  ChocoboKnight: "Chocobo knight"
}

//I will add the faction later after pulling the new changes
export const data = Object.freeze({
  characters: [
    create_Character(CharacterRole.MainCharacter, 
      "1", 
      "Tidus", 
      "Tidus.jpg", 
      400, 
      363, 
      "The optimistic crybaby who gives hope to a world gripped in the spiral of death. The son of Jecht, a blitzball legend, Tidus rebelled against his father from an early age."
    ),
    create_Character(CharacterRole.MainCharacter, 
      "2", 
      "Yuna", 
      "Yuna.jpg", 
      400, 
      363, 
      "The summoner possessing endless kindness, willing to sacrifice herself to save the world. Daughter of High Summoner Braska."
    ),
    create_Character(CharacterRole.MainCharacter, 
      "3", 
      "Auron", 
      "Auron.jpg", 
      400, 
      345, 
      "The legendary guardian who guides a young man to fulfill a promise to a friend. A man tasked with watching over Tidus in Dream Zanarkand who created the opportunity for Tidus to venture to Spira."
    ),
      create_Character(CharacterRole.MainCharacter, 
      "4", 
      "Kimahri", 
      "Kimahri.jpg", 
      400, 
      408, 
      "The hornless Ronso youth dedicating his life to Yuna. A Ronso who serves as Yuna's first guardian."
    ),
    create_Character(CharacterRole.MainCharacter, 
      "5", 
      "Wakka", 
      "Wakka.jpg", 
      400, 
      290, 
      "A good-natured older-brother type who has dedicated his youth to blitzball. The young coach and most valuable player of Besaid Village's blitzball team, the Besaid Aurochs."
    ),
    create_Character(CharacterRole.MainCharacter, 
      "6", 
      "Lulu", 
      "Lulu.jpg", 
      400, 
      313, 
      "The severe yet sweet Black Mage who aids her comrades with a wealth of knowledge. A female Black Mage acting as Yuna's guardian who watches over her like a big sister."
    ),
    create_Character(CharacterRole.MainCharacter, 
      "7", 
      "Rikku", 
      "Rikku.jpg", 
      400, 
      265, 
      "A hearty and hard-working Al Bhed lass, constantly thinking about what she can accomplish. Daughter to the chief of the Al Bhed, a tribe of people persecuted for opposing the teachings of Yevon, Rikku is also Yuna's cousin on her mother's side."
    ),
    create_Character(CharacterRole.SupportingCharacters, 
      "1", 
      "Seymour", 
      "Seymour.webp", 
      400, 
      400, 
      "Seymour is the son of Jyscal, who became leader of theGuado, and a human woman."
    )
  ],
});

export const get_character_by_name = (role) => {
  return data.characters
    .filter((character) => character.role === role)
    .sort((a, b) => a.key - b.key);
};

export const get_character_by_role = (role) => {
  return data.characters.filter((character) => character.role === role).at(0);
};

function create_Character(role, key, name, imagePath, image_height, image_width, description) {
  var character = {
    role: role,
    key: key,
    image: "/images/"+imagePath,
    image_height: image_height,
    image_width: image_width,
    name: name,
    description: description,
    link: "../characters/"+name.toLowerCase()
  }
  return character;
}
