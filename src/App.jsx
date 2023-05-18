import Page from './components/Page/Page'
import Preview from './screens/Preview/Preview'
import Home from '/src/screens/home/Home'
import '/src/styles/app.scss'

import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<Page>
							<Home />
						</Page>
					}
				/>
				<Route
					path='/preview/:category/:title'
					element={
						<Page>
							<Preview />
						</Page>
					}
				/>
			</Routes>
		</>
	)
}

export default App
