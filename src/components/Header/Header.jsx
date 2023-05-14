import cn from 'classnames'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './Menu/Menu'
import styles from './header.module.scss'

export const Header = () => {
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

	const openDropdown = () => {
		setDropdown(!dropdown)
	}
	return (
		<header className={styles.header}>
			<div className={cn('container', styles.container)}>
				<NavLink className={styles.heading} to='/'>
					Mark Tim Portfolio 2023 ©
				</NavLink>
				<div>
					<button
						onClick={openDropdown}
						className={cn('', styles.responsive_button)}
					>
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
					{dropdown ? (
						<section className={cn('background')}>
							<div className={cn('align')}>
								<Menu
									openModal={openModal}
									closeModal={closeDropdown}
									setModal={setDropdown}
								/>
							</div>
						</section>
					) : null}
				</div>
				<div className={styles.mini_wrapper}>
					<NavLink>About Me</NavLink>
					<NavLink>Projects</NavLink>
					<NavLink>Contacts</NavLink>
				</div>
			</div>
		</header>
	)
}

export default Header
