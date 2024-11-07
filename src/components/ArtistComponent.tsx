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
    <div className="relative flex flex-col">
      <div key={artist.id}>
        <h1 className="text-center">{artist.name}</h1>
      </div>
      <div>
        <img
          src={artist.image}
          alt={artist.name}
          className="object-cover rounded-lg max-w-35 max-h-60"
        />
      </div>
      <button onClick={() => navigateToDetails(artist.id)}>
        View Artist Detail
      </button>
    </div>
  );
}

export default ArtistComponent;
