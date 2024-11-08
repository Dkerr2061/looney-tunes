import Album from "../Interfaces/AlbumInterfaces";
import { useNavigate } from "react-router-dom";

interface AlbumProps {
  album: Album;
}

function AlbumComponent({ album }: AlbumProps) {
  const navigate = useNavigate();

  function navigateToAlbumDetails() {
    navigate(`/albums/${album.id}`);
  }

  console.log(album);
  return (
    <div className="flex flex-row justify-between border-2 border-[#ABA1A1] border-solid rounded-lg shadow-xl bg-[#e4eaef]">
      <div className="flex">
        <img
          src={album.cover}
          alt={album.name}
          className="object-cover w-full h-64 rounded-r-lg"
        />
      </div>
      <div className="flex flex-col flex-1 mx-5 text-center">
        <h1 className="flex-1 border-b-2 border-[#d2cccc] border-solid">
          {album.name}
        </h1>
        <div className="flex flex-row justify-between mt-6 text-xl font-semibold content-baseline">
          <div>Release year: {album.year}</div>
          <div>By: {album.artist_name}</div>
        </div>
      </div>

      <div className="flex">
        <button
          onClick={navigateToAlbumDetails}
          className="self-center w-auto px-4 py-2 mr-2 transition duration-300 ease-in-out shadow-lg bg-cyan-500 shadow-cyan-500/50 rounded-xl hover:bg-black hover:text-white"
        >
          Album Details
        </button>
      </div>
    </div>
  );
}

export default AlbumComponent;
