import tags from "../../data/tags.json";
import "../FilterDrawer/FilterDrawer.scss";

function FilterDrawer({handleTagClick}){

    return (
        <>
        <h3 className="filter-container">Filters</h3>
        <div className="filter-container" key={tags}>
            {tags.map((tag) => {
                    return (
                            <button className="filter-container__button" onClick={() => handleTagClick(tag)}>{tag}</button>
                    )
                })}
            </div>
        </>
    );
}


export default FilterDrawer;