import styles from '../hero.module.scss'

const HeroMobile = () => {
	return (
		<>
			<div className={styles.description}>
				<div className={styles.title}>
					<h1>Mark Tim</h1>
					<h2>frontend developer</h2>
					<h2>Designer</h2>
					<img src='/profile-pic.png' className={styles.profileImage} alt='' />
				</div>
			</div>
			<div className={styles.experience}>
				<img src='/total-experience.png' alt='' />
				<img src='/projects-count.png' alt='' />
			</div>
			<div className={styles.credits}>
				<p>
					Eager and dedicated Junior Front-End Developer with over 1 year of
					experience in web development, demonstrating a strong command of HTML,
					CSS, and JavaScript.
				</p>
			</div>
		</>
	)
}

export default HeroMobile
