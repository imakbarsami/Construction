import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/frontend/Home'
import About from './components/frontend/About'
import './assets/css/style.scss'
import Services from './components/frontend/Services'
import Projects from './components/frontend/Projects'
import Blogs from './components/frontend/Blogs'
import ContactUs from './components/frontend/ContactUs'
import Login from './components/backend/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard'
import Register from './components/backend/Register'
import RequiredAuth from './components/Common/RequiredAuth'
import { default as ShowServices } from './components/backend/services/Show'
import { default as CreateService } from './components/backend/services/Create'
import { default as EditService } from './components/backend/services/Edit'
import { default as ShowProject } from './components/backend/projects/Show'
import { default as EditProject } from './components/backend/projects/Edit'
import { default as CreateProject } from './components/backend/projects/Create'
import { default as ShowArticle } from './components/backend/articles/Show'
import { default as CreateArticle } from './components/backend/articles/Create'
import { default as EditArticle } from './components/backend/articles/Edit'
import { default as ShowTestimonial } from './components/backend/testimonials/Show'
import { default as CreateTestimonial } from './components/backend/testimonials/Create'
import { default as EditTestimonial } from './components/backend/testimonials/Edit'
import { default as ShowMember } from './components/backend/members/Show'
import { default as CreateMember } from './components/backend/members/Create'
import { default as EditMember } from './components/backend/members/Edit'
import ServiceDetail from './components/frontend/ServiceDetail'
import ProjectDetails from './components/frontend/ProjectDetails'
import BlogDetails from './components/frontend/BlogDetails'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/service/:id' element={ <ServiceDetail/>} />
          <Route path='/project/:id' element={ <ProjectDetails/>} />
          <Route path='/blog/:id' element={ <BlogDetails/>} />
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/register' element={<Register />} />

          <Route path='/admin/dashboard' element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          } />

          <Route path='/admin/services' element={
            <RequiredAuth>
              <ShowServices />
            </RequiredAuth>
          } />

          <Route path='/admin/service/create' element={
            <RequiredAuth>
              <CreateService />
            </RequiredAuth>
          } />


          <Route path='/admin/service/edit/:id' element={
            <RequiredAuth>
              <EditService />
            </RequiredAuth>
          } />


          <Route path='/admin/projects' element={
            <RequiredAuth>
              <ShowProject />
            </RequiredAuth>
          } />

          <Route path='/admin/project/create' element={
            <RequiredAuth>
              <CreateProject />
            </RequiredAuth>
          } />

          <Route path='/admin/project/edit/:id' element={
            <RequiredAuth>
              <EditProject />
            </RequiredAuth>
          } />

          <Route path='/admin/articles' element={
            <RequiredAuth>
              <ShowArticle />
            </RequiredAuth>
          } />

          <Route path='/admin/article/create' element={
            <RequiredAuth>
              <CreateArticle />
            </RequiredAuth>
          } />

          <Route path='/admin/article/edit/:id' element={
            <RequiredAuth>
              <EditArticle />
            </RequiredAuth>
          } />

          <Route path='/admin/testimonials' element={
            <RequiredAuth>
              <ShowTestimonial />
            </RequiredAuth>
          } />

          <Route path='/admin/testimonial/create' element={
            <RequiredAuth>
              <CreateTestimonial />
            </RequiredAuth>
          } />

          <Route path='/admin/testimonial/edit/:id' element={
            <RequiredAuth>
              <EditTestimonial />
            </RequiredAuth>
          } />


          <Route path='/admin/members' element={
            <RequiredAuth>
              <ShowMember />
            </RequiredAuth>
          } />

          <Route path='/admin/member/create' element={
            <RequiredAuth>
              <CreateMember />
            </RequiredAuth>
          } />

          <Route path='/admin/member/edit/:id' element={
            <RequiredAuth>
              <EditMember />
            </RequiredAuth>
          } />

        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
      />
    </>
  )
}

export default App
