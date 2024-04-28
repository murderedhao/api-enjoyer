import React from 'react'
import styles from './CatalogItem.module.scss'
const CatalogItem = ({Itemdata}) => {
	return ( 
		<div className={styles.item__data} key={Itemdata.id}>
			<img className={styles.item__img} src={Itemdata.images[0]} alt="" />
			<p style={{maxWidth: "20ch", position:'relative'}}>{Itemdata.title}</p>
			<div className={styles["item__data-btn"]}>
				<button className={styles.item__button}>Add to cart</button>
				<button className={styles.item__button}>Add to favorite</button>
			</div>
		</div>
	 );
}
 
export default CatalogItem;