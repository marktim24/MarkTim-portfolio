import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motionProps } from '../../assets/animation-settings/motionProps.js'
import { handleScrollToSection } from '../../assets/scrollUtils/scrollUtils.js'
import Menu from './Menu/Menu'
import styles from './header.module.scss'

export const Header = ({ title, navigation }) => {
	const [modalOpen, setModalOpen] = useState(false)

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const toggleModal = () => {
		setModalOpen(prevModalOpen => !prevModalOpen)
	}

	return (
		<header className={styles.header}>
			<div className={cn('container', styles.container)}>
				<div className={styles.content}>
					<NavLink
						className={cn(styles.heading, {
							[styles.navigationTitle]: !navigation,
						})}
						{...motionProps}
						to='/'
					>
						{title}
					</NavLink>
					{navigation && (
						<div>
							<button
								onClick={toggleModal}
								className={cn('', styles.responsive_button)}
							>
								{modalOpen ? (
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
							{modalOpen && (
								<Menu closeModal={closeModal} onMenuItemClick={closeModal} />
							)}
						</div>
					)}
					{navigation ? (
						<div className={styles.mini_wrapper}>
							<motion.div {...motionProps}>
								<NavLink
									onClick={() => {
										handleScrollToSection('skills')
									}}
								>
									About Me
								</NavLink>
							</motion.div>
							<motion.div {...motionProps}>
								<NavLink
									onClick={() => {
										handleScrollToSection('projects')
									}}
								>
									Projects
								</NavLink>
							</motion.div>
							<motion.div {...motionProps}>
								<NavLink
									onClick={() => {
										handleScrollToSection('contacts')
									}}
								>
									Contacts
								</NavLink>
							</motion.div>
						</div>
					) : (
						<motion.div className={styles.mini_wrapper_title} {...motionProps}>
							<Link to='/'>
								<svg
									width='50'
									height='50'
									viewBox='0 0 536 438'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M0 438H536V380.692H57.2824V57.8376H151.865V268.097H222.517V57.8376H355.97V0L0 0.00323084V438Z'
										fill='black'
									/>
									<path
										d='M488.075 358.418L536 279.33V182.466H520.68L463.167 279.443L350.889 90.0561H257.771V358.418H326.747V174.398L438.259 358.418H488.075Z'
										fill='black'
									/>
								</svg>
							</Link>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
