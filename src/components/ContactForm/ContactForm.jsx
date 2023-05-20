import { useForm, ValidationError } from '@formspree/react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styles from './contactform.module.scss'

export default function ContactForm() {
	const [snack, setSnack] = useState(false)

	const openSnack = () => {
		setTimeout(() => {
			setSnack(true)
		})
		clearTimeout(6000)
	}

	const [state, handleSubmit] = useForm('meqnedgz')
	if (state.succeeded) {
		return (
			<p style={{ textAlign: 'center', marginTop: 16, color: '#272b30' }}>
				Thanks for reaching out!
			</p>
		)
	}
	return (
		<motion.div>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.input_wrapper}>
					<motion.div>
						<input
							className={styles.input}
							placeholder='Name'
							id='name'
							type='name'
							name='name'
							required
							autoFocus
						/>
					</motion.div>

					<ValidationError prefix='Name' field='name' errors={state.errors} />
					<motion.div>
						<input
							className={styles.input}
							placeholder='Email'
							id='email'
							type='email'
							name='email'
						/>
					</motion.div>

					<ValidationError prefix='Email' field='email' errors={state.errors} />
				</div>
				<motion.div>
					<textarea
						className={styles.textarea}
						placeholder='Message'
						id='message'
						name='message'
					/>
				</motion.div>

				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
				<motion.div>
					<button
						style={{ marginTop: 8 }}
						className={cn('button', styles.button)}
						onClick={openSnack}
						type='submit'
						disabled={state.submitting}
					>
						Submit
					</button>
				</motion.div>
			</form>
		</motion.div>
	)
}
