import cn from 'classnames'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { Link, useLocation, useParams } from 'react-router-dom'
import { motionProps } from '../../../assets/animation-settings/motionProps'
import styles from './projectPreview.module.scss'

const ProjectPreview = ({ relatedCards }) => {
	const { title } = useParams()
	const location = useLocation()

	const currentTitle = location.state?.currentTitle || title
	const selectedCard = relatedCards.find(card => card.title === currentTitle)
	const isSmallScreen = useMediaQuery({ query: '(max-width: 1250px)' })
	const isMediumScreen = useMediaQuery({ query: '(max-width: 1440px)' })

	const renderTools = () => (
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
	)

	const renderProjectLinks = () => (
		<div className={styles.links}>
			<button className={styles.linkButton} {...motionProps}>
				<a
					href={selectedCard && Object.values(selectedCard.link)[0]}
					target='_blank'
					rel='noopener noreferrer'
				>
					<motion.h3 {...motionProps}>
						{selectedCard.link && Object.keys(selectedCard.link)[0]}
					</motion.h3>
				</a>
				{Object.keys(selectedCard.link)[1] && (
					<a
						href={Object.values(selectedCard.link)[1]}
						target='_blank'
						rel='noopener noreferrer'
					>
						<motion.h3 {...motionProps}>
							{selectedCard.link && Object.keys(selectedCard.link)[1]}
						</motion.h3>
					</a>
				)}
			</button>
		</div>
	)

	const renderProjectDescription = () =>
		selectedCard.description && (
			<p className={styles.links}>{selectedCard.description}</p>
		)

	const renderHomeLink = () => (
		<Link to={`/`} className={styles.backButton}>
			<motion.h3 className='second-h3' {...motionProps}>
				Home
			</motion.h3>
		</Link>
	)

	return (
		<section className={styles.section}>
			<div className={cn('container', styles.container)}>
				{!isMediumScreen && renderTools()}
				{isSmallScreen && renderTools()}
				<div className={styles.content}>
					<h2>{currentTitle}</h2>
					{isSmallScreen && (
						<>
							{renderProjectDescription()}
							{renderProjectLinks()}
						</>
					)}
					{selectedCard && (
						<img src={selectedCard.cardImage} alt={selectedCard.title} />
					)}
					{isSmallScreen && renderHomeLink()}
				</div>
				{!isSmallScreen && (
					<div className={styles.bigScreensLinks}>
						<div className={styles.bigScreensDescription}>
							{renderProjectLinks()}
							{renderProjectDescription()}
						</div>
						{renderHomeLink()}
					</div>
				)}
			</div>
		</section>
	)
}

export default ProjectPreview
