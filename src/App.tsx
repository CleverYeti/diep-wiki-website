import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { Layout } from './Layout'
import { TanksPage } from './Pages/TanksPage'
import { TankPage } from './Pages/TankPage'
import { Page404 } from './Pages/Page404'
import { ShapesPage } from './Pages/ShapesPage'

export const basePath = import.meta.env.BASE_URL || '/';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tanks/" element={<TanksPage/>}/>
          <Route path="/shapes/" element={<ShapesPage/>}/>
          <Route path="/tanks/:tankId" element={<TankPage/>}/>
          <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
