// import UseReducerHook from "./hooks/UseReducerHook"
// import BearBox from "./pages/zustand/example_2/BearBox"
// import CourseForm from "./pages/zustand/example_1/CourseForm"
// import CourseList from "./pages/zustand/example_1/CourseList"
// import CatBox from "./pages/zustand/example_2/CatBox"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routesArray } from './routes/routes'


function App() {
  const routes = createBrowserRouter(routesArray)
  return <RouterProvider router={routes} />
}

export default App
