import { Team } from "./team"

export interface Player {
    id: string
    name: string
    age: number
    team: Team
}