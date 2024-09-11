import './App.css';
import Container from '@mui/material/Container';
import Header from '../header/Header';
import AppRouting from '../routes/AppRouting';
import { Provider } from 'react-redux';
import store from '../../store/store';

function App() {

	return (
		<div className="App">
			<Provider store={store}>
				<AppRouting />
			</Provider>
		</div>
	);
}

export default App;