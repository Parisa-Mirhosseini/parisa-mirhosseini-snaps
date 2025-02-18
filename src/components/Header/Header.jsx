
import "../Header/Header.scss";


function Header({setDrawerOpen}) {

    return (
        <>
            <div className="header">
                <h1>Snaps</h1>
                <button className="header__filter" onClick={() => setDrawerOpen((previousState) => !previousState)} >Filters</button>
            </div>

        </>);

}

export default Header;