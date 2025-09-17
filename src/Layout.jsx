import { Outlet } from "react-router-dom";
import NavBar from "./component/NavBar";

export default function Layout() {
  return (
    <div className="bg-gray-100 dark:bg-midnight text-gray-800 dark:text-blossom min-h-screen transition-colors duration-300">
      <NavBar />
      <main className="bg-gray-100 dark:bg-midnight">
        <Outlet />
      </main>
    </div>
  );
}