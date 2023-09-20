import { get_character_by_name } from "../../lib/characters/characterPageData";

export default function handler(req, res) {
  const { name } = req.query;

  if (req.method === "GET") {
    if (name) {
      const character = get_character_by_name(name);
      if (character) {
        res.status(200).json({ name, character });
      } else {
        res
          .status(200)
          .json({ message: "Character not found for the given name." });
      }
    } else {
      res.status(400).json({ message: "Character name not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
