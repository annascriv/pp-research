import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage.jsx'
import CharacterPage from './pages/CharactersPage'
import NotFoundPage from './pages/NotFound'
import CharacterDetailsPage from './pages/CharacterDetailsPage'
import Favorites from './pages/Favorites'

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
                
            }, 
            {
            path:'character/:id',
            element: <CharacterDetailsPage/>
            }, 
            {
                path:'favorites/',
                element:<Favorites/>
            }

            ],
            errorElement:<NotFoundPage/>
    },

]
)

export default router