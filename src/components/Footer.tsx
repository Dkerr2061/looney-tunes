import { NavLink, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const toAddArtist = location.pathname === "/artists";
  const toAddAlbum = location.pathname === "/albums";
  const toAddReview = location.pathname === "/albumreviews";
  const buttonStyle =
    "w-auto px-4 py-2 mr-2 transition duration-300 ease-in-out shadow-lg bg-cyan-500 shadow-cyan-500/50 rounded-xl hover:bg-black hover:text-white";

  return (
    <footer>
      <section className="bottom-0 w-full h-20 pt-4 border-t-2 border-solid bg-sky-200">
        <div className="flex justify-center">
          {toAddArtist ? (
            <button className={buttonStyle}>
              <NavLink to="/add_artist">Add Artist</NavLink>
            </button>
          ) : toAddAlbum ? (
            <button className={buttonStyle}>
              <NavLink to="/add_album">Add Album</NavLink>
            </button>
          ) : toAddReview ? (
            <button className={buttonStyle}>
              <NavLink to="/add_review">Add Review</NavLink>
            </button>
          ) : null}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
