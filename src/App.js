import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Team from './components/Team'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<About />
			<Roadmap />
			<Team />
		</div>
	)
}

export default App
