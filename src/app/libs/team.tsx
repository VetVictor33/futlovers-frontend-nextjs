import { Team } from "../interfaces/team"

export async function getTeams(): Promise<Team[]> {
    try {
        const response = await fetch('http://localhost:3333/teams', { cache: 'no-cache' })
        const data = await response.json()
        return data
    } catch (error) {
        return []
    }
}