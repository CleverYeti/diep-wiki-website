import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { Layout } from './Layout'
import { TanksPage } from './Pages/TanksPage'
import { TankPage } from './Pages/TankPage'
import { Page404 } from './Pages/Page404'
import { ShapesPage } from './Pages/ShapesPage'
import { BossesPage } from './Pages/BossesPage'
import { BossPage } from './Pages/BossPage'
import { PageXMLBody } from './Components/PageXMLBody'
import { XMLPage } from './Pages/XMLPage'
import { RecordsPage } from './Pages/RecordsPage'
import { useEffect, useState } from 'react'
import { RecordData } from './recordData'

export const basePath = import.meta.env.BASE_URL || '/';

function App() {
  const [recordData, setRecordData] = useState<RecordData|null>(null)
  useEffect(() => {
    ;(async () => {
      // in the real fetch, include filters
      const response = await fetch("https://raw.githubusercontent.com/Tinjy0/diepRecords/refs/heads/main/recordsData.json")
      if (!response.ok) {
        return
      }
      const json = await response.json()
      setRecordData(json)
    })();
  })
  const [mobileRecordData, setMobileRecordData] = useState<RecordData|null>(null)
  useEffect(() => {
    ;(async () => {
      // in the real fetch, include filters
      const response = await fetch("https://raw.githubusercontent.com/Tinjy0/diepRecords/refs/heads/main/mobileRecordsData.json")
      if (!response.ok) {
        return
      }
      const json = await response.json()
      setMobileRecordData(json)
    })();
  })
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/tanks/" element={<TanksPage/>}/>
          <Route path="/records/" element={<RecordsPage pcRecordData={recordData} mobileRecordData={mobileRecordData}/>}/>
          <Route path="/tanks/:tankId" element={<TankPage recordData={recordData} mobileRecordData={mobileRecordData}/>}/>
          <Route path="/shapes/" element={<ShapesPage/>}/>
          <Route path="/bosses/" element={<BossesPage/>}/>
          <Route path="/bosses/:bossId" element={<BossPage/>}/>
          <Route path="/formulas/" element={<XMLPage path={"/pages/formulas.xml"}/>}/>
          <Route path="*" element={<Page404/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
