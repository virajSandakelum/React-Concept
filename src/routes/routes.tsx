import { HomeDashboard } from '../pages/HomeDashboard'
import LanguageSelection from '../pages/LanguageSelection'
import WelcomePage from '../pages/WelcomePage'
import { AuthRoute } from './AuthRoute'


export const routesArray = [
    {
        path: '/',
        element: <LanguageSelection />,
    },
    {
        path: '/welcome',
        element: <WelcomePage />,
    },
    {
        path: '/home',
        element: (
            <AuthRoute>
                <HomeDashboard />
            </AuthRoute>
        ),
    },
    {
        path: "*",
        // element: <PageNotFound />,
    },
]
