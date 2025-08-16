import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Index'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
