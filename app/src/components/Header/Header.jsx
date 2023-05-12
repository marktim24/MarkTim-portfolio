import cn from 'classnames'
import React, { useState } from 'react'
import styles from './header.module.scss'

export const Header = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false)

	return (
		<header className={styles.header}>
			<div className={cn('container', styles.container)}>
				<div>Mark Tim Portfolio 2023 ©</div>
				<button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
					<img src='/favicon.svg' alt='' />
				</button>
				<nav className={mobileNavOpen ? styles.navOpen : styles.nav}>
					<ul className={styles.navList}>
						<li onClick={() => setMobileNavOpen(false)}>About Me</li>
						<li onClick={() => setMobileNavOpen(false)}>Projects</li>
						<li onClick={() => setMobileNavOpen(false)}>Contacts</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
