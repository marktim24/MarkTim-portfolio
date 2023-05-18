import React from 'react'
import { animated, useSpring } from 'react-spring'
import Hero from '../../components/Hero/Hero'
import designSkills from '../../components/Skills/DataSkils/design.data'
import frontendSkills from '../../components/Skills/DataSkils/frontend.data'
import Skills from '../../components/Skills/Skills'
import Gallery from './Gallery/Gallery'

const Home = () => {
	const props = useSpring({ opacity: 1, from: { opacity: 0 } })

	return (
		<animated.div style={props}>
			<Hero />
			<Skills name='Design' database={designSkills} />
			<Skills name='Frontend' database={frontendSkills} />
			<Gallery />
		</animated.div>
	)
}

export default Home
