import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './projectPreview.module.scss'

const ProjectPreview = ({ relatedCards, currentTitle }) => {
	const selectedCard = relatedCards.find(card => card.title === currentTitle)
	return (
		<section className={styles.section}>
			<div className={cn('container', styles.container)}>
				<div className={styles.tools}>
					<h3>Tools</h3>
					{selectedCard && (
						<>
							{selectedCard.instruments.map((instrument, index) => (
								<li key={index}>{instrument}</li>
							))}
						</>
					)}
				</div>
				<div className={styles.content}>
					<h2>{currentTitle}</h2>
					{selectedCard && (
						<img src={selectedCard.cardImage} alt={selectedCard.title} />
					)}
				</div>
				<div className={styles.links}>
					<button className={styles.linkButton}>
						<a
							href={selectedCard && selectedCard.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							<h3>Go to Project</h3>
						</a>

						{selectedCard && <p>{selectedCard.description}</p>}
					</button>
					<Link to={`/`} className={styles.backButton}>
						<h3 className='second-h3'>Home</h3>
					</Link>
				</div>
			</div>
		</section>
	)
}
export default ProjectPreview
