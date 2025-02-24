import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Tag from "../../components/Tag/Tag";
import CommentForm from "../../components/CommentForm/CommentForm";
import PhotoBox from "../../components/PhotoBox/PhotoBox";
import "../Photo/Photo.scss"
import Footer from "../../components/Footer/Footer"
import Arrow from "../../assets/images/Arrow.svg/"

export default function Photo() {

    const { id } = useParams();

    const [photo, setPhoto] = useState(null);


    useEffect(() => {
        fetchPhoto();
    }, []);



    async function fetchPhoto() {
        try {
            const response = await axios.get(
                `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}?api_key=e664b7b3-dc90-458e-8c0d-5f76b986358f`
            );
            setPhoto(response.data);


        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    }


    if (!photo) {
        return <div>Loading...</div>;
    }
    return (
        <div className="photo__page">
            <div className="photo__page-header">
                <h1 className="photo__page-logo">Snaps</h1>
                <div>
                    <img className="photo__page-icon" src={Arrow} alt="Arrow"/>
                <Link className="photo__page-link" to="/">Home</Link>
                </div>
            </div>
            <div className="photo__page-box">
                {photo && <PhotoBox photo={photo} />}
                <CommentForm photoId={id} />
            </div>
            <Footer />
        </div>
    );
}