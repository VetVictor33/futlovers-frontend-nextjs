interface HeaderProps {
    title: string
}

export function Header({title}: HeaderProps) {
    return(
        <header className="flex w-full bg-blue-500 text-white p-4 grow-0">
            <h1 className="text-2xl font-cursive">{title}</h1>
        </header>
    )
}