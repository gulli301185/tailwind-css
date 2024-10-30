import { Button } from "../button";
import facebook from "../../images/icons/facebook.svg";
import insta from "../../images/icons/instagram.svg";
import twitter from "../../images/icons/twitter.svg";
import mainPhoto from "../../images/icons/sale-banner.jpg";

export default function ManSection() {
  return (
    <section className="w-full flex flex-col lg:flex-row  mt-6 h-screen">
      <div className="relative lg:text-left lg:mt-12 lg:order-1 order-2 text-center ">
        <h1 className="font-black text-3xl lg:text-8xl whitespace-pre-line mt-20 ">{`Make\n remote work`}</h1>
        <p className="text-gray-700 whitespace-pre-line my-12 text-lg ">
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit.\nblanditiis? Expedita totam blanditiis, dolorum voluptates consequatur
          omnis ex distinctio, odio aspernatur tempora ullam sit rem vel.
          `}
        </p>
        <Button isFilled={true}>Learn more</Button>
        <div className="flex justify-around lg:absolute bottom-1 w-full lg:mt-20 mt-32 bg-slate-500 ">
          <img src={facebook} alt="*" />
          <img src={insta} alt="*" />
          <img src={twitter} alt="*" />
          <img src={facebook} alt="*" />
        </div>
      </div>
      <div className="lg:w-1/2 mt-12 lg:order-2 w-2/3  mx-auto ">
        <img src={mainPhoto} alt="*" className="lg:h-full" />
      </div>
    </section>
  );
}
