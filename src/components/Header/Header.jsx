import { Menu } from "./Style";

const Header = () => {
  return (
    <Menu>
      <nav>
        <span>DzMovie</span>

        <div className="search">
          <input
          type="text"
          className="search"
          placeholder="Search for Movies"
          />
        </div>

        <div className="language">
          EN
        </div>
      </nav>
    </Menu>
  );
};

export default Header;
