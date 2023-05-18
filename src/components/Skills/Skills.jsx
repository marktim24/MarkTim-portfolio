import cn from 'classnames'
import styles from './skills.module.scss'

const Skills = ({ name, database }) => {
	return (
		<section className={styles.skills}>
			<div className={cn('container', styles.container)}>
				<div className={styles.skillsName}>
					<h3>Skills in {name}:</h3>
					<div className='line'></div>
					<ul className={styles.skillsList}>
						{database && database.map((item, index) => <li>{item.skill}</li>)}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills
