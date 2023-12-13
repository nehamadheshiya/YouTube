import "./App.css"
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import Demo from "./Components/Demo";

const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>,
    },
    {
      path:"/watch",
      element:<WatchPage/>,
    },
    {
      path:"/demo",
      element:<Demo/>,
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
              <div >
                <Head/>
                <RouterProvider router={appRouter}/>
              </div>
  
    </Provider>

  );
}

export default App;
