import cn from 'classnames'
import styles from './hero.module.scss'

const Hero = props => {
	return (
		<div className={cn('section', styles.section)}>
			<div className={cn('container', styles.container)}>
				<div className={styles.image_container}>
					<img src='/images/01.jpg' />
				</div>

				<div>
					<h1 className={cn('h2', styles.title)}>By the Sea</h1>
					<p className={cn('body', styles.subtitle)}>
						Molestiae aliquid magnam voluptatibus eum blanditiis eos doloremque.
						Repellendus dicta fuga est cumque soluta autem ut. Dolorem
						voluptatem accusantium quis. Minima dolore nobis ut. Amet labore
						delectus ex. Possimus fuga cumque cupiditate voluptatibus fugiat
						tempora explicabo omnis repellendus. Nihil tempore ratione molestias
						mollitia itaque eum pariatur rerum.
					</p>
					<br />

					<p className={cn('body', styles.subtitle)}>
						Est iste fugiat unde nobis aut. Ab odio velit dolores. Dolorem
						voluptate ut sapiente magni in quo voluptas blanditiis. Est sint
						nihil molestiae id molestiae vitae. Et aliquam aliquid ullam
						corporis mollitia ipsam ut mollitia. Deleniti vel aliquid. Illum
						rerum ut et aut et. Doloribus expedita et ut.
					</p>
					<p className={cn('caption', styles.date)}>April 11, 2022</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
