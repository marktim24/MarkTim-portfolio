import cn from 'classnames'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card/Card'
import styles from './more.module.scss'

const gallery = [
	{
		image: 'images/08.jpg',
		title: 'By the sea',
		date: 'April 22, 2022',
	},
	{
		image: 'images/05.jpg',
		title: 'Trigo Bail',
		date: 'April 22, 2022',
	},
	{
		image: 'images/10.jpg',
		title: 'Square Pattern',
		date: 'April 22, 2022',
	},
]

const More = () => {
	return (
		<div className={cn('section section-pb', styles.section)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.wrapper}>
					{gallery.map((item, index) => (
						<Link key={index} to='/preview'>
							<Card {...item} />
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default More
