import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	transactions: {
		items: [],
	},
}
const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addItem(state, action) {
			state.transactions.items.push(action.payload)
			alert('Your product has been added to the cart')
		},
		removeItem(state, action) {
			state.transactions.items = state.transactions.items.filter(
				item => item.id !== action.payload
			)
		},
	},
})
export const { addItem, removeItem } = itemSlice.actions

export default itemSlice.reducer
