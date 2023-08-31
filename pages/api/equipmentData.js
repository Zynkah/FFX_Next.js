import {
  get_equipment_by_name,
  get_equipment_by_role,
} from "../../lib/equipment/equipmentData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const equipmentByRole = get_equipment_by_role(role);
      if (equipmentByRole) {
        const equipment = get_equipment_by_name(role);
        res.status(200).json({ role, equipment });
      } else {
        res
          .status(200)
          .json({ message: "Equipment item not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Equipment item not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
