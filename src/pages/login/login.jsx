import { useRef } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
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
      return alert("Login yoki parol xato!");
    }

    localStorage.setItem("isLoggin", JSON.stringify(user));

    window.location.assign("/");
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
            placeholder="Iltimos, Login kiriting"
            required
          />
          <input
            type="password"
            ref={passwordRef}
            placeholder="Iltimos, Parol kiriting"
            required
          />
          <input type="submit" className="button" value="Login" />
        </form>
        <p className="return_home">Bosh sahifaga qaytishni xohlasangiz 🤜 </p>
        <Link to="/" className="return_home">
          Bosing
        </Link>
      </div>
    </div>
  );
};
