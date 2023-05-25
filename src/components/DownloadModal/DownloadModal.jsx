import { motion } from 'framer-motion'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import styles from './DownloadModal.module.scss'

const DownloadModal = ({ closeModal }) => {
	const [selectedOption, setSelectedOption] = useState('Graphic Design')

	const handleOptionClick = option => {
		setSelectedOption(option)
	}

	const handleOpenLink = () => {
		switch (selectedOption) {
			case 'Graphic Design':
				window.open(
					'https://drive.google.com/file/d/1k2pjgV65hFmuHzO2lIJvdQ8Ikf4sCJrv/view?usp=sharing',
					'_blank'
				)
				break

			case 'Frontend':
				window.open(
					'https://drive.google.com/file/d/1B5FFKIKEtNQY8VDDLaMySKYsuzjgkpvX/view?usp=sharing',
					'_blank'
				)
				break

			case 'System Administrator':
				window.open(
					'https://drive.google.com/file/d/1wlkED3vs2IF7KGMNnMuKtLJnJy6PfmeW/view?usp=sharing',
					'_blank'
				)
				break
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
					<li
						className={
							selectedOption === 'System Administrator' ? styles.selected : ''
						}
						onClick={() => handleOptionClick('System Administrator')}
					>
						System Admin.
					</li>
				</ul>
				<button className={styles.downloadButton} onClick={handleOpenLink}>
					Open Link
				</button>
				<button className={styles.closeButton} onClick={closeModal}>
					<svg
						width='15'
						height='15'
						viewBox='0 0 40 40'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M20 13.9995L37.7778 0.524418L40 5.09519L25.2898 18.9995L40 32.9038L37.7778 37.4746L20.0003 23.9993L2.22217 37.4746L0 32.9038L14.7102 18.9995L0 5.09519L2.22217 0.524414L20 13.9995Z'
							fill='black'
						></path>
					</svg>
				</button>
			</motion.div>
			<motion.div
				className={styles.backgroundBlur}
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.5 }}
				transition={{ duration: 0.5 }}
			></motion.div>
		</OutsideClickHandler>
	)
}

export default DownloadModal
