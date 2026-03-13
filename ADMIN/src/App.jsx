import { useState, useEffect, useContext } from 'react'
import './App.css'
import { LoginForm, RegisterForm } from './component/LoginForm'
import { PageProvider, useSession } from './page/admin'
import { Outlet, Route, Router, Routes, useNavigate, Navigate } from 'react-router-dom'
import { supabase } from './data/supabase'
import { MainPage } from './page/mainPage'
import { Dashboard } from './page/panel-ui/Dashboard'
import { News } from './page/panel-ui/News'
import { Announcement } from './page/panel-ui/Announcement'
import { Events } from './page/panel-ui/Event'

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

  const {session, setSession} = useSession()

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

  useEffect(()=>{
    
    if (!session) {
      return
    } else {
      navigate('/admin/panel-ui')
    }

  }, [session])

  return (
    <>  
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Navigate to="/admin" replace />} />
            <Route path='admin' element={<Form />} />

            <Route path='admin/panel-ui/' element={<MainPage />}>
                <Route path='dashboard' element={<Dashboard />}/>
                <Route path='news' element={<News />}/>
                <Route path='events' element={<Events />}/>
                <Route path='announcement' element={<Announcement />}/>
            </Route>
          </Route>
        </Routes>
    </>
  )
}

export default App
