import { useState } from "react";
import Tag from "./components/Tag/Tag";
import PhotoCard from "./components/PhotoCard/PhotoCard";
import tags from "./data/tags.json";
import photos from "./data/photos.json";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FilterDrawer from "./components/FilterDrawer/FilterDrawer.jsx";

function App() {
    const [selectedTag, setSelectedTag] = useState(photos);
    const [DrawerOpen, setDrawerOpen] = useState(false);

    const handleTagClick = (tag) => {
        const filteredPhotos = photos.filter((photo) => photo.tags.includes(tag));
        setSelectedTag(filteredPhotos);
    } 

    // const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;

    return (
        <div className="app">
            <Header setDrawerOpen={setDrawerOpen} />
            {DrawerOpen ? <FilterDrawer handleTagClick={handleTagClick} /> : ''}
            <div className="photo-list">
                {selectedTag.map((photo) => <PhotoCard photo={photo} key={photo.id} />)}
            </div>

            <Footer />
        </div>
    );
}

export default App;
