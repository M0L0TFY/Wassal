import SearchIcon from "../assets/SearchIcon.png";

export function Search() {
  return (
    <>
      <div className="container">
        <div className="search-bar">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search our latest products"
              aria-label="Search"
            />
            <button className="btn">
              <img src={SearchIcon} className="search" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
