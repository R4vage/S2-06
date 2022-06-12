import "./Home.css";
import DealsCard from "../../components/DealCards";
import RatingCard from "../../components/RatingCard";

function Home() {
  return (
    <div className="Home">
      <DealsCard />
      <RatingCard />
    </div>
  );
}

export default Home;
