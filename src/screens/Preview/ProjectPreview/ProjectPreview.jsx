import cn from 'classnames'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import { motionProps } from '../../../assets/animation-settings/motionProps'
import styles from './projectPreview.module.scss'

const ProjectPreview = ({ relatedCards, currentTitle }) => {
	const selectedCard = relatedCards.find(card => card.title === currentTitle)
	const isSmallScreen = useMediaQuery({ query: '(max-width: 1250px)' })

	return (
		<section className={styles.section}>
			<div className={cn('container', styles.container)}>
				<div className={styles.tools}>
					<h3>Tools</h3>
					{selectedCard && (
						<ul>
							{selectedCard.instruments.map((instrument, index) => (
								<li key={index}>{instrument}</li>
							))}
						</ul>
					)}
				</div>
				<div className={styles.content}>
					<h2>{currentTitle}</h2>
					{isSmallScreen && selectedCard && <p>{selectedCard.description}</p>}
					{isSmallScreen && (
						<div className={styles.links}>
							<button className={styles.linkButton} {...motionProps}>
								<a
									href={selectedCard && selectedCard.link}
									target='_blank'
									rel='noopener noreferrer'
								>
									<motion.h3 {...motionProps}>Go to Project</motion.h3>
								</a>
							</button>
						</div>
					)}
					{selectedCard && (
						<img src={selectedCard.cardImage} alt={selectedCard.title} />
					)}
				</div>

				{!isSmallScreen && (
					<div className={styles.links}>
						<button className={styles.linkButton} {...motionProps}>
							<a
								href={selectedCard && selectedCard.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<motion.h3 {...motionProps}>Go to Project</motion.h3>
							</a>

							{selectedCard && <p>{selectedCard.description}</p>}
						</button>
						<Link to={`/`} className={styles.backButton}>
							<motion.h3 className='second-h3' {...motionProps}>
								Home
							</motion.h3>
						</Link>
					</div>
				)}
				{isSmallScreen && (
					<Link to={`/`} className={styles.backButton}>
						<motion.h3 className='second-h3' {...motionProps}>
							Home
						</motion.h3>
					</Link>
				)}
			</div>
		</section>
	)
}
export default ProjectPreview
