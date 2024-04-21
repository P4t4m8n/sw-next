
import { useState } from "react";
import { HamburgerSvg } from "../SVGs/svg.service";
import { ThemeButton } from "../themeButton/themeButton";
import { LinkList } from "./LinkList";

export interface itemLink {
  title: string;
  path: string;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const isSlideIn = open ? "slide" : "";

  const links: itemLink[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Film",
      path: "/film",
    },
    {
      title: "Character",
      path: "/character",
    },
    {
      title: "Specie",
      path: "/specie",
    },
    {
      title: "Starship",
      path: "/starship",
    },
    {
      title: "Planet",
      path: "/planet",
    },
    {
      title: "Favorite",
      path: "/favorite",
    },
  ];

  return (
    <section className={`navbar flex flex-column ${isSlideIn}`}>
      <div className="actions flex">
        <button className="ham-menu" onClick={() => setOpen(!open)}>
          <HamburgerSvg />
        </button>
        <ThemeButton />
      </div>
      <nav className={`app-nav flex flex-column ${isSlideIn}`}>
        <LinkList links={links} />
      </nav>
    </section>
  );
}
