import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import VideosPage from "./pages/VideosPage";
import FriendRequests from "./pages/FriendRequests";
import UserProfile from "./pages/UserProfile";
import { PrivateRoute } from "./utils/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={<PrivateRoute component={HomePage} />}
            />
            <Route
              path="/profile/:username"
              element={<PrivateRoute component={UserProfile} />}
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
