import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

export default function CitizenLayout() {
  return (
    <div className="app-layout">
      <Topbar />

      {/* Full-width content, NO sidebar */}
      <main className="content-area full-width">
        <Outlet />
      </main>
    </div>
  );
}
