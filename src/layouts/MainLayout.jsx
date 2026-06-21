import { Outlet } from "react-router";
import { Footer } from "../shared/Footer.jsx";
import { Header } from "../shared/Header.jsx";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
