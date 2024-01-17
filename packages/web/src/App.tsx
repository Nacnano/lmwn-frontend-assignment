import { BrowserRouter, Route, Routes } from "react-router-dom";
import RestaurantPage from "./pages/RestaurantPage";
import LandingPage from "./pages/LandingPage";
// import Landing from "@pages/Landing";
// NOTE: The "@" alias was not working in build. Maybe because of the the way the build is configured.
// Will investigate (After finish with the main requirements T_T)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":restaurantId" element={<RestaurantPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
