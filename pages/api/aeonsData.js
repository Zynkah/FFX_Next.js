import {
  get_aeons_by_name,
  get_aeons_by_role,
} from "../../lib/aeons/aeonsData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const aeonsByRole = get_aeons_by_role(role);
      if (aeonsByRole) {
        const aeon = get_aeons_by_name(role);
        res.status(200).json({ role, aeon });
      } else {
        res.status(200).json({ message: "Aeon not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Aeon role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
