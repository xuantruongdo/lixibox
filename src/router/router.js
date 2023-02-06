import Cart from "../page/Cart"
import Category from "../page/Category"
import Home from "../page/Home"

const routes = [
    {path: '/', element: <Home/>},
    {path: '/category', element: <Category/>},
    {path: '/cart', element: <Cart/>},

]

export default routes