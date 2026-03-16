export function AddContent( {children} ) {
  return (
    <section className="item-list-container">

      {/* HEADER */}
      <div className="table-header">
        <div>ID</div>
        <div>Title</div>
        <div>Date Created</div>
      </div>

      {/* ROWS */}
      {children}

    </section>
  )
}

export function Item( {id, title, date}) {
    const formattedDate = date ? new Date(date).toLocaleDateString() : "-"

    return (
        <>
            <div className="table-row">
                <div className="table-cell">{id}</div>
                <div className="table-cell">{title || "-"}</div>
                <div className="table-cell">{formattedDate}</div>
            </div>
        </>
    )
}

