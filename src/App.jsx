import ContactForm from './components/ContactForm/ContactForm'
import Preview from './screens/Preview/Preview'
import Home from '/src/screens/home/Home'
import '/src/styles/app.scss'

import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/preview/:category/:title' element={<Preview />} />
				<Route path='/contact' element={<ContactForm />} />
			</Routes>
		</>
	)
}

export default App
