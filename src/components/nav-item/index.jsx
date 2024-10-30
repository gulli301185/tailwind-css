import { useState} from "react";
import ArrowDownIcon from "../../images/icons/32195.png";


const Navitem = ({ text = "" , children}) => {
console.log(children);

    const [sellected, setSellected] =useState("")
  return (
    <div className="relative">
      <div className="cursor-pointer flex space-x-2 items-center">
        <span className="text-gray-700 hover:text-red-700" onClick={()=>children && setSellected(text !==sellected ? text : "")}>{text}</span>
       {children && sellected !==text && ( <div className="w-3">
          <img src={ArrowDownIcon} alt="*" />
        </div>)}
       {children && sellected ===text && ""
      }
      </div>
      {sellected && children}
    </div>
  );
};

export default Navitem;
