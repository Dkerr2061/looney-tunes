import Review from "../Interfaces/ReviewInterfaces";

interface ReviewProps {
  review: Review;
}

function ReviewComponent({ review }: ReviewProps) {
  console.log(review.album.artist_name);
  return (
    <div>
      <div>{review.rating}</div>
      <div>{review.text}</div>
      <div>{review.album.name}</div>
      <div>{review.album.artist_name}</div>
    </div>
  );
}

export default ReviewComponent;
