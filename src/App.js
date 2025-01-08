import logo from './logo.svg';
import './App.css';
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './Components/Routers/Routers';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Force the theme (optional, for safety)
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);
  return (
    <div className="">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
