import Artist from "../Interfaces/ArtistInterface";
import ArtistComponent from "../components/ArtistComponent";

interface ArtistListProps {
  artists: Artist[];
}

function ArtistPage({ artists }: ArtistListProps) {
  const artistComponent = artists.map((artist) => (
    <ArtistComponent key={artist.id} artist={artist} />
  ));
  return <div className="flex flex-row gap-4">{artistComponent}</div>;
}

export default ArtistPage;
