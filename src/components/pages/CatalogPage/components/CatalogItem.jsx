import React from 'react'
import { useDispatch } from 'react-redux'
import cart from '../../../../assets/cart.png'
import favorite from '../../../../assets/favorite.png'
import { addItem } from '../../../../store/itemSlice'
import styles from './CatalogItem.module.scss'
const CatalogItem = ({ Itemdata }) => {
	const dispatch = useDispatch()
	return (
		<div className={styles['item']} key={Itemdata.id}>
			<img className={styles['item__img']} src={Itemdata.images[0]} alt='' />
			<p className={styles['item__title']}>{Itemdata.title}</p>
			<div className={styles['item__buttons']}>
				<p className={styles['item__price']}>{Itemdata.price}$</p>
				<button
					onClick={() => dispatch(addItem(Itemdata))}
					className={styles['item__button']}
				>
					<img className={styles['item__buttonImage']} src={cart} alt='' />
				</button>
				<button className={styles['item__button']}>
					<img className={styles['item__buttonImage']} src={favorite} alt='' />
				</button>
			</div>
		</div>
	)
}

export default CatalogItem
