import cn from 'classnames'
import styles from './skills.module.scss'

const Skills = ({ name, database }) => {
	return (
		<section id='skills' className={styles.skills}>
			<div className={cn('container', styles.container)}>
				<div className={styles.skillsName}>
					<h3>Experienced in {name}:</h3>
					<div className='line'></div>
					<ul className={styles.skillsList}>
						{database &&
							database.map((item, index) => (
								<div key={index} className={styles.skillItem}>
									<img src={item.icon} alt={item.skill} />
									<li>{item.skill}</li>
								</div>
							))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills
