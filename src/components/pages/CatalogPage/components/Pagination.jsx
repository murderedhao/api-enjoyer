import { useEffect, useState } from 'react'
import styles from './Pagination.module.scss'
const Pagination = ({articlesPerPage, totalArticles, paginate, currentPage}) => {
	const pageNumbers = []
	for(let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
		pageNumbers.push(i)
	}
	const [disableButton, setButton] = useState(false)
	useEffect(() => {
		(currentPage === 1) ? setButton(true) : setButton(false)
	}, [currentPage])
	return ( 

		<div>
			<ul className={styles.pagination}>
				<button className={styles.previousPage} hidden={disableButton} onClick={() => paginate(currentPage - 1)}>
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
				<button className={styles.nextPage} onClick={() => paginate(currentPage + 1)}>
					NextPage
				</button>
			</ul>
		</div>
	 );
}
export default Pagination;