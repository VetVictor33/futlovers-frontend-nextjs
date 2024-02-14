import { getTeams } from "@/app/libs/team";

export async function TeamOptions(){
    const teams = await getTeams()
    return (
        <>
            {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
        </>
    )
}