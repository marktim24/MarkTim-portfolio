import { motion } from 'framer-motion'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import styles from './DownloadModal.module.scss'

const DownloadModal = ({ closeModal }) => {
	const [selectedOption, setSelectedOption] = useState(null)

	const handleOptionClick = option => {
		setSelectedOption(option)
	}

	const handleOpenLink = () => {
		// Implement the logic to open the link based on the selected option
		if (selectedOption === 'Graphic Design') {
			// Open graphic design link
			window.open(
				'https://drive.google.com/file/d/1QuxCQ6vVTn35L_4I2GDKR7DB2aTTNq4b/view?usp=sharing',
				'_blank'
			)
		} else if (selectedOption === 'Frontend') {
			// Open frontend link
			window.open(
				'https://drive.google.com/file/d/1QuxCQ6vVTn35L_4I2GDKR7DB2aTTNq4b/view?usp=sharing',
				'_blank'
			)
		}
	}

	const handleOutsideClick = () => {
		closeModal()
	}

	return (
		<OutsideClickHandler onOutsideClick={handleOutsideClick}>
			<motion.div
				className={styles.modal}
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
			>
				<h3 className={styles.title}>Select CV</h3>
				<ul className={styles.options}>
					<li
						className={
							selectedOption === 'Graphic Design' ? styles.selected : ''
						}
						onClick={() => handleOptionClick('Graphic Design')}
					>
						Graphic Design
					</li>
					<li
						className={selectedOption === 'Frontend' ? styles.selected : ''}
						onClick={() => handleOptionClick('Frontend')}
					>
						Frontend
					</li>
				</ul>
				<button className={styles.downloadButton} onClick={handleOpenLink}>
					Open Link
				</button>
				<button className={styles.closeButton} onClick={closeModal}>
					Close
				</button>
			</motion.div>
		</OutsideClickHandler>
	)
}

export default DownloadModal
