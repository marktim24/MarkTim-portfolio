import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import Gallery from './Gallery/Gallery'

const Home = () => {
	return (
		<>
			<Hero />
			<Skills name={'Design'} />
			<Skills name={'Frontend'} />
			<Gallery />
		</>
	)
}
export default Home
