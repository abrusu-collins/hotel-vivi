import OfferNav from "./Offers components/OfferNavbar";
import Romantic from "./Offers components/Romantic";
import FamilyAndKids from "./Offers components/FamilyAndKids";
import SuitelySensational from "./Offers components/SuitelySensational";
import Wellness from "./Offers components/Wellness";
import Christmas from "./Offers components/Christmas";
import EarlyBookers from "./Offers components/EarlyBookers";

function Offers() {
  return (
    <>
      <OfferNav />;
      <Romantic />
      <FamilyAndKids/>
      <SuitelySensational/>
      <Wellness/>
      <Christmas/>
      <EarlyBookers/>
    </>
  );
}

export default Offers;
