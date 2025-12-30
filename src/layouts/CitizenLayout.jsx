import { Outlet } from "react-router-dom";

export default function CitizenLayout() {
  return (
    <main className="content-area full-width">
      <Outlet />
    </main>
  );
}
