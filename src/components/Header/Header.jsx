import "../Header/Header.scss";
import Filter from "../../assets/images/Filter.svg";

function Header({ setDrawerOpen }) {
  return (
    <header className="header">
      <h1 className="header__logo">Snaps</h1>
      <button
        className="header__filter"
        onClick={() => setDrawerOpen((previousState) => !previousState)}
        aria-label="Toggle filters"
      >
        Filters
        <img className="header__filter--icon" src={Filter} alt="Filter icon" />
      </button>
    </header>
  );
}

export default Header;