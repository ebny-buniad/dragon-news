import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);

    const { id } = useParams();
    const newsData = useLoaderData();

    // console.log(news)

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(newsData);
            return
        } else if (id == '1') {
            const filteredNews = newsData.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filteredNews)
        } else {
            const filteredNews = newsData.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews);
        }

    }, [id, newsData])

    return (
        <div>
            Category - {categoryNews.length} news found
        </div>
    );
};

export default CategoryNews;