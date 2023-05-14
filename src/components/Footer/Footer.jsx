import cn from 'classnames'
import { motion } from 'framer-motion'
import styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={cn('container', styles.container)}>
				<div className={styles.contacts}>
					<h3>Contacts:</h3>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						href='https://www.behance.net/marktim24'
						target='_blank'
						rel='noopener noreferrer'
					>
						Behance
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						href='https://github.com/marktim24'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						href='https://www.linkedin.com/in/marktim24/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						href='https://www.instagram.com/markt1m24/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Instagram
					</motion.a>
				</div>
				<div className='line'></div>
				<div className={styles.info}>
					<div>Mark Tim Portfolio 2023 ©</div>
					<nav>
						<ul className={styles.nav}>
							<motion.li
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: 'spring', stiffness: 300, damping: 15 }}
							>
								About Me
							</motion.li>
							<motion.li
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: 'spring', stiffness: 300, damping: 15 }}
							>
								Projects
							</motion.li>
							<motion.li
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: 'spring', stiffness: 300, damping: 15 }}
							>
								Contacts
							</motion.li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
