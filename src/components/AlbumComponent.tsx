import Album from "../Interfaces/AlbumInterfaces";

interface AlbumProps {
  album: Album;
}

function AlbumComponent({ album }: AlbumProps) {
  return (
    <div>
      <div>{album.name}</div>
      <div>{album.year}</div>
      <div>{album.artist_name}</div>
    </div>
  );
}

export default AlbumComponent;
