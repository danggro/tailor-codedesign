import Container from "../Container";
import TitleSection from "../TitleSection";
import CardAdvantage from "./CardAdvantage";

export default function SectionAdvantage() {
  return (
    <section className="mt-[250px]">
      <Container>
        <div className="w-4/12 mx-auto mb-[58px] text-center px-8">
          <TitleSection
            title="Our advantage"
            desc="We have several advantages that other tailors don't have"
          />
        </div>
        <div className="flex justify-between gap-[102px]">
          <CardAdvantage
            img="/advantage/Profesional.png"
            title="Professional tailor"
            desc="Our tailors have more than 20 years of experience"
          />
          <CardAdvantage
            img="/advantage/Ingredients.png"
            title="best Ingredients"
            desc="The materials we use are imported directly from Japan"
          />
          <CardAdvantage
            img="/advantage/Modern.png"
            title="Modern Models"
            desc="Our model designs keep up with the times"
          />
        </div>
      </Container>
    </section>
  );
}
