import SectionAdvantage from "@/components/Advantage/SectionAdvantage";
import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import NavBar from "@/components/Navigation/NavBar";
import SectionService from "@/components/Service/SectionService";
import SectionTestimoni from "@/components/Testimoni/SectionTestimoni";

export default function Home() {
  return (
    <>
      <NavBar />
      <SectionHero />
      <SectionAdvantage />
      <SectionTestimoni />
      <SectionService />
      <Footer />
    </>
  );
}
