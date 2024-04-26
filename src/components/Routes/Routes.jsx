import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import HomePage from '../pages/HomePage/HomePage'
import MyCartPage from '../pages/MyCartPage/MyCartPage'
import MyFavoritePage from '../pages/MyFavoritePage/MyFavoritePage'
const AppRoutes = () => {
	return ( 
<Routes>
	<Route index element={<HomePage />} />
	<Route path='/catalog' element={<CatalogPage />} />
	<Route path='/about' element={<AboutUsPage />} />
	<Route path='/myfavorite' element={<MyFavoritePage />} />
	<Route path='/mycart' element={<MyCartPage />} />
</Routes>
	 );
}
export default AppRoutes;