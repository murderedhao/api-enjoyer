import React from 'react'
import { useSelector } from 'react-redux'

const MyCartPage = () => {
	const cartItems = useSelector(state => state.item.transactions.items)
	return (
		<div>
			<h2>Items in Cart</h2>
			<div>
				{cartItems.map((item, index) => (
					<div key={index}>
						<img src={item.images} alt={`Item ${index}`} />
						<p>{item.title}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default MyCartPage
