import { Container } from "./ui/components/Container.jsx";
import { NavLink } from "react-router";
import { Menu } from "lucide-react";
import { Logo } from "./ui/components/Logo.jsx";

const navLinkClass = ({ isActive }) =>
  `${isActive ? "text-stone-500" : ""} hover:text-stone-500`;

export const Header = () => {
  return (
    <header>
      <Container>
        <nav className="mt-3 flex h-12 items-center justify-between rounded-lg border border-stone-300 bg-[#FFFFFF] px-4">
          <div className="flex items-center gap-2">
            <Logo />
            <span>Siddhant</span>
          </div>
          <ul className="hidden items-center gap-6 text-sm md:flex">
            <li>
              <NavLink className={navLinkClass} to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to={"/about"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to={"projects"}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className={navLinkClass} to={"/blogs"}>
                Blogs
              </NavLink>
            </li>
          </ul>
          <div className="md:hidden">
            <Menu />
          </div>
        </nav>
      </Container>
    </header>
  );
};
