import Album from "../Interfaces/AlbumInterfaces";

interface AlbumListProps {
  albums: Album[];
}

function AlbumPage({ albums }: AlbumListProps) {
  return (
    <div>
      <ul>
        {albums.map((album) => {
          return <li key={album.id}>{album.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default AlbumPage;
