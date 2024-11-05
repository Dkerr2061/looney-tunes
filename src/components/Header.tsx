import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div
        className="flex flex-row items-center justify-between py-4 pl-10 border-b-2 border-black border-solid"
        style={{ backgroundColor: "#ADD8E6" }}
      >
        <div className="flex flex-auto font-['Tiny5'] text-6xl">
          Looney Tunes
        </div>
        <div className="flex flex-row flex-auto justify-evenly">
          <div className="content-center w-20 h-10 text-center border-2 border-black rounded-lg hover:transition-colors hover:bg-black hover:text-white">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="content-center w-20 h-10 text-center border-2 border-black rounded-lg hover:transition-colors hover:bg-black hover:text-white">
            <NavLink to="/artists">Artists</NavLink>
          </div>
          <div className="content-center w-20 h-10 text-center border-2 border-black rounded-lg hover:transition-colors hover:bg-black hover:text-white">
            <NavLink to="/albums">Albums</NavLink>
          </div>
          <div className="content-center w-20 h-10 text-center border-2 border-black rounded-lg hover:transition-colors hover:bg-black hover:text-white">
            <NavLink to="/albumreviews">Reviews</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
