import Topbar from "../components/Topbar";
import CitizenSidebar from "../components/CitizenSidebar";
import { Outlet, useLocation } from "react-router-dom";

export default function CitizenLayout() {
  const location = useLocation();

  // Routes that should be FULL SCREEN (no topbar, no sidebar)
  const fullScreenRoutes = ["/citizen/dashboard"];

  const isFullScreen = fullScreenRoutes.includes(location.pathname);

  return (
    <>
      {/* Topbar */}
      {!isFullScreen && <Topbar />}

      <div className="layout-body">
        {/* Sidebar */}
        {!isFullScreen && <CitizenSidebar />}

        <main
          className="content-area"
          style={{
            padding: isFullScreen ? "0" : "24px",
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
