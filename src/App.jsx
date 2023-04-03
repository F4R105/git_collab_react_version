import { createBrowserRouter, RouterProvider } from "react-router-dom"


import Layout from "./Layout"
// PAGES
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserAccount from "./pages/UserAccount"

// USER PAGES
import Dashboard from "./pages/user_pages/Dashboard"
import Authors from "./pages/user_pages/Authors"
import Blogs from "./pages/user_pages/Blogs"
import CreateBlog from "./pages/user_pages/CreateBlog"
import EditBlog from "./pages/user_pages/EditBlog"
import Settings from "./pages/user_pages/Settings"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },{
        path: 'login',
        element: <Login />
      },{
        path: 'register',
        element: <Register />
      },{
        path: 'user',
        element: <UserAccount />,
        children: [
          {
            path: '',
            element: <Blogs />
          },
          {
            path: 'dashboard',
            element: <Dashboard />
          },
          {
            path: 'authors',
            element: <Authors />
          },
          {
            path: 'create',
            element: <CreateBlog />
          },
          {
            path: 'edit',
            element: <EditBlog />
          },
          {
            path: 'settings',
            element: <Settings />
          },
        ]
      }
    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
