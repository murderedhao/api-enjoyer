import { useEffect, useState } from 'react'
import { data } from '../../../service/service'
import styles from './HomePage.module.scss'
import HomeItem from './components/HomeItem'
const HomePage = () => {
	const [articles, setArticles] = useState([])

	useEffect(()=> {
		setArticles(data())
		}, [])

	return ( 
		<main className={styles.main__content}>
			<section className={styles.welcome}>
				<h1 className={styles.welcome__title}>Welcome to our shop "Fakeozon"</h1>
			</section>
			<section className={styles.clothes}>
				<h2 className={styles.clothes__title}>Most popular clothes</h2>
				<div className={styles.clothes__example}>
					{
						articles.slice(0, 3).map((article) => <HomeItem Itemdata={article} key={article.id}/>)
					}
				</div>
			</section>
			<section className={styles.discription}>
				<p className={styles.discription__subtitle}>We offer amazing clothes</p>
				<a className={styles.discription__cta} href="/catalog">Go to catalog</a>
			</section>
		</main>
	 );
}
 
export default HomePage;