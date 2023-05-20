import { motion } from 'framer-motion'
import { motionProps } from '../../../assets/animation-settings/motionProps'
import DownloadModal from '../../DownloadModal/DownloadModal'
import styles from '../hero.module.scss'

const HeroMobile = ({ modalOpen, openModal, closeModal }) => {
	return (
		<>
			<div className={styles.description}>
				<video className={styles.video} autoPlay muted loop>
					<source src='/hero-video.webm' type='video/webm' />
				</video>
				<img
					src='/hero-bg.webp'
					className={styles.heroBgAlternative}
					alt='Hero Image Alternative'
				/>
				<div className={styles.title}>
					<h1>Mark Tim</h1>
					<h2>frontend developer</h2>
					<h2>Designer</h2>
					<img
						to='/'
						src='/profile-pic.webp'
						className={styles.profileImage}
						alt=''
					/>
				</div>
			</div>
			<div className={styles.experience}>
				<img src='/total-experience.webp' alt='' />
				<img src='/projects-count.webp' alt='' />
			</div>
			<div className={styles.credits}>
				<p>
					Eager and dedicated Junior Front-End Developer with over 1 year of
					experience in web development, demonstrating a strong command of HTML,
					CSS, and JavaScript.
				</p>
				<motion.button
					className={styles.downloadBtn}
					onClick={openModal}
					{...motionProps}
				>
					<svg
						width='40'
						height='44'
						viewBox='0 0 40 44'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M23.171 0L21.5694 32.8511L37.7778 20.5249L40 25.0957L20 44L0 25.0957L2.22217 20.5249L18.4306 32.8511L16.829 0H23.171Z'
							fill='black'
						/>
					</svg>
					Download <b>CV</b>
				</motion.button>
			</div>
			{modalOpen && <DownloadModal closeModal={closeModal} />}
		</>
	)
}

export default HeroMobile
