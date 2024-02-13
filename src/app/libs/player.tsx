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

export async function postPlayer(team_id: string, data: Partial<Player>){
    const response = await fetch(`http://localhost:3333/players/${team_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });
    
    if(!response.ok) {
        throw   new Error('Erro ao criar jogador')
    }

    return response
}

export async function putPlayer(player_id: string, data: Partial<Player>){
    const response = await fetch(`http://localhost:3333/players/${player_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });

    if(!response.ok){
        throw new Error('Erro ao editar jogador')
    }
    return await response.json()
}