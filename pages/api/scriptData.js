import {
  get_script_by_name,
  get_script_by_role,
} from "../../lib/scripts/scriptsData";

export default function halder(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const scriptsByRole = get_script_by_role(role);
      if (scriptsByRole) {
        const script = get_script_by_name(role);
        res.status(200).json({ role, script });
      } else {
        res
          .status(200)
          .json({ message: "Script not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Script role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
