import Image from 'next/image'
import profileImage from 'public/Profile_Image.png'
import { FC } from 'react'

const AboutMe: FC = () => {
	return (
		<div>
			<Image
				src={profileImage}
				alt='Logo Image'
				sizes='100vw'
				style={{
					width: '100%',
					height: 'auto',
				}}
				className='mt-11'
			/>
		</div>
	)
}

export default AboutMe
