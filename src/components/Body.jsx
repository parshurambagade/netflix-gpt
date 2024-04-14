import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Browse from "../pages/browse/Browse"
import MoviePage from "../pages/movie/MoviePage"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Browse />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
          path: "/movie/:movieId",
          element: <MoviePage />
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body