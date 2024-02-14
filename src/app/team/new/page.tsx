import { TeamForm } from "@/app/components/form/team-form";
import Link from "next/link";

export default function team() {
    return (
      <main className="size-96 my-20 mx-auto">
        <Link href={'/'} className="text-sm text-gray-500 hover:underline my-5">
          {'< voltar'}
        </Link>
        <TeamForm/>
      </main>
    )
}