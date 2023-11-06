import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage.jsx'
import CharacterPage from './pages/CharactersPage'
import NotFoundPage from './pages/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            }, 
            {
                path: 'about/',
                element: <AboutPage/>,
                
            },
            {
                path: 'characters/',
                element: <CharacterPage/>,
                
            }
            ],
            errorElement:<NotFoundPage/>
    },

]
)

export default router