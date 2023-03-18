import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SinglePhotoPage from "./pages/SinglePhotoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<SinglePhotoPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
