import cn from 'classnames'
import { motion } from 'framer-motion'
import { motionProps } from '../../assets/animation-settings/motionProps.js'
import styles from './footer.module.scss'

const Footer = ({ navigation }) => {
	return (
		<footer className={styles.footer}>
			<div className={cn('container', styles.container)}>
				<div className={styles.contacts}>
					<h3>Links:</h3>
					<motion.a
						{...motionProps}
						href='https://www.behance.net/marktim24'
						target='_blank'
						rel='noopener noreferrer'
					>
						Behance
					</motion.a>
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
						href='https://www.linkedin.com/in/marktim24/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</motion.a>
					<motion.a
						{...motionProps}
						href='https://www.instagram.com/markt1m24/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Instagram
					</motion.a>
				</div>
				<div className='line'></div>
				{navigation && (
					<div className={styles.info}>
						<div>Mark Tim Portfolio 2023 ©</div>
						<nav>
							<ul className={styles.nav}>
								<motion.li {...motionProps}>About Me</motion.li>
								<motion.li {...motionProps}>Projects</motion.li>
								<motion.li {...motionProps}>Contacts</motion.li>
							</ul>
						</nav>
					</div>
				)}
			</div>
		</footer>
	)
}

export default Footer
