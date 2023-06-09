import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AboutMe } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
