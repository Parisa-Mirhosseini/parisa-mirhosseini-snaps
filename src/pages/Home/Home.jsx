import PhotoCard from "../../components/PhotoCard/PhotoCard.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer.jsx";
import OurMission from "../../components/OurMission/OurMission.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Home/Home.scss";



export default function Home() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [photos, setPhotos] = useState([]);

    const [filteresphotos, setFilteredPhotos] = useState([]);


    useEffect(() => {
        fetchPhotos();
    }, []);

    useEffect(() => {
        setFilteredPhotos(photos);
    }, [photos]);


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

    const handleTagClick = (tag) => {

        const filteredPhotos = photos.filter((photo) => photo.tags.includes(tag));
        setFilteredPhotos(filteredPhotos);

    };


    if (!photos) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home">
            <Header setDrawerOpen={setDrawerOpen} />
            <div className="home__contents">
                {drawerOpen && <FilterDrawer handleTagClick={handleTagClick} />}
                <div className="home__mission-photos">
                    <OurMission />
                    <div className="home__photos">
                        <div className="home__photos--list">
                            {filteresphotos.map((photo) => (
                                <Link key={photo.id} to={`/photo/${photo.id}`} className="home__photos--link" style={{ textDecoration: "none" }}>
                                    <PhotoCard photo={photo} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}