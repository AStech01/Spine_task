import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TaskDetails from "./pages/TaskDetails";
import Products from "./pages/Items";
import Items from "./pages/Items";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task/:id" element={<TaskDetails />} />
            <Route path="/items" element={<Items />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
