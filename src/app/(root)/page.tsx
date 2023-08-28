import Footer from '@/components/Footer/Footer'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from 'public/MarkTim_Logo.svg'

export default function Home() {
	return (
		<main>
			<div className='container h-screen flex flex-col justify-between'>
				<div className='flex flex-col'>
					<Image
						src={logoImage}
						alt='Logo Image'
						sizes='100vw'
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>

					<nav className='mt-24'>
						<ul className='text-5xl uppercase'>
							<li>
								<Link href={'/about-me'}>about me</Link>
							</li>
							<li className='mt-[50px]'>
								<Link href={'/skills'}>skills</Link>
							</li>
							<li className='mt-[50px]'>
								<Link href={'/portfolio'}>portfolio</Link>
							</li>
						</ul>
					</nav>
				</div>

				<Footer />
			</div>
		</main>
	)
}
