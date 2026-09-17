import { BrowserRouter, Routes, Route } from "react-router-dom";
import Meeting from "./Pages/Meeting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/meeting/:roomCode" element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;