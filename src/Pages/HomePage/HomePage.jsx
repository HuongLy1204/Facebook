import ListAccountOnline from "../../Components/ListAccountOnline/ListAccountOnline";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import NewFeed from "../../Components/NewFeed/NewFeed";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { ResetTvOutlined } from "@mui/icons-material";

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://622339123af069a0f99d33a4.mockapi.io/api/online")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="homepage-container">
        <Navbar />
        <NewFeed dataNewFeed={data}></NewFeed>
        <ListAccountOnline dataOnline={data}></ListAccountOnline>
      </div>
    </>
  );
}
export default Homepage;
