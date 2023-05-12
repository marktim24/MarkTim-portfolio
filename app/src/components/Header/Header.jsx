import cn from 'classnames'
import React, { useState } from 'react'
import styles from './header.module.scss'

export const Header = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false)

	return (
		<header className={styles.header}>
			<div className={cn('container', styles.container)}>
				<div className={styles.heading}>Mark Tim Portfolio 2023 ©</div>
				<button onClick={() => setMobileNavOpen(!mobileNavOpen)}>
					<svg
						width='20'
						height='18'
						viewBox='0 0 20 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M20 2H0V0H20V2Z' fill='black' />
						<path d='M20 10L0 10V8L20 8V10Z' fill='black' />
						<path d='M0 18L20 18V16L0 16V18Z' fill='black' />
					</svg>
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
