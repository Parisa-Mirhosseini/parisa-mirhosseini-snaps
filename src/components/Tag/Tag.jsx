import { Label } from "../Typography/Typography";
import "./Tag.scss";

function Tag({ tag, isClickable = false, selectedTag, setCount, handleTagClick }) {
  return (
    <button
      onClick={() => {
        if (handleTagClick) {
          handleTagClick(tag);
        }
        if (setCount) {
          setCount((count) => count + 1);
        }
      }}
      className={`tag ${isClickable ? "tag--clickable" : ""} ${selectedTag === tag ? "tag--selected" : ""}`}
    >
      <Label>{tag}</Label>
    </button>
  );
}

export default Tag;
