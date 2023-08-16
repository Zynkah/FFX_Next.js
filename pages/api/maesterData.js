import {
  get_maester_by_name,
  get_maester_by_role,
} from "../../lib/maesters/maestersData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const maesterByRole = get_maester_by_role(role);
      if (maesterByRole) {
        const maester = get_maester_by_name(role);
        res.status(200).json({ role, maester });
      } else {
        res
          .status(200)
          .json({ message: "Maester not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Maester role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
