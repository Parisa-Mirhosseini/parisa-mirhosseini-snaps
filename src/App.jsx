import { useState } from "react";
import Tag from "./components/Tag/Tag";
import PhotoCard from "./components/PhotoCard/PhotoCard";
import tags from "./data/tags.json";
import photos from "./data/photos.json";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    console.log("render App comp");
    const [selectedTag, setSelectedTag] = useState(null);
    const [count, setCount] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const filteredPhotos = selectedTag ? photos.filter((photo) => photo.tags.includes(selectedTag)) : photos;

    return (
        <div className="app">
        <Header />
            count: {count}
            <div className="app__content">
                {/* drawer */}
                <div className={`drawer ${drawerOpen ? "drawer--open" : ""}`}>
                    {/* filter list */}
                    <ul>
                        {tags.map((tag) => (
                            <li
                                key={tag}
                                onClick={() => {
                                    if (selectedTag === tag) {
                                        setSelectedTag(null);
                                    } else {
                                        setSelectedTag(tag);
                                    }
                                }}
                            >
                                <Tag tag={tag} isClickable selectedTag={selectedTag} setCount={setCount} />
                            </li>
                        ))}
                    </ul>
                </div>
                {/* photo list */}
                {/* instead of entire array... FILTER to only include items who's 'tags' includes 'selectedTag' */}
                {/* IF selectedTag is null... show entire array */}
                <div className="photo-list">
                    {filteredPhotos.map((photo) => {
                        return <PhotoCard photo={photo} key={photo.id} setGlobalCounter={setCount} />;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
