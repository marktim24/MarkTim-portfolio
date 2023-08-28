import { FC } from 'react'
import styles from './footer.module.scss'

const Footer: FC = () => {
	return (
		<footer>
			<div className='line'></div>
			<div className='flex flex-row width justify-between'>
				<h1 className='font-monumentExt uppercase text-3xl inline-flex'>
					contact:
				</h1>
				<div className={styles.links}>
					<a href='https://www.behance.net/marktim24'>Behance</a>
					<a href='https://github.com/marktim24'>GitHub</a>
					<a href='https://www.linkedin.com/in/marktim24/'>LinkedIn</a>
					<a href='https://www.instagram.com/markt1m24/'>Instagram</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
