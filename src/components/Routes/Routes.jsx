import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import HomePage from '../pages/HomePage/HomePage'
import MenPage from '../pages/MenPage/MenPage'
import WomenPage from '../pages/WomenPage/WomenPage'
const AppRoutes = () => {
	return ( 
<Routes>
	<Route index element={<HomePage />} />
	<Route path='/catalog' element={<CatalogPage />} />
	<Route path='/men' element={<MenPage />} />
	<Route path='/women' element={<WomenPage />} />
	<Route path='/about' element={<AboutUsPage />} />
</Routes>
	 );
}
export default AppRoutes;