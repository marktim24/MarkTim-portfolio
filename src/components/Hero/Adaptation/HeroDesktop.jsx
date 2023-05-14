import { motion } from 'framer-motion'
import styles from '../hero.module.scss'

const HeroDesktop = () => {
	return (
		<>
			<motion.div className={styles.description}>
				<div className={styles.title}>
					<h1>Mark Tim</h1>
					<motion.img
						src='/profile-pic.webp'
						className={styles.profileImage}
						alt=''
					/>
				</div>
				<div className={styles.credits}>
					<h2>frontend developer</h2>
					<h2>Designer</h2>
					<p>
						Eager and dedicated Junior Front-End Developer with over 1 year of
						experience in web development, demonstrating a strong command of
						HTML, CSS, and JavaScript.
					</p>
				</div>
			</motion.div>
			<motion.div className={styles.experience}>
				<img src='/total-experience.webp' alt='' />
				<img src='/projects-count.webp' alt='' />
			</motion.div>
		</>
	)
}

export default HeroDesktop
