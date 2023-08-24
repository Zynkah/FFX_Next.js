import {
    get_race_by_name,
    get_race_by_role,
} from '../../lib/races/racesData';

export default function handler(req, res) {
    const { role } = req.query;

    if (req.method === 'GET') {
        if (role) {
            const raceByRole = get_race_by_role(role);
            if (raceByRole) {
                const race = get_race_by_name(role);
                res.status(200).json({ role, race });
            } else {
                res.status(200).json({ message: "Race not found for the given role." });
            }
        } else {
            res.status(400).json({ message: "Race role not provided." });
        }
    } else {
        res.status(405).json({ message: "Method not allowed." });
    }
}