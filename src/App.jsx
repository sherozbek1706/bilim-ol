import "./App.css";
import { Main, Leaderboard, Login, Lessons } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  const isLoggin = localStorage.getItem("isLoggin");
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/leaderboard" Component={Leaderboard} />
        <Route exact path={"/login"} Component={!isLoggin ? Login : Main} />
        <Route exact path={"/lessons"} Component={Lessons} />
      </Routes>
    </>
  );
}

export default App;
