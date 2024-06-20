import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx"; // Import the new AddPost component
import { useColorMode, Button } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
        Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/add-post" element={<AddPost />} /> {/* Add route for AddPost */}
      </Routes>
    </Router>
  );
}

export default App;
