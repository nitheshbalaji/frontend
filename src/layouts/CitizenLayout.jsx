import Topbar from "../components/Topbar";
import CitizenSidebar from "../components/CitizenSidebar";
import { Outlet } from "react-router-dom";

export default function CitizenLayout() {
  return (
    <div className="app-layout">
      <Topbar />
      <div className="layout-body">
        <CitizenSidebar />
        <main className="content-area">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
