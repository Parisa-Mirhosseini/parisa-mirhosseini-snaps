import { useState } from "react";
import Tag from "../Tag/Tag";
import "./PhotoBox.scss";
import LikeOutline from "../../assets/images/Like_Outline.svg"

function PhotoBox({ photo, setGlobalCounter }) {
    const [count, setCount] = useState(0);

    if (!photo) {
        return <div>Loading...</div>;
    }
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

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
                    </div>
                    <div className="photo__box--like">
                    <img src={LikeOutline} alt="Like_Outline" />
                    <p>{photo.likes} likes </p>
                    </div>
                    <div>
                    <div className="photo__box__text-date">
                <p>{formattedDate}</p>
            </div>
                    <div className="photo__box--photographer">Photo by {photo.photographer}</div>
                </div>
            </div>
           
        </div>
    );
}

export default PhotoBox;
