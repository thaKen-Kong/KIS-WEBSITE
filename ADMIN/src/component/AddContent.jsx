import { useState } from "react";



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
    return (
        <>
            <div className="table-row">
                <div className="table-cell">1</div>
                <div className="table-cell">Sample Title</div>
                <div className="table-cell">March 13, 2026</div>
            </div>
        </>
    )
}

export function AddItemButton(){
    return (
        <>
            <button>
                <img src="/src/assets/icons/" alt="" />
            </button>
        </>
    )
}