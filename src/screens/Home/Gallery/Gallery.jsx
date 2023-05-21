import cn from 'classnames'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { motionProps } from '../../../assets/animation-settings/motionProps'
import Card from '../../../components/Card/Card'
import Dropdown from '../../../components/Dropdown/Dropdown'
import gallery from './gallery.data'
import styles from './gallery.module.scss'

export default function Gallery() {
	const options = []
	gallery.map(item => options.push(item.title))

	const [direction, setDirection] = useState(gallery[0].title)

	return (
		<motion.section id='projects' className={styles.section}>
			<div className={cn('container', styles.container)}>
				<div className={styles.head}>
					<h2>my works:</h2>
					<div className='line'></div>
					<div className={styles.nav}>
						{gallery.map((item, index) => (
							<motion.button
								className={cn(styles.button, {
									[styles.active]: item.title === direction,
								})}
								onClick={() => setDirection(item.title)}
								key={index}
								{...motionProps}
							>
								{item.title}
							</motion.button>
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
						?.galleries.map((item, index) => {
							return <Card key={index} category={direction} {...item} />
						})}
				</div>
			</div>
		</motion.section>
	)
}
