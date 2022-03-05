import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Roadmap from './components/Roadmap'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<About />
			<Roadmap />
		</div>
	)
}

export default App
