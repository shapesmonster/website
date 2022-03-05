import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Hero />
			<About />
			<Roadmap />
			<Team />
			<Footer />
		</div>
	)
}

export default App
