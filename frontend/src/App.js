import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import VideosPage from "./pages/VideosPage";
import FriendRequests from "./pages/FriendRequests";
import { PrivateRoute } from "./utils/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const data = {
    name: "Mohamed Bechir Torki",
    pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
  };
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header data={data} />
          <Routes>
            <Route
              exact
              path="/"
              element={<PrivateRoute component={HomePage} />}
            />
            <Route
              path="/friend-requests"
              element={<PrivateRoute component={FriendRequests} />}
            />
            <Route
              path="/videos"
              element={<PrivateRoute component={VideosPage} />}
            />

            <Route path="/login" Component={LoginPage} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
