import cn from 'classnames'
import styles from './footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={cn('container', styles.container)}>
				<div className={styles.contacts}>
					<h3>Contacts:</h3>
					<a
						href='https://www.behance.net/marktim24'
						target='_blank'
						rel='noopener noreferrer'
					>
						Behance
					</a>
					<a
						href='https://github.com/marktim24'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub
					</a>
					<a
						href='https://www.linkedin.com/in/marktim24/'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</a>
					<a
						href='https://www.instagram.com/markt1m24/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Instagram
					</a>
				</div>
				<div className='line'></div>
				<div className={styles.info}>
					<div>Mark Tim Portfolio 2023 ©</div>
					<nav>
						<ul className={styles.nav}>
							<li>About Me</li>
							<li>Projects</li>
							<li>Contacts</li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
