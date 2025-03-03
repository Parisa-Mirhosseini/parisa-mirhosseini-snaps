import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CommentForm from "../../components/CommentForm/CommentForm";
import PhotoBox from "../../components/PhotoBox/PhotoBox";
import "../Photo/Photo.scss"
import Footer from "../../components/Footer/Footer"
import Arrow from "../../assets/images/Arrow.svg/"

export default function Photo() {

    const { id } = useParams();

    const [photo, setPhoto] = useState(null);

    const BASE_URL = import.meta.env.VITE_API_URL;


    useEffect(() => {
        fetchPhoto();
    }, []);



    async function fetchPhoto() {
        try {
            const response = await axios.get(
                `${BASE_URL}photos/${id}`
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
                <div className="photo__page--nav">
                    <img className="photo__page-icon" src={Arrow} alt="Arrow" />
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