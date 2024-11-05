import Review from "../Interfaces/ReviewInterfaces";

interface ReviewListProps {
  reviews: Review[];
}

function AlbumReviews({ reviews }: ReviewListProps) {
  // console.log(reviews);
  return <div>AlbumReviews</div>;
}

export default AlbumReviews;
