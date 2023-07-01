import "./App.css";
import { Main, Leaderboard, Login, Lessons, NotFound } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  const isLoggin = localStorage.getItem("isLoggin");
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route path="/leaderboard" Component={Leaderboard} />
        <Route path="/login" Component={!isLoggin ? Login : Main} />
        <Route path="/lessons" Component={!isLoggin ? Login : Lessons} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
