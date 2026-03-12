export function Pagination({ page = 1, totalPages = 1, onPageChange }) {
  const safeTotal = Math.max(1, totalPages)
  const safePage = Math.min(Math.max(1, page), safeTotal)

  const handleChange = (next) => {
    if (!onPageChange) return
    const target = Math.min(Math.max(1, next), safeTotal)
    if (target !== safePage) onPageChange(target)
  }

  const pages = Array.from({ length: safeTotal }, (_, index) => index + 1)

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination-button"
        type="button"
        onClick={() => handleChange(safePage - 1)}
        disabled={safePage === 1}
      >
        Prev
      </button>
      <div className="pagination-list">
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`pagination-number ${pageNumber === safePage ? "is-active" : ""}`.trim()}
            type="button"
            onClick={() => handleChange(pageNumber)}
            aria-current={pageNumber === safePage ? "page" : undefined}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        className="pagination-button"
        type="button"
        onClick={() => handleChange(safePage + 1)}
        disabled={safePage === safeTotal}
      >
        Next
      </button>
    </nav>
  )
}
