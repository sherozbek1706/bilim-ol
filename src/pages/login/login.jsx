import { useRef } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Users } from "../../database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const notifyError = (msg) => {
    toast.warn(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
      return notifyError("Login yoki Parol xato!!");
    }

    localStorage.setItem("isLoggin", JSON.stringify(user));

    notifySuccess("Login qildingiz!");
    setTimeout(() => {
      window.location.assign("/");
    }, 1400);
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
