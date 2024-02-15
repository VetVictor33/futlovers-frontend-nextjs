import { Player } from "@/app/interfaces/player"
import { TableRow } from "./tale-row"

interface TableBodyProps {
    players : Promise<Player[]>
    flag: () => void
}

export async function TableBody({players, flag}:TableBodyProps) {
    const resolvedPlayers = await players

    return (
        resolvedPlayers.length ?
        <tbody>
            {resolvedPlayers.map((player) => <TableRow key={player.id} player={player} flag={flag}/>)}
        </tbody>:
        <tbody>
            <tr>
                <td className="p-4 font-semi-bold text-xl">
                    Não existe nenhum jogador cadastrado
                </td>
            </tr>
        </tbody>
    )
}