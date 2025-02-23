import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Tag from "../../components/Tag/Tag";
import CommentList from "../../components/commentList/commentList";
import CommentForm from "../../components/CommentForm/CommentForm";
import PhotoBox from "../../components/PhotoBox/PhotoBox";

export default function Photo() {

    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetchPhoto();
    }, []);

    useEffect(() => {
        fetchComments();
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

    async function fetchComments() {
        try {
            const response = await axios.get(
                `https://unit-3-project-c5faaab51857.herokuapp.com/photos/${id}/comments?api_key=e664b7b3-dc90-458e-8c0d-5f76b986358f`
            );

            setComments(response.data);

        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    }

    if (!photo || !comments) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Snaps</h1>
            <div>
                <Link to="/">Home</Link>
            </div>
            {photo && <PhotoBox photo={photo} />}
            <div> title:{photo.photoDescription}</div>;
            <div> num comments:{comments.length}</div>;
            <Tag>{photo.photographer}</Tag>
            <CommentForm />
            <CommentList />
            <footer />
        </div>
    );
}