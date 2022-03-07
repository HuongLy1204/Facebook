import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/HomePage";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PersonalPage from "./Pages/PersonalPage/PersonalPage";
function App() {
  return (
    <>
    
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/personalpage" element={<PersonalPage/>}/>
      </Routes>
    </>
  )
}

export default App;
