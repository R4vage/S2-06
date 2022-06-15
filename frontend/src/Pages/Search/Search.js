import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";


function Search() {
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search");
    const [searchResults, setSearchResults] = useState()
    const consultarApi = async () => {
        const url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${searchValue.toString()}&pageSize=10&pageNumber=0`
        const { data } = await axios(url);
        setSearchResults(data);
        console.log(searchResults?.length)
        console.log(searchResults)
    };
  
    useEffect(() => {
        consultarApi()
    }, [searchValue])

    return (
        <>
            <SearchBar />
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
        </>

      );
}

export default Search;