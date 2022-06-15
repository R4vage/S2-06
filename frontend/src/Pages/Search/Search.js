import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";


function Search() {
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search");
    const [searchResults, setSearchResults] = useState()
    console.log(searchValue)
    const consultarApi = async () => {
        const url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=10&pageNumber=1&onSale=1&title=${searchValue.toString()}`;
    
        const { data } = await axios(url);
        console.log(data)
        setSearchResults(data);
    };

    useEffect(() => {
        consultarApi()
    }, [])
  



    return (
        <div>
            <div className="container-dealsCard">
                {searchResults?.map((item) => (
                    <Card
                    name={item.title}
                    key={item.steamAppID}
                    salePrice={item.salePrice}
                    normalPrice={item.normalPrice}
                    savings={item.savings}
                    steamAppID={item.steamAppID}
                    altImg={item.thumb}
                    />
                ))}
            </div>
        </div>

      );
}

export default Search;