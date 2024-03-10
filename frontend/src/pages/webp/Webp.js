import { useState } from 'react';
import { scrape } from '../../network/api';
import { interpretScrape } from '../../network/interpreter';

export default function Webp() {
    const [content, setContent] = useState();

    async function handleScrape() {
        const url = document.getElementById("url").value;

        const ret = await scrape(url);
        console.log(ret.data);
        setContent(ret.data);
    }

    return (
        <div>
            <input type="text" id="url" />
            <button onClick={handleScrape}>Scrape</button>
            {
                content && interpretScrape(content)
            }
        </div>
    )
}