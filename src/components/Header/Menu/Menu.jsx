import { AnimatePresence, motion } from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import { handleScrollToSection } from '../../../assets/scrollUtils/scrollUtils'
import styles from './menu.module.scss'

export default function Menu({ closeModal, setModal, onMenuItemClick }) {
	const menuVariants = {
		open: {
			opacity: 1,
			height: 'auto',
			transition: {
				opacity: { duration: 0.2 },
				height: { duration: 0.4 },
			},
		},
		closed: {
			opacity: 0,
			height: 0,
			transition: {
				opacity: { duration: 0.2 },
				height: { duration: 0.2 },
			},
		},
	}

	const itemVariants = {
		open: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 300, damping: 24 },
		},
		closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
	}

	const handleMenuItemClick = () => {
		onMenuItemClick() // Call the onMenuItemClick prop to close the dropdown
		closeModal()
	}

	return (
		<OutsideClickHandler onOutsideClick={() => setModal(false)}>
			<div className={styles.responsive_menu}>
				<AnimatePresence>
					<motion.ul
						className={styles.menu}
						variants={menuVariants}
						initial='closed'
						animate='open'
						exit='closed'
					>
						<motion.NavLink
							variants={itemVariants}
							onClick={() => {
								handleScrollToSection('projects')
								handleMenuItemClick()
							}}
						>
							About Me
						</motion.NavLink>
						<motion.NavLink
							variants={itemVariants}
							onClick={() => {
								handleScrollToSection('projects')
								handleMenuItemClick()
							}}
						>
							Projects
						</motion.NavLink>
						<motion.NavLink
							variants={itemVariants}
							onClick={() => {
								handleScrollToSection('contacts')
								handleMenuItemClick()
							}}
						>
							Contacts
						</motion.NavLink>
					</motion.ul>
				</AnimatePresence>
			</div>
		</OutsideClickHandler>
	)
}
