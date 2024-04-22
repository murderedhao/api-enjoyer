import { useEffect } from 'react'
import { scrollToSearch } from '../../../../service/service'
import styles from './Pagination.module.scss'
const Pagination = ({articlesPerPage, totalArticles, paginate, currentPage}) => {
	const pageNumbers = []
	for(let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
		pageNumbers.push(i)
	}
	useEffect(() => {
		scrollToSearch()
	}, [currentPage])
	return ( 
		<div>
			<ul className={styles.pagination}>
				<button className={styles.previousPage} hidden={currentPage === 1} onClick={() => {
					paginate(currentPage - 1)
					}}
					>
					PreviousPage
				</button>
				{
					pageNumbers.map(number => (
						<li className={styles.pageItem} key={number}>
							<div className={styles.pageLink} onClick={() => paginate(number)}>
								{number}
							</div>
						</li>
					))
				}
				<button className={styles.nextPage} onClick={() => {
					paginate(currentPage + 1)}}>
					NextPage
				</button>
			</ul>
		</div>
	 );
}
export default Pagination;