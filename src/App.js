import './App.css';
import Selact from './component/Selact';

function App() {
	const selactData = [
		{label: 'Apple', value: 'apple', icon: 'icons/apple.png'},
		{label: 'Banana', value: 'banana', icon: './icons/banana.png'},
		{label: 'Dragon Fruit', value: 'dragonfruit', icon: './icons/dragon-fruit.png'},
		{label: 'Mango', value: 'mango', icon: './icons/mango.png'},
		{label: 'Orange', value: 'orange', icon: './icons/orange.png'},
		{label: 'Pear', value: 'pear', icon: './icons/pear.png'},
		{label: 'Pineapple', value: 'pineapple', icon: './icons/pineapple.png'}
	];

	return (
		<div className="App">
			<Selact placeholder={'Choose a Fruit:'} data={selactData}></Selact>
		</div>
	);
}

export default App;
