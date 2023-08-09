import {
  get_character_by_role,
  get_name_by_character,
} from "../../lib/characters/charactersData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const characterByRole = get_character_by_role(role);
      if (characterByRole) {
        const character = get_name_by_character(role);
        res.status(200).json({ role, character });
      } else {
        res
          .status(200)
          .json({ message: "Character not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Character role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
