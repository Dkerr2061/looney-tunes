import Review from "../Interfaces/ReviewInterfaces";

interface ReviewListProps {
  reviews: Review[];
}

function AlbumReviews({ reviews }: ReviewListProps) {
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumReviews;
