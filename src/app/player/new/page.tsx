import Link from "next/link";

import { PlayerForm } from "@/app/components/form/player-form";

export default async  function player() {
    return (
      <main className="w-2/3 my-20 mx-auto">
        <Link href={'/'} className="text-sm text-gray-500 hover:underline my-5">
          {'< voltar'}
        </Link>
        <PlayerForm/>
      </main>
    )
}