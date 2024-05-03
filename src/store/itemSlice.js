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
		removeItem(state) {
			state.items.pop()
		},
	},
})
export const { addItem, removeItem } = itemSlice.actions

export default itemSlice.reducer
