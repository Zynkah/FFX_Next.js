import {
  get_location_by_name,
  get_location_by_role,
} from "../../lib/locations/locationsData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method == "GET") {
    if (role) {
      const locationByRole = get_location_by_role(role);
      if (locationByRole) {
        const location = get_location_by_name(role);
        res.status(200).json({ role, location });
      } else {
        res
          .status(200)
          .json({ message: "Location not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Location role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
