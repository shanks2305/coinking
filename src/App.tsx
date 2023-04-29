import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Coin from './pages/Coin';
const Home = lazy(() => import('./pages/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/coins/:coinId',
    element: <Coin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
