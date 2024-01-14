import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
// import Landing from "@pages/Landing";
// NOTE: The alias was not working in build. Maybe because of the the way the build is configured.
// No time to investigate T_T

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
