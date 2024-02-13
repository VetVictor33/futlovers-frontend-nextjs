const className = 'px-4 py-2 border-b border-gray-200 text-gray-600'

export function TableHead() {
    return (
        <thead>
            <tr>
              <th className={className}>ID</th>
              <th className={className}>Nome</th>
              <th className={className}>Time</th>
              <th className={`${className} text-center`}>Ações</th>
            </tr>
        </thead>
    )
}