import { useState, useEffect } from "react";
import axios from "axios";
import "./FilterDrawer.scss";

const API_KEY = "e664b7b3-dc90-458e-8c0d-5f76b986358f";

function FilterDrawer({ handleTagClick }) {
  const [tags, setTags] = useState([]);


  useEffect(() => {
    axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/tags", {
      params: { API_KEY },
    })
      .then((response) => setTags(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="filter">
      <h3 className="filter-container">Filters</h3>
      <div className="filter-container">
        {tags.map((tag) => (
          <button
            key={tag}
            className="filter-container__button"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterDrawer;