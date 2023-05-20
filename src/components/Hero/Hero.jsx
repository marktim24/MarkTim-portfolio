import cn from 'classnames'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import HeroDesktop from './Adaptation/HeroDesktop'
import HeroMobile from './Adaptation/HeroMobile'
import styles from './hero.module.scss'

const Hero = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 1090px)' })
	const [modalOpen, setModalOpen] = useState(false)

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<section className={styles.section}>
			<div className={cn('container', styles.container)}>
				<div className={styles.wrapper}>
					{isMobile ? (
						<HeroMobile
							modalOpen={modalOpen}
							openModal={openModal}
							closeModal={closeModal}
						/>
					) : (
						<HeroDesktop
							modalOpen={modalOpen}
							openModal={openModal}
							closeModal={closeModal}
						/>
					)}
				</div>
			</div>
		</section>
	)
}

export default Hero
