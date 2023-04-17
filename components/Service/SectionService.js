import Image from "next/image";
import Container from "../Container";
import TitleSection from "../TitleSection";
import Sewing from "@/public/service/Sewing.png";
import Permak from "@/public/service/Permak.png";
import Dress from "@/public/service/Dress.png";
import Printing from "@/public/service/Printing.png";

export default function SectionService() {
  return (
    <section className="mt-[202px]">
      <Container>
        <div className="relative">
          <div className="w-3/12 pt-12 pr-5">
            <TitleSection
              title="Our Service"
              desc="some of our featured services"
            />
          </div>
          <div className="absolute top-0 left-[312px]">
            <Image src={Sewing} alt="" />
          </div>
          <div className="absolute top-[239px] -left-4 rotate-[42deg]">
            <Image src={Permak} alt="" />
          </div>
          <div className="absolute top-[180px] -right-4 -rotate-[3deg]">
            <Image src={Dress} alt="" />
          </div>
          <div className="absolute top-[374px] left-[360px] rotate-[27deg]">
            <Image src={Printing} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
