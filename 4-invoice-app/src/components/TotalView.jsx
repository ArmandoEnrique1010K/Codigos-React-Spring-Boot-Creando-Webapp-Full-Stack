
export const TotalView = ( { total }) => {

    return (
        <>
            <div className="text-end">
                <span className="badge bg-success">{ total }</span>
        </div>
        </>
    )
}