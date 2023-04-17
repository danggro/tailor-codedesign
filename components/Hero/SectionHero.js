import Image from "next/image";
import Container from "../Container";
import Arrow from "./Arrow";
import HeroPic from "@/public/Hero.png";

export default function SectionHero() {
  return (
    <section id="Hero" className="mt-[92px]">
      <Container>
        <div className="relative">
          <div className="w-6/12 pt-[83px] ">
            <h1 className="text-[64px] font-bold leading-[76px]">
              Make your dream <span className="text-pink">clothes</span> here
            </h1>
            <p className="w-8/12 pr-10 mt-6 text-lg mb-11">
              You can request your own model or the one I have provided
            </p>
            <button className="hover:bg-pink transition-all rounded-full group flex px-[26px] py-3 border border-pink">
              <span>get started</span>
              <div className="text-pink group-hover:text-white">
                <Arrow />
              </div>
            </button>
          </div>
          <Image src={HeroPic} alt="" className="absolute top-0 right-0" />
        </div>
      </Container>
    </section>
  );
}
