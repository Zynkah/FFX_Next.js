import {
  get_technology_by_name,
  get_technology_by_role,
} from "../../lib/technology/technologyData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const technolgyByRole = get_technology_by_role(role);
      if (technolgyByRole) {
        const technology = get_technology_by_name(role);
        res.status(200).json({ role, technology });
      } else {
        res
          .status(200)
          .json({ message: "Tech item not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Tech item not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
