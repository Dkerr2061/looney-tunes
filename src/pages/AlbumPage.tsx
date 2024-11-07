import Album from "../Interfaces/AlbumInterfaces";
import AlbumComponent from "../components/AlbumComponent";

interface AlbumListProps {
  albums: Album[];
}

function AlbumPage({ albums }: AlbumListProps) {
  return (
    <div>
      {albums.map((album) => (
        <AlbumComponent key={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumPage;
