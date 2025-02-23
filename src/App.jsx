import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Photo from "./pages/Photo/Photo";

// import { useState } from "react";
// import PhotoCard from "./components/PhotoCard/PhotoCard";
// import photos from "./data/photos.json";

// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import FilterDrawer from "./components/FilterDrawer/FilterDrawer.jsx";
// import OurMission from "./components/OurMission/OurMission.jsx";




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





// function App() {
//     const [selectedPhotos, setSelectedPhotos] = useState(photos);
//     const [drawerOpen, setDrawerOpen] = useState(false);

//     const handleTagClick = (tag) => {
//         const filteredPhotos = photos.filter((photo) => photo.tags.includes(tag));
//         setSelectedPhotos(filteredPhotos);
//     };

//     return (
//         <div className="app">
//             <Header setDrawerOpen={setDrawerOpen} />
//             {drawerOpen && <FilterDrawer handleTagClick={handleTagClick} />}
//             <OurMission />
//             <div className="photo-list">
//                 {selectedPhotos.map((photo) => (
//                     <PhotoCard photo={photo} key={photo.id} />
//                 ))}
//             </div>
//             <Footer />
//         </div>
//     );
// }



// export default App;
