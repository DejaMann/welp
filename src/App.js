import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import { getUser } from "./utils/users-service";
import { LandingPage } from './pages/LandingPage/LandingPage';
import AuthPage from "./pages/AuthPage";
// import NewOrderPage from "./pages/NewOrderPage";
// import OrderHistoryPage from "./pages/OrderHistoryPage";
import InnerNav from "./components/InnerNav/InnerNav";
import {Search} from "./Search/Search"


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <InnerNav user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser}/>
      )}
    </main>
  );
}

export default App;
