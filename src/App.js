import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import ProductPage from './components/ProductPage';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* <Category/> */}
      
      <Outlet/>

      
        
       
    </div>
  );
}


export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
      path:'/',
      element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
        },
        {
          path:'/contact',
          element:<Contact/>
          },
          {
            path:'/services',
            element:<Services/>
            },
            {
              path:'/category',
              element:<Category/>
              },
            {
              path:'product/:id',
              element:<ProductPage/>
            },
            {
              path:'category/:id',
              element:<ProductPage/>
            }
            
    ]
  },
  {
    path:'/about',
    element:<About/>
  }
])

export default App;
