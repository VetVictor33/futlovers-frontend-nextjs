import { Player } from "@/app/interfaces/player"
import { TableButton } from "./table-button"

const className = 'px-4 py-2 border-b border-gray-200 text-gray-600'

interface TableRowProps {
    player: Player
}

export function TableRow({player}: TableRowProps){
    return(
        <tr>
              <td className={className}>{player.id}</td>
              <td className={className}>{player.name}</td>
              <td className={className}>{player.team.name}</td>
              <td className={`${className} text-center`}>
                <TableButton text="Editar" />
                <TableButton text="Excluir" color="red"/>
              </td>
        </tr>
    )
}