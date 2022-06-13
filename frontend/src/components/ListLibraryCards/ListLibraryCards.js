import "./ListLibraryCards.css"
import Cards from "../Card";

function ListLibraryCards(props) {
   const {games} = props
    return (  
        <div className="library">
            {games?.map((item) => (
                <Cards
                steam={item.gameID}
                name={item.gameName}
                key={item.gameID}
                steamAppID={item.steamAppID}
                isOwned={true}
                />
            ))}
        </div>

    );
}

export default ListLibraryCards;