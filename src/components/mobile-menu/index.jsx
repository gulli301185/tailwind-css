import React from "react";
import Navitem from "../nav-item";
import { COMPONY, FEATURES } from "../header/constans";
import { MenuItem } from "../menu-item";
import { Button } from "../button";

export default function MobileMenu({isOpen=true}) {
  return (
    <React.Fragment>
      <div
        className={`absolute top-0 right-0 left-0 opacity-50 bg-slate-900 z-10 min-h-[150vh] ${
          isOpen ? "flex" : "hidden"
        }`}
      />
      <div
        className={`absolute top-0 right-0  bg-white w-1/2 z-20 min-h-[100vh] ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <nav className="my-20 mx-5 space-y-5 text-lg w-full">
          <Navitem text="FEATURES">
            <div className="flex flex-col space-y-5 p-2">
              {FEATURES.map(({ text, icon }) => (
                <MenuItem text={text} icon={icon} key={text} />
              ))}
            </div>
          </Navitem>
          <Navitem text="Company">
            <div className="flex flex-col space-y-5 p-2">
              {COMPONY.map(({ text, icon }) => (
                <MenuItem text={text} icon={icon} key={text} />
              ))}
            </div>
          </Navitem>
          <Navitem text="Carrear" />
          <Navitem text="About" />

          <div className="flex flex-col space-y-5">
            <Button>Login</Button>
            <Button hasBorder={true} >Logout</Button>
          </div>
          
        </nav>
      </div>
    </React.Fragment>
  );
}
