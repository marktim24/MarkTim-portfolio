import OutsideClickHandler from 'react-outside-click-handler'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './menu.module.scss'

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

export default function Menu({ closeModal, setModal, modal }) {
	const location = useLocation()
	const { pathname } = location

	const splitLocation = pathname.split('/')

	return (
		<OutsideClickHandler onOutsideClick={() => setModal(false)}>
			<div modal={modal} className={styles.responsive_menu}>
				<ul className={styles.menu}>
					<NavLink onClick={closeModal}>About Me</NavLink>
					<NavLink onClick={closeModal}>Projects</NavLink>
					<NavLink onClick={closeModal}>Contacts</NavLink>
				</ul>
			</div>
		</OutsideClickHandler>
	)
}
