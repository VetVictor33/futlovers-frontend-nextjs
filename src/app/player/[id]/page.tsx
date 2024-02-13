import { getPlayer } from "@/app/libs/player";

interface EditPlayerProps {
    params: {id: string}
}

export default async function EditPlayer({params: {id}}:EditPlayerProps) {
    const playerData = await getPlayer(id)

    return(
        <h1>{playerData?.name}</h1>
    )
}