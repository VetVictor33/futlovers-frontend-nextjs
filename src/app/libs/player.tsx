import { Player } from "../interfaces/player"

export async function getPlayers(): Promise<Player[]> {
    try {
        const response = await fetch('http://localhost:3333/players', { cache: 'no-cache' })
        const data = await response.json()
        return data
    } catch (error) {
        return []
    }
}

export async function getPlayer(id: string): Promise<Player | null> {
    try {
        const response = await fetch(`http://localhost:3333/players/${id}`, {cache: 'no-cache'})
        const data = await response.json()
        return data
    } catch (error) {
        return null
    }
}