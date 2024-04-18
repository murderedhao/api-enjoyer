import { useEffect, useState } from 'react'
import { data } from '../../../service/service'
import styles from './CatalogPage.module.scss'
import CatalogItem from './components/CatalogItem'
import Pagination from './components/Pagination'
const СatalogPage = () => {
	const [articles, setArticles] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [articlesPerPage] = useState(28)
	const [value, setValue] = useState('')



	useEffect(()=> {
			setArticles(data())
			}, [])
const lastArticleIndex = currentPage * articlesPerPage
const firstArticleIndex = lastArticleIndex - articlesPerPage
const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex)


const filterArticles = currentArticles.filter(items => items.title.toLowerCase().includes(value.toLowerCase())
)


const paginate = pageNumber => setCurrentPage(pageNumber)

	return (
		<>
			<form className={styles.form}>
				<div className={styles.search__form}>
					<input 
						type='text'
						placeholder='Store search'
						onChange={(event) => setValue(event.target.value)}
					/>
				</div>
			</form>
				<div className={styles.container}>
					{
					filterArticles.map((article) => <CatalogItem Itemdata={article} key={article.id} />)
					}
				</div>
				
				<Pagination
						articlesPerPage={articlesPerPage}
						totalArticles={articles.length}
						paginate={paginate}
						currentPage={currentPage}
					/>
			</> 
		);
	}
 
export default СatalogPage;