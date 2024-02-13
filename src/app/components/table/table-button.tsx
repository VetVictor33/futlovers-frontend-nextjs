interface TableButtonProps {
    color?: 'blue' | 'red'
    text: string
}

export function TableButton({text, color='blue'}:TableButtonProps) {
    return (
        <button className={`${color == 'red' ? 'bg-red-500': ' bg-blue-500'} text-white px-2 py-1 rounded-md m-1`}>{text}</button>
    )
}