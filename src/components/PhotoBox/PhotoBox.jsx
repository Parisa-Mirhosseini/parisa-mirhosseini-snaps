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
                <div className="photo__card__text">
                    <div className="photo__card__text-info">
                        <div className="photo__card__text-info-likes">
                            <img src={LikeOutline} alt="Like_Outline" />
                            <div className="photo__card__text-info-likes-count">
                                <p>
                                    {photo.likes}
                                    <span>likes</span>
                                </p>
                            </div>
                        </div>
                        <div className="photo__card__text-info-photographer">
                            <p>Photo by {photo.photographer}</p>
                        </div>
                    </div>
                    <div className="photo__card__text-date">
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default PhotoBox;
