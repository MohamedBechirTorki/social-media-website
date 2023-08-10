import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import VideosPage from "./pages/VideosPage";
import FriendRequests from "./pages/FriendRequests";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  const data = {
    name: "Mohamed Bechir Torki",
    pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
  };
  return (
    <div className="App">
      <Router>
        <Header data={data} />
        <Routes>
          <Route
            element={
              <PrivateRoute exact path="/" component={HomePage} login={true} />
            }
          />

          <Route path="/login" Component={LoginPage} />
          <Route path="/friend-requests" Component={FriendRequests} />
          <Route path="/videos" Component={VideosPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
