'use client'
import { Player } from "@/app/interfaces/player"
import { TableButton } from "./table-button"
import { useRouter } from "next/navigation"
import { swalWarning } from "../alert"
import Swal from "sweetalert2"
import { deletePlayer } from "@/app/libs/player"

const className = 'px-4 py-2 border-b border-gray-200 text-gray-600'

interface TableRowProps {
    player: Player
    flag: ()=> void
}

export function TableRow({player, flag}: TableRowProps){
    const router = useRouter()

    const handleRouter = () => {
        router.push(`/player/${player.id}`)
    }

    const handleDelete = () => {
        swalWarning.fire({
            title: "Tem certeza?",
            text: "Remover o jogador é uma ação irreversível",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            reverseButtons: false
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deletePlayer(player.id)
                    swalWarning.fire({
                        title: "Deletado",
                        text: "O Jogador foi deletado com sucesso",
                        icon: "success"
                    });
                    flag()
                } catch (error) {
                    swalWarning.fire({
                        title: "Ops!",
                        text: "Algo deu errado ao deletar o jogador",
                        icon: "error"
                    });
                }
            } else if (
                result.dismiss === Swal.DismissReason.cancel
                ) {
                swalWarning.fire({
                    title: "Cancelado",
                    text: "Nenhum jogador foi deletado",
                    icon: "error"
                });
            }
        });
    }

    return(
        <tr>
              <td className={className}>{player.id}</td>
              <td className={className}>{player.name}</td>
              <td className={className}>{player.team.name}</td>
              <td className={`${className} text-center`}>
                <TableButton text="Editar" onClick={handleRouter}/>
                <TableButton text="Excluir" color="red" onClick={handleDelete}/>
              </td>
        </tr>
    )
}