interface ErrorParagraphProps {
    type: 'error' | 'success'
    children: React.ReactNode
}

export function FeedbackParagraph({children, type}: ErrorParagraphProps) {
    return(
        <p className={`${type == 'error' ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'} px-4 py-2 rounded relative`} role="alert">
            <span className="block sm:inline">{children}</span>
        </p>
    )
}