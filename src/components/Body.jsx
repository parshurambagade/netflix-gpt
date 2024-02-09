import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Browse from "../pages/browse/Browse"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Browse />
        },
        {
            path: "/login",
            element: <Login />
        }
    ])
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body