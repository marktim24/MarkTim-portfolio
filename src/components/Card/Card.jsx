import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './card.module.scss'

const Card = props => {
	const { category, title, ...rest } = props
	return (
		<motion.article initial='hidden' className={styles.container}>
			<Link to={`/preview/${category}/${title}`}>
				<div className={styles.image_container}>
					<img className={styles.image} src={props.image} />
				</div>
			</Link>

			<div className={styles.content}>
				<h3 className={styles.title}>{props.title}</h3>
				<p className={styles.skills}>{props.skills}</p>
			</div>
		</motion.article>
	)
}

export default Card
