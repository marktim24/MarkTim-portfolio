import cn from 'classnames'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Card from '../../../components/Card/Card'
import Dropdown from '../../../components/Dropdown/Dropdown'
import gallery from './GalleryData'
import styles from './gallery.module.css'

export default function Gallery() {
	const options = []
	gallery.map(item => options.push(item.title))

	const [direction, setDirection] = useState(options[0])

	return (
		<motion.section className={styles.section}>
			<div className={cn('container', styles.container)}>
				<div className={styles.head}>
					<div className={styles.nav}>
						{gallery.map((item, index) => (
							<button
								className={cn(styles.button, {
									[styles.active]: item.title === direction,
								})}
								onClick={() => setDirection(item.title)}
								key={index}
							>
								{item.title}
							</button>
						))}
					</div>
					<Dropdown
						className={styles.dropdown}
						value={direction}
						options={options}
						setValue={setDirection}
					/>
				</div>

				<div className={styles.wrapper}>
					{gallery
						.find(item => item.title === direction)
						.galleries.map((item, index) => (
							<Card {...item} />
						))}
				</div>
			</div>
		</motion.section>
	)
}
