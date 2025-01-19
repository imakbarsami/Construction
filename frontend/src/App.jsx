import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
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
import {default as ShowServices} from './components/backend/services/Show'
import {default as CreateService} from './components/backend/services/Create'
import {default as EditService} from './components/backend/services/Edit'
import {default as ShowProject} from './components/backend/projects/Show'

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/services' element={<Services/>} />
           <Route path='/projects' element={<Projects/>} />
           <Route path='/blogs' element={<Blogs/>} />
           <Route path='/contact-us' element={<ContactUs/>} />
           <Route path='/admin/login' element={<Login/>} />
           <Route path='/admin/register' element={<Register/>} />

           <Route path='/admin/dashboard' element={
            <RequiredAuth>
              <Dashboard/>
            </RequiredAuth>
           } />

           <Route path='/admin/services' element={
            <RequiredAuth>
              <ShowServices/>
            </RequiredAuth>
           } />

           <Route path='/admin/service/create' element={
            <RequiredAuth>
              <CreateService/>
            </RequiredAuth>
           } />

           
           <Route path='/admin/service/edit/:id' element={
            <RequiredAuth>
              <EditService/>
            </RequiredAuth>
           } />


            <Route path='/admin/projects' element={
            <RequiredAuth>
              <ShowProject/>
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
