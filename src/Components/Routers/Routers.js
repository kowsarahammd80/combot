import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Pages from "../../Pages/Pages";

const router= createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
          {
            path: '/',
            element: <Pages/>
          }
        ]
    }
])

export default router;