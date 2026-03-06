import { getNews } from "../../services/firestore.js";
import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard.jsx"
function NewsPanel(){
    // const [news, setNews] = useState([]);

    // useEffect(
    //     () => {
    //     const fetchNews = async () => {
    //         const newsData = await getNews();
    //         setNews(newsData);
    //     };

    //     fetchNews()
    //     },
    //     []
    // );

    const news = [
  { id: 1, newsTitle: "Title 1", content: "Map objects are collections of key-value pairs. A key in the Map may only occur once; Map objects are collections of key-value pairs. A key in the Map may only occur once;", date: "2026-03-01" },
  { id: 2, newsTitle: "Title 2", content: "Content 2", date: "2026-03-02" }, { id: 3, newsTitle: "Title 2", content: "Content 2", date: "2026-03-02" }, { id: 4, newsTitle: "Title 2", content: "Content 2", date: "2026-03-02" }
];

    return(
        <div>
            {news.map(news => (
                <div key={news.id}>
                    <NewsCard newsTitle={news.newsTitle} content={news.content} date={news.date}/>
        
                </div>
            ))}
        </div>
    );
}

export default NewsPanel;