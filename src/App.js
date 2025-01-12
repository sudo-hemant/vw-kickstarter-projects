import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/ui/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
