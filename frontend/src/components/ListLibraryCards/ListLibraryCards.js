import "./ListLibraryCards.css";
import Cards from "../Card";
import icon from "../../assets/icons/tagsUnder.svg";

function ListLibraryCards(props) {
  const { games } = props;
  return (
    <>
      <div className="container-sort">
        <h3 className="sort">Sort By: Alphabetical</h3>
        <img className="" src={icon} alt="icon" />
      </div>
      <div className="library">
        {games?.map((item) => (
          <Cards
            steam={item.gameID}
            name={item.gameName}
            key={item.gameID}
            steamAppID={item.gameID}
            isOwned={true}
            inLibrary={true}
          />
        ))}
      </div>
    </>
  );
}

export default ListLibraryCards;
