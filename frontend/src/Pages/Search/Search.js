import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import arrow from "../../assets/play.png"
import "./Search.css"


function Search() {
    const [searchParams] = useSearchParams();
    const searchValue = searchParams.get("search");
    const [searchResults, setSearchResults] = useState()
    const [page , setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(false)
    const [pageList, setPageList] = useState()
    
    const consultarApi = async () => {
        const url = `https://www.cheapshark.com/api/1.0/deals?storeID=1&title=${searchValue.toString()}&pageSize=10&pageNumber=${page-1}`
        setSearchResults("loading")
        try{const { data, headers } = await axios(url)
        setTotalPages(headers[`x-total-page-count`])
        setSearchResults(data);
        	}catch(error){
        }
    };
  
    function listPage(){
        const list = []
        for (var i = page-5; i < page+5; i++) {
        if(i>0 && i<=totalPages)list.push(i);
        }
        setPageList(list)
        }



    useEffect(() => {
        consultarApi()
        listPage()
    }, [searchValue, page, totalPages])

    useEffect(() => {
        setPage(1)
    }, [searchValue])

    if(searchResults === "loading"){return( 
    <div className="loadingContainer">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>)}

   

    return (
        <>
            <div className="container-dealsCard">
                {(searchResults!=="loading")&&searchResults?.map((item) => (
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
            <div className="Search--listButtons">
                <img src={arrow} className={(page<2)?"displaynone":"Search__arrows leftArrow"} onClick={() =>(page>1) && setPage(page-1)}/>
                
                {pageList?.map((i) => (<button key={i*totalPages} onClick={() => setPage(i)} className={(i===page)?"landing--listButtons__numbers landing--listButtons__numbers__selected":(i<1 || i>totalPages)? "hidden" : "landing--listButtons__numbers"} >{i}</button>))}
                <img src={arrow} className={(page > totalPages-1)?"displaynone":"Search__arrows rightArrow"} onClick={() =>  setPage(page+1)}/>
            </div>
        </>

      );
}

export default Search;

export async function getServerSideProps({}){

}