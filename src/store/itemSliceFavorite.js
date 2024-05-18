import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	transactions: {
		favorites: [],
	},
}
const itemSliceFavorite = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavorite(state, action) {
			state.transactions.favorites.push(action.payload)
			alert('Your product has been added to the favorite')
		},
		removeFavorite(state, action) {
			state.transactions.favorites = state.transactions.favorites.filter(
				favorite => favorite.id !== action.payload
			)
		},
	},
})
export const { addFavorite, removeFavorite } = itemSliceFavorite.actions

export default itemSliceFavorite.reducer
