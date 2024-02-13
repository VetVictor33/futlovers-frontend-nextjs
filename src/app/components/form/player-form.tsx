'use client'
import { Player } from "@/app/interfaces/player"
import { Team } from "@/app/interfaces/team"
import { useState } from "react"
import { FeedbackParagraph } from "./feedback-paragraph"
import { postPlayer, putPlayer } from "@/app/libs/player"

interface PlayerFormProps {
    editingPlayer?: Player
    teams: Team[]
}

export function PlayerForm({editingPlayer, teams}:PlayerFormProps){
    const [form, setForm] = useState<Partial<Player>>({name: editingPlayer?.name ?? '', age: editingPlayer?.age ?? 0, team_id: editingPlayer?.team_id ?? ''})
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        setErrorMessage('')
        setSuccessMessage('')
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
              const response:Player = await putPlayer(
                editingPlayer.id, {name: form.name, age: +form.age, team_id: form.team_id}
              )
              setSuccessMessage(`${form.name} editado com sucesso!`)
              setForm({name: response.name, age: response.age, team_id: response.team_id})
            } else {
              await postPlayer(
                form.team_id, {name: form.name, age: +form.age}
                )
              setSuccessMessage(`${form.name} criado com sucesso!`)
              setForm({name: '', age: 0, team_id: ''})
            }
        } catch (error) {
            setErrorMessage('Algo deu errado ao criar o jogador')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold">Inserir Jogador</h2>
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
                {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
              </select>
            </div>
            {!!errorMessage && <FeedbackParagraph type="error">{errorMessage}</FeedbackParagraph>}
            {!!successMessage && <FeedbackParagraph type="success">{successMessage}</FeedbackParagraph>}
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 mt-4 ml-auto block">SALVAR</button>
        </form>
    )
}