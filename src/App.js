import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <Router>
      <Home />
      <SpeedInsights />
    </Router>
  );
}

export default App;
