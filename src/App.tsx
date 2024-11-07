import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import { useEffect, useState } from "react";
import AlbumPage from "./pages/AlbumPage";
import AlbumReviews from "./pages/AlbumReviews";
import ArtistListProps from "./Interfaces/ArtistInterface";
import AlbumListProps from "./Interfaces/AlbumInterfaces";
import ReviewListProps from "./Interfaces/ReviewInterfaces";
import ArtistDetailsPage from "./pages/ArtistDetailsPage";
import AddAlbum from "./pages/AddAlbum";
import AddArtist from "./pages/AddArtist";
import AddReview from "./pages/AddReview";

function App() {
  // * This is where the URL for the API is being imported
  // const API_URL: string = import.meta.env.VITE_API_URL;
  // ! Delete this API_URL  before deployment!
  const API_URL: string = "http://127.0.0.1:5000";

  const [artists, setArtists] = useState<ArtistListProps[]>([]);
  const [albums, setAlbums] = useState<AlbumListProps[]>([]);
  const [reviews, setReviews] = useState<ReviewListProps[]>([]);

  // * This is where we get our artist information.
  // TODO: Write functions for patch, post and delete

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch(`${API_URL}/artists`);
        const data = await res.json();
        setArtists(data);
      } catch (error) {
        console.log("There was an error fetching the data.", error);
      }
    };
    fetchArtists();
  }, []);

  // * This is where we get our album information
  // TODO: Write functions for patch, post and delete

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(`${API_URL}/albums`);
        const data = await res.json();
        setAlbums(data);
      } catch (error) {
        console.log("There was an error fetching album data.", error);
      }
    };
    fetchAlbums();
  }, []);

  // * This is where we get our Album Review information
  // TODO: Write functions for patch, post and delete

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_URL}/albumreviews`);
        const data = await res.json();
        setReviews(data);
      } catch (error) {
        console.log("There was an error getting the reviews.", error);
      }
    };
    fetchReviews();
  }, []);

  // * This is where all the routes go for the app

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/artists" element={<ArtistPage artists={artists} />} />
        <Route
          path="/artists/:id"
          element={<ArtistDetailsPage API_URL={API_URL} />}
        />
        <Route path="/add_artist" element={<AddArtist />} />
        <Route path="/albums" element={<AlbumPage albums={albums} />} />
        <Route path="/add_album" element={<AddAlbum />} />
        <Route
          path="/albumreviews"
          element={<AlbumReviews reviews={reviews} />}
        />
        <Route path="/add_review" element={<AddReview />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
