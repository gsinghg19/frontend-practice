import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import UserLoginPage from "./components/UserLoginPage/UserLoginPage";
import DvdsList from "./components/HomePage/HomePage.jsx";
import SettingsPage from "./components/SettingsPage/Settings";
import WatchListPage from "./components/Watchlist_page/WatchList_page.jsx";
import ProfilePage from "./components/Profile_Page/Profile_Page.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserLoginPage />} />
          <Route path="/dvds" elements={<DvdsList />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
