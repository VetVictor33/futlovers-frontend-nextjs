
export function SkeletonRow() {
    return(
        <tr className="animate-pulse">
            <SkeletonCell/>
            <SkeletonCell/>
            <SkeletonCell/>
            <SkeletonCell/>
        </tr>
    )
}

function SkeletonCell(){
    return (
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="h-4 bg-gray-300 rounded"></div>
      </td>
    )
}