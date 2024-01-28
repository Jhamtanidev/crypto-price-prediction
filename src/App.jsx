import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CryptoPage from "./Pages/CryptoPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/crypto" element={<CryptoPage />} />
      <Route path="/exchange" element={<HomePage />} />
    </Routes>
  );
};

export default App;
