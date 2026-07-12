
import Image from "next/image";
import HomePage from "./cpmponents/HomePage";
import Navbar from "./cpmponents/shared/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">

      <Image
        src="/bgImg.svg"
        alt=""
        fill
        className="absolute inset-0 w-full h-full object-cover z-0"
      />


      <img
        src="/bgSmallImg.svg"
        alt=""

        className="absolute left-1/2 top-1/2 md:-mt-10 md:-ml-4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-auto z-10"
      />
      <div className="relative z-20">
      <Navbar/>
    <HomePage/>
      </div>
    </div>
  );
}
