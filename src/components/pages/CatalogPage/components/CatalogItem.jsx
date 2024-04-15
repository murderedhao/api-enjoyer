import React from 'react'
import styles from './CatalogItem.module.scss'
const CatalogItem = ({Itemdata}) => {
	return ( 
		<div className={styles.item} key={Itemdata.id}>
			<img width="297px" height="320px" src={Itemdata.images[0]} alt="" />
			<p style={{maxWidth: "20ch"}}>{Itemdata.title}</p>
		</div>
	 );
}
 
export default CatalogItem;