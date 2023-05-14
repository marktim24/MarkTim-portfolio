import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import styles from './dropdown.module.scss'

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const Dropdown = ({ className, value, setValue, options }) => {
	const [visible, setVisible] = useState(false)

	const handleClick = value => {
		setValue(value)
		setVisible(false)
	}

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<motion.div
				className={cn(styles.dropdown, className, { [styles.active]: visible })}
				initial={false}
				animate={visible ? 'open' : 'closed'}
			>
				<div className={styles.head} onClick={() => setVisible(!visible)}>
					<div className={styles.selection}>{value}</div>
					<motion.div
						variants={{
							open: { rotate: 180 },
							closed: { rotate: 0 },
						}}
						transition={{ duration: 0.2 }}
					>
						<svg width='15' height='15' viewBox='0 0 20 20'>
							<path d='M0 7 L 20 7 L 10 16' />
						</svg>
					</motion.div>
				</div>

				<motion.div
					className={styles.body}
					variants={{
						open: {
							clipPath: 'inset(0% 0% 0% 0%)',
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.7,
								delayChildren: 0.3,
								staggerChildren: 0.05,
							},
						},
						closed: {
							clipPath: 'inset(100% 0% 0% 0%)',
							transition: {
								type: 'spring',
								bounce: 0,
								duration: 0.3,
							},
						},
					}}
					style={{ pointerEvents: visible ? 'auto' : 'none' }}
				>
					{options.map((item, index) => (
						<motion.div
							className={cn(styles.option, {
								[styles.selectioned]: item === value,
							})}
							onClick={() => handleClick(item)}
							variants={itemVariants}
							key={index}
						>
							{item}
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</OutsideClickHandler>
	)
}

export default Dropdown
