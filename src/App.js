import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducers';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "login",
      element: (
        <Login/>
      )
    },
    {
      path: "signup",
      element: (
        <SignUp/>
      )
    }
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
    
  );
}

export default App;
