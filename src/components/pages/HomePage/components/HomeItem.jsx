import React from 'react'
import styles from './HomeItem.module.scss'
const HomeItem = ({Itemdata}) => {
	return ( 
		<div className={styles.item__data} key={Itemdata.id}>
			<img className={styles.item__img} src={Itemdata.images[0]} alt="" />
			<p style={{maxWidth: "20ch"}}>{Itemdata.title}</p>
		</div>
	 );
}
 
export default HomeItem;