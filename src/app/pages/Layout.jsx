
import { Sidebar } from "../components/sidebar/Sidebar";
import TopBar from "../components/sidebar/TopBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {Outlet}
        </main>
      </div>
    </div>
  );
};

export default Layout;
