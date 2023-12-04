import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { PlantPage } from './pages/PlantPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'plants',
                element: <PlantPage/>
            }
        ]
    }
]
)