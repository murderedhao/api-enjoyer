import React from 'react'
import { useSelector } from 'react-redux'
import styles from './MyCartPage.module.scss'

const MyCartPage = () => {
	const cartItems = useSelector(state => state.item.transactions.items)
	return (
		<div className={styles.container}>
			<h1 className={styles.container__head}>Items in Cart</h1>
			{cartItems.map((item, index) => (
				<div className={styles.container__item} key={index}>
					<img
						className={styles.container__img}
						src={item.images}
						alt={`Item ${index}`}
					/>
					<p className={styles.container__title}>{item.title}</p>
					<div className={styles.container__buttons}>
						<button className={styles.container__buttondel}>
							delete this item
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default MyCartPage
