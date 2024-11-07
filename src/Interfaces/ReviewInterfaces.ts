import Album from "./AlbumInterfaces";
import Artist from "./ArtistInterface";

export default interface Review {
  id: number;
  rating: number;
  text: string;
  artist_id: number;
  album_id: number;
  artist: Artist;
  album: Album;
}
