import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FeedbackTable from "./components/FeedbackTable"; // Import the component
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use 'element' prop for components */}
        <Route path="/feedback-entries" element={<FeedbackTable />} /> {/* Use 'element' prop for components */}
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
