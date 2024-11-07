import Review from "../Interfaces/ReviewInterfaces";

interface ReviewProps {
  review: Review;
}

function ReviewComponent({ review }: ReviewProps) {
  // ! Find out how to fix this error, it is currently commented out:
  // console.log(review.album.artist_name);
  return (
    <div>
      <div>{review.rating}</div>
      <div>{review.text}</div>
    </div>
  );
}

export default ReviewComponent;
