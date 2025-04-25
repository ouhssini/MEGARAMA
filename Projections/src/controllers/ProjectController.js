import { getFilms, getWeeklyPlanning } from "../lib/rabbit.js"







export const index = (req, res) => {
    try {
        const films = getFilms();
        res.status(200).json(films);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}



export const weeklyPlanning = (req, res) => {
    try {
        const planning = getWeeklyPlanning();
        res.status(200).json(planning);
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
       
}