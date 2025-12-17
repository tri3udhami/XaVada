import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Home";
import PropertyList from "./components/Propertylist";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
 <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Properties" element={<PropertyList showAll={true} />} />
     </Routes>
   
    </BrowserRouter>
    
    </>
  );
}

export default App;
