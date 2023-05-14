import React from 'react'
import { animated, useSpring } from 'react-spring'
import Hero from '../../components/Hero/Hero'
import Skills from '../../components/Skills/Skills'
import Gallery from './Gallery/Gallery'

const Home = () => {
	const props = useSpring({ opacity: 1, from: { opacity: 0 } })

	return (
		<animated.div style={props}>
			<Hero />
			<Skills name={'Design'} />
			<Skills name={'Frontend'} />
			<Gallery />
		</animated.div>
	)
}

export default Home
