import Header from "../../Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Presentation from "./Components/Presentation";
import "./PersonalPage.css";
function PersonalPage() {
  return (
    <div>
      <Header></Header>
      <div className="personal-container">
        <Presentation></Presentation>
        <Navigation></Navigation>
      </div>
    </div>
  );
}
export default PersonalPage;
