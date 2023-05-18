import { useLocation, useParams } from 'react-router-dom'
import gallery from '../Home/Gallery/gallery.data'
import HeroPreview from './HeroPreview/HeroPreview'

const Preview = () => {
	const { category, title } = useParams()
	const location = useLocation()
	const currentTitle = location.state?.currentTitle || 'Default Title'

	const relatedCards = (
		gallery.find(item => item.title === category)?.galleries || []
	).filter(item => item.title !== currentTitle)

	return (
		<>
			<HeroPreview relatedCards={relatedCards} currentTitle={title} />
		</>
	)
}

export default Preview
