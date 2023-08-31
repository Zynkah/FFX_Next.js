import {
  get_temple_by_name,
  get_temple_by_role,
} from "../../lib/temples/templeData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const templeByRole = get_temple_by_role(role);
      if (templeByRole) {
        const temple = get_temple_by_name(role);
        res.status(200).json({ role, temple });
      } else {
        res
          .status(200)
          .json({ message: "Temple item not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Temple item not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
