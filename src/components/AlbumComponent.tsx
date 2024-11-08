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
    <div>
      <div>{album.name}</div>
      <div>{album.year}</div>
      <div>{album.artist_name}</div>
      <button onClick={navigateToAlbumDetails}>Album Details</button>
    </div>
  );
}

export default AlbumComponent;
