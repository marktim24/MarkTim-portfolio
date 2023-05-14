import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import styles from './card.module.scss'

const variants = {
	show: { opacity: 1, transition: { staggerChildren: 0.2 } },
	hidden: { opacity: 0 },
}

const Card = props => {
	const controls = useAnimation()
	const [ref, inView] = useInView()

	useEffect(() => {
		if (inView) {
			controls.start('show')
		}
	}, [controls, inView])

	return (
		<motion.article
			variants={variants}
			initial='hidden'
			ref={ref}
			animate={controls}
			className={styles.container}
		>
			<Link to='/preview'>
				<div className={styles.image_container}>
					<img className={styles.image} src={props.image} />
				</div>
			</Link>

			<div className={styles.content}>
				<h3 className={styles.title}>{props.title}</h3>
				<p className={styles.skills}>{props.skills}</p>
			</div>
		</motion.article>
	)
}

export default Card
