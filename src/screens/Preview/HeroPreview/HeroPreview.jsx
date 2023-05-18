import cn from 'classnames'
import styles from './heroPreview.module.scss'

const HeroPreview = ({ relatedCards, currentTitle }) => {
	const selectedCard = relatedCards.find(card => card.title === currentTitle)
	return (
		<section className={styles.section}>
			<div className={cn('container', styles.container)}>
				<div className={styles.tools}>
					<h3>Tools</h3>
					{selectedCard && (
						<>
							{selectedCard.skills.map((skill, index) => (
								<p key={index}>{skill}</p>
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
						<h3>Go to Project</h3>
						{selectedCard && <p>{selectedCard.description}</p>}
					</button>
					<button className={styles.backButton}>
						<h3 className='second-h3'>Home</h3>
					</button>
				</div>
			</div>
		</section>
	)
}
export default HeroPreview
