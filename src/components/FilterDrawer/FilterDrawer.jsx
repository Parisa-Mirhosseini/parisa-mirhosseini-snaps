import tags from "../../data/tags.json";
import "../FilterDrawer/FilterDrawer.scss";
function FilterDrawer({handleTagClick}){
    return (
        <>
        <div className="filter-container" key={tags}>
            {tags.map((tag) => {
                    return (
                            <button onClick={() => handleTagClick(tag)}>{tag}</button>
                    )
                })}
            </div>
        </>
    );
}


export default FilterDrawer;