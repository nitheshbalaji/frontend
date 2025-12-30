import Topbar from "../components/Topbar";
import CitizenSidebar from "../components/CitizenSidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function CitizenLayout() {
  const location = useLocation();

  // Pages that should be FULL SCREEN (no topbar, no sidebar)
  const isDashboard = location.pathname === "/citizen/dashboard";

  return (
    <>
      {/* Show Topbar only if NOT dashboard */}
      {!isDashboard && <Topbar />}

      <div className="layout-body">
        {/* Show sidebar only if NOT dashboard */}
        {!isDashboard && <CitizenSidebar />}

        <main
          className="content-area"
          style={{
            padding: isDashboard ? "0" : "24px",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
}
