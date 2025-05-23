import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import ListedBooks from './components/ListedBooks/ListedBooks'
import PagesToRead from './components/PagesToRead/PagesToRead'
import RootLayout from './layout/RootLayout'
import ErrorPage from './components/ErrorPage/ErrorPage'
import BookDetail from './components/BookDetail/BookDetail'
import { ToastContainer } from 'react-toastify';


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout></RootLayout>} 
      errorElement={<ErrorPage></ErrorPage>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='books/:bookId' element={<BookDetail></BookDetail>
      } loader={() => fetch('booksData.json')}
      ></Route>
        <Route path='listedBooks' element={<ListedBooks></ListedBooks>}
        loader={() => fetch('booksData.json')}//do not load all data for some data.
        ></Route>
        <Route path='pagesToRead' element={<PagesToRead></PagesToRead>}></Route>
      </Route>
    )
  )
  
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
