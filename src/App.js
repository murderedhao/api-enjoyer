import './App.scss'
import Header from './components/Header/Header'
import AppRoutes from './components/Routes/Routes'
const App = () => {
	return ( 
		<div className='App'>
			<Header />
			<AppRoutes />
		</div>
	 );
}
 
export default App;