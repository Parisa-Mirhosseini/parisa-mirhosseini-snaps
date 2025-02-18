import "../Header/Header.scss";
import Arrow from "../../assets/images/Arrow.svg";
import Filter from "../../assets/images/Filter.svg";

function Header({ setDrawerOpen }) {
    return (
        <>
            <div className="header">
                <h1>Snaps</h1>
                <button 
                    className="header__filter" 
                    onClick={() => setDrawerOpen((previousState) => !previousState)}
                >
                    Filters
                    <img src={Filter} alt="Filter" />
                </button>
            </div>
        </>
    );
}

export default Header;
