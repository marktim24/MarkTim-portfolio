import cn from 'classnames'
import gallery from '../../Home/Gallery/gallery.data'
import styles from './hero.module.scss'

const HeroPreview = () => {
	return (
		<div className={cn('section', styles.section)}>
			<div className={cn('container', styles.container)}>
				{gallery.map((item, index) => (
					<h1>{item}</h1>
				))}
			</div>
		</div>
	)
}

export default HeroPreview
