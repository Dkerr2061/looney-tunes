import { useParams } from "react-router-dom";
import Artist from "../Interfaces/ArtistInterface";
import { useEffect, useState } from "react";

interface APIProp {
  API_URL: string;
}

function ArtistDetailsPage({ API_URL }: APIProp) {
  const [artists, setArtists] = useState<Artist | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArtistDetail = async () => {
      try {
        const res = await fetch(`${API_URL}/artists/${id}`);
        const data = await res.json();
        setArtists(data);
      } catch (error) {
        console.log("Artist details were not found.", error);
      }
    };
    fetchArtistDetail();
  }, [id, API_URL]);

  return (
    <div>
      {artists ? (
        <div>
          <h2>{artists.name}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ArtistDetailsPage;
