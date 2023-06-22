import "./App.css";
import { Main, Leaderboard, Login } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/leaderboard" Component={Leaderboard} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </>
  );
}

export default App;
