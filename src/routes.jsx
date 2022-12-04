import App from "./App";
import { Home } from "./pages/Home";

const routes=[
    {
      path: "/",
      element: <App />,
      children: [
        {
            path:"home",
            element:<Home/>
        }
        

       
    ]
}
    ]

    export default routes