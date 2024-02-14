import { Team } from "../interfaces/team"

export async function getTeams(): Promise<Team[]> {
    const response = await fetch('http://localhost:3333/teams', { cache: 'no-cache' })
    
    if (!response.ok) {
        return []
    }

    const data = await response.json()
    return data
}

export async function postTeam(data: Partial<Team>){
    const response = await fetch(`http://localhost:3333/teams`, {
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