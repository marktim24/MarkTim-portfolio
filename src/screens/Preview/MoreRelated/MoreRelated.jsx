import cn from 'classnames'
import { useState } from 'react'
import Card from '../../../components/Card/Card'
import gallery from '../../Home/Gallery/gallery.data'
import styles from './moreRelated.module.scss'

const MoreRelated = ({ relatedCards }) => {
	const [direction, setDirection] = useState(gallery[0].title)

	return (
		<div className={cn('section section-pb', styles.section)}>
			<div className={cn('container', styles.container)}>
				<h2 className={styles.heading}>More related projects:</h2>
				<div className={styles.wrapper}>
					{relatedCards.map((item, index) => {
		
						return (
							<Card
								key={`${direction}-${item.title}`}
								category={direction}
								{...item}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default MoreRelated
