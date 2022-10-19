import OfferNav from "./Offers components/OfferNavbar";
import Romantic from "./Offers components/Romantic";
import FamilyAndKids from "./Offers components/FamilyAndKids";
import SuitelySensational from "./Offers components/SuitelySensational";

function Offers() {
  return (
    <>
      <OfferNav />;
      <Romantic />
      <FamilyAndKids/>
      <SuitelySensational/>
    </>
  );
}

export default Offers;
