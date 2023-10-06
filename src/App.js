import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
		<h1>React Router Example</h1>
		<Router>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/contact'>Contact</Link></li>
			</ul>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/about' element={<About/>} />
				<Route path='/contact' element={<Contact/>} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
