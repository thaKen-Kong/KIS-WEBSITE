import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="home-welcome">
        <p className="home-kicker">Home</p>
        <h1>WELCOME USER</h1>
        <p className="home-sub">Manage news, events, and announcements with a clean, focused workspace.</p>
      </section>
      <section className="home-fill">
        <div className="home-actions">
          <div className="lined-label">
            <span>WHAT DO YOU WANT TO DO?</span>
          </div>
          <div className="home-cards">
            <Link className="home-card" to="/admin/panel-ui/news">
              <span className="home-card-title">Manage News</span>
              <span className="home-card-sub">Create, edit, and publish updates.</span>
            </Link>
            <Link className="home-card" to="/admin/panel-ui/events">
              <span className="home-card-title">Manage Events</span>
              <span className="home-card-sub">Add events and schedule activities.</span>
            </Link>
            <Link className="home-card" to="/admin/panel-ui/announcement">
              <span className="home-card-title">Post Announcements</span>
              <span className="home-card-sub">Share important notices quickly.</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
