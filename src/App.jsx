// BASE-URL "https://unit-3-project-c5faaab51857.herokuapp.com/"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import PhotoPage from "./pages/PhotoPage/PhotoPage";


// import { useState } from "react";
// import PhotoCard from "./components/PhotoCard/PhotoCard";
// import photos from "./data/photos.json";

// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import FilterDrawer from "./components/FilterDrawer/FilterDrawer.jsx";
// import OurMission from "./components/OurMission/OurMission.jsx";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photo/:id" element={<PhotoPage />} />
            </Routes>
        </BrowserRouter>
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
