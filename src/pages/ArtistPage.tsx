import Artist from "../Interfaces/ArtistInterface";
import ArtistComponent from "../components/ArtistComponent";
import Footer from "../components/Footer";

interface ArtistListProps {
  artists: Artist[];
}

function ArtistPage({ artists }: ArtistListProps) {
  const artistComponent = artists.map((artist) => (
    <ArtistComponent key={artist.id} artist={artist} />
  ));
  return (
    <>
      <div className="grid gap-10 px-6 py-6 lg:grid-cols-3 md:grid-cols-1">
        {artistComponent}
      </div>
      <Footer />
    </>
  );
}

export default ArtistPage;
