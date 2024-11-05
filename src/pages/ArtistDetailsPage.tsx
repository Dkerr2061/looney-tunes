import { useParams } from "react-router-dom";
import Artist from "../Interfaces/ArtistInterface";
import { useEffect, useState } from "react";
interface ArtistListProps {
  artists: Artist[];
}
interface APIProp {
  API_URL: string;
}

function ArtistDetailsPage({ API_URL }: APIProp) {
  const [artists, setArtists] = useState<ArtistListProps[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchArtistDetail = async () => {
      try {
        const res = await fetch(`${API_URL}/artists/${id}`);
        const data = await res.json();
        setArtists(data);
      } catch (error) {
        console.log("Artist details were not found", error);
      }
    };
    fetchArtistDetail();
  }, [id]);

  console.log(artists);

  return <div>ArtistDetailsPage</div>;
}

export default ArtistDetailsPage;
