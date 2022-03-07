import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login-container">
      <div className="input-container">
        <input
          className="inputs-item email"
          value={"  Email hoặc số điện thoại"}
        ></input>
        <input className="inputs-item password" value={"  Password"}></input>
        <Link to="/homepage">
        <button className="inputs-item logins "> Login</button>

        </Link>
        <button className="inputs-item forgot"> Forgotten password?</button>
      </div>
      <div>
        <button className="inputs-item create">Create new account</button>
      </div>
    </div>
  );
}
export default Login;
