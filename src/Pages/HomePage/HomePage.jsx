import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import "./homepage.css";

function Homepage() {
  return (
    <>
      <Header />
      <div className="homepage-container">
        <Navbar />
      </div>
    </>
  );
}
export default Homepage;
