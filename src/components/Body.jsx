import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Browse from "../pages/Browse"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body