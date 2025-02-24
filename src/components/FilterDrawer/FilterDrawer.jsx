import { useState, useEffect } from "react";
import axios from "axios";
import "./FilterDrawer.scss";

const API_KEY = "e664b7b3-dc90-458e-8c0d-5f76b986358f";

function FilterDrawer({ handleTagClick }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/tags", {
      params: { api_key: API_KEY },
    })
      .then((response) => {
        setTags(response.data.tags || response.data);
      })
      .catch((error) => console.error("Error fetching tags:", error.response ? error.response.data : error.message));
  }, []);

  return (
    <div className="filter">
      <h3 className="filter-container">Filters</h3>
      <div className="filter-container">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <button
              key={tag}
              className="filter-container__button"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))
        ) : (
          <p>Loading tags...</p>
        )}
      </div>
    </div>
  );
}

export default FilterDrawer;
