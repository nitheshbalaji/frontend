import Topbar from "../components/Topbar";
import CitizenSidebar from "../components/CitizenSidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function CitizenLayout() {
  const location = useLocation();

  // Show sidebar only on these routes
  const showSidebar =
    location.pathname.startsWith("/citizen/dashboard") ||
    location.pathname.startsWith("/citizen/my-complaints");

  return (
    <div className="app-layout">
      <Topbar />
      <div className="layout-body">
        {showSidebar && <CitizenSidebar />}
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
