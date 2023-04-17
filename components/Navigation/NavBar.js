import { useEffect } from "react";
import Container from "../Container";
import NavLogo from "./NavLogo";
import NavRight from "./NavRight";

export default function NavBar() {
  useEffect(() => {
    window.onscroll = function () {
      const nav = document.querySelector("#navigation");

      if (window.pageYOffset > nav.offsetTop) {
        nav.classList.add("fixed-nav");
        // nav.classList.remove("pt-[37px]");
      } else {
        nav.classList.remove("fixed-nav");
        // nav.classList.add("pt-[37px]");
      }
    };
  }, []);

  return (
    <nav
      id="navigation"
      className="fixed top-0 w-full transition-all bg-transparent pt-[37px]"
    >
      <Container>
        <div className="flex items-center justify-between ">
          <NavLogo />
          <NavRight />
        </div>
      </Container>
    </nav>
  );
}
