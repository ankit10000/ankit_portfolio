import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <Home />
      <SpeedInsights />
      <Analytics />
    </Router>
  );
}

export default App;
