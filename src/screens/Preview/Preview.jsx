import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Gallery from '../Home/Gallery/Gallery'
import gallery from '../Home/Gallery/gallery.data'
import ProjectPreview from './ProjectPreview/ProjectPreview'

const Preview = () => {
	const { category, title } = useParams()

	const selectedCategory = gallery.find(item => item.title === category)
	const cards = selectedCategory ? selectedCategory.galleries : []
	const selectedCard = cards.find(card => card.title === title)

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [title])

	return (
		<>
			<Header title={category} navigation={false} />
			<ProjectPreview selectedCard={selectedCard} currentTitle={title} />
			<Gallery excludeCardTitle={title} />
			<Footer navigation={false} />
		</>
	)
}

export default Preview
