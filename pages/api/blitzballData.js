import { get_players_by_teamname, get_team_by_teamname } from '../../lib/data';

export default function handler(req, res) {
  const { teamname } = req.query;

  if (req.method === 'GET') {
    if (teamname) {
      const team = get_team_by_teamname(teamname);
      const players = get_players_by_teamname(teamname);
      res.status(200).json({ team, players });
    } else {
      res.status(400).json({ message: 'Team name not provided.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
