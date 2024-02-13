import { getPlayers } from "@/app/libs/player";
import { TableHead } from "./table-head";
import { TableRow } from "./tale-row";

export async function Table (){
    const players = await getPlayers()
    return (
        <table className="w-full text-left border-collapse">
          <TableHead/>
          <tbody>
            { players.length ?
            players.map((player) => <TableRow key={player.id} player={player}/>):
              <h1 className="m-4 font-semi-bold text-xl">Não existe nenhum jogador cadastrado</h1>
            }
          </tbody>
        </table>
    )
  }
  