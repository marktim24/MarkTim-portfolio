import cn from 'classnames'
import styles from './skills.module.scss'

const Skills = () => {
	return (
		<section className={styles.skills}>
			<div className={cn('container', styles.container)}>
				<div className={styles.skillsName}>
					<h3>Skills in development:</h3>
					<div className='line'></div>
					<ul className={styles.skillsList}>
						<li>WordPress</li>
						<li>Figma/ Adobe XD</li>
						<li>Prototyping</li>
						<li>After Effect</li>
						<li>UI Kit</li>
						<li>Typography</li>
						<li>Agile</li>
						<li>Premiere Pro</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills
