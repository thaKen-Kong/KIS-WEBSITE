import { useState, useEffect, useContext } from 'react'
import './App.css'
import { LoginForm, RegisterForm } from './component/LoginForm'
import { PageProvider, useSession } from './page/admin'
import { Outlet, Route, Router, Routes, useNavigate, Navigate } from 'react-router-dom'
import { supabase } from './data/supabase'
import { MainPage } from './page/mainPage'


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
      navigate('/admin/dashboard')
    }



  }, [session])

  return (
    <>  
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Navigate to="/admin" replace />} />
            <Route path='admin' element={<Form />} />
            <Route path='admin/dashboard' element={<MainPage />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
