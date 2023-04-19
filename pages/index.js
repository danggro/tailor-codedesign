import SectionAdvantage from "@/components/Advantage/SectionAdvantage";
import Footer from "@/components/Footer/Footer";
import SectionHero from "@/components/Hero/SectionHero";
import NavBar from "@/components/Navigation/NavBar";
import SectionService from "@/components/Service/SectionService";
import SectionTestimoni from "@/components/Testimoni/SectionTestimoni";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailor | Make Dream Clothes</title>
      </Head>
      <NavBar />
      <SectionHero />
      <SectionAdvantage />
      <SectionTestimoni />
      <SectionService />
      <Footer />
    </>
  );
}
