import {
  get_summoners_by_name,
  get_summoners_by_role,
} from "../../lib/summoners/summonersData";

export default function handler(req, res) {
  const { role } = req.query;

  if (req.method === "GET") {
    if (role) {
      const summonersByRole = get_summoners_by_role(role);
      if (summonersByRole) {
        const summoner = get_summoners_by_name(role);
        res.status(200).json({ role, summoner });
      } else {
        res
          .status(200)
          .json({ message: "Summoner not found for the given role." });
      }
    } else {
      res.status(400).json({ message: "Summoner role not provided." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
