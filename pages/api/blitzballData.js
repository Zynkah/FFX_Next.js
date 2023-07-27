import { get_characters_by_teamname, get_team_by_teamname } from '../../lib/data';

export default function handler(req, res) {
  const { teamname } = req.query;

  if (req.method === 'GET') {
    if (teamname) {
      const team = get_team_by_teamname(teamname);
      const characters = get_characters_by_teamname(teamname);
      res.status(200).json({ team, characters });
    } else {
      res.status(400).json({ message: 'Team name not provided.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
