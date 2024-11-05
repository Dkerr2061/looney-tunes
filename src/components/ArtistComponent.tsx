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
    <ul>
      <li key={artist.id}>
        <p>{artist.name}</p>
        <button onClick={() => navigateToDetails(artist.id)}>
          View Artist Detail
        </button>
      </li>
    </ul>
  );
}

export default ArtistComponent;
