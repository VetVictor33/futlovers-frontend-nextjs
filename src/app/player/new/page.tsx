import { PlayerForm } from "@/app/components/form/player-form";
import { getTeams } from "@/app/libs/team";
import Link from "next/link";

export default async  function player() {
    const teams = await getTeams()
    return (
      <main className="w-2/3 my-20 mx-auto">
        <Link href={'/'} className="text-sm text-gray-500 hover:underline my-5">
          {'< voltar'}
        </Link>
        <PlayerForm teams={teams}/>
      </main>
    )
}