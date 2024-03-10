import { useState } from "react"
import { scrape, searchKeyword } from "../../network/api"
import { interpretScrape } from "../../network/interpreter"
import NavbarComponent from "../../components/Navbar/Navbar";
import "./Browser.css"
import spinner from "../../assets/icons/spinner.svg"
import Button from "react-bootstrap/esm/Button";

export default function Browser() {
    const [searchResults, setSearchResults] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [pageContent, setPageContent] = useState();
    const [loadingScraper, setLoadingScraper] = useState(false);

    async function handleSearchKeyword() {
        setSearchResults([]);
        setLoadingSearch(true);
        const keyword = document.getElementById("searchQuery").value;
        console.log(keyword);

        const response = await searchKeyword(keyword);
        console.log(response.data)
        setLoadingSearch(false);
        setSearchResults(response.data);
    }

    async function scrapePageContent(url) {
        setPageContent(null);
        setLoadingScraper(true);
        const response = await scrape(url);
        console.log(response.data)
        setLoadingScraper(false);
        setPageContent(response.data);
    }

    return (
        <>
            <NavbarComponent />
            <div className="browser landing d-flex">
                <div className="browser-container d-flex flex-row">
                    <div className="search-column">
                        <div className="browser-search-div">
                            <input type="text" placeholder="Search" id="searchQuery" className="browser-searchbar" />
                            <Button onClick={() => handleSearchKeyword()}>Search</Button>
                        </div>
                        <div className="search-results">
                            {loadingSearch && <img src={spinner} className="spinner" alt="loading" />}
                            {searchResults.map((result, index) => {
                                return (
                                    <div key={index} className="result-card">
                                        <div className="result-card-text">{result.title}</div>
                                        <Button onClick={() => scrapePageContent(result.link)}>Scrape</Button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="page-column">
                        {loadingScraper && <img src={spinner} className="spinner" alt="loading" />}
                        {pageContent && interpretScrape(pageContent)}
                    </div>
                </div>
            </div>
        </>
    )
}