import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage'
import CatalogPage from '../pages/CatalogPage'
import HomePage from '../pages/HomePage'
import MenPage from '../pages/MenPage'
import WomenPage from '../pages/WomenPage'
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