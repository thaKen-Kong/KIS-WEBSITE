import './App.css'
import './mobile.css'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { navigationItems } from './data/navigationData'

const buildRoutes = () => {
  const routes = []

  navigationItems.forEach((item) => {
    const [key, value] = Object.entries(item)[0]
    if (value?.path && value?.element) {
      routes.push({ path: value.path, element: value.element, key })
    }

    if (Array.isArray(value?.children)) {
      value.children.forEach((child, index) => {
        if (child?.path && child?.element) {
          routes.push({
            path: child.path,
            element: child.element,
            key: `${key}-child-${index}`,
          })
        }
      })
    }
  })

  return routes
}


function App() {
  const dynamicRoutes = buildRoutes()

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {dynamicRoutes.map((route) => {
            const Element = route.element
            return <Route key={route.key} path={route.path} element={<Element />} />
          })}
        </Route>
      </Routes>
    </>
  )
}

export default App
