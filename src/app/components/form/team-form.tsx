'use client'
import { Team } from "@/app/interfaces/team"
import { postTeam } from "@/app/libs/team"
import { useState } from "react"
import { FeedbackParagraph } from "./feedback-paragraph"

export function TeamForm(){
    const [form, setForm] = useState<Partial<Team>>({name: ''})
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
        if (!form.name) {
            setErrorMessage('Preencha o campo nome')
            return 
        }
        try {
              await postTeam({name: form.name})
              setSuccessMessage(`${form.name} criado com sucesso!`)
              setForm({name: ''})
            }catch (error) {
            setErrorMessage('Algo deu errado ao criar o Time')
            }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold">Inserir Time</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col flex-grow">
                    <label htmlFor="nome" className="text-sm font-medium">Nome</label>
                    <input id="name" name="name" value={form.name} onChange={handleFormChange}
                    type="text" className="border border-gray-300 rounded-md p-2" />
                </div>
                {!!errorMessage && <FeedbackParagraph type="error">{errorMessage}</FeedbackParagraph>}
                {!!successMessage && <FeedbackParagraph type="success">{successMessage}</FeedbackParagraph>}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-2 mt-4 ml-auto block">SALVAR</button>
        </form>
    )
}