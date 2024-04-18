import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AppRoutes from './components/Routes/Routes'
const App = () => {
	return ( 
		<div className='App'>
			<Header />
			<AppRoutes />
			<Footer />
		</div>
	 );
}
 
export default App;