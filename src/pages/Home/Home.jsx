import PhotoCard from "../../components/PhotoCard/PhotoCard.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer.jsx";
import OurMission from "../../components/OurMission/OurMission.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.scss";


export default function Home() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [photos, setPhotos] = useState(null);
    const handleTagClick = (tag) => {
        const filteredPhotos = photos.filter((photo) => photo.tags.includes(tag));
        setSelectedPhotos(filteredPhotos);
    };
    useEffect(() => {
        fetchPhotos();
    }, []);

    async function fetchPhotos() {
        try {
            const response = await axios.get(
                "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=e664b7b3-dc90-458e-8c0d-5f76b986358f"
            );
            setPhotos(response.data);
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    }

    if (!photos) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home">
            <div className="photos">
                <Header setDrawerOpen={setDrawerOpen} />
                {drawerOpen && <FilterDrawer handleTagClick={handleTagClick} />}
                <OurMission />
                <div className="photo-list">
                    {photos.map((photo) => (
                        <div key={photo.id}>
                            <Link to={`/photo/${photo.id}`} style={{ textDecoration: "none" }}>
                                <PhotoCard photo={photo} />
                            </Link>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    );
}