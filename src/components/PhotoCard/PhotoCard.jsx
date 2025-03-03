import { useState } from "react";
import Tag from "../Tag/Tag";
import "./PhotoCard.scss";


const BASE_URL = import.meta.env.VITE_API_URL;

function PhotoCard({ photo, setGlobalCounter }) {


  const [count, setCount] = useState(0);

  return (
    <div className="photo">
      <div className="photo__content">
        <img className="photo__image" src={photo.photo} alt={photo.photoDescription} />
        <div className="photo__photographer">{photo.photographer}</div>
      </div>
      <div className="photo__tags">
        {photo.tags.map((tag) => (
          <Tag tag={tag} key={tag} setCount={setGlobalCounter} />
        ))}
      </div>

    </div>
  );
}

export default PhotoCard;


