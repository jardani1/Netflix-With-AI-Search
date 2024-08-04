
import { createBrowserRouter} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'




const Body = () => {

  return (
   <RouterProvider router={approuter}/>
  )
}


const approuter = createBrowserRouter([
  {
   path: "/",
   element:<Login/>,
  },
  {
    path: "/browse",
   element:<Browse/>,
  },
])

export default Body