// BASE-URL "https://unit-3-project-c5faaab51857.herokuapp.com/"
// import { useState } from "react";
// import PhotoCard from "../../components/PhotoCard/PhotoCard.jsx";
// import photos from "./data/photos.json";
// import Header from "../../components/Header/Header.jsx";
// import Footer from "../../components/Footer/Footer.jsx";
// import FilterDrawer from "../../components/FilterDrawer/FilterDrawer.jsx";
// import OurMission from "../../components/OurMission/OurMission.jsx";

// import "../Home/Home.scss";
import axios from "axios";


export default function Home() {
    const [photos, setPhotos] = useState(null);

    useEffect(() => {
        fetchPhotos();
    }, []);

    async function fetchPhotos() {

        const { date } = await axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=e664b7b3-dc90-458e-8c0d-5f76b986358f"
        );
        setPhotos(photos);

    }
    if (!photos) {
        return <div>loading...</div>

    }


    return <div>
        home
        {photos.map((photo) => {

            return <div key={photo.id}>  {photo.Description}</div>;
        })}


    </div>

}


// function Home() {
//     const [selectedPhotos, setSelectedPhotos] = useState(photos);
//     const [drawerOpen, setDrawerOpen] = useState(false);

//     const handleTagClick = (tag) => {
//         const filteredPhotos = photos.filter((photo) => photo.tags.includes(tag));
//         setSelectedPhotos(filteredPhotos);
//     };

//     return (
//         <div className="home">
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



// export default Home;
