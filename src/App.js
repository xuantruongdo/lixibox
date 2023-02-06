import DefaultLayout from "./components/DefaultLayout";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
