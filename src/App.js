import Header from "./components/header/header";
import Main from "./components/main/main";
import NavbarLeft from "./components/navbar-left/navbar-left";
import NavbarRight from "./components/navbar-right/navbar-right";
import "./app.css"
function App() {
  return (
    <div>
      <div className="header" >
        <Header />
      </div>
      <div className="mainitem">
      <div className="navleft">
        <NavbarLeft />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className='navright'>
        <NavbarRight />
      </div>
      </div>
      
    </div>
  );
}

export default App;
