import Container from "../Container";
import NavLogo from "../Navigation/NavLogo";
import ItemFooter from "./ItemFooter";
import LinkFooter from "./LinkFooter";

export default function Footer() {
  return (
    <footer className="mt-[789px]">
      <Container>
        <div className="flex gap-[63px] justify-between">
          <div className="max-w-[260px]">
            <NavLogo />
            <p className="mt-4 text-xl font-medium">
              a startup that has just started in the sewing field
            </p>
          </div>
          <div className="flex gap-[65px] justify-between">
            <ItemFooter title="Products">
              <LinkFooter>Batik Dress</LinkFooter>
              <LinkFooter>Suit</LinkFooter>
              <LinkFooter>Leather Pants</LinkFooter>
              <LinkFooter>Koko Shirt</LinkFooter>
            </ItemFooter>
            <ItemFooter title="Help">
              <LinkFooter>Customer Service</LinkFooter>
              <LinkFooter>Contact</LinkFooter>
            </ItemFooter>
            <ItemFooter title="Social">
              <LinkFooter>Instagram</LinkFooter>
              <LinkFooter>Twitter</LinkFooter>
              <LinkFooter>Facebook</LinkFooter>
              <LinkFooter>Tiktok</LinkFooter>
            </ItemFooter>
            <ItemFooter title="Legal">
              <LinkFooter>
                Privacy <br /> Policy
              </LinkFooter>
              <LinkFooter>Term of use</LinkFooter>
            </ItemFooter>
          </div>
        </div>
        <div className="mt-[50px] w-6/12 mx-auto">
          <div className="bg-[#A08AE6] w-[460px] h-[3px] mx-auto mb-[14px]"></div>
          <p className="text-center text-13">
            Copyright &copy; 2023 ArieAr All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
