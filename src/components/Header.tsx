import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row items-center">
      <div className="flex flex-auto items-center justify-between py-4 pl-10 border-b-2 border-black border-solid bg-[#ADD8E6] shadow-lg">
        <div className="flex flex-1 font-['Tiny5'] text-6xl text-nowrap pr-[-2px] w-full">
          Looney Tunes
        </div>
        <div className="flex flex-1 pr-2">
          <input
            placeholder="Search"
            type="text"
            className="flex-1 w-0 h-10 pl-3 bg-white border-2 border-black rounded-l-md"
          />
          <button className="h-10 w-16 border-2 border-black rounded-r-md ml-[-2px]">
            Search
          </button>
        </div>
        <div className="flex flex-row flex-1 justify-evenly gap-x-2">
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
