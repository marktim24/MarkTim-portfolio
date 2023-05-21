import { motion } from 'framer-motion'
import { motionProps } from '../../../assets/animation-settings/motionProps'
import DownloadModal from '../../DownloadModal/DownloadModal'
import styles from '../hero.module.scss'

const HeroDesktop = ({ modalOpen, openModal, closeModal }) => {
	return (
		<>
			<motion.div className={styles.description}>
				<img
					src='/hero-bg.webp'
					className={styles.heroBgAlternative}
					alt='Hero Image Alternative'
				/>
				<video className={styles.video} autoPlay muted loop>
					<source src='/hero-video.mp4' type='video/mp4' />
					<source src='/hero-video.webm' type='video/webm' />
				</video>
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
					<motion.button
						className={styles.downloadBtn}
						onClick={openModal}
						{...motionProps}
					>
						<svg
							width='52'
							height='52'
							viewBox='0 0 52 52'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M22.8867 0.0963745C9.99509 1.63471 0 12.6061 0 25.9119C0 40.2713 11.6406 51.9119 26 51.9119C40.3594 51.9119 52 40.2713 52 25.9119C52 12.6061 42.0049 1.63471 29.1133 0.0963745L27.5694 31.763L43.7778 19.4368L46 24.0076L26 42.9119L6 24.0076L8.22217 19.4368L24.4306 31.763L22.8867 0.0963745Z'
								fill='white'
							/>
						</svg>
						Download <b>CV</b>
					</motion.button>
				</div>
				{modalOpen && <DownloadModal closeModal={closeModal} />}
			</motion.div>
			<motion.div className={styles.links}>
				<motion.a
					{...motionProps}
					href='https://github.com/marktim24'
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub
				</motion.a>
				<motion.a
					{...motionProps}
					href='https://www.behance.net/marktim24'
					target='_blank'
					rel='noopener noreferrer'
				>
					Behance
				</motion.a>
			</motion.div>
		</>
	)
}

export default HeroDesktop
