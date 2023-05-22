import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import gallery from '../Home/Gallery/gallery.data'
import ProjectPreview from './ProjectPreview/ProjectPreview'

const Preview = () => {
	const { category, title } = useParams()
	const location = useLocation()

	useEffect(() => {
		sessionStorage.setItem('currentTitle', title)
	}, [title])

	useEffect(() => {
		sessionStorage.removeItem('currentTitle')
	}, [location, title])

	const currentTitle = sessionStorage.getItem('currentTitle') || 'Default Title'

	const relatedCards = (
		gallery.find(item => item.title === category)?.galleries || []
	).filter(item => item.title !== currentTitle)

	return (
		<>
			<Header title={category} navigation={false} />
			<ProjectPreview relatedCards={relatedCards} currentTitle={currentTitle} />
			<Footer navigation={false} />
		</>
	)
}

export default Preview
