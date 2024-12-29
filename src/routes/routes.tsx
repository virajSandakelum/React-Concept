import { AddPostFrom } from '../pages/react-redux-toolkit/posts/AddPostFrom'
import PostsList from '../pages/react-redux-toolkit/posts/PostsList'
import { AuthRoute } from './AuthRoute'


export const routesArray = [
    {
        path: '/',
        element: <AddPostFrom />,
    },
    {
        path: '/welcome',
        // element: <WelcomePage />,
    },
    {
        path: '/home',
        element: (
            <AuthRoute>
                <AddPostFrom />
            </AuthRoute>
        ),
    },
    {
        path: '/test',
        element: (
            <>
                <AddPostFrom />
                <PostsList />
            </>
        ),
    },
    {
        path: "*",
        // element: <PageNotFound />,
    },
]
