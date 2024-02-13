interface TableButtonProps {
    color?: 'blue' | 'red'
    text: string
    onClick?: React.MouseEventHandler<HTMLButtonElement> 
}

export function TableButton({text, color='blue', onClick}:TableButtonProps) {
    return (
        <button className={`${color == 'red' ? 'bg-red-500': ' bg-blue-500'} text-white px-2 py-1 rounded-md m-1`}
            onClick={onClick}
            >{text}</button>
    )
}