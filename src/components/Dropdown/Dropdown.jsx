import cn from 'classnames'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Icon from '../Icon'
import styles from './dropdown.module.scss'

const Dropdown = ({ className, value, setValue, options }) => {
	const [visible, setVisible] = useState(false)

	const handleClick = value => {
		setValue(value)
		setVisible(false)
	}

	return (
		<OutsideClickHandler onOutsideClick={() => setVisible(false)}>
			<div
				className={cn(styles.dropdown, className, { [styles.active]: visible })}
			>
				<div className={styles.head} onClick={() => setVisible(!visible)}>
					<div className={styles.selection}>{value}</div>
					<div className={styles.arrow}>
						<Icon name='arrow-bottom' size={15} />
					</div>
				</div>

				<div className={styles.body}>
					{options.map((item, index) => (
						<div
							className={cn(styles.option, {
								[styles.selectioned]: item === value,
							})}
							onClick={() => handleClick(item, index)}
							key={index}
						>
							{item}
						</div>
					))}
				</div>
			</div>
		</OutsideClickHandler>
	)
}

export default Dropdown
