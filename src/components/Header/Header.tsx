'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './header.module.scss'

const navLinks = [
	{ path: '/about-me', pageName: 'About Me' },
	{ path: '/skills', pageName: 'Skills' },
	{ path: '/portfolio', pageName: 'Portfolio' },
]

const Header: FC = () => {
	const currentPath = usePathname()

	const currentPage = navLinks.find(link => link.path === currentPath)
	const pageTitle = currentPage ? currentPage.pageName : 'Page not found'

	return (
		<header className='flex flex-row justify-between'>
			<h1>{pageTitle}</h1>
			<nav className='space-x-6 flex-col'>
				{navLinks.map(link => (
					<Link
						key={link.path}
						href={link.path}
						className={
							currentPath === link.path
								? styles.headerLinkActive
								: styles.headerLink
						}
					>
						{link.pageName}
					</Link>
				))}
			</nav>
		</header>
	)
}

export default Header
