import cn from 'classnames'
import { useMediaQuery } from 'react-responsive'
import HeroDesktop from './Adaptation/HeroDesktop'
import HeroMobile from './Adaptation/HeroMobile'
import styles from './hero.module.scss'

const Hero = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 991px)' })

	return (
		<section className={styles.section}>
			<div className={cn('container', styles.container)}>
				<div className={styles.wrapper}>
					{isMobile ? <HeroMobile /> : <HeroDesktop />}
				</div>
			</div>
		</section>
	)
}

export default Hero
