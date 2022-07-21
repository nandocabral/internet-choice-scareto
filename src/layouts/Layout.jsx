import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="container mx-auto">
      <Outlet />
    </main>
  );
};

export default Layout;
