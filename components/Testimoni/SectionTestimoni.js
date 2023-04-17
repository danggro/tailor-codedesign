import Image from "next/image";
import avatar from "@/public/testimoni/avatar.png";
import testimoni1 from "@/public/testimoni/testimoni-1.png";
import testimoni2 from "@/public/testimoni/testimoni-2.png";
import Star from "./Star";

export default function SectionTestimoni() {
  return (
    <section className="mt-[382px] pr-[166px]">
      <div className="flex gap-[65px]">
        <div className="flex w-max-[582px] items-center overflow-x-scroll gap-7">
          <Image src={testimoni1} alt="" className="flex-shrink-0 h-fit" />
          <Image src={testimoni2} alt="" className="flex-shrink-0 h-fit" />
        </div>
        <div className="min-w-[478px] mt-12">
          <h6 className="text-base font-semibold uppercase text-pink ">
            what did he say
          </h6>
          <h3 className="mt-3 mb-5 text-2xl">
            Pelayanan nya bagus sekali, jahitannya juga rapi, suka deh
          </h3>
          <div className="flex items-center gap-5">
            <Image src={avatar} alt="" />
            <div>
              <h6 className="text-xl font-semibold">Farhan Ganteng</h6>
              <p className="text-lg mt-[6px]">Lelaki lajang</p>
            </div>
          </div>
          <div className="flex gap-1 mt-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </section>
  );
}
