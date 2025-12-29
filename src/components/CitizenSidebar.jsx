import { NavLink } from "react-router-dom";

export default function CitizenSidebar() {
  return (
    <aside className="citizen-sidebar" role="navigation">
      <div className="sidebar-profile">
        <div className="avatar">👤</div>
        <h4>Citizen</h4>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/citizen/dashboard">Dashboard</NavLink>
        <NavLink to="/citizen/profile">Profile</NavLink>
        <NavLink to="/citizen/submit">Register Complaint</NavLink>
        <NavLink to="/citizen/history">Complaint History</NavLink>
      </nav>
    </aside>
  );
}
