import ExpandableText from "../components/ExpandableText";
import Tags from "../components/Tags";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col px-3 text-center">
        <ExpandableText maxChars={100}>
          Welcome to Looney Tunes, the ultimate music hub where enthusiasts can
          dive deep into the world of music! Here, you can upload your favorite
          artists, share album discoveries, and write insightful reviews.
          Whether you're exploring new genres or celebrating timeless classics,
          Looney Tunes brings the community together to connect over the music
          that moves us all.
        </ExpandableText>
      </div>
      <div>
        <Tags />
      </div>
    </div>
  );
}

export default HomePage;
