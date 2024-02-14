'use client'
import { useRouter } from "next/navigation"
import { Suspense, useState } from "react"
import Swal from "sweetalert2"

import { postPlayer, putPlayer } from "@/app/libs/player"

import { Player } from "@/app/interfaces/player"

import { FeedbackParagraph } from "./feedback-paragraph"
import { TeamOptions } from "./team-options"

interface PlayerFormProps {
    editingPlayer?: Player
}

export function PlayerForm({editingPlayer}:PlayerFormProps){
    const [form, setForm] = useState<Partial<Player>>({name: editingPlayer?.name ?? '', age: editingPlayer?.age ?? 0, team_id: editingPlayer?.team_id ?? ''})
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        setErrorMessage('')
        const {name, value} = e.target
        setForm((values) => {
            return {...values, [name]:value}
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!form.name || !form.age || isNaN(+form.age) || !form.team_id) {
            setErrorMessage('Preencha todos os campos')
            return 
        }
        try {
            if(editingPlayer){
              await putPlayer(editingPlayer.id, {name: form.name, age: +form.age, team_id: form.team_id})
            } else {
              await postPlayer(form.team_id, {name: form.name, age: +form.age})
            }
            Swal.fire({
              title: `Sucesso!`,
              html: `Jogador ${form.name} ${editingPlayer ? 'editador' : 'cadastrado'} com sucesso`,
              timer: 1500,
              timerProgressBar: true,
              willClose: () => {
                setForm({name: '', age: 0, team_id: ''})
                router.push('/')
              }
            })
        } catch (error) {
            Swal.fire({
              title: `Erro!`,
              html: "Não conseguimos cadastrar o jogador, tente novamente mais tarde.",
              icon: 'error',
              timer: 1000,
              timerProgressBar: true,
            })
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">{`${editingPlayer ? 'Editar' : 'Inserir'} Jogador`}</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-col flex-grow">
                <label htmlFor="nome" className="text-sm font-medium">Nome</label>
                <input id="name" name="name" value={form.name} onChange={handleFormChange}
                type="text" className="border border-gray-300 rounded-md p-2" />
              </div>
              <div className="flex flex-col flex-grow">
                <label htmlFor="idade" className="text-sm font-medium">Idade</label>
                <input id="age" name="age" value={form.age} onChange={handleFormChange}
                type="number" className="border border-gray-300 rounded-md p-2" />
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <label htmlFor="time" className="text-sm font-medium">Time</label>
              <select id="team_id" name="team_id" value={form.team_id} onChange={handleFormChange} className="border border-gray-300 rounded-md p-2 flex-grow">
                  <option value="">Selecione um time</option>
                  <Suspense fallback={<option>Carregando...</option>}>
                    <TeamOptions />
                  </Suspense>
              </select>
            </div>
            {!!errorMessage && <FeedbackParagraph type="error">{errorMessage}</FeedbackParagraph>}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 mt-4 ml-auto block">SALVAR</button>
        </form>
    )
}