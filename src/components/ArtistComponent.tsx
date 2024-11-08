import { useNavigate } from "react-router-dom";
import Artist from "../Interfaces/ArtistInterface";

interface ArtistListProps {
  artist: Artist;
}

function ArtistComponent({ artist }: ArtistListProps) {
  const navigate = useNavigate();

  function navigateToDetails(id: number): void {
    navigate(`/artists/${id}`);
  }
  // console.log(artist);
  return (
    <div className="border-2 border-black rounded-md shadow-lg">
      <div className="flex flex-col">
        <div className="">
          <img
            src={artist.image}
            alt={artist.name}
            className="object-center w-full rounded-b-sm"
          />
        </div>
        <div key={artist.id}>
          <h1 className="text-center">{artist.name}</h1>
        </div>
        <button
          onClick={() => navigateToDetails(artist.id)}
          className="mx-6 font-semibold shadow-lg mb-7 bg-cyan-500 shadow-cyan-500/50 rounded-xl hover:bg-black hover:text-white"
        >
          View Artist Detail
        </button>
      </div>
    </div>
  );
}

export default ArtistComponent;
