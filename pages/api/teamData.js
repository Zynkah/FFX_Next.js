import { get_team_by_name, get_team_by_role } from "../../lib/teams/teamsData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const teamByRole = get_team_by_role(role);
      if (teamByRole) {
        const team = get_team_by_name(role);
        res.status(200).json({ role, team });
      } else {
        res.status(200).json({ message: "Team not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Team role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
