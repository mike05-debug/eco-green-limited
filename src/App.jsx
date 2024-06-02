import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const App = () => {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
