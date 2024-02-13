import { PlayerForm } from "@/app/components/form/player-form";
import { getPlayer } from "@/app/libs/player";
import { getTeams } from "@/app/libs/team";
import Link from "next/link";

interface EditPlayerProps {
    params: {id: string}
}

export default async function EditPlayer({params: {id}}:EditPlayerProps) {
    const playerData = await getPlayer(id)
    const teams = await getTeams()

    return (
      <main className="w-2/3 my-20 mx-auto">
        <Link href={'/'} className="text-sm text-gray-500 hover:underline my-5">
          {'< voltar'}
        </Link>
        <PlayerForm editingPlayer={playerData ?? undefined} teams={teams}/>
      </main>
    )
}