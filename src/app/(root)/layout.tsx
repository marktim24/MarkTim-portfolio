import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.scss'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'MarkTim Visual Frontend',
	description: 'MarkTim Visual Frontend developer Website',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
