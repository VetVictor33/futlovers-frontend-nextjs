import { Player } from "@/app/interfaces/player";
import { TableHead } from "./table-head";
import { TableRow } from "./tale-row";

const players: Player[] = [
    {id: 'fake-player1', name: 'Rivaldo', age: 19, team: {id: 'fake-team1', name: 'Vasco'}},
]

async function getPlayers(): Promise<Player[]> {
  const response = await fetch('http://localhost:3333/players', { cache: 'no-store' })
  const data = await response.json()
  return data
}

export async function Table (){
    const players = await getPlayers()
    return (
        <table className="w-full text-left border-collapse">
          <TableHead/>
          <tbody>
            {players.map((player) => <TableRow key={player.id} player={player}/>)}
          </tbody>
        </table>
    )
  }
  