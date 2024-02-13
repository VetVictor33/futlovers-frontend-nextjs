import Link from "next/link";

interface AddButtonProps {
    text: string
    url: string
}

export function AddButton({text, url}:AddButtonProps){
    return(
        <Link className="bg-blue-500 rounded-md uppercase p-3 text-white font-bold"
            href={url} >
            {text}
        </Link>
    )
}