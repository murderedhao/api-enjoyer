import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../../store/itemSlice'
import trash from './../../../assets/trash.png'
import styles from './MyCartPage.module.scss'
const MyCartPage = () => {
	const dispatch = useDispatch()
	const cartItems = useSelector(state => state.item.transactions.items)
	return (
		<div className={styles.container}>
			<h1 className={styles.container__head}>Items in Cart</h1>
			{cartItems.map(item => (
				<div className={styles.container__item} key={item.id}>
					<img
						className={styles.container__img}
						src={item.images}
						alt={`Item ${item.id}`}
					/>
					<p className={styles.container__title}>{item.title}</p>
					<div className={styles.container__buttons}>
						<button
							className={styles.container__buttondel}
							onClick={() => dispatch(removeItem(item.id))}
						>
							<img className={styles.container__btnImg} src={trash} alt='' />
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default MyCartPage
