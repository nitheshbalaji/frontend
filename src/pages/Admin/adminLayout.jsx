import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "./admin.css";

export default function AdminLayout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`admin-wrapper ${collapsed ? "collapsed" : ""}`}>

            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    {collapsed ? "SC" : "Smart City Grievance"}
                </div>


                <div className="user-panel">
                    {!collapsed && (
                        <div>
                            <div>Municipal Authority</div>
                            <div className="status">● Admin User</div>
                        </div>
                    )}
                </div>


                <nav className="menu">
                    <NavLink to="/admin/dashboard">📊 {!collapsed && "Dashboard"}</NavLink>
                    <NavLink to="/admin/complaints">📝 {!collapsed && "Complaints"}</NavLink>
                    <NavLink to="/admin/reports">📄 {!collapsed && "Reports"}</NavLink>
                </nav>
            </aside>

            {/* Main */}
            <div className="main">
                <header className="topbar">
                    <span className="menu-icon" onClick={() => setCollapsed(!collapsed)}>
                        ☰
                    </span>
                    <span>City Administrator</span>
                </header>

                <main className="content">
                    <Outlet />
                </main>
            </div>

        </div>
    );
}
