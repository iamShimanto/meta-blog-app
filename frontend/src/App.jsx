import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/layout/Index'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Contact from './pages/Contact'
import NewBlog from './components/blog/add-blog/NewBlog'
import ManageBlog from './components/blog/manage-blog/ManageBlog'
import UpdateBlog from './components/blog/manage-blog/UpdateBlog'
import BlogDetails from './components/blog/BlogDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact />} />
            <Route path='/newblog' element={<NewBlog/>}/>
            <Route path='/manageblog' element={<ManageBlog />} />
            <Route path='/blogs/edit/:id' element={<UpdateBlog/>}/>
            <Route path='/blogs/:id' element={<BlogDetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
