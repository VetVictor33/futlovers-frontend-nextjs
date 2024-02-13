import { Player } from "@/app/interfaces/player"
import { TableRow } from "./tale-row"

interface TableBodyProps {
    players : Promise<Player[]>
}

export async function TableBody({players}:TableBodyProps) {
    const resolvedPlayers = await players

    return (
        resolvedPlayers.length ?
        <tbody>
            {resolvedPlayers.map((player) => <TableRow key={player.id} player={player}/>)}
        </tbody>:
        <h1 className="m-4 font-semi-bold text-xl">Não existe nenhum jogador cadastrado</h1>
    )
}