import ReviewComponent from "../components/ReviewComponent";
import Review from "../Interfaces/ReviewInterfaces";

interface ReviewListProps {
  reviews: Review[];
}

function AlbumReviews({ reviews }: ReviewListProps) {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewComponent key={review.id} review={review} />
      ))}
    </div>
  );
}

export default AlbumReviews;
