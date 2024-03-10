import { useState } from 'react';
import { searchAndReduce, searchFor } from '../../network/api';
import { interpretScrape } from '../../network/interpreter';

export default function Search() {
    const [content, setContent] = useState();

    async function handleSearch() {
        const url = document.getElementById("searchQuery").value;

        const ret = await searchAndReduce(url);
        console.log(ret.data);
        setContent(ret.data);
    }

    return (
        <div>
            <input type="text" id="searchQuery" />
            <button onClick={handleSearch}>Scrape</button>
            {
                content && interpretScrape(content)
            }
        </div>
    )
}