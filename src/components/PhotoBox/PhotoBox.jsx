import { useState } from "react";
import Tag from "../Tag/Tag";
import "./PhotoBox.scss";

function PhotoBox({ photo, setGlobalCounter }) {
    const [count, setCount] = useState(0);

    if (!photo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="photo__box">
            <div className="photo__box--content">
                <img
                    className="photo__box--image"
                    src={photo.photo}
                    alt={photo.photoDescription}
                />

            </div>
            <div className="photo__box--description">
                <div className="photo__box--tags">
                    {photo.tags?.map((tag) => (
                        <Tag tag={tag} key={tag} setCount={setGlobalCounter} />
                    ))}
                    <div>{photo.likes} likes </div>
                    <div className="photo__box--photographer">Photo by {photo.photographer}</div>
                </div>
            </div>

        </div>
    );
}

export default PhotoBox;
