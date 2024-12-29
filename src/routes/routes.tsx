import Counter from '../pages/react-redux-toolkit/counter/Counter'
import { AddPostFrom } from '../pages/react-redux-toolkit/posts/AddPostFrom'
import PostsList from '../pages/react-redux-toolkit/posts/PostsList'
import { AuthRoute } from './AuthRoute'


export const routesArray = [
    {
        path: '/',
        element: <AddPostFrom />,
    },
    {
        path: '/redux-toolkit/counter',
        element: <Counter/>,
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
