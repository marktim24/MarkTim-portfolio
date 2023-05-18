import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu/Menu'
import styles from './header.module.scss'

export const Header = (title, leftInfo) => {
	const [modal, setModal] = useState(false)
	const [dropdown, setDropdown] = useState(false)

	const closeModal = () => {
		setModal(false)
	}

	const openModal = () => {
		setModal(!modal)
	}

	const closeDropdown = () => {
		setDropdown(false)
	}

	const toggleDropdown = () => {
		setDropdown(!dropdown)
	}

	return (
		<header className={styles.header}>
			<div className={cn('container', styles.container)}>
				<div className={styles.content}>
					<NavLink className={styles.heading} to='/'>
						{' '}
						Mark Tim Portfolio 2023 ©
					</NavLink>
					<div>
						<button
							onClick={toggleDropdown}
							className={cn('', styles.responsive_button)}
						>
							{dropdown ? (
								<svg
									width='20'
									height='18'
									viewBox='0 0 40 40'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20 13.9995L37.7778 0.524418L40 5.09519L25.2898 18.9995L40 32.9038L37.7778 37.4746L20.0003 23.9993L2.22217 37.4746L0 32.9038L14.7102 18.9995L0 5.09519L2.22217 0.524414L20 13.9995Z'
										fill='black'
									></path>
								</svg>
							) : (
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
							)}
						</button>
						{dropdown ? (
							<section className={cn('background')}>
								<div className={cn('align')}>
									<Menu openModal={setModal} closeDropdown={setDropdown} />
								</div>
							</section>
						) : null}
					</div>
					<div className={styles.mini_wrapper}>
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						>
							<NavLink>About Me</NavLink>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						>
							<NavLink>Projects</NavLink>
						</motion.div>
						<motion.div
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							transition={{ type: 'spring', stiffness: 300, damping: 15 }}
						>
							<NavLink>Contacts</NavLink>
						</motion.div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
