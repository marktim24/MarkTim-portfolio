import { useLocation, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import gallery from '../Home/Gallery/gallery.data'
import ProjectPreview from './ProjectPreview/ProjectPreview'

const Preview = () => {
	const { category, title } = useParams()
	const location = useLocation()
	const currentTitle = location.state?.currentTitle || 'Default Title'

	const relatedCards = (
		gallery.find(item => item.title === category)?.galleries || []
	).filter(item => item.title !== currentTitle)

	return (
		<>
			<Header title={category} navigation={false} />
			<ProjectPreview relatedCards={relatedCards} currentTitle={title} />
			<Footer navigation={false} />
		</>
	)
}

export default Preview
