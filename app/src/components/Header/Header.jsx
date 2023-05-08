import cn from 'classnames'
import React from 'react'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={cn('container', styles.container)}>
				<div className={styles.wrapper}>
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
		</header>
	)
}

export default Header
