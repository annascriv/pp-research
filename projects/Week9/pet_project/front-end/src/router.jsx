import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { OwnerPage } from './pages/Owner'
import { PetsPage } from './pages/Pets';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:'owners',
                element:<OwnerPage/>
            },
            {
                path:'pets',
                element: <PetsPage/>
            }
        ]
    }
])

export default router;