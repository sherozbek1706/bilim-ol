import { useRef } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Users } from "../../database";
export const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleValidator = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const user = Users.find((user) => {
      return (
        user.datail.username === username && user.datail.password === password
      );
    });

    if (!user) {
      return alert("Login or password incorrect");
    }

    localStorage.setItem("isLoggin", JSON.stringify(user));

    navigate("/");
    console.log(user);
  };
  return (
    <div className="container">
      <input type="checkbox" id="check" />
      <div className="login form">
        <header>Login</header>
        <form onSubmit={handleValidator}>
          <input
            type="text"
            ref={usernameRef}
            placeholder="Enter your username"
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter your password"
          />
          <input type="submit" className="button" value="Login" />
        </form>
      </div>
    </div>
  );
};
