import designSkills from '../../../components/Skills/Data/Skills/design.data'
import frontendSkills from '../../../components/Skills/Data/Skills/frontend.data'

export function getIconsForInstruments(instruments) {
	const allSkills = [...frontendSkills, ...designSkills]
	return instruments.map(instrument => {
		const skill = allSkills.find(
			item => item.skill.toLowerCase() === instrument.toLowerCase()
		)
		console.log('instrument:', instrument, 'found skill:', skill)
		return skill ? skill.icon : ''
	})
}

const gallery = [
	{
		title: 'Designed',
		galleries: [
			{
				title: 'Logofolio',
				hashTag: '#Logo Design',
				instruments: ['Adobe Illustrator', 'Adobe Photoshop'],
				previewImage:
					'/portfolio-db/preview/graphic-design/Logofolio_Preview.webp',
				cardImage: '/portfolio-db/projects/graphic-design/Logofolio.webp',
				description:
					'Feel free to explore my Logofolio, where each logo tells a story and represents the synergy between creativity, strategy, and innovation. I hope you find inspiration and a glimpse into my creative journey as you browse through these carefully crafted logos.',
				link: {
					behance: 'https://www.behance.net/gallery/168959915/Logofolio',
				},
				icons: getIconsForInstruments(['Illustrator', 'Photoshop']),
			},
			{
				title: 'Delicieuses Pates',
				hashTag: '#Pasta brand',
				instruments: ['Adobe Illustrator', 'Adobe Photoshop'],
				previewImage:
					'/portfolio-db/preview/graphic-design/PastaBrand_Preview.webp',
				cardImage: '/portfolio-db/projects/graphic-design/PastaBrand.webp',
				description:
					'With meticulous attention to detail, I have designed packaging solutions that not only enhance the overall brand experience but also effectively communicate the quality, variety, and authenticity of the pasta products.',
				link: {
					behance:
						'https://www.behance.net/gallery/171312995/Brand-Identity-Package-Design-Dlicieuses-Pates',
				},
				icons: getIconsForInstruments(['Illustrator', 'Photoshop']),
			},
			{
				title: 'Illuminartist',
				hashTag: '#Artist event',
				instruments: ['Adobe Illustrator', 'Adobe Photoshop'],
				previewImage:
					'/portfolio-db/preview/graphic-design/Illuminartist_Preview.webp',
				cardImage: '/portfolio-db/projects/graphic-design/Illuminartist.webp',
				link: {
					behance: 'https://www.behance.net/gallery/168959915/Logofolio',
				},
				icons: getIconsForInstruments(['Illustrator', 'Photoshop']),
			},
			{
				title: 'Nero',
				hashTag: '#Craft academy',
				instruments: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
				previewImage:
					'/portfolio-db/preview/graphic-design/NeroCraft_Preview.webp',
				cardImage: '/portfolio-db/projects/graphic-design/NeroCraft.webp',
				link: {
					behance:
						'https://www.behance.net/gallery/171315467/Nero-Craft-Academy',
				},
				icons: getIconsForInstruments(['Illustrator', 'Photoshop', 'Figma']),
			},
			{
				title: 'Precise Digital',
				hashTag: '#Social media ',
				instruments: ['Adobe Photoshop', 'Cinema 4D'],
				previewImage:
					'/portfolio-db/preview/graphic-design/PreciseMedia_Preview.webp',
				cardImage: '/portfolio-db/projects/graphic-design/PreciseMedia.webp',
				link: {
					behance: 'https://www.behance.net/gallery/168959915/Logofolio',
				},
				icons: getIconsForInstruments(['Illustrator', 'Photoshop', 'Figma']),
			},
			{
				title: 'Print Design',
				hashTag: '',
				instruments: ['Adobe Indesign', 'Photoshop'],
				previewImage:
					'/portfolio-db/preview/graphic-design/PrintDesign_Preview.webp',
				cardImage: '/portfolio-db/projects/graphic-design/PrintDesign.webp',
				link: {
					behance: 'https://www.behance.net/gallery/168959915/Logofolio',
				},
				icons: getIconsForInstruments(['Illustrator', 'Photoshop', 'Figma']),
			},
			{
				title: 'MARS Graphics',
				previewImage:
					'/portfolio-db/preview/graphic-design/MarsGraphics_Preview.webp',
				instruments: ['Adobe Photoshop', 'Cinema 4D'],
				cardImage: '/portfolio-db/projects/graphic-design/MarsGraphics.webp',
				link: {
					behance: 'https://www.behance.net/gallery/168959915/Logofolio',
				},
				icons: getIconsForInstruments(['Illustrator', 'Photoshop', 'Figma']),
			},
		],
	},
	{
		title: 'Developed',
		galleries: [
			{
				title: 'Personal Website',
				hashTag: '#This Website',
				instruments: ['Illustrator', 'Photoshop'],
				previewImage:
					'/portfolio-db/preview/frontend/PersonalWebsite_Preview.webp',
				cardImage: '/portfolio-db/projects/PreciseSite.png',
				link: {
					github: 'https://github.com/marktim24/MarkTim-portfolio',
				},
				icons: getIconsForInstruments(['HTML/ CSS', 'Vanilla JS', 'Figma']),
			},
			{
				title: 'Precise Site',
				instruments: ['Illustrator', 'Photoshop'],
				previewImage:
					'/portfolio-db/preview/graphic-design/PreciseSite_Preview.webp',
				cardImage: '/portfolio-db/projects/PreciseSite.png',
				link: {
					github: 'https://www.behance.net/gallery/168959915/Logofolio',
					deploy: 'https://www.behance.net/gallery/168959915/Logofolio',
				},
			},
			{
				title: 'Age Calculator',
				hashTag: '#Component',
				previewImage:
					'/portfolio-db/preview/frontend/AgeComponent_Preview.webp',
				instruments: ['React JS', 'SCSS', 'GitHub Pages'],
				cardImage: '/portfolio-db/projects/frontend/AgeComponent.webp',
				description:
					'React Vite Age Calculator component developed as a Daily Frontend Challenge',
				link: {
					github: 'https://github.com/marktim24/age-calculator-app-main',
					project: 'https://marktim24.github.io/age-calculator-app-main/',
				},
			},
			{
				title: 'Palorinne Construction',
				hashTag: '#Landing Page',
				instruments: ['HTML/CSS', 'JQuery', 'Figma'],
				previewImage: '/portfolio-db/preview/frontend/Palorinne_Preview.webp',
				cardImage: '/portfolio-db/projects/frontend/Palorinne.jpg',
				link: {
					github: 'https://github.com/marktim24/PalorinneOy-Landing-Page',
					project: 'https://marktim24.github.io/PalorinneOy-Landing-Page/',
				},
			},
			{
				title: 'Qubble Data',
				hashTag: '#Landing Page',
				instruments: ['HTML/CSS', 'JQuery', 'Figma'],
				previewImage: '/portfolio-db/preview/frontend/Palorinne_Preview.webp',
				cardImage: '/portfolio-db/projects/frontend/Palorinne.jpg',
				link: {
					github: 'https://github.com/marktim24/PalorinneOy-Landing-Page',
					project: 'https://marktim24.github.io/PalorinneOy-Landing-Page/',
				},
			},
			{
				title: 'memoria del futuro',
				hashTag: '#Cooming Soon',
				instruments: ['Next JS', 'React', 'SCSS'],
				previewImage: '/portfolio-db/preview/frontend/Memoria_Preview.webp',
				cardImage: '/portfolio-db/projects/frontend/Memoria.jpg',
				link: {
					Coming_Soon: '',
				},
			},
		],
	},
]

export default gallery
