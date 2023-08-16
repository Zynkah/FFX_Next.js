import {
  get_military_by_name,
  get_military_by_role,
} from "../../lib/military/militaryData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const militaryByRole = get_military_by_role(role);
      if (militaryByRole) {
        const military = get_military_by_name(role);
        res.status(200).json({ role, military });
      } else {
        res
          .status(200)
          .json({ message: "Military branch not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Military branch role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
