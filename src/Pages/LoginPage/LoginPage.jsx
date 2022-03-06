import Login from "../../Components/Login/Login";
import "./LoginPage.css";
function LoginPage() {
  return (
    <div className="loginPage-container">
      <div className="facebook-logo-container">
        <img
          className="facebook-logo"
          src="https://logos-marques.com/wp-content/uploads/2020/04/Facebook-logo.png"
        ></img>
        <h2 className="slogan">
          Facebook helps you connect and share with the people in your life.
        </h2>
      </div>

      <Login></Login>
    </div>
  );
}
export default LoginPage;
