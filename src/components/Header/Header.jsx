// import { Link } from "react-router-dom";
import { Menu } from "./Style";

const Header = ({ value, handleMovieChange, handleMovieClick }) => {
  return (
    <Menu>
      <nav>
        <span>DzMovie</span>

        <div className="search">
          <input
            type="text"
            className="search"
            placeholder="Search for Movies"
            onChange={handleMovieChange}
            value={value}
          />
          <button type="submit" onClick={handleMovieClick}>
            Procurar
          </button>
        </div>

        <div className="language">EN</div>
      </nav>
    </Menu>
  );
};

export default Header;
