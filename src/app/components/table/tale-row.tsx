'use client'
import { Player } from "@/app/interfaces/player"
import { TableButton } from "./table-button"
import { useRouter } from "next/navigation"

const className = 'px-4 py-2 border-b border-gray-200 text-gray-600'

interface TableRowProps {
    player: Player
}

export function TableRow({player}: TableRowProps){
    const router = useRouter()

    const handleRouter = () => {
        router.push(`/player/${player.id}`)
    }
    return(
        <tr>
              <td className={className}>{player.id}</td>
              <td className={className}>{player.name}</td>
              <td className={className}>{player.team.name}</td>
              <td className={`${className} text-center`}>
                <TableButton text="Editar" onClick={handleRouter}/>
                <TableButton text="Excluir" color="red"/>
              </td>
        </tr>
    )
}