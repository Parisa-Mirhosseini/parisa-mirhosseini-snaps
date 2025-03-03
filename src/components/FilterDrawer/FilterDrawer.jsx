import { useState, useEffect } from "react";
import axios from "axios";
import "./FilterDrawer.scss";

const BASE_URL = import.meta.env.VITE_API_URL;

function FilterDrawer({ handleTagClick }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}tags`)
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
