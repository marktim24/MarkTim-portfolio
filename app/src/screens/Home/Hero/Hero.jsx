import cn from 'classnames'
import styles from './hero.module.scss'

const Hero = () => {
	return (
		<section className={styles}>
			<div className={cn('container', styles.container)}>
				<div className={styles.description}>
					<div className={styles.title}>
						<h1>Mark Tim</h1>
						<img
							src='/profile-pic.png'
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
				</div>
				<div className='experience'>
					<img src='/total-experience.svg' alt='' />
					<img src='/projects-count.svg' alt='' />
				</div>
			</div>
		</section>
	)
}

export default Hero
