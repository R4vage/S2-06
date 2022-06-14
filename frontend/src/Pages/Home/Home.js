import "./Home.css";
import DealsCard from "../../components/DealCards";
import RatingCard from "../../components/RatingCard";
import SearchBar from "../../components/SearchBar";

function Home() {
  return (
    <div className="Home">
      <SearchBar />
      <DealsCard />
      <RatingCard />
    </div>
  );
}

export default Home;
