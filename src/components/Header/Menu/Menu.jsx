import { AnimatePresence, motion } from 'framer-motion' // Import motion and AnimatePresence
import OutsideClickHandler from 'react-outside-click-handler'
import styles from './menu.module.scss'

export default function Menu({ closeModal, setModal }) {
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
						<motion.NavLink variants={itemVariants}>About Me</motion.NavLink>
						<motion.NavLink variants={itemVariants}>Projects</motion.NavLink>
						<motion.NavLink variants={itemVariants}>Contacts</motion.NavLink>
					</motion.ul>
				</AnimatePresence>
			</div>
		</OutsideClickHandler>
	)
}
