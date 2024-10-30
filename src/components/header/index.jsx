import { useState } from "react";
import { Button } from "../button";
import Navitem from "../nav-item";
import NavMenu from "../nav-menu/NavMenu";
import { COMPONY, FEATURES } from "./constans";
import MobileMenu from "../mobile-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglemenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="flex items-center">
      <h1 className="font-extrabold text-4xl">snap</h1>
      <nav className="hidden lg:flex space-x-8 ml-6 items-center">
        <Navitem text="Features">
          <NavMenu items={FEATURES} />
        </Navitem>
        <Navitem text="Company">
          <NavMenu items={COMPONY} />
        </Navitem>
        <Navitem text="Carrer" />
        <Navitem text="About" />
      </nav>
      <div className="hidden lg:flex space-x-5 ml-auto">
        <Button>Login</Button>
        <Button hasBorder={true}>Logout</Button>
      </div>
      <div
        className="w-10 lg:hidden ml-auto z-30 cursor-pointer "
        onClick={togglemenu}
      >
        {isOpen ? (
          <div className="text-4xl font-bold">Х</div>
        ) : (
          <>
            {" "}
            <div className="border-2  border-black mb-1"></div>
            <div className="border-2 border-black mb-1"></div>
            <div className="border-2 border-black mb-1"></div>
          </>
        )}
      </div>
      <MobileMenu isOpen={isOpen} />
    </header>
  );
};

export default Header;
