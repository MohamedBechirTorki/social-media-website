import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import VideosPage from "./pages/VideosPage";
import FriendRequests from "./pages/FriendRequests";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={HomePage} />
          <Route path="/friend-requests" Component={FriendRequests} />
          <Route path="/videos" Component={VideosPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
