import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motionProps } from '../../assets/animation-settings/motionProps.js'
import Menu from './Menu/Menu'
import styles from './header.module.scss'

export const Header = ({ title, navigation }) => {
	const [modal, setModal] = useState(false)
	const [dropdown, setDropdown] = useState(false)
	const navigate = useNavigate()

	const toggleDropdown = () => {
		setDropdown(!dropdown)
	}

	const openModal = () => {
		setModal(true)
		setDropdown(false)
	}

	const closeModal = () => {
		setModal(false)
		setDropdown(false)
	}

	const handleContactClick = () => {
		closeModal()
		navigate('/contact')
	}

	return (
		<header className={styles.header}>
			<div className={cn('container', styles.container)}>
				<div className={styles.content}>
					<NavLink
						style={
							navigation
								? {}
								: { fontWeight: '600', textTransform: 'uppercase' }
						}
						className={styles.heading}
						{...motionProps}
						to='/'
					>
						{title}
					</NavLink>
					{navigation && (
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
							{dropdown && (
								<Menu
									closeModal={closeModal}
									setModal={openModal}
									modal={modal}
								/>
							)}
						</div>
					)}

					{navigation ? (
						<div className={styles.mini_wrapper}>
							<motion.div {...motionProps}>
								<NavLink to='/about' onClick={closeModal}>
									About Me
								</NavLink>
							</motion.div>
							<motion.div {...motionProps}>
								<NavLink to='/projects' onClick={closeModal}>
									Projects
								</NavLink>
							</motion.div>
							<motion.div {...motionProps}>
								<NavLink to='/projects' onClick={closeModal}>
									Contact Me
								</NavLink>
							</motion.div>
						</div>
					) : (
						<motion.div className={styles.mini_wrapper_title} {...motionProps}>
							<Link to='/'>
								<img
									className={styles.logo}
									src='/logo.svg'
									alt='Personal Logo'
								/>
							</Link>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
