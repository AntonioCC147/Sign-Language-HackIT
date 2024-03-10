export function interpretScrape(data) {
    return data.map((item, index) => {
        switch(item.type) {
            case "h1":
                return <h1 key={index}>{item.data}</h1>
            case "h2":
                return <h2 key={index}>{item.data}</h2>
            case "h3":
                return <h3 key={index}>{item.data}</h3>
            case "p":
                return <p key={index}>{item.data}</p>
            case "ol":
                return <ol key={index}>{item.data}</ol>
            case "ul":
                return <ul key={index}>{item.data}</ul>
            case "li":
                return <li key={index}>{item.data}</li>
            case "img":
                return <img key={index} src={item.data} alt="webp" />
            case "url":
                return <p><a key={index} href={item.data} target="_blank">
                    {item.placeholder}
                </a></p>
            default:
                return <p key={index}>Unknown type</p>
        }
    })
}