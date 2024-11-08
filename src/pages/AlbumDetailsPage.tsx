import { useEffect, useState } from "react";
import Album from "../Interfaces/AlbumInterfaces";
import { useParams } from "react-router-dom";

interface APIProp {
  API_URL: string;
}

function AlbumDetailsPage({ API_URL }: APIProp) {
  const [albums, setAlbums] = useState<Album | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const res = await fetch(`${API_URL}/albums/${id}`);
        const data = await res.json();
        setAlbums(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAlbum();
  }, [id, API_URL]);

  return (
    <div>
      {albums ? (
        <div>
          <h2>{albums.name}</h2>
          <img src={albums.cover} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default AlbumDetailsPage;
