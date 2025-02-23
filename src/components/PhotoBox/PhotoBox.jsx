import { useState } from "react";
import Tag from "../Tag/Tag";
import "./PhotoBox.scss";

function PhotoBox({ photo, setGlobalCounter }) {
    const [count, setCount] = useState(0);

    // ✅ Ensure photo exists before rendering
    if (!photo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="photo__box">
            <div className="photo__box--content">
                <img
                    className="photo__box--image"
                    src={photo.imageUrl}
                    alt={photo.photoDescription}
                />
                <div className="photo__box--photographer">{photo.photographer}</div>
            </div>
            <div className="photo__box--tags">
                {photo.tags?.map((tag) => (
                    <Tag tag={tag} key={tag} setCount={setGlobalCounter} />
                ))}
            </div>
        </div>
    );
}

export default PhotoBox;
