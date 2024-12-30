import UseEffectHook from '../hooks/useEffectHook'
import UseReducerHook from '../hooks/UseReducerHook'
import UseStateHookExample from '../hooks/useStateHook'
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
        path: '/hook/useState',
        element: <UseStateHookExample/>,
    },
    {
        path: '/hook/useEffect',
        element: <UseEffectHook/>,
    },
    {
        path: '/hook/useReducer',
        element: <UseReducerHook/>,
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
