import cn from 'classnames'
import OutsideClickHandler from 'react-outside-click-handler'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './menu.module.scss'

export default function Menu({ closeModal, setModal, modal }) {
	const location = useLocation()
	const { pathname } = location

	const splitLocation = pathname.split('/')

	return (
		<OutsideClickHandler onOutsideClick={() => setModal(false)}>
			<div modal={modal} className={styles.responsive_menu}>
				<button
					className={cn('button-tiny', styles.close_button)}
					onClick={closeModal}
				>
					<svg
						width='19'
						height='20'
						viewBox='0 0 19 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M10.5323 0L9.80426 14.9323L17.1717 9.32949L18.1818 11.4071L9.09091 20L0 11.4071L1.01008 9.32949L8.37755 14.9323L7.64954 0H10.5323Z'
							fill='black'
						/>
					</svg>
				</button>
				<ul className={styles.menu}>
					<NavLink onClick={closeModal}>About Me</NavLink>
					<NavLink onClick={closeModal}>Projects</NavLink>
					<NavLink onClick={closeModal}>Contacts</NavLink>
				</ul>
			</div>
		</OutsideClickHandler>
	)
}
