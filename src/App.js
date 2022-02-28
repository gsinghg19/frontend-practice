import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserLoginPage />} />
          {/* <Route path="/users" elements={<UsersList />} />
          <Route path="/dvds" elements={<DvdsList />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
