import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Browse from "../pages/browse/Browse"
import MoviePage from "../pages/movie/MoviePage"
import GptSearchPage from "../pages/gpt/GptSearchPage"

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
          path: "/gpt",
          element: <GptSearchPage />
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