import {
  get_agency_by_name,
  get_agency_by_role,
} from "../../lib/agencies/agenciesData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const agencyByRole = get_agency_by_role(role);
      if (agencyByRole) {
        const agency = get_agency_by_name(role);
        res.status(200).json({ role, agency });
      } else {
        res
          .status(200)
          .json({ message: "Agency not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Agency role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
