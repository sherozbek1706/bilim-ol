import "./App.css";
import { Main, Leaderboard } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/leaderboard" Component={Leaderboard} />
      </Routes>
    </>
  );
}

export default App;
