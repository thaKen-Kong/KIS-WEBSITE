import { useState, useEffect } from 'react'
import './App.css'
import { LoginForm } from './components/LoginForm'
import { RegisterForm } from './components/RegisterForm'
import { useSession } from './contexts/SessionContext'
import { Outlet, Route, Routes, useNavigate, Navigate, useLocation } from 'react-router-dom'
import { AdminPanelLayout } from './layouts/AdminPanelLayout'
import { Home } from './pages/panel/Home'
import { Dashboard } from './pages/panel/Dashboard'
import { News } from './pages/panel/News'
import { Announcement } from './pages/panel/Announcement'
import { Events } from './pages/panel/Event'
import { NotFound } from './pages/NotFound'

function Form() {
  const [formType, setFormType] = useState(true)

  
  return (
    <>
      <main className="layout">
        {formType ? <LoginForm /> : <RegisterForm />}
        <div className="action-button">
          <button onClick={()=> {setFormType(true);}}>LOGIN</button>
          <button onClick={()=> {setFormType(false);}}>SIGN UP</button>
        </div>
      </main>
    </>
  )
}

function MainLayout() {
  return (
    <>
      <section className="main-layout">
        <Outlet />
      </section>
    </>
  )
}

function App() { 

  const {session} = useSession()

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(()=>{
    
    if (session && (location.pathname === '/admin' || location.pathname === '/' )) {
      navigate('/admin/panel-ui/home')
    }

  }, [session, location.pathname, navigate])

  return (
    <>  
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Navigate to="/admin" replace />} />
            <Route path='admin' element={<Form />} />

            <Route path='admin/panel-ui/' element={<AdminPanelLayout />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path='home' element={<Home />} />
                <Route path='dashboard' element={<Dashboard />}/>
                <Route path='news' element={<News />}/>
                <Route path='events' element={<Events />}/>
                <Route path='announcement' element={<Announcement />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
