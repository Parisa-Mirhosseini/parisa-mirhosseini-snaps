import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Photo from "./pages/Photo/Photo";


function App() {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photo/:id" element={<Photo />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;

