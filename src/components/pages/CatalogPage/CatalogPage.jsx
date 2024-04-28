import React, { useEffect, useState } from 'react'
import { data } from '../../../service/service'
import styles from './CatalogPage.module.scss'
import CatalogItem from './components/CatalogItem'
import Pagination from './components/Pagination'

const CatalogPage = () => {
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage] = useState(28);
    const [searchValue, setSearchValue] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        const fetchedArticles = data();
        setArticles(fetchedArticles);
        setFilteredArticles(fetchedArticles);
    }, []);

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
        filterArticles(value);
    };

    const filterArticles = (query) => {
        const filtered = articles.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredArticles(filtered);
        setCurrentPage(1);
    };


    const lastArticleIndex = currentPage * articlesPerPage;
    const firstArticleIndex = lastArticleIndex - articlesPerPage;
    const currentArticles = filteredArticles.slice(firstArticleIndex, lastArticleIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <form className={styles.form}>
                <div id="search" className={styles.search__form}>
                    <input
                        type='text'
                        placeholder='Store search'
                        value={searchValue}
                        onChange={handleSearchChange}
                    />
                </div>
            </form>
            <div className={styles.container}>
                {currentArticles.map((article) => <CatalogItem Itemdata={article} key={article.id} />)}
            </div>

            <Pagination
                articlesPerPage={articlesPerPage}
                totalArticles={filteredArticles.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
};

export default CatalogPage;