import { Player } from "../interfaces/player"

export async function getPlayers(): Promise<Player[]> {
    const response = await fetch('http://localhost:3333/players', { cache: 'no-cache' })
    if (!response.ok) {
        return []
    }

    const data = await response.json()
    return data
}

export async function getPlayer(id: string): Promise<Player | null> {
    const response = await fetch(`http://localhost:3333/players/${id}`, {cache: 'no-cache'})
    if (!response.ok) {
        return null
    }
    
    const data = await response.json()
    return data
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