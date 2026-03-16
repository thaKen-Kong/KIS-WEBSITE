import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <>
      <section className="notfound">
        <div className="notfound-card">
          <p className="notfound-code">404</p>
          <h1>Page Not Found</h1>
          <p className="notfound-sub">The page you are looking for does not exist.</p>
          <Link className="notfound-link" to="/admin">Back to Login</Link>
        </div>
      </section>
    </>
  )
}
