// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element:<Home></Home>
        },
        {
          path: 'home',
          loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element:<Home></Home>
        },
        {
          path: '/statistics',
          element:<Statistics></Statistics>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: "/quiz/:id",
          loader:  ({ params }) => {
            
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element:<QuizQuestion></QuizQuestion>
        },
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
