import Album from "../Interfaces/AlbumInterfaces";
import AlbumComponent from "../components/AlbumComponent";
import Footer from "../components/Footer";

interface AlbumListProps {
  albums: Album[];
}

function AlbumPage({ albums }: AlbumListProps) {
  return (
    <>
      <div className="flex flex-col gap-5 px-5 py-5 mx-6 my-6 border-2 border-[#ABA1A1] border-solid rounded-xl shadow-2xl">
        {albums.map((album) => (
          <AlbumComponent key={album.id} album={album} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AlbumPage;
