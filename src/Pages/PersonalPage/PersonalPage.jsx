import Header from "../../Components/Header/Header";
import Presentation from "./Components/Presentation";
import "./PersonalPage.css";
function PersonalPage() {
  return (
    <div>
      <Header></Header>
      <div className="personal-container">
        <Presentation></Presentation>
        <div>ava</div>
      </div>
    </div>
  );
}
export default PersonalPage;
