import { getTeams } from "@/app/libs/team";

export async function TeamOptions(){
    const teams = await getTeams()

    if (!teams.length) {
        return <option value='' >Não há time cadastrado. Adicione um time a partir da página inicial</option>
    }

    return (
        <>
            {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
        </>
    )
}