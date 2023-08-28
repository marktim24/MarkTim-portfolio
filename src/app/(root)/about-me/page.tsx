import AboutMe from '@/components/AboutMe/AboutMe'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { FC } from 'react'

const page: FC = () => {
	return (
		<>
			<div className='container'>
				<Header />
				<div>
					<AboutMe />
				</div>

				<div className='mt-52'>
					<Footer />
				</div>
			</div>
		</>
	)
}

export default page
