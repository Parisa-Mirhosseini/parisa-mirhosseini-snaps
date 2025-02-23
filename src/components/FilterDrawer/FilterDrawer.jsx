import { useState, useEffect } from "react";
import axios from "axios";
import "./FilterDrawer.scss";

function FilterDrawer({ handleTagClick }) {
  const [tags, setTags] = useState([]); // State to store tags from the API

  // Fetch tags from the API
  useEffect(() => {
    axios
      .get("https://unit-3-project-c5faaab51857.herokuapp.com/tags", {
        params: { api_key: "your_api_key_here" }, // Replace with your API key
      })
      .then((response) => setTags(response.data)) // Set the tags state with the API response
      .catch((error) => console.error(error)); // Handle errors
  }, []);

  return (
    <div className="filter">
      <h3 className="filter-container">Filters</h3>
      <div className="filter-container">
        {tags.map((tag) => (
          <button
            key={tag} // Use the tag itself as the key
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