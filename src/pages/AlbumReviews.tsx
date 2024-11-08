import Footer from "../components/Footer";
import ReviewComponent from "../components/ReviewComponent";
import Review from "../Interfaces/ReviewInterfaces";

interface ReviewListProps {
  reviews: Review[];
}

function AlbumReviews({ reviews }: ReviewListProps) {
  return (
    <>
      <div className="flex flex-col gap-5 px-5 py-5 mx-6 my-6 border-2 border-[#ABA1A1] border-solid rounded-xl shadow-2xl">
        {reviews.map((review) => (
          <ReviewComponent key={review.id} review={review} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AlbumReviews;
