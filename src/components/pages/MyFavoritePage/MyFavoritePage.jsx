import { useSelector } from 'react-redux'
import styles from './MyFavoritePage.module.scss'
const MyFavoritePage = () => {
	const favoriteItems = useSelector(
		state => state.favorite.transactions.favorites
	)
	return (
		<div className={styles.container}>
			<h1 className={styles.container__head}>Your favorite items</h1>
			{favoriteItems.map(favorite => (
				<div className={styles.container__favorite} key={favorite.id}>
					<img
						className={styles.container__img}
						src={favorite.images}
						alt={`Favorite ${favorite.id}`}
					/>
					<p className={styles.container__title}>{favorite.title}</p>
					<form action='/mycart'>
						<button className={styles.container__button}>Go to cart</button>
					</form>
				</div>
			))}
		</div>
	)
}
export default MyFavoritePage
